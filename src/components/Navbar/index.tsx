'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence, Variants } from 'framer-motion';
import ThemeModeButton from '../ThemeModeButton';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Features', href: '/features' },
  { label: 'Tokenomics', href: '/tokenomics' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'How To Use', href: '/how-to-use' },
  { label: 'Contact', href: '/contact' },
  { label: 'Join Now', href: '#' },
];

// 移除未使用的变量

const navbarVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
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

const logoVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: 'spring',
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const menuControls = useAnimation();

  // 设置客户端挂载状态
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 处理窗口大小变化，更新isMobile状态
  useEffect(() => {
    if (!isMounted) return;

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // 初始检查
    checkIsMobile();

    // 监听窗口大小变化
    window.addEventListener('resize', checkIsMobile);

    // 清理函数
    return () => window.removeEventListener('resize', checkIsMobile);
  }, [isMounted]);

  // 根据isOpen和isMobile状态控制菜单动画
  useEffect(() => {
    if (!isMounted) return;

    if (!isMobile) {
      // 在非移动设备上始终显示菜单
      menuControls.start('visible');
    } else {
      // 在移动设备上根据isOpen状态控制菜单
      menuControls.start(isOpen ? 'visible' : 'hidden');
    }
  }, [isOpen, isMobile, menuControls, isMounted]);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  // 服务端渲染或未挂载时的静态版本
  if (!isMounted) {
    return (
      <nav className='sticky top-0 left-0 right-0 z-50 bg-background'>
        <div className='container mx-auto py-4 flex justify-between items-center relative'>
          <div>
            <Link href='/' className='flex items-center h-8'>
              <Image src='/images/logo.png' alt='SOL-Lime-Logo' className='h-full object-contain aspect-square' height={50} width={50} />
              <h1 className='text-xl lg:text-3xl font-bold'>SOL-Lime</h1>
            </Link>
          </div>
          <div className='flex items-center gap-4'>
            <button className='text-2xl lg:hidden'>
              <AiOutlineMenu />
            </button>
            <div className='hidden lg:flex lg:items-center lg:flex-row'>
              {navItems.map((item) => (
                <div key={item.label} className='lg:ml-4'>
                  <Link
                    className={`inline-block hover:text-[var(--primary)] w-max ${item.label === 'Join Now' ? 'border border-[var(--primary)] rounded-xl px-4 py-2' : ''}`}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
            <div className='flex items-center gap-2'>
              <ThemeModeButton />
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <motion.nav className='sticky top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm bg-opacity-80' initial='hidden' animate='visible' variants={navbarVariants}>
      <div className='container mx-auto py-4 flex justify-between items-center relative'>
        {/* Logo */}
        <motion.div variants={logoVariants}>
          <Link href='/' className='flex items-center h-8'>
            <Image src='/images/logo.png' alt='SOL-Lime-Logo' className='h-full object-contain aspect-square' height={50} width={50} />
            <h1 className='text-2xl font-bold text-nowrap'>SOL-Lime</h1>
          </Link>
        </motion.div>

        <div className='flex items-center gap-4'>
          {/* Navbar toggler button - 只在小屏幕显示 */}
          <motion.button
            className='text-2xl lg:hidden'
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode='wait'>
              {isOpen ? (
                <motion.div key='close' initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
                  <AiOutlineClose />
                </motion.div>
              ) : (
                <motion.div key='menu' initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.2 }}>
                  <AiOutlineMenu />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* 导航菜单 - 在小屏幕下拉显示，在md及以上屏幕水平显示 */}
          <motion.div
            className={`absolute bottom-0 left-0 w-full h-max bg-background translate-y-[100%] flex flex-col gap-2 px-6 py-2 lg:static lg:translate-y-0 lg:items-center lg:flex-row lg:h-auto lg:bg-transparent lg:p-0 ${
              !isMobile || isOpen ? '' : 'hidden lg:flex'
            }`}
            initial='hidden'
            animate={menuControls}
            variants={menuVariants}
          >
            {navItems.map((item, index) => {
              if (item.label === 'Join Now') {
                return (
                  <motion.div key={item.label} variants={menuItemVariants} className='lg:ml-4' custom={index}>
                    <Link
                      className='inline-block hover:text-[var(--primary)] border border-[var(--primary)] rounded-xl px-4 py-2 w-max transition-colors duration-300'
                      href={item.href}
                      onClick={handleCloseMenu}
                    >
                      <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='inline-block'>
                        {item.label}
                      </motion.span>
                    </Link>
                  </motion.div>
                );
              }
              return (
                <motion.div key={item.label} variants={menuItemVariants} className='lg:ml-4' custom={index}>
                  <Link className='inline-block hover:text-[var(--primary)] w-max transition-colors duration-300' href={item.href} onClick={handleCloseMenu}>
                    <motion.span whileHover={{ scale: 1.05, color: 'var(--primary)' }} whileTap={{ scale: 0.95 }} className='inline-block'>
                      {item.label}
                    </motion.span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <div className='flex items-center gap-2'>
            <ThemeModeButton />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
