'use client';

import Image from 'next/image';
import { BsCaretRightFill, BsCodeSlash, BsCoin, BsCurrencyExchange, BsEmojiSunglasses } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { AnimateIn, springs, fadeInUp, useScrollAnimation } from '@/animations';

const featuresContent = [
  {
    icon: <BsCoin />,
    title: 'Market Opportunity',
    description: ['Solana Meme coins total market cap $10.5B', 'Pump.fun daily trading volume $2M', 'Solana ecosystem growth 200% YoY', 'Web3 social users growth 150% YoY'],
  },
  {
    icon: <BsEmojiSunglasses />,
    title: 'Competitive Advantages',
    description: [
      'First-mover advantage: First Meme social platform on Solana',
      'Technology leadership: AI-driven content creation',
      'Ecosystem integration: Deep integration with Solana DeFi ecosystem',
      'Community-driven: True decentralized governance',
    ],
  },
];

const featuresContent2 = [
  {
    icon: <BsCurrencyExchange />,
    title: 'Blockchain Tech Stack',
    description: [
      'Solana mainnet: High-performance, low-fee blockchain infrastructure',
      'SPL token standard: Native Solana token protocol',
      'Smart contract security: Multiple audits, open-source transparency',
    ],
  },
  {
    icon: <BsCodeSlash />,
    title: 'Frontend Tech Stack',
    description: [
      'Modern web application framework: React + Next.js',
      'Cross-platform mobile app development: React Native',
      'Wallet integration: Support for Phantom, Solflare and other major wallets',
    ],
  },
];

const Features = () => {
  const [ref, controls] = useScrollAnimation();

  return (
    <section className='py-10 px-6' ref={ref}>
      <div className='container mx-auto'>
        <AnimateIn className='flex flex-col items-center gap-4 text-center'>
          <p className='text-primary font-bold'>Market Analysis</p>
          <h1 className='text-foreground text-3xl md:text-4xl font-bold'>Market Analysis and Growth Trends: Explosive Opportunities in the Solana Ecosystem</h1>
        </AnimateIn>

        <motion.div
          className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-15'
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
                whileHover={{ borderColor: 'var(--color-primary)' }}
                transition={springs.soft}
              >
                <motion.div
                  className='w-14 h-14 text-2xl text-primary flex items-center justify-center rounded-2xl p-2 border border-divider bg-gradient-to-l from-card-bg/90 to-card-bg/50'
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={springs.bouncy}
                >
                  {item.icon}
                </motion.div>
                <motion.h4 className='text-2xl md:text-3xl font-bold' whileHover={{ color: 'var(--color-primary)' }} transition={springs.soft}>
                  {item?.title}
                </motion.h4>
                <ul className='list-disc list-outside pl-4'>
                  {item?.description?.map((p) => (
                    <li key={p} className='text-gray-400 text-sm'>
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        <AnimateIn className='flex flex-col items-center gap-4 mt-15 text-center'>
          <p className='text-primary font-bold'>Technical Architecture</p>
          <h1 className='text-foreground text-3xl md:text-4xl font-bold'>Advanced Technical Architecture: Building the Foundation for Next-Generation Blockchain Solutions</h1>
        </AnimateIn>

        <motion.div
          className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-15'
          initial='hidden'
          animate={controls}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {featuresContent2.map((item) => {
            return (
              <motion.div
                key={item?.title}
                className='flex flex-col gap-4 p-6 rounded-xl border border-divider hover:border-primary duration-300'
                variants={fadeInUp}
                whileHover={{ borderColor: 'var(--color-primary)' }}
                transition={springs.soft}
              >
                <motion.div
                  className='w-14 h-14 text-2xl text-primary flex items-center justify-center rounded-2xl p-2 border border-divider bg-gradient-to-l from-card-bg/90 to-card-bg/50'
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={springs.bouncy}
                >
                  {item.icon}
                </motion.div>
                <motion.h4 className='text-2xl md:text-3xl font-bold' whileHover={{ color: 'var(--color-primary)' }} transition={springs.soft}>
                  {item?.title}
                </motion.h4>
                <ul className='list-disc list-outside pl-4'>
                  {item?.description?.map((p) => (
                    <li key={p} className='text-gray-400 text-sm'>
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        <div className='relative mt-16'>
          <motion.div className='rounded-xl overflow-hidden' whileHover={{ scale: 1.02 }} transition={springs.soft}>
            <Image src='/images/thumbnails/video-thumb.jpg' width={1000} height={1000} alt='' className='w-full h-full object-cover' />
          </motion.div>
          <motion.div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full p-4 cursor-pointer' whileHover={{ scale: 1.2 }}>
            <BsCaretRightFill className='text-background text-4xl md:text-5xl' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
