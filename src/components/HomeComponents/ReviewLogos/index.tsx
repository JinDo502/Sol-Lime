'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { springs } from '@/animations';

const ReviewLogos = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 在客户端挂载后设置mounted为true
  useEffect(() => {
    setMounted(true);
  }, []);

  // 根据mounted状态和theme决定显示哪个图片
  const renderTrustpilotImage = () => {
    if (!mounted) return null; // 服务端渲染时不显示图片
    return theme === 'dark' ? (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...springs.soft, delay: 0.2 }} whileHover={{ scale: 1.05 }}>
        <Image className='w-full' src={`/images/review-logos/trustpilot_reviews.svg`} alt='' width={1000} height={1000} />
      </motion.div>
    ) : (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...springs.soft, delay: 0.2 }} whileHover={{ scale: 1.05 }}>
        <Image className='w-full' src={`/images/review-logos/trustpilot_reviews_2.svg`} alt='' width={1000} height={1000} />
      </motion.div>
    );
  };

  const renderCapterraImage = () => {
    if (!mounted) return null; // 服务端渲染时不显示图片
    return theme === 'dark' ? (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...springs.soft, delay: 0.4 }} whileHover={{ scale: 1.05 }}>
        <Image className='w-full' src={`/images/review-logos/capterra_reviews.svg`} alt='' width={1000} height={1000} />
      </motion.div>
    ) : (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...springs.soft, delay: 0.4 }} whileHover={{ scale: 1.05 }}>
        <Image className='w-full' src={`/images/review-logos/capterra_reviews_2.svg`} alt='' width={1000} height={1000} />
      </motion.div>
    );
  };

  return (
    <motion.div className='flex gap-8 items-center justify-center px-8 w-full' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <motion.div className='w-1/2 md:w-55' whileHover={{ y: -5 }} transition={springs.soft}>
        {renderTrustpilotImage()}
      </motion.div>
      <motion.div className='w-1/2 md:w-55' whileHover={{ y: -5 }} transition={springs.soft}>
        {renderCapterraImage()}
      </motion.div>
    </motion.div>
  );
};

export default ReviewLogos;
