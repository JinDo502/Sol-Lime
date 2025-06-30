'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Chat, ChatContextType, Message } from '@/types/chat';
import { getAllChats, saveChat, deleteChat as deleteChatFromStorage, clearAllChats } from '@/utils/chatHistoryService';

// Create chat context
const ChatContext = createContext<ChatContextType | undefined>(undefined);

// Chat context provider component
export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [currentChat, setCurrentChat] = useState<Chat | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize chat history
  useEffect(() => {
    const loadChats = () => {
      const storedChats = getAllChats();
      setChats(storedChats);

      // If there are chat records, select the most recent one
      if (storedChats.length > 0) {
        const sortedChats = [...storedChats].sort((a, b) => b.updatedAt - a.updatedAt);
        setCurrentChat(sortedChats[0]);
      }
    };

    loadChats();
  }, []);

  // Create new chat
  const createChat = () => {
    const newChat: Chat = {
      id: uuidv4(),
      title: 'New Chat',
      messages: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    setChats((prevChats) => [newChat, ...prevChats]);
    setCurrentChat(newChat);
    saveChat(newChat);
  };

  // Select chat
  const selectChat = (chatId: string) => {
    const chat = chats.find((c) => c.id === chatId);
    if (chat) {
      setCurrentChat(chat);
    }
  };

  // Generate title using API
  const generateTitleViaAPI = async (message: string): Promise<string> => {
    try {
      console.log('Generating title for message:', message.substring(0, 50) + (message.length > 50 ? '...' : ''));

      const response = await fetch('/api/generate-title', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      console.log('Title API response status:', response.status);

      const data = await response.json();
      console.log('Title API response data:', data);

      if (!response.ok) {
        console.error('Title generation API error:', data);
        return 'New Chat';
      }

      // 确保返回的标题不为空
      if (!data.title || data.title.trim() === '') {
        console.warn('Title API returned empty title');
        return 'New Chat';
      }

      console.log('Successfully generated title:', data.title);
      return data.title;
    } catch (error) {
      console.error('Failed to generate title:', error);
      return 'New Chat';
    }
  };

  // Send message to internal API
  const sendMessageToAPI = async (messages: Message[]): Promise<string> => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages }),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data.details || data.error || 'Request failed';
        console.error('AI service error:', data);
        throw new Error(errorMessage);
      }

      return data.response;
    } catch (error) {
      console.error('AI service request failed:', error);

      // Filter error messages to avoid exposing underlying implementation
      let errorMessage = 'Error communicating with AI service, please try again later';

      if (error instanceof Error) {
        // Check if error message contains sensitive terms
        const sensitiveTerms = ['google', 'gemini', 'api', 'quota', 'limit', 'token'];
        const containsSensitiveTerm = sensitiveTerms.some((term) => error.message.toLowerCase().includes(term));

        if (!containsSensitiveTerm) {
          errorMessage = `AI response generation failed: ${error.message}`;
        }
      }

      throw new Error(errorMessage);
    }
  };

  // Send message
  const sendMessage = async (content: string) => {
    try {
      setError(null);
      setIsLoading(true);

      // If there is no current chat, create a new one
      if (!currentChat) {
        createChat();
      }

      // Create user message
      const userMessage: Message = {
        id: uuidv4(),
        role: 'user',
        content,
        timestamp: Date.now(),
      };

      // Update current chat
      const updatedChat = currentChat
        ? {
            ...currentChat,
            messages: [...currentChat.messages, userMessage],
            updatedAt: Date.now(),
          }
        : {
            id: uuidv4(),
            title: 'New Chat',
            messages: [userMessage],
            createdAt: Date.now(),
            updatedAt: Date.now(),
          };

      setCurrentChat(updatedChat);

      // Save chat history
      saveChat(updatedChat);

      // Update chat list
      setChats((prevChats) => {
        const otherChats = prevChats.filter((chat) => chat.id !== updatedChat.id);
        return [updatedChat, ...otherChats];
      });

      // 用于跟踪最新的聊天对象，包括可能更新的标题
      let currentChatWithUpdates = updatedChat;

      // If this is the first message, generate a title
      if (updatedChat.messages.length === 1) {
        try {
          console.log('First message detected, generating title...');
          const title = await generateTitleViaAPI(content);
          console.log('Title generated:', title);

          if (title && title !== 'New Chat') {
            const chatWithTitle = { ...updatedChat, title };
            console.log('Updating chat with new title:', title);

            setCurrentChat(chatWithTitle);
            saveChat(chatWithTitle);

            setChats((prevChats) => {
              const otherChats = prevChats.filter((chat) => chat.id !== chatWithTitle.id);
              return [chatWithTitle, ...otherChats];
            });

            // 更新跟踪变量，确保使用带有新标题的聊天对象
            currentChatWithUpdates = chatWithTitle;
          } else {
            console.warn('Using default title as generated title was empty or default');
          }
        } catch (titleError) {
          // If title generation fails, use default title
          console.error('Title generation failed with error:', titleError);
          // Don't show this error to the user
        }
      }

      // Send message to internal API
      const aiResponse = await sendMessageToAPI([...currentChatWithUpdates.messages]);

      // Create AI reply message
      const assistantMessage: Message = {
        id: uuidv4(),
        role: 'assistant',
        content: aiResponse,
        timestamp: Date.now(),
      };

      // Update current chat - 使用currentChatWithUpdates而不是updatedChat
      const finalChat = {
        ...currentChatWithUpdates,
        messages: [...currentChatWithUpdates.messages, assistantMessage],
        updatedAt: Date.now(),
      };

      setCurrentChat(finalChat);

      // Save chat history
      saveChat(finalChat);

      // Update chat list
      setChats((prevChats) => {
        const otherChats = prevChats.filter((chat) => chat.id !== finalChat.id);
        return [finalChat, ...otherChats];
      });
    } catch (err) {
      // Filter error messages to avoid exposing underlying implementation
      let errorMessage = 'Message sending failed';

      if (err instanceof Error) {
        // Check if error message contains sensitive terms
        const sensitiveTerms = ['google', 'gemini', 'api', 'quota', 'limit', 'token'];
        const containsSensitiveTerm = sensitiveTerms.some((term) => err.message.toLowerCase().includes(term));

        if (!containsSensitiveTerm) {
          errorMessage = err.message;
        }
      }

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Delete chat
  const deleteChat = (chatId: string) => {
    deleteChatFromStorage(chatId);

    setChats((prevChats) => prevChats.filter((chat) => chat.id !== chatId));

    if (currentChat?.id === chatId) {
      const remainingChats = chats.filter((chat) => chat.id !== chatId);
      setCurrentChat(remainingChats.length > 0 ? remainingChats[0] : null);
    }
  };

  // Clear all chats
  const clearChats = () => {
    clearAllChats();
    setChats([]);
    setCurrentChat(null);
  };

  const value = {
    chats,
    currentChat,
    isLoading,
    error,
    createChat,
    selectChat,
    sendMessage,
    deleteChat,
    clearChats,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

// Custom Hook for using chat context
export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
