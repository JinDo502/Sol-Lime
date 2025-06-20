'use client';

import { motion } from 'framer-motion';
import { AnimateIn, MotionContainer, fadeInUp, springs } from '@/animations';

const roadmap = [
  {
    title: 'Q1 2025',
    description: 'Project Launch',
    features: ['Pump.fun platform token launch', 'Basic social features online', 'Community building initiation', 'Whitepaper release'],
  },
  {
    title: 'Q2 2025',
    description: 'Feature Enhancement',
    features: ['Meme creation tools launch', 'NFT minting integration', 'Mobile app release', 'Gamification mechanism upgrade'],
  },
  {
    title: 'Q3 2025',
    description: 'Ecosystem Expansion',
    features: ['Full DeFi functionality integration', 'Community governance system launch', 'Partnership ecosystem development', 'AI functionality upgrade'],
  },
  {
    title: 'Q4 2025',
    description: 'Globalization',
    features: ['Cross-chain bridge functionality', 'International multi-language support', 'Global market expansion', 'Enterprise-level features launch'],
  },
];

const Pricing = () => {
  return (
    <section className='py-10 px-6'>
      <div className='container mx-auto'>
        <AnimateIn className='flex flex-col items-center justify-center gap-4 mb-10'>
          <p className='text-primary'>Roadmap</p>
          <h1 className=' text-3xl md:text-4xl font-bold mb-5 text-center'>
            Our Goals <br />
            Our Plans
          </h1>
          <p className='text-center text-gray-500 text-sm'>
            Understand{' '}
            <motion.span className='text-primary' whileHover={{ scale: 1.1 }} transition={springs.bouncy}>
              Sol Lime
            </motion.span>{' '}
            roadmap and start involve today!
          </p>
        </AnimateIn>
        <MotionContainer viewport={{ once: true, amount: 0.1 }} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10' staggerChildren={0.2}>
          {roadmap.map((item, index) => (
            <motion.div
              key={index}
              className='col-md-6 col-lg-4 border border-divider rounded-lg p-6'
              variants={fadeInUp}
              whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)', borderColor: 'var(--color-primary)' }}
              transition={springs.soft}
            >
              <motion.h3 className='text-primary text-2xl md:text-3xl font-bold mb-0' whileHover={{ scale: 1.05 }} transition={springs.bouncy}>
                {item?.title}
              </motion.h3>
              <p className=' lead fw-normal mt-4 mb-0'>{item?.description}</p>
              <ul className='list-disc list-outside text-gray-500 text-sm mt-4'>
                {item?.features.map((feature, featureIndex) => (
                  <motion.li
                    className='my-2 ml-4'
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + featureIndex * 0.1, ...springs.soft }}
                    whileHover={{ x: 5 }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </MotionContainer>
      </div>
    </section>
  );
};

export default Pricing;
