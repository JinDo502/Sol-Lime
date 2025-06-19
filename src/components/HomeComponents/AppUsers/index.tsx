'use client';

import { Icon1, Icon2, Icon3 } from './Icon';
import { motion } from 'framer-motion';
import { AnimateOnScroll } from '@/components/animations';

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
    <section className='py-20 px-8 md:px-0 bg-[var(--card-bg)]'>
      <div className='container mx-auto'>
        <AnimateOnScroll animation='fadeIn'>
          <div className='text-center flex flex-col items-center gap-4'>
            <motion.h1 className='text-3xl md:text-4xl font-bold' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              Who are the users of&nbsp;
              <motion.span
                className='text-[var(--primary)]'
                animate={{
                  color: ['var(--primary)', 'var(--secondary)', 'var(--primary)'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                SOL-CHAT
              </motion.span>{' '}
              ?
            </motion.h1>
          </div>
        </AnimateOnScroll>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 pt-15 md:gap-0 md:divide-x-1 md:divide-[var(--divider)]'>
          {appUsersContent.map((item, index) => {
            return (
              <AnimateOnScroll key={item?.title} className='flex flex-col items-start md:items-center gap-4 md:px-5' animation='slideUp' delay={index * 0.2}>
                <motion.div
                  className='w-14 h-14 text-[var(--background)] bg-[var(--primary)] rounded-2xl p-2'
                  initial={{ rotate: -10, scale: 0.8 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 * index }}
                  whileHover={{ rotate: 5, scale: 1.1, transition: { duration: 0.2 } }}
                >
                  {item.icon}
                </motion.div>
                <motion.div
                  className='flex flex-col items-start gap-2 md:items-center text-center'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <h4 className='text-xl font-bold'>{item.title}</h4>
                  <p className='mb-0 text-gray-400 text-sm'>{item.description}</p>
                </motion.div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* 分隔线动画 */}
        <div className='hidden md:flex justify-between mt-10'>
          {[0, 1].map((_, index) => (
            <motion.div
              key={index}
              className='h-[1px] bg-[var(--divider)] opacity-50'
              style={{ width: '32%' }}
              initial={{ width: '0%', opacity: 0 }}
              animate={{ width: '32%', opacity: 0.5 }}
              transition={{ duration: 1, delay: 0.5 + index * 0.3 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppUsers;
