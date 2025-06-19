'use client';

import Image from 'next/image';
import Link from 'next/link';
import Printer from '../Printer';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { StaggerItem } from '@/components/animations';

const btnBg = 'bg-linear-65 from-[var(--primary)] to-[var(--secondary)]';

// 自定义CSS弹性动画
const cssSpringTransition =
  '800ms linear(0, 0.1187, 0.3801, 0.6679, 0.9085, 1.069, 1.1478, 1.1617, 1.1346, 1.0894, 1.0435, 1.0072, 0.9844, 0.9745, 0.9743, 0.9797, 0.9873, 0.9945, 0.9999, 1.0031, 1.0043, 1.004, 1.003, 1.0018, 1.0006, 0.9998, 1)';

// CSS弹跳动画
const cssBounceTransition =
  'linear(0, 0.0012, 0.0048, 0.0109, 0.0194, 0.0303, 0.0436, 0.0594, 0.0776, 0.0982, 0.1212, 0.1466, 0.1745, 0.2048, 0.2375, 0.2726, 0.3102, 0.3502, 0.3926, 0.4374, 0.4847, 0.5344, 0.5865, 0.641, 0.698, 0.7573, 0.8191, 0.8834, 0.95, 0.9906, 0.9577, 0.9271, 0.8991, 0.8734, 0.8501, 0.8293, 0.8109, 0.795, 0.7814, 0.7703, 0.7616, 0.7553, 0.7514, 0.75, 0.751, 0.7544, 0.7603, 0.7685, 0.7792, 0.7923, 0.8078, 0.8258, 0.8462, 0.869, 0.8942, 0.9219, 0.9519, 0.9844, 0.9909, 0.976, 0.9635, 0.9535, 0.9459, 0.9407, 0.938, 0.9377, 0.9398, 0.9443, 0.9512, 0.9606, 0.9724, 0.9866, 0.9985, 0.9914, 0.9868, 0.9846, 0.9848, 0.9874, 0.9925, 1)';

const Hero = () => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 10 } },
  };

  return (
    <motion.section className='py-10 container mx-auto' variants={containerVariants} initial='hidden' animate='visible'>
      <motion.div className='relative z-1 text-center' variants={itemVariants}>
        <motion.p
          className='text-[var(--primary)]'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring' as const, stiffness: 100, damping: 10, delay: 0.2 }}
        >
          Best AI Chat Tools
        </motion.p>
        <motion.h1
          className='my-8 text-4xl md:text-5xl font-bold leading-tight'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring' as const, stiffness: 100, damping: 10, delay: 0.4 }}
        >
          Providing You The Best <br />
          <Printer />
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring' as const, stiffness: 100, damping: 10, delay: 0.6 }}
          whileHover={{ scale: 1.05, transition: { type: 'spring' as const, stiffness: 400, damping: 10 } }}
          whileTap={{ scale: 0.95 }}
          style={{ transition: `transform ${cssSpringTransition}` }}
        >
          <Link href='#' className={`${btnBg} mt-4 font-bold font-2xl px-6 py-4 rounded-xl text-[var(--background)]`}>
            Follow Us Today
          </Link>
        </motion.div>
      </motion.div>
      <div className='relative px-8 md:px-0'>
        <motion.div
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.7, 0.9, 0.7] }}
          transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
          className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[700px] h-auto z-[-1]'
          style={{ transition: `transform ${cssBounceTransition} 8s, opacity ease-in-out 8s` }}
        >
          <Image src='/images/shapes/blurry-shape-1.svg' className='w-full' alt='' width={1000} height={1000} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring' as const, stiffness: 50, damping: 15, delay: 0.8 }}>
          <motion.div
            whileHover={{ scale: 1.02, boxShadow: '0 20px 30px rgba(0, 0, 0, 0.2)', transition: { type: 'spring' as const, stiffness: 300, damping: 10 } }}
            style={{ transition: `transform ${cssSpringTransition}, box-shadow 0.3s ease` }}
          >
            <Image
              src='/images/screens/screen-1.jpg'
              alt=''
              width={1000}
              height={1000}
              className='mt-12 w-full rounded-xl border border-[var(--divider)] shadow-lg overflow-hidden relative z-1'
            />
          </motion.div>
        </motion.div>
      </div>
      <motion.ul
        className='px-8 text-gray-500 flex flex-wrap gap-4 align-center justify-center my-8 list-disc list-inside'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.li whileHover={{ color: 'var(--primary)', x: 5, transition: { duration: 0.2 } }} style={{ transition: `color 0.2s ease, transform ${cssSpringTransition}` }}>
          Connect With Community
        </motion.li>
        <motion.li whileHover={{ color: 'var(--primary)', x: 5, transition: { duration: 0.2 } }} style={{ transition: `color 0.2s ease, transform ${cssSpringTransition}` }}>
          Manage Your Assets
        </motion.li>
        <motion.li whileHover={{ color: 'var(--primary)', x: 5, transition: { duration: 0.2 } }} style={{ transition: `color 0.2s ease, transform ${cssSpringTransition}` }}>
          As Good As ChatGPT
        </motion.li>
      </motion.ul>
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
    </motion.section>
  );
};

export default Hero;
