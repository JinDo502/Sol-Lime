'use client';

import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { AnimateOnScroll } from '@/components/animations';

const reviewsContent = [
  {
    avatar: '/images/review/1.png',
    name: 'John Davis',
    review: 'SOL-LIME has completely changed how I manage my digital assets. It&apos;s user-friendly and intuitive, which makes it an absolute breeze to use.',
  },
  {
    avatar: '/images/review/2.png',
    name: 'Linda Smith',
    review: 'The way SOL-LIME simplifies the complex world of web3 is amazing. It truly is a game-changer for me!',
  },
  {
    avatar: '/images/review/3.png',
    name: 'Mark Thompson',
    review: 'Navigating the blockchain has always seemed daunting, but with SOL-CHAT, I feel secure and confident. The security checks are robust and reliable.',
  },
  {
    avatar: '/images/review/4.png',
    name: 'Emily Roberts',
    review: 'SOL-LIME is simply amazing! It&apos;s the perfect tool for newcomers to the crypto world like me. I appreciate its ease of use and comprehensive features.',
  },
  {
    avatar: '/images/review/1.png',
    name: 'Peter Brown',
    review: 'I&apos;m genuinely thrilled with SOL-CHAT. It&apos;s been instrumental in helping me understand and navigate the crypto space effectively.',
  },
  {
    avatar: '/images/review/1.png',
    name: 'Samantha Kim',
    review: 'The token swapping feature in SOL-LIME is seamless and straightforward. It&apos;s become my go-to tool for managing my crypto assets.',
  },
  {
    avatar: '/images/review/2.png',
    name: 'Luke Miller',
    review: 'Keeping up with the fast-paced crypto market trends has never been easier, all thanks to SOL-CHAT!',
  },
  {
    avatar: '/images/review/3.png',
    name: 'Cynthia Harris',
    review: 'SOL-LIME has become my trusted partner for all things blockchain. Its array of features and intuitive design is nothing short of awesome!',
  },
  {
    avatar: '/images/review/4.png',
    name: 'Anthony Johnson',
    review: 'SOL-LIME is a lifesaver in the truest sense. It makes the web3 ecosystem accessible and easy to understand, even for a non-techie like me.',
  },
  {
    avatar: '/images/review/1.png',
    name: 'Grace Lee',
    review: 'Managing my crypto transactions has been a fantastic experience with SOL-CHAT. It&apos;s extremely user-friendly and simplifies every process.',
  },
];

type Direction = 'ltr' | 'rtl'; // ltr: 从左到右, rtl: 从右到左

interface ReviewsScrollProps {
  direction?: Direction;
  speed?: number; // 速度因子，值越大滚动越慢
}

const ReviewsScroll = ({ direction = 'rtl', speed = 5 }: ReviewsScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (containerRef.current) {
      // 获取所有卡片的总宽度
      const scrollWidth = containerRef.current.scrollWidth;
      const offsetWidth = containerRef.current.offsetWidth;
      const totalWidth = scrollWidth - offsetWidth;

      setWidth(totalWidth);

      // 设置初始位置
      controls.set({ x: direction === 'rtl' ? 0 : -totalWidth });

      // 开始动画
      const animate = async () => {
        await controls.start({
          x: direction === 'rtl' ? -totalWidth : 0,
          transition: {
            duration: reviewsContent.length * speed,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          },
        });
      };

      animate();
    }
  }, [controls, direction, speed]);

  return (
    <div className='w-full overflow-hidden'>
      <motion.div ref={containerRef} className='flex gap-4 cursor-grab' drag='x' dragConstraints={{ right: 0, left: -width }} animate={controls}>
        {reviewsContent.map((item, index) => (
          <motion.div
            key={index}
            className='w-[90vw] max-w-[400px] min-w-[300px] bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--divider)] border-opacity-10 flex-shrink-0'
          >
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-12 h-12 rounded-full overflow-hidden'>
                <Image src={item.avatar} alt={item.name} width={48} height={48} className='w-full h-full object-cover' />
              </div>
              <div>
                <h6 className=' mb-1'>{item.name}</h6>
              </div>
            </div>
            <div>
              <div className='flex items-center gap-1 mb-3'>
                {[...Array(5)].map((_, i) => (
                  <AiFillStar key={i} className='text-[var(--primary)]' />
                ))}
              </div>
              <p className='mb-0 text-gray-500'>{item?.review}</p>
            </div>
          </motion.div>
        ))}

        {/* 复制评论卡片以实现无缝滚动效果 */}
        {reviewsContent.map((item, index) => (
          <motion.div
            key={`clone-${index}`}
            className='w-[90vw] max-w-[400px] min-w-[300px] bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--divider)] border-opacity-10 flex-shrink-0'
          >
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-12 h-12 rounded-full overflow-hidden'>
                <Image src={item.avatar} alt={item.name} width={48} height={48} className='w-full h-full object-cover' />
              </div>
              <div>
                <h6 className=' mb-1'>{item.name}</h6>
              </div>
            </div>
            <div>
              <div className='flex items-center gap-1 mb-3'>
                {[...Array(5)].map((_, i) => (
                  <AiFillStar key={i} className='text-[var(--primary)]' />
                ))}
              </div>
              <p className='mb-0 text-gray-500'>{item?.review}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const Reviews = () => {
  return (
    <section className='overflow-hidden py-10'>
      <div className='container mx-auto mx-auto px-8 md:px-0'>
        <AnimateOnScroll animation='fadeIn'>
          <motion.h1
            className='text-foreground text-center text-3xl md:text-4xl font-bold mb-10'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span className='text-[var(--primary)]' initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
              SOL-CHAT.
            </motion.span>
            Received{' '}
            <motion.span
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
              className='inline-block'
            >
              <Image src='/images/icons/star.png' className='inline-block w-10' alt='' width={1000} height={1000} />
            </motion.span>{' '}
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}>
              4.8/5 Stars in Over 10,000+ Reviews.
            </motion.span>
          </motion.h1>
        </AnimateOnScroll>
      </div>
      <ReviewsScroll direction='rtl' speed={4} />
      <div className='mt-4'>
        <ReviewsScroll direction='ltr' speed={4} />
      </div>
    </section>
  );
};

export default Reviews;
