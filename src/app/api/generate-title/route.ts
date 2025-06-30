import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize AI model
const initializeAIModel = () => {
  // In server-side API routes, directly access environment variables
  const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error('AI model key not set');
  }

  return new GoogleGenerativeAI(apiKey);
};

// Generate chat title based on first message
export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Invalid message format' }, { status: 400 });
    }

    // Log API key status (without logging the actual key)
    console.log('Title generation API status:', {
      hasModelApiKey: Boolean(process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY),
      messagePreview: message.substring(0, 50) + (message.length > 50 ? '...' : ''),
    });

    try {
      const genAI = initializeAIModel();
      // 使用与聊天API相同的模型版本
      const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

      console.log('Title generation: Model initialized');

      // Create a prompt to generate a title
      const prompt = `Generate a short, concise, and engaging title (maximum 6 words) for a chat conversation based on the following first message:
      First message: "${message}"
      
      Return ONLY the title, without any additional text, quotes, or explanations. The title should be in English and should clearly summarize the main content or intent of the message.`;

      console.log('Title generation: Sending request to model');
      const result = await model.generateContent(prompt);
      console.log('Title generation: Response received');

      const response = await result.response;
      const title = response.text().trim();
      console.log('Title generation: Generated title:', title);

      // Limit title length and remove quotes if present
      const formattedTitle = title
        .replace(/^["']|["']$/g, '') // Remove quotes at beginning or end
        .substring(0, 50); // Limit length

      console.log('Title generation: Formatted title:', formattedTitle);
      return NextResponse.json({ title: formattedTitle || 'New Chat' });
    } catch (apiError) {
      // Log the error but don't expose details to client
      console.error('Title generation failed:', apiError);

      // 记录更详细的错误信息
      const err = apiError as Error & { response?: unknown };
      console.error('Title generation API error details:', {
        message: err.message,
        stack: err.stack,
        name: err.name,
        ...(err.response ? { response: err.response } : {}),
      });

      return NextResponse.json({ title: 'New Chat' });
    }
  } catch (error) {
    console.error('Title API error:', error);
    return NextResponse.json({ title: 'New Chat' });
  }
}
