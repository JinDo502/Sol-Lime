'use client';

import Left from '@/components/ChatComponents/Left';
import Header from '@/components/ChatComponents/Header';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const SolanaProvider = dynamic(async () => (await import('@/components/Solana/SolanaProvider')).SolanaProvider, { ssr: false });
const ChatProvider = dynamic(async () => (await import('@/context/ChatContext')).ChatProvider, { ssr: false });

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <SolanaProvider>
      <ChatProvider>
        <div className='flex h-screen w-screen overflow-hidden'>
          {/* Sidebar for mobile */}
          <div
            className={`fixed md:hidden inset-0 bg-background z-50 transform transition-transform duration-300 ease-in-out ${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <Left isMobile={true} setIsSidebarOpen={setIsSidebarOpen} />
          </div>

          {/* Desktop sidebar */}
          <Left isMobile={false} />

          {/* Main content */}
          <div className='flex-1 overflow-hidden flex flex-col'>
            <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            <main className='flex-1 overflow-hidden'>{children}</main>
          </div>
        </div>
      </ChatProvider>
    </SolanaProvider>
  );
}
