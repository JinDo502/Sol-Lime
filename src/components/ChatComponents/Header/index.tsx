'use client';

import ThemeModeButton from '@/components/ThemeModeButton';
import { useChat } from '@/context/ChatContext';
import { BsList } from 'react-icons/bs';

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const Header = ({ isSidebarOpen, setIsSidebarOpen }: HeaderProps) => {
  const { currentChat } = useChat();

  return (
    <div className='w-full p-4 flex justify-between items-center border-b border-divider'>
      <div className='flex items-center gap-2'>
        {!isSidebarOpen && (
          <button onClick={() => setIsSidebarOpen(true)} className='md:hidden z-50 text-primary p-2 rounded-full' aria-label='Open sidebar'>
            <BsList size={20} />
          </button>
        )}
        <div className='max-w-[200px] md:max-w-[400px] overflow-hidden'>
          <h2 className='text-lg font-medium truncate whitespace-nowrap'>{currentChat?.title || 'New Chat'}</h2>
        </div>
      </div>
      <ThemeModeButton />
    </div>
  );
};

export default Header;
