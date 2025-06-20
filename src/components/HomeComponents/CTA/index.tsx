'use client';

import Image from 'next/image';
import Icon from './Icon';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimateIn, fadeInLeft, fadeInRight, springs } from '@/animations';

const CTA = () => {
  return (
    <section className='py-10 px-6 container mx-auto'>
      <AnimateIn>
        <motion.div
          className='rounded-2xl border p-6 overflow-hidden bg-card-bg border-primary border-opacity-10 flex flex-col md:flex-row md:p-8 md:gap-20'
          whileHover={{ scale: 1.01, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
          transition={springs.soft}
        >
          <motion.div className='text-center flex flex-col gap-4 md:w-1/2 items-cneter justify-center' variants={fadeInLeft}>
            <h2 className='text-3xl md:text-4xl font-bold text-pretty mb-6'>
              With <span className='text-primary'>SOLIME</span> navigating the web3 space has never been easier or safer!
            </h2>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={springs.bouncy}>
              <Link href='#' className='h-max w-max mx-auto bg-primary text-background px-6 py-4 rounded-md inline-block'>
                Get Started Free
              </Link>
            </motion.div>
          </motion.div>

          <motion.div className='relative mt-10 md:w-1/2' variants={fadeInRight}>
            <motion.div
              className='absolute top-0 right-0 text-primary w-[20%] h-auto translate-x-[-50%] translate-y-[-50%] z-[2]'
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: 'loop' }}
            >
              <Icon />
            </motion.div>
            <motion.div whileHover={{ scale: 1.03, rotate: 1 }} transition={springs.soft}>
              <Image
                src='/images/screens/screen-2.jpg'
                width={500}
                height={500}
                alt=''
                className='w-full h-auto object-cover rounded-2xl border border-divider border-opacity-10'
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimateIn>
    </section>
  );
};

export default CTA;
