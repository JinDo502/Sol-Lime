'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from '@/components/animations';
import { useTheme } from 'next-themes';

const About = () => {
  const { theme } = useTheme();
  return (
    <section className='py-15 px-8 md:px-0'>
      <div className='container mx-auto'>
        <StaggerContainer className='flex flex-col items-center gap-8 md:flex-row' staggerChildren={0.2}>
          <div className='text-center flex flex-col items-center gap-4 w-full md:w-2/5'>
            <StaggerItem>
              <motion.p className='text-[var(--primary)] text-sm font-bold' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                About SOL-CHAT
              </motion.p>
            </StaggerItem>
            <StaggerItem>
              <motion.h2 className='text-3xl md:text-4xl font-bold' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                Blockchain enthusiasts love SOL-CHAT.
              </motion.h2>
            </StaggerItem>
            <StaggerItem>
              <motion.p className='mb-4 text-gray-500' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                With a few simple chat commands, users can navigate the web3 space, manage their digital assets, and much more.
              </motion.p>
            </StaggerItem>
            <StaggerItem>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href='#' className='bg-[var(--primary)] text-[var(--background)] px-6 py-4 rounded-lg font-bold inline-block transition-colors duration-300'>
                  Start Experience
                </Link>
              </motion.div>
            </StaggerItem>
          </div>
          <motion.div className='w-full md:w-3/5' initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <Image className='w-full mb-8 rounded-md' src='/images/screens/screen-4.png' alt='' width={1000} height={1000} />
          </motion.div>
        </StaggerContainer>
        <motion.hr
          className='border-t border-[var(--divider)]'
          initial={{ opacity: 0, width: '0%' }}
          animate={{ opacity: 1, width: '100%' }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <StaggerItem className='flex gap-8 items-center justify-center mt-12 px-8'>
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
    </section>
  );
};

export default About;
