'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import { springs } from '@/animations';

import ThemeModeButton from '../ThemeModeButton';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Features', href: '/features' },
  { label: 'Tokenomics', href: '/tokenomics' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'How To Use', href: '/how-to-use' },
  { label: 'Contact', href: '/contact' },
  { label: 'Start', href: '/chat' },
];

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, ...springs.soft } }),
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 判断当前所在页面 高亮对应路由
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <motion.nav className='sticky top-0 left-0 right-0 z-50 bg-background' initial={{ y: -100 }} animate={{ y: 0 }} transition={springs.soft}>
      <div className='container mx-auto py-4 flex justify-between items-center relative'>
        <motion.div whileHover={{ scale: 1.05 }} transition={springs.soft}>
          <Link href='/' className='flex items-center h-8'>
            <Image src='/images/logo.png' alt='SOLIME-Logo' className='h-full object-contain aspect-square' height={50} width={50} />
            <h1 className='text-xl lg:text-3xl font-bold'>SOLIME</h1>
          </Link>
        </motion.div>
        <div className='flex items-center gap-4'>
          <motion.button
            className='text-2xl lg:hidden hover:text-primary transition-colors duration-300'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={springs.bouncy}
          >
            <AiOutlineMenu />
          </motion.button>
          <AnimatePresence>
            <div className={`lg:flex lg:items-center lg:flex-row ${mobileMenuOpen ? 'absolute top-full left-0 right-0 bg-background p-4' : 'hidden'}`}>
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  className={`lg:ml-4 ${mobileMenuOpen ? 'py-2' : ''}`}
                  custom={i}
                  variants={navItemVariants}
                  initial='hidden'
                  animate='visible'
                  whileHover={{ scale: 1.05 }}
                  transition={springs.soft}
                >
                  {item.label !== 'Start' && (
                    <Link
                      className={`inline-block hover:text-primary transition-colors duration-300 w-full md:w-max ${isActive(item.href) ? 'text-primary' : ''}`}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}

                  {item.label === 'Start' && (
                    <Link
                      className={`inline-block transition-colors duration-300 w-full md:w-max w-max border border-primary rounded-xl px-4 py-2 hover:bg-primary hover:text-background`}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
          <motion.div className='flex items-center gap-2' whileHover={{ scale: 1.05 }} transition={springs.soft}>
            <ThemeModeButton />
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
