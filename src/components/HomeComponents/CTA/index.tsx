'use client';

import Image from 'next/image';
import Icon from './Icon';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimateOnScroll, Float, Pulse } from '@/components/animations';

const CTA = () => {
  return (
    <section className='py-10 px-8 md:px-0 container mx-auto'>
      <AnimateOnScroll animation='slideUp'>
        <motion.div
          className='rounded-2xl border p-6 overflow-hidden bg-[var(--card-bg)] border-[var(--primary)] border-opacity-10 flex flex-col md:flex-row md:p-8 md:gap-20'
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
        >
          <div className='text-center flex flex-col gap-4 md:w-1/2 items-cneter justify-center'>
            <motion.h2
              className='text-3xl md:text-4xl font-bold text-pretty mb-6'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              With <span className='text-[var(--primary)]'>SOL-LIME </span> navigating the web3 space has never been easier or safer!
            </motion.h2>
            <Pulse>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href='#' className='h-max w-max mx-auto bg-[var(--primary)] text-[var(--background)] px-6 py-4 rounded-md inline-block'>
                  Get Started Free
                </Link>
              </motion.div>
            </Pulse>
          </div>

          <div className='relative mt-10 md:w-1/2'>
            <div className='absolute top-0 right-0 text-[var(--primary)] w-[20%] h-auto translate-x-[-50%] translate-y-[-50%] z-[2]'>
              <Icon />
            </div>
            <Float>
              <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                <Image
                  src='/images/screens/screen-2.jpg'
                  width={500}
                  height={500}
                  alt=''
                  className='w-full h-auto object-cover rounded-2xl border border-[var(--divider)] border-opacity-10'
                />
              </motion.div>
            </Float>
          </div>
        </motion.div>
      </AnimateOnScroll>
    </section>
  );
};

export default CTA;
