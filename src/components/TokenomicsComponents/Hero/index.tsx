'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import Printer from '../Printer';
import ReviewLogos from '@/components/HomeComponents/ReviewLogos';
import { motion } from 'framer-motion';
import { AnimateIn, springs } from '@/animations';

const Screen = dynamic(() => import('@/components/Screen'), { ssr: false });

const btnBg = 'bg-linear-65 from-primary to-secondary';

const Hero = () => {
  return (
    <section className='py-10 container mx-auto'>
      <AnimateIn className='relative z-1 text-center'>
        <p className='text-primary'>Best AI Chat Tools</p>
        <h1 className='my-8 text-4xl md:text-5xl font-bold leading-tight'>
          Providing You The Best <br />
          <Printer />
        </h1>
        <div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={springs.bouncy}>
            <Link href='#' className={`${btnBg} mt-4 font-bold font-2xl px-6 py-4 rounded-xl text-background`}>
              Follow Us Today
            </Link>
          </motion.div>
        </div>
      </AnimateIn>
      <motion.div className='relative px-8' initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, ...springs.soft }}>
        <motion.div
          className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[700px] h-auto z-[-1]'
          animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.02, 0.98, 1] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        >
          <Image src='/images/shapes/blurry-shape-1.svg' className='w-full' alt='' width={1000} height={1000} />
        </motion.div>
        <div>
          <motion.div whileHover={{ y: -10 }} transition={springs.soft}>
            <Screen />
          </motion.div>
        </div>
      </motion.div>
      <motion.ul
        className='px-8 text-gray-500 flex flex-wrap gap-4 align-center justify-center my-8 list-disc list-inside'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {['Connect With Community', 'Manage Your Assets', 'As Good As ChatGPT'].map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1, ...springs.soft }}
            whileHover={{ x: 5, color: 'var(--color-primary)' }}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
      <ReviewLogos />
    </section>
  );
};

export default Hero;
