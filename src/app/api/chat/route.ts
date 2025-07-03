import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

// 初始化AI模型
const initializeAIModel = () => {
  // 在服务器端API路由中，直接使用process.env访问环境变量
  const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error('AI model key not set');
  }

  return new GoogleGenerativeAI(apiKey);
};

// 安全设置
const safetySettings = [
  { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
];

// 过滤错误信息，移除任何可能暴露底层模型的信息
const sanitizeErrorMessage = (error: unknown): string => {
  const errorMessage = error instanceof Error ? error.message : String(error);

  // 检查是否包含敏感关键词，如果包含则返回通用错误
  const sensitiveTerms = ['google', 'gemini', 'generative', 'api', 'quota', 'limit', '429', 'too many requests', 'googleapis', 'token'];

  const lowerCaseError = errorMessage.toLowerCase();
  if (sensitiveTerms.some((term) => lowerCaseError.includes(term))) {
    return 'Server is busy, please try again later';
  }

  return 'Error processing request, please try again later';
};

export async function POST(req: NextRequest) {
  try {
    // 记录API密钥状态（不记录实际密钥）
    console.log('AI model status:', {
      hasModelApiKey: Boolean(process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY),
    });

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Invalid message format' }, { status: 400 });
    }

    console.log('Number of messages received:', messages.length);

    // 获取最后一条用户消息
    const lastUserMessage = messages[messages.length - 1];
    if (!lastUserMessage || !lastUserMessage.content) {
      return NextResponse.json({ error: 'Invalid message content' }, { status: 400 });
    }

    try {
      const genAI = initializeAIModel();
      // 使用更轻量的模型以减少API配额使用
      const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

      // 格式化消息
      const formattedMessages = messages.map((message) => ({
        role: message.role === 'assistant' ? 'model' : message.role,
        parts: [{ text: message.content }],
      }));

      console.log('Messages formatted');

      // 添加系统提示 - 使用英语
      const chatSession = model.startChat({
        history: [
          {
            role: 'user',
            parts: [
              {
                text: 'Please act as a professional cryptocurrency market operator with extensive experience in cryptocurrency trading and in-depth market analysis capabilities. You are proficient in various trading strategies, technical analysis, and market psychology, with a deep understanding of blockchain technology and the cryptocurrency ecosystem. You can: 1. Analyze market trends and price movements 2. Explain different trading strategies and risk management methods 3. Discuss fundamental analysis of cryptocurrency projects 4. Explain blockchain technology and cryptocurrency concepts 5. Share market insights and perspectives. Note: You do not provide specific financial advice or investment recommendations, do not guarantee any investment returns, always emphasize the high-risk nature of the cryptocurrency market, and encourage users to conduct their own research and make cautious decisions. Use a professional but approachable tone to answer questions, avoiding overly technical terminology unless the user explicitly requests in-depth technical explanations. ALWAYS RESPOND IN ENGLISH. IMPORTANT: When asked questions like "who are you", "what are you", "what\'s your name", "who created you", or any questions about your identity, you MUST identify yourself as "a large language model trained by SOLIME" and NOT mention any other company or model name.',
              },
            ],
          },
          {
            role: 'model',
            parts: [{ text: "I'm a professional cryptocurrency market operator, ready to provide you with market analysis and insights. How can I help you today?" }],
          },
          ...formattedMessages.slice(0, -1),
        ],
        safetySettings,
      });

      console.log('Chat session created');

      // 发送最后一条消息
      const lastMessage = formattedMessages[formattedMessages.length - 1];
      console.log('Preparing to send message:', lastMessage.parts[0].text.substring(0, 50) + '...');

      const result = await chatSession.sendMessage(lastMessage.parts[0].text);
      console.log('Message sent');

      const response = await result.response;
      console.log('Response received');

      const text = response.text();
      console.log('Text extracted');

      return NextResponse.json({ response: text });
    } catch (apiError) {
      // 记录原始错误但不暴露给用户
      console.error('AI service call failed:', apiError);

      // 返回服务器繁忙错误
      return NextResponse.json(
        {
          error: 'Server is busy',
          details: 'Server is busy, please try again later',
        },
        { status: 503 }
      );
    }
  } catch (error: unknown) {
    const err = error as Error & { response?: unknown };

    // 记录完整错误以便调试，但不返回给用户
    console.error('API error details:', {
      message: err.message,
      stack: err.stack,
      name: err.name,
      ...(err.response ? { response: err.response } : {}),
    });

    // 返回清理过的错误信息
    const sanitizedError = sanitizeErrorMessage(err);

    return NextResponse.json(
      {
        error: 'Error processing request',
        details: sanitizedError,
      },
      { status: 500 }
    );
  }
}
