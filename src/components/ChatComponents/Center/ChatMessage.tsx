'use client';

import { useState } from 'react';
import { Message } from '@/types/chat';
import { BsCheck2All, BsClipboard, BsPersonFill } from 'react-icons/bs';
import { FaRobot } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const [copied, setCopied] = useState(false);
  const isUser = message.role === 'user';

  // Format timestamp
  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Copy message content
  const copyToClipboard = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
      <div className={`flex gap-3 max-w-full md:max-w-[85%] ${isUser ? 'flex-row-reverse' : ''}`}>
        {/* Avatar */}
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${isUser ? 'bg-primary' : 'bg-secondary'}`}>
          {isUser ? <BsPersonFill size={20} className='text-background' /> : <FaRobot size={20} className='text-background' />}
        </div>

        {/* Message content */}
        <div className={`relative group rounded-lg px-4 py-3 ${isUser ? 'bg-primary/10' : 'bg-card'}`}>
          {/* Copy button */}
          <button
            onClick={copyToClipboard}
            className={`absolute top-2 right-2 p-1 rounded-md opacity-0 group-hover:opacity-100 hover:bg-background ${copied ? 'text-green-500' : 'text-muted-foreground'}`}
            aria-label={copied ? 'Copied' : 'Copy'}
          >
            {copied ? <BsCheck2All size={16} /> : <BsClipboard size={16} />}
          </button>

          {/* Message text */}
          <div className='prose prose-sm dark:prose-invert max-w-none overflow-auto'>
            {isUser ? (
              <p className='whitespace-pre-wrap break-words'>{message.content}</p>
            ) : (
              <div className='markdown'>
                <ReactMarkdown>{message.content}</ReactMarkdown>
              </div>
            )}
          </div>

          {/* Timestamp */}
          <div className='text-xs text-muted-foreground mt-1'>{formatTimestamp(message.timestamp)}</div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
