'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

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
      <Image className='w-full' src={`/images/review-logos/trustpilot_reviews.svg`} alt='' width={1000} height={1000} />
    ) : (
      <Image className='w-full' src={`/images/review-logos/trustpilot_reviews_2.svg`} alt='' width={1000} height={1000} />
    );
  };

  const renderCapterraImage = () => {
    if (!mounted) return null; // 服务端渲染时不显示图片
    return theme === 'dark' ? (
      <Image className='w-full' src={`/images/review-logos/capterra_reviews.svg`} alt='' width={1000} height={1000} />
    ) : (
      <Image className='w-full' src={`/images/review-logos/capterra_reviews_2.svg`} alt='' width={1000} height={1000} />
    );
  };

  return (
    <div className='flex gap-8 items-center justify-center px-8 w-full'>
      <div className='w-1/2 md:w-55'>{renderTrustpilotImage()}</div>
      <div className='w-1/2 md:w-55'>{renderCapterraImage()}</div>
    </div>
  );
};

export default ReviewLogos;
