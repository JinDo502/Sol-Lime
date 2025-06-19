'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { motion, MotionProps, useAnimation } from 'framer-motion';
import ThemeModeButton from '../ThemeModeButton';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Features', href: '/features' },
  { label: 'Tokenomics', href: '/tokenomics' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'How To Use', href: '/how-to-use' },
  { label: 'Contact', href: '/contact' },
  { label: 'Join IDO', href: '/join-ido' },
];

const togglerButtonMotion: MotionProps = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
  transition: { duration: 0.2, ease: 'easeInOut', delay: 0.2 },
};

const navbarVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const menuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const menuItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const menuControls = useAnimation();

  // 处理窗口大小变化，更新isMobile状态
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px是md断点
    };

    // 初始检查
    checkIsMobile();

    // 监听窗口大小变化
    window.addEventListener('resize', checkIsMobile);

    // 清理函数
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // 根据isOpen和isMobile状态控制菜单动画
  useEffect(() => {
    if (!isMobile) {
      // 在非移动设备上始终显示菜单
      menuControls.start('visible');
    } else {
      // 在移动设备上根据isOpen状态控制菜单
      menuControls.start(isOpen ? 'visible' : 'hidden');
    }
  }, [isOpen, isMobile, menuControls]);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav className='sticky top-0 left-0 right-0 z-50 bg-background' initial='hidden' animate='visible' variants={navbarVariants}>
      <div className='container mx-auto py-4 px-6 flex justify-between items-center relative'>
        {/* Logo */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href='/' className='flex items-center h-8'>
            <Image src='/images/logo.png' alt='SOL-Lime-Logo' className='h-full object-contain aspect-square' height={50} width={50} />
            <h1 className='text-2xl md:text-3xl font-bold'>SOL-Lime</h1>
          </Link>
        </motion.div>

        <div className='flex items-center gap-4'>
          {/* Navbar toggler button - 只在小屏幕显示 */}
          <motion.button className='text-2xl md:hidden' onClick={() => setIsOpen(!isOpen)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            {isOpen && (
              <motion.div {...togglerButtonMotion}>
                <AiOutlineClose />
              </motion.div>
            )}
            {!isOpen && (
              <motion.div {...togglerButtonMotion}>
                <AiOutlineMenu />
              </motion.div>
            )}
          </motion.button>

          {/* 导航菜单 - 在小屏幕下拉显示，在md及以上屏幕水平显示 */}
          <motion.div
            className='absolute bottom-0 left-0 w-full h-max bg-background translate-y-[100%] flex flex-col gap-2 px-6 py-2 md:static md: md:translate-y-0 md:items-center md:flex-row md:h-auto md:bg-transparent md:p-0'
            initial='hidden'
            animate={menuControls}
            variants={menuVariants}
          >
            {navItems.map((item) => {
              if (item.label === 'Join IDO') {
                return (
                  <motion.div key={item.label} variants={menuItemVariants} className='md:ml-4'>
                    <Link className='inline-block hover:text-[var(--primary)] border border-[var(--primary)] rounded-xl px-4 py-2 w-max' href={item.href} onClick={handleCloseMenu}>
                      {item.label}
                    </Link>
                  </motion.div>
                );
              }
              return (
                <motion.div key={item.label} variants={menuItemVariants} className='md:ml-4'>
                  <Link className='inline-block hover:text-[var(--primary)] w-max' href={item.href} onClick={handleCloseMenu}>
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <ThemeModeButton />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
