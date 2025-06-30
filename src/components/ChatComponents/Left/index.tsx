'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BsPlusLg, BsTrash, BsChat, BsArrowLeft } from 'react-icons/bs';
import dynamic from 'next/dynamic';
import { useChat } from '@/context/ChatContext';

// Dynamically import WalletMultiButton component, disable SSR
const WalletMultiButton = dynamic(async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton, { ssr: false });

interface LeftProps {
  isMobile?: boolean;
  setIsSidebarOpen?: (isOpen: boolean) => void;
}

const Left = ({ isMobile = false, setIsSidebarOpen }: LeftProps) => {
  const { chats, currentChat, createChat, selectChat, deleteChat } = useChat();

  // Format date
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Base classes for the sidebar
  const sidebarClasses = 'flex flex-col h-full bg-card-bg w-[280px] border-r border-divider';

  // Add display classes based on isMobile prop
  const displayClasses = isMobile ? 'flex' : 'hidden md:flex';

  // Combine all classes
  const containerClasses = `${sidebarClasses} ${displayClasses}`;

  // Delete button classes based on isMobile
  const deleteButtonClasses = isMobile
    ? 'hover:text-red-500 p-1' // Always visible on mobile
    : 'opacity-0 group-hover:opacity-100 hover:text-red-500 p-1'; // Only visible on hover for desktop

  return (
    <div className={containerClasses}>
      {/* Logo */}
      <div className='flex justify-between items-center border-b border-divider'>
        <Link href='/' className='flex items-center p-4 gap-2'>
          <div className='h-8 w-8'>
            <Image src='/images/logo.png' alt='SOLIME-Logo' className='h-full object-contain aspect-square' height={75} width={75} />
          </div>
          <h1 className='text-xl font-bold'>SOLIME</h1>
        </Link>
        {setIsSidebarOpen && (
          <button onClick={() => setIsSidebarOpen(false)} className='text-primary p-2 rounded-full mr-2'>
            <BsArrowLeft size={20} />
          </button>
        )}
      </div>

      {/* New chat button */}
      <button onClick={createChat} className='flex gap-2 items-center justify-between bg-primary/10 m-4 py-2 px-4 rounded-lg hover:bg-primary/20 transition-colors'>
        <span>New Chat</span>
        <BsPlusLg className='text-lg p-1 bg-primary text-background rounded-lg' />
      </button>

      {/* Chat history list */}
      <div className='flex-1 overflow-y-auto'>
        <div className='px-2'>
          {chats.length > 0 ? (
            chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => selectChat(chat.id)}
                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer mb-1 hover:bg-primary/5 group ${currentChat?.id === chat.id ? 'bg-primary/10' : ''}`}
              >
                <div className='flex items-center gap-3 flex-1 min-w-0'>
                  <BsChat className='text-primary flex-shrink-0' />
                  <div className='flex-1 min-w-0'>
                    <div className='font-medium truncate'>{chat.title}</div>
                    <div className='text-xs text-muted-foreground'>{formatDate(chat.updatedAt)}</div>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteChat(chat.id);
                  }}
                  className={deleteButtonClasses}
                  aria-label='Delete chat'
                >
                  <BsTrash size={16} />
                </button>
              </div>
            ))
          ) : (
            <div className='text-center text-muted-foreground p-4'>No chat history</div>
          )}
        </div>
      </div>

      {/* Wallet button */}
      <div className='p-4 border-t border-divider'>
        <WalletMultiButton className='w-full !bg-primary !text-background !rounded-lg !h-10' />
      </div>
    </div>
  );
};

export default Left;
