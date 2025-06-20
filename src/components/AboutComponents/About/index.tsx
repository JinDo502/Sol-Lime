'use client';

import Image from 'next/image';
import Link from 'next/link';
import ReviewLogos from '@/components/HomeComponents/ReviewLogos';
import { motion } from 'framer-motion';
import { AnimateIn, springs } from '@/animations';

const About = () => {
  return (
    <section className='py-10 px-6 '>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center gap-8 md:flex-row'>
          <AnimateIn className='text-center flex flex-col items-center gap-4 w-full md:w-2/5'>
            <motion.p className='text-primary text-sm font-bold'>About SOLIME</motion.p>
            <h2 className='text-3xl md:text-4xl font-bold'>Blockchain enthusiasts love SOLIME .</h2>
            <p className='mb-4 text-gray-500'>With a few simple chat commands, users can navigate the web3 space, manage their digital assets, and much more.</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={springs.bouncy}>
              <Link href='#' className='bg-primary text-background px-6 py-4 rounded-lg font-bold inline-block  duration-300'>
                Start Experience
              </Link>
            </motion.div>
          </AnimateIn>
          <motion.div
            className='w-full md:w-3/5'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, ...springs.soft }}
            whileHover={{ scale: 1.02 }}
          >
            <Image className='w-full rounded-md' src='/images/screens/screen-4.png' alt='' width={1000} height={1000} />
          </motion.div>
        </div>
        <motion.hr className='border-t border-divider mb-8' initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ delay: 0.5, duration: 0.8, ...springs.soft }} />
        <ReviewLogos />
      </div>
    </section>
  );
};

export default About;
