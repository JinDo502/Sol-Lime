import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import { Message } from '@/types/chat';

// Custom window type with ENV property
interface CustomWindow extends Window {
  ENV?: {
    GEMINI_API_KEY?: string;
  };
}

// Initialize AI model
const initializeAIModel = () => {
  // In client-side code, use window.ENV or process.env
  const apiKey = typeof window !== 'undefined' ? (window as CustomWindow).ENV?.GEMINI_API_KEY : process.env.NEXT_PUBLIC_GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error('AI model key not set');
  }

  return new GoogleGenerativeAI(apiKey);
};

// 安全设置
const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

// 转换消息格式
const formatMessagesForAI = (messages: Message[]) => {
  return messages.map((message) => ({
    role: message.role === 'assistant' ? 'model' : message.role,
    parts: [{ text: message.content }],
  }));
};

// 发送消息到AI服务
export const sendMessageToGemini = async (messages: Message[]): Promise<string> => {
  try {
    const aiService = initializeAIModel();
    const model = aiService.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const formattedMessages = formatMessagesForAI(messages);

    const chat = model.startChat({
      history: formattedMessages.slice(0, -1),
      safetySettings,
    });

    const lastMessage = formattedMessages[formattedMessages.length - 1];
    const result = await chat.sendMessage(lastMessage.parts[0].text);
    const response = await result.response;
    const text = response.text();

    return text;
  } catch (error) {
    console.error('AI服务请求失败:', error);

    // 过滤错误信息，避免暴露底层实现
    if (error instanceof Error) {
      // 检查错误信息中是否包含敏感词汇
      const sensitiveTerms = ['google', 'gemini', 'api', 'quota', 'limit', 'token'];
      const containsSensitiveTerm = sensitiveTerms.some((term) => error.message.toLowerCase().includes(term));

      if (!containsSensitiveTerm) {
        throw new Error(`AI响应生成失败: ${error.message}`);
      }
    }

    throw new Error('AI响应生成失败，请稍后再试');
  }
};

// Generate chat title based on first message
export const generateChatTitle = async (message: string): Promise<string> => {
  try {
    const genAI = initializeAIModel();
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Create a prompt to generate a title
    const prompt = `Generate a short, concise title (maximum 6 words) for a chat conversation that starts with this message: "${message}". 
    Return ONLY the title, nothing else. The title should be in English.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const title = response.text().trim();

    // Limit title length and remove quotes if present
    return title
      .replace(/^["']|["']$/g, '') // Remove quotes at beginning or end
      .substring(0, 50); // Limit length
  } catch (error) {
    console.error('Failed to generate title:', error);
    // Return a default title if generation fails
    return 'New Chat';
  }
};
