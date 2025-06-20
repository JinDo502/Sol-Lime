'use client';

import Image from 'next/image';
import ReviewLogos from '@/components/HomeComponents/ReviewLogos';
import { motion } from 'framer-motion';
import { AnimateIn, MotionContainer, fadeInLeft, fadeInRight, springs } from '@/animations';
import { useEffect, useState } from 'react';

const brands = [
  { name: 'Brand 1', image: '/images/brands/1.png' },
  { name: 'Brand 2', image: '/images/brands/2.png' },
  { name: 'Brand 3', image: '/images/brands/3.png' },
  { name: 'Brand 4', image: '/images/brands/4.png' },
  { name: 'Brand 5', image: '/images/brands/5.png' },
];

// 模糊占位图数据 URL
const blurDataURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXF6wSAAAAABJRU5ErkJggg==';

const Hero = () => {
  // 使用 useState 跟踪组件是否已挂载，用于客户端动画
  const [isMounted, setIsMounted] = useState(false);

  // 在客户端挂载后设置状态
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className='relative bg-background py-10 px-6'>
      <div className='container mx-auto flex flex-col items-center'>
        <MotionContainer className='text-center relative z-1 flex flex-col items-center gap-10 md:flex-row'>
          <motion.div
            className='flex flex-col items-center gap-10 md:w-2/5'
            variants={fadeInLeft}
            style={{ willChange: 'opacity, transform' }} // 优化渲染性能
          >
            <motion.p className='text-primary' whileHover={{ scale: 1.05 }} transition={springs.soft}>
              <span className='border px-4 py-2 rounded-md border-divider inline-block'>New ChatGPT in Crypto</span>
            </motion.p>

            <h1 className='text-4xl md:text-5xl font-bold leading-tight text-center'>
              An AI Social App As Good As ChatGPT - <span className='text-primary'>SOL-LIME </span> is arrived.
            </h1>

            <form action='#' className='flex flex-col gap-4 w-full'>
              <div className='flex w-full'>
                <input type='email' className='flex-1 border border-divider border-r-0 rounded-l-md p-2' placeholder='Enter Your Email' />
                {/* 使用 CSS 动画替代 JavaScript 动画 */}
                <button className='px-4 bg-primary text-background rounded-r-md hover:scale-105 active:scale-95 transition-transform' type='button'>
                  Sign Up Free
                </button>
              </div>
            </form>

            <ReviewLogos />
          </motion.div>

          <motion.div
            className='relative w-full md:w-3/5'
            variants={fadeInRight}
            style={{ willChange: 'opacity, transform' }} // 优化渲染性能
          >
            <motion.div
              className='relative z-10 hover:scale-102 transition-transform duration-300'
              style={{ willChange: 'transform' }} // 优化渲染性能
            >
              <Image
                src='/images/screens/screen-2.jpg'
                alt='SOL-LIME App Screenshot'
                width={1000}
                height={1000}
                className='w-full object-cover border-1 border-divider rounded-md'
                priority // 优先加载图片
                sizes='(max-width: 768px) 100vw, 60vw'
                quality={85}
                placeholder='blur'
                blurDataURL={blurDataURL}
                loading='eager'
              />
            </motion.div>

            <div className='z-1'>
              {/* 使用 CSS 类替代 JavaScript 动画 */}
              <div className={`absolute top-[-20rem] md:top-[-25rem] left-[-7rem] w-[500px] h-auto ${isMounted ? 'animate-pulse' : ''}`}>
                <Image src='/images/shapes/blurry-shape-2.svg' alt='' width={500} height={500} sizes='(max-width: 768px) 100vw, 500px' priority />
              </div>
            </div>
          </motion.div>
        </MotionContainer>

        <AnimateIn className='flex flex-col mt-10 items-center gap-10 text-center w-full'>
          <h4 className='font-[var(--font-montserrat)] text-2xl md:text-3xl font-bold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>Famous Partners</span>
            &nbsp;that choose and trust&nbsp;
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>SOL-LIME .</span>
          </h4>

          <div className='flex flex-wrap justify-center md:flex-nowrap md:gap-10'>
            {brands.map((brand, index) => (
              <div
                key={brand.name}
                className={`w-1/3 py-1 hover:scale-110 transition-transform duration-300 ${isMounted ? 'animate-fade-in-up' : ''}`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  willChange: 'transform, opacity', // 优化渲染性能
                }}
              >
                <Image src={brand.image} alt={brand.name} width={200} height={100} className='md:w-full md:h-auto' sizes='(max-width: 768px) 33vw, 20vw' loading='lazy' />
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default Hero;
