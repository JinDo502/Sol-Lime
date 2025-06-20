'use client';

import Image from 'next/image';
import { Icon1 } from './Icon';
import { Icon2 } from './Icon';
import { Icon3 } from './Icon';
import { BsCaretRightFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { AnimateIn, springs, fadeInUp, useScrollAnimation } from '@/animations';

const featuresContent = [
  {
    icon: Icon1,
    title: 'Effortless Token Management',
    description: "SOL-LIME simplifies token transfers, token swapping, and even borrowing tokens from DeFi platforms. It's like having your personal blockchain assistant",
  },
  {
    icon: Icon2,
    title: 'Insightful Information Retrieval',
    description:
      'SOL-LIME provides you with essential token information and updates on the latest market trends and news, equipping you with valuable insights for your blockchain activities',
  },
  {
    icon: Icon3,
    title: 'Enhanced Security Measures',
    description:
      'With SOL-LIME , rest assured that your digital assets are protected. It conducts regular security checks and issues risk warnings to alert you about potential threats',
  },
];

const Features = () => {
  const [ref, controls] = useScrollAnimation();
  const [videoRef, videoControls] = useScrollAnimation();

  return (
    <section className='py-10 px-6' ref={ref}>
      <div className='container mx-auto'>
        <AnimateIn className='text-center flex flex-col items-center gap-4'>
          <motion.p className='text-primary font-bold' animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}>
            SOL-LIME Features
          </motion.p>
          <h1 className='text-foreground text-3xl md:text-4xl font-bold'>Streamline Your Web3 Experience, The Future of AI Blockchain Tools is Here</h1>
        </AnimateIn>

        <motion.div
          className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-15'
          initial='hidden'
          animate={controls}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {featuresContent.map((item) => {
            return (
              <motion.div
                key={item?.title}
                className='flex flex-col gap-4 p-6 rounded-xl border border-divider hover:border-primary duration-300'
                variants={fadeInUp}
                whileHover={{
                  y: -10,
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                  borderColor: 'var(--color-primary)',
                }}
                transition={springs.soft}
              >
                <motion.div
                  className='w-14 h-14 text-primary flex items-center justify-center rounded-2xl p-2 border border-divider bg-gradient-to-l from-card-bg/90 to-card-bg/50'
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={springs.bouncy}
                >
                  <item.icon />
                </motion.div>
                <motion.h4 className='text-2xl md:text-3xl font-bold' whileHover={{ color: 'var(--color-primary)' }} transition={springs.soft}>
                  {item?.title}
                </motion.h4>
                <p className='text-gray-400 text-sm'>{item?.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div className='relative mt-16' ref={videoRef} initial={{ opacity: 0, y: 50 }} animate={videoControls} transition={{ delay: 0.3, ...springs.soft }}>
          <motion.div className='rounded-xl overflow-hidden' whileHover={{ scale: 1.02 }} transition={springs.soft}>
            <Image src='/images/thumbnails/video-thumb.jpg' width={1000} height={1000} alt='' className='w-full h-full object-cover' />
          </motion.div>
          <motion.div
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full p-4 cursor-pointer'
            whileHover={{ scale: 1.2 }}
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: ['0 0 0 0 rgba(var(--color-primary-rgb), 0.7)', '0 0 0 10px rgba(var(--color-primary-rgb), 0)', '0 0 0 0 rgba(var(--color-primary-rgb), 0)'],
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', ...springs.bouncy }}
          >
            <BsCaretRightFill className='text-background text-4xl md:text-5xl' />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
