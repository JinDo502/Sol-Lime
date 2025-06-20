'use client';

import { Icon1, Icon2, Icon3 } from './Icon';
import { motion } from 'framer-motion';
import { AnimateIn, MotionContainer, fadeInUp, springs } from '@/animations';

const appUsersContent = [
  {
    title: 'Blockchain Enthusiasts',
    description: 'Individuals interested in navigating the web3 ecosystem effortlessly and securely.',
    icon: <Icon1 />,
  },
  {
    title: 'Crypto Traders',
    description: 'Crypto traders who need to manage their digital assets more efficiently and stay updated with market trends.',
    icon: <Icon2 />,
  },
  {
    title: 'Web3 Developers',
    description: 'Developers who want a user-friendly platform to interact with blockchain technologies.',
    icon: <Icon3 />,
  },
];

const AppUsers = () => {
  return (
    <section className='py-10 px-6 bg-card-bg'>
      <div className='container mx-auto'>
        <AnimateIn className='text-center flex flex-col items-center gap-4'>
          <h1 className='text-3xl md:text-4xl font-bold'>
            Who are the users of&nbsp;
            <motion.span className='text-primary' animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}>
              SOL-LIME
            </motion.span>{' '}
            ?
          </h1>
        </AnimateIn>
      </div>

      <MotionContainer className='grid grid-cols-1 md:grid-cols-3 gap-10 pt-15 md:gap-0 md:divide-x-1 md:divide-divider' staggerChildren={0.2}>
        {appUsersContent.map((item) => {
          return (
            <motion.div key={item?.title} className='flex flex-col items-start md:items-center gap-4 md:px-5' variants={fadeInUp} whileHover={{ y: -5 }} transition={springs.soft}>
              <motion.div className='w-14 h-14 text-background bg-primary rounded-2xl p-2' whileHover={{ rotate: 10, scale: 1.1 }} transition={springs.bouncy}>
                {item.icon}
              </motion.div>
              <div className='flex flex-col items-start gap-2 md:items-center text-center'>
                <h4 className='text-xl font-bold'>{item.title}</h4>
                <p className='mb-0 text-gray-400 text-sm'>{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </MotionContainer>

      {/* 分隔线动画 */}
      <div className='hidden md:flex justify-between mt-10'>
        {[0, 1].map((_, index) => (
          <motion.div
            key={index}
            className='h-[1px] bg-divider opacity-50'
            style={{ width: '32%' }}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '32%', opacity: 0.5 }}
            transition={{ delay: 0.5 + index * 0.2, duration: 0.8, ...springs.soft }}
          />
        ))}
      </div>
    </section>
  );
};

export default AppUsers;
