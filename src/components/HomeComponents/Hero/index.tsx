'use client';

import Image from 'next/image';
import { memo } from 'react';
import ReviewLogos from '@/components/HomeComponents/ReviewLogos';
import { motion } from 'framer-motion';
import { AnimateIn, MotionContainer, fadeInUp, fadeInLeft, fadeInRight, springs } from '@/animations';
import { getImageProps } from '@/utils/imageUtils';
import dynamic from 'next/dynamic';

const brands = [
  { name: 'Brand 1', image: '/images/brands/1.png' },
  { name: 'Brand 2', image: '/images/brands/2.png' },
  { name: 'Brand 3', image: '/images/brands/3.png' },
  { name: 'Brand 4', image: '/images/brands/4.png' },
  { name: 'Brand 5', image: '/images/brands/5.png' },
];

const Screen = dynamic(() => import('@/components/Screen'), { ssr: false });

const Hero = () => {
  return (
    <section className='relative bg-background py-10 px-6'>
      <div className='container mx-auto flex flex-col items-center'>
        <MotionContainer className='text-center relative z-1 flex flex-col items-center gap-10 md:flex-row'>
          <motion.div className='flex flex-col items-center gap-10 md:w-2/5' variants={fadeInLeft}>
            <motion.p className='text-primary' whileHover={{ scale: 1.05 }} transition={springs.soft}>
              <span className='border px-4 py-2 rounded-md border-divider inline-block'>New ChatGPT in Crypto</span>
            </motion.p>

            <h1 className='text-4xl md:text-5xl font-bold leading-tight text-center'>
              An AI Social App As Good As ChatGPT - <span className='text-primary'>SOLIME </span> is arrived.
            </h1>

            <form action='#' className='flex flex-col gap-4'>
              <div className='flex'>
                <input type='email' className='flex-1 border border-divider border-r-0 rounded-l-md p-2' placeholder='Enter Your Email' />
                <motion.button
                  className='px-4 bg-primary text-background rounded-r-md'
                  type='button'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={springs.bouncy}
                >
                  Sign Up Free
                </motion.button>
              </div>
            </form>

            <ReviewLogos />
          </motion.div>

          <motion.div className='relative w-full md:w-3/5' variants={fadeInRight}>
            <motion.div className='relative z-10' whileHover={{ scale: 1.02 }} transition={springs.soft}>
              <Screen />
            </motion.div>

            <div className='z-1'>
              <Image
                alt='Decorative blurry shape'
                {...getImageProps({
                  src: '/images/shapes/blurry-shape-2.svg',
                  className: 'absolute top-[-20rem] md:top-[-25rem] left-[-7rem] w-[500px] h-auto',
                  unoptimized: true,
                })}
              />
            </div>
          </motion.div>
        </MotionContainer>

        <AnimateIn className='flex flex-col mt-10 items-center gap-10 text-center w-full'>
          <h4 className='font-[var(--font-montserrat)] text-2xl md:text-3xl font-bold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>Famous Partners</span>
            &nbsp;that choose and trust&nbsp;
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>SOLIME .</span>
          </h4>

          <MotionContainer className='flex flex-wrap justify-center md:flex-nowrap md:gap-10' staggerChildren={0.1}>
            {brands.map((brand) => (
              <motion.div key={brand.name} className='w-1/3 py-1' variants={fadeInUp} whileHover={{ scale: 1.1 }} transition={springs.soft}>
                <Image
                  alt={brand.name}
                  {...getImageProps({
                    src: brand.image,
                    className: 'md:w-full md:h-auto',
                    width: 200,
                    height: 100,
                    loading: 'lazy',
                  })}
                />
              </motion.div>
            ))}
          </MotionContainer>
        </AnimateIn>
      </div>
    </section>
  );
};

export default memo(Hero);
