import { Chat } from '@/types/chat';

const STORAGE_KEY = 'solime_chat_history';

// 获取所有聊天历史
export const getAllChats = (): Chat[] => {
  if (typeof window === 'undefined') return [];

  try {
    const storedChats = localStorage.getItem(STORAGE_KEY);
    return storedChats ? JSON.parse(storedChats) : [];
  } catch (error) {
    console.error('获取聊天历史失败:', error);
    return [];
  }
};

// 获取单个聊天记录
export const getChat = (chatId: string): Chat | null => {
  const chats = getAllChats();
  return chats.find((chat) => chat.id === chatId) || null;
};

// 保存聊天记录
export const saveChat = (chat: Chat): void => {
  if (typeof window === 'undefined') return;

  try {
    const chats = getAllChats();
    const existingChatIndex = chats.findIndex((c) => c.id === chat.id);

    if (existingChatIndex >= 0) {
      chats[existingChatIndex] = chat;
    } else {
      chats.push(chat);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(chats));
  } catch (error) {
    console.error('保存聊天记录失败:', error);
  }
};

// 保存所有聊天记录
export const saveAllChats = (chats: Chat[]): void => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(chats));
  } catch (error) {
    console.error('保存所有聊天记录失败:', error);
  }
};

// 删除聊天记录
export const deleteChat = (chatId: string): void => {
  if (typeof window === 'undefined') return;

  try {
    const chats = getAllChats();
    const updatedChats = chats.filter((chat) => chat.id !== chatId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedChats));
  } catch (error) {
    console.error('删除聊天记录失败:', error);
  }
};

// 清空所有聊天记录
export const clearAllChats = (): void => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('清空聊天记录失败:', error);
  }
};
