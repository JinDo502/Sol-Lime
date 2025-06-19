'use client';

import Image from 'next/image';
import { Icon1 } from './Icon';
import { Icon2 } from './Icon';
import { Icon3 } from './Icon';
import { BsCaretRightFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '@/components/animations';

const featuresContent = [
  {
    icon: Icon1,
    title: 'Effortless Token Management',
    description: "SOL-CHAT simplifies token transfers, token swapping, and even borrowing tokens from DeFi platforms. It's like having your personal blockchain assistant",
  },
  {
    icon: Icon2,
    title: 'Insightful Information Retrieval',
    description:
      'SOL-CHAT provides you with essential token information and updates on the latest market trends and news, equipping you with valuable insights for your blockchain activities',
  },
  {
    icon: Icon3,
    title: 'Enhanced Security Measures',
    description:
      'With SOL-CHAT, rest assured that your digital assets are protected. It conducts regular security checks and issues risk warnings to alert you about potential threats',
  },
];

const Features = () => {
  return (
    <section className='py-10 px-6'>
      <div className='container mx-auto'>
        <StaggerContainer className='text-center flex flex-col items-center gap-4' staggerChildren={0.2}>
          <StaggerItem>
            <motion.p className='text-[var(--primary)] font-bold' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              SOL-CHAT Features
            </motion.p>
          </StaggerItem>
          <StaggerItem>
            <motion.h1
              className='text-foreground text-3xl md:text-4xl font-bold'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Streamline Your Web3 Experience, The Future of AI Blockchain Tools is Here
            </motion.h1>
          </StaggerItem>
        </StaggerContainer>

        <AnimateOnScroll animation='fadeIn' className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-15'>
          {featuresContent.map((item, index) => {
            return (
              <motion.div
                key={item?.title}
                className='flex flex-col gap-4 p-6 rounded-xl border border-[var(--divider)] hover:border-[var(--primary)] transition-all duration-300'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                }}
              >
                <motion.div
                  className='w-14 h-14 text-[var(--primary)] flex items-center justify-center rounded-2xl p-2 border border-[var(--divider)] bg-gradient-to-l from-[var(--card-bg)]/90 to-[var(--card-bg)]/50'
                  whileHover={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon />
                </motion.div>
                <h4 className='text-2xl md:text-3xl font-bold'>{item?.title}</h4>
                <p className='text-gray-400 text-sm'>{item?.description}</p>
              </motion.div>
            );
          })}
        </AnimateOnScroll>

        <AnimateOnScroll animation='scale' className='relative mt-16'>
          <motion.div className='rounded-xl overflow-hidden' initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <Image src='/images/thumbnails/video-thumb.jpg' width={1000} height={1000} alt='' className='w-full h-full object-cover' />
          </motion.div>
          <motion.div
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--primary)] rounded-full p-4 cursor-pointer'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              delay: 0.5,
            }}
          >
            <BsCaretRightFill className='text-[var(--background)] text-4xl md:text-5xl' />
          </motion.div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Features;
