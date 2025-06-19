'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { motion } from 'framer-motion';

const ANIMATION_CONFIG = {
  DURATION: 0.8,
  HOVER_DURATION: 0.3,
};

export default function ThemeModeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 判断是否支持 startViewTransition API
  const enableTransitions = () => typeof document !== 'undefined' && 'startViewTransition' in document && window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

  // 切换动画
  async function toggleTheme(e: React.MouseEvent<HTMLButtonElement>) {
    const isDark = theme === 'dark';
    const x = e.clientX;
    const y = e.clientY;

    if (!enableTransitions()) {
      setTheme(isDark ? 'light' : 'dark');
      return;
    }

    const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))}px at ${x}px ${y}px)`];

    await document.startViewTransition(async () => {
      setTheme(isDark ? 'light' : 'dark');
    }).ready;

    document.documentElement.animate(
      { clipPath: !isDark ? clipPath.reverse() : clipPath },
      {
        duration: 300,
        easing: 'ease-in',
        pseudoElement: `::view-transition-${!isDark ? 'old' : 'new'}(root)`,
      }
    );
  }

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className='p-2 rounded-lg transition-colors hover:bg-foreground/10'
      aria-label='Toggle theme'
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ rotate: 360 }}
      transition={{ duration: ANIMATION_CONFIG.DURATION }}
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: ANIMATION_CONFIG.DURATION }}>
        {theme === 'dark' ? <BsSun className='w-5 h-5' /> : <BsMoon className='w-5 h-5' />}
      </motion.div>
    </motion.button>
  );
}
