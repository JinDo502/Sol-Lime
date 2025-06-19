'use client';

import Image from 'next/image';
import Link from 'next/link';
import Printer from '../Printer';
import { motion } from 'framer-motion';

const btnBg = 'bg-linear-65 from-[var(--primary)] from-20% via-[var(--demitint)] via-75% to-[var(--secondary)] to-100%';

const Hero = () => {
  return (
    <section className='py-10 container mx-auto'>
      <div className='relative z-1 text-center'>
        <p className='text-[var(--primary)]'>Best AI Chat Tools</p>
        <h1 className='my-8 text-4xl md:text-5xl font-bold'>
          Providing You The Best <br />
          <Printer />
        </h1>
        <Link href='#' className={`${btnBg} mt-4 font-bold font-2xl px-6 py-4 rounded-xl text-[var(--background)]`}>
          Follow Us Today
        </Link>
      </div>
      <div className='relative px-8'>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
          className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[700px] h-auto z-[-1]'
        >
          <Image src='/images/shapes/blurry-shape-1.svg' className='w-full' alt='' width={1000} height={1000} />
        </motion.div>
        <Image
          src='/images/screens/screen-1.jpg'
          alt=''
          width={100}
          height={100}
          className='mt-12 w-full rounded-xl border border-[var(--divider)] shadow-lg overflow-hidden relative z-1'
        />
      </div>
      <ul className='px-8 text-gray-500 flex flex-wrap gap-4 align-center justify-center mt-8 mb-0 list-disc list-inside'>
        <li>Connect With Community</li>
        <li>Manage Your Assets </li>
        <li>As Good As ChatGPT</li>
      </ul>
      <div className='px-16 flex gap-8 align-center justify-center mt-12'>
        <Image src='/images/review-logos/trustpilot_reviews.svg' alt='' width={1000} height={1000} className='w-1/2' />
        <Image src='/images/review-logos/capterra_reviews.svg' alt='' width={1000} height={1000} className='w-1/2' />
      </div>
    </section>
  );
};

export default Hero;
