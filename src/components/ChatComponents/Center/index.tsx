'use client';

import { FormEvent, useRef, useState, useEffect } from 'react';
import { BsSend } from 'react-icons/bs';
import { useChat } from '@/context/ChatContext';
import ChatMessage from './ChatMessage';

const EmptyState = () => (
  <div className='flex-1 flex flex-col items-center justify-center px-4'>
    <div className='text-3xl md:text-5xl text-primary font-bold text-center mb-10'>Welcome to SOLIME</div>
    <div className='text-center text-muted-foreground max-w-md'>
      <p className='mb-4'>This is an AI-powered chat assistant that can answer your questions about Solana, cryptocurrencies, and Web3.</p>
      <p>Start a new conversation by typing your question in the input field below.</p>
    </div>
  </div>
);

const Center = () => {
  const { currentChat, sendMessage, isLoading, error } = useChat();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentChat?.messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const message = input.trim();
    setInput('');
    await sendMessage(message);
  };

  return (
    <div className='md:flex-1 flex flex-col md:w-auto w-full h-full'>
      <div className='flex-1 flex flex-col overflow-hidden'>
        {/* Message list */}
        <div className='flex-1 overflow-y-auto p-4'>
          {!currentChat || currentChat.messages.length === 0 ? (
            <EmptyState />
          ) : (
            <div className='space-y-4'>
              {currentChat.messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isLoading && (
                <div className='flex justify-center items-center py-4'>
                  <div className='animate-pulse text-primary'>AI is thinking...</div>
                </div>
              )}
              {error && <div className='bg-red-500/10 text-red-500 p-4 rounded-md'>Error: {error}</div>}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input field */}
        <div className='border-t border-divider p-4'>
          <form onSubmit={handleSubmit} className='flex items-stretch w-full'>
            <input
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className='flex-1 w-full border border-r-0 border-divider rounded-s-md p-3'
              placeholder='Type a message...'
              disabled={isLoading}
            />
            <button
              type='submit'
              disabled={isLoading || !input.trim()}
              className={`bg-primary rounded-e-md px-4 flex items-center justify-center ${isLoading || !input.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <BsSend className='text-background' />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Center;
