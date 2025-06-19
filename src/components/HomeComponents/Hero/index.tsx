'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem, Float } from '@/components/animations';
import { useTheme } from 'next-themes';

const brands = [
  { name: 'Brand 1', image: '/images/brands/1.png' },
  { name: 'Brand 2', image: '/images/brands/2.png' },
  { name: 'Brand 3', image: '/images/brands/3.png' },
  { name: 'Brand 4', image: '/images/brands/4.png' },
  { name: 'Brand 5', image: '/images/brands/5.png' },
];

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section className='relative bg-background py-10 px-6'>
      <div className='container mx-auto flex flex-col items-center'>
        <StaggerContainer className='text-center relative z-1 flex flex-col items-center gap-10 md:flex-row' staggerChildren={0.2}>
          <div className='flex flex-col items-center gap-10 md:w-2/5'>
            <StaggerItem>
              <p className='text-[var(--primary)]'>
                <span className='border px-4 py-2 rounded-md border-[var(--divider)] inline-block'>New ChatGPT in Crypto</span>
              </p>
            </StaggerItem>

            <StaggerItem>
              <h1 className='text-4xl md:text-5xl font-bold leading-tight text-center'>
                An AI Social App As Good As ChatGPT - <span className='text-[var(--primary)]'>SOL-LIME </span> is arrived.
              </h1>
            </StaggerItem>

            <StaggerItem>
              <form action='#' className='flex flex-col gap-4'>
                <div className='flex'>
                  <input type='email' className='flex-1 border border-[var(--divider)] border-r-0 rounded-l-md p-2' placeholder='Enter Your Email' />
                  <motion.button className='px-4 bg-[var(--primary)] text-[var(--background)] rounded-r-md' type='button' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    Sign Up Free
                  </motion.button>
                </div>
              </form>
            </StaggerItem>

            <StaggerItem className='flex gap-8 items-center justify-center px-8'>
              <div className='w-1/2 md:w-55'>
                {theme === 'dark' && <Image className='w-full' src={`/images/review-logos/trustpilot_reviews.svg`} alt='' width={1000} height={1000} />}
                {theme === 'light' && <Image className='w-full' src={`/images/review-logos/trustpilot_reviews_2.svg`} alt='' width={1000} height={1000} />}
              </div>
              <div className='w-1/2 md:w-55'>
                {theme === 'dark' && <Image className='w-full' src={`/images/review-logos/capterra_reviews.svg`} alt='' width={1000} height={1000} />}
                {theme === 'light' && <Image className='w-full' src={`/images/review-logos/capterra_reviews_2.svg`} alt='' width={1000} height={1000} />}
              </div>
            </StaggerItem>
          </div>

          <div className='relative w-full md:w-3/5'>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className='relative z-10'>
              <Image src='/images/screens/screen-2.jpg' alt='' width={1000} height={1000} className='w-full object-cover border-1 border-[var(--divider)] rounded-md' />
            </motion.div>

            <Float>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: [0.8, 1.2, 0.8], rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity, repeatType: 'loop' }}
                className='z-1'
              >
                <Image src='/images/shapes/blurry-shape-2.svg' alt='' width={1000} height={1000} className='absolute top-[-20rem] md:top-[-25rem] left-[-7rem] w-[500px] h-auto' />
              </motion.div>
            </Float>
          </div>
        </StaggerContainer>

        <motion.div
          className='flex flex-col mt-10 items-center gap-10 text-center w-full'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h4 className='font-[var(--font-montserrat)] text-2xl md:text-3xl font-bold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]'>Famous Partners</span>
            &nbsp;that choose and trust&nbsp;
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]'>SOL-LIME .</span>
          </h4>

          <div className='flex flex-wrap justify-center md:flex-nowrap md:gap-10'>
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                className='w-1/3 py-1'
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <Image src={brand.image} alt={brand.name} width={1000} height={1000} className='md:w-full md:h-auto' />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
