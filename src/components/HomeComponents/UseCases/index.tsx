'use client';

import { BsArrowUpRight } from 'react-icons/bs';
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8 } from './Icon';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '@/components/animations';

const useCasesContent = [
  {
    title: 'Token Transfers',
    description: <>Transfer tokens between addresses effortlessly with SOL-CHAT&apos;s simple command interface</>,
    icon: <Icon1 />,
    link: { text: 'Try Transfer Your Token', href: '#' },
  },
  {
    title: 'Querying Token Information',
    description: <>Get crucial data about different tokens easily with SOL-CHAT</>,
    icon: <Icon2 />,
    link: { text: 'Query a Token', href: '#' },
  },
  {
    title: 'Transaction History',
    description: <>Easily track and manage your transactions with SOL-CHAT&apos;s transaction history feature</>,
    icon: <Icon3 />,
    link: { text: 'Start Tracking', href: '#' },
  },
  {
    title: 'Token Swapping',
    description: <>Exchange one type of token for another with SOL-CHAT, making your experience as easy as sending a message</>,
    icon: <Icon4 />,
    link: { text: 'Try Swap Now', href: '#' },
  },
  {
    title: 'Freezing and Unfreezing Tokens',
    description: <>Have additional control over your digital assets with SOL-CHAT&apos;s freezing and unfreezing tokens feature</>,
    icon: <Icon5 />,
    link: { text: 'Freeze a Token', href: '#' },
  },
  {
    title: 'Security Checks',
    description: <>Protect your digital assets from potential risks with SOL-CHAT&apos;s security check feature</>,
    icon: <Icon6 />,
    link: { text: 'Try Security Checks', href: '#' },
  },

  {
    title: 'Market Trends and News Updates',
    description: <>Stay updated with the latest market trends and news with SOL-CHAT</>,
    icon: <Icon7 />,
    link: { text: 'Get Latest Updates', href: '#' },
  },
  {
    title: 'Risk Warnings',
    description: <>Get alerts about potential risks in your blockchain transactions and activities with SOL-CHAT</>,
    icon: <Icon8 />,
    link: { text: 'Get Alert Today', href: '#' },
  },
];

const UseCases = () => {
  return (
    <section className='pt-10 px-8 md:px-0'>
      <div className='container mx-auto'>
        <AnimateOnScroll animation='fadeIn'>
          <div className='text-center flex flex-col items-center gap-4'>
            <motion.p className='text-[var(--primary)] font-bold' initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              SOL-CHAT Use Cases
            </motion.p>
            <motion.h1
              className='text-foreground text-3xl md:text-4xl font-bold'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Navigate Web3 Easier and Faster, The Future of AI in Blockchain is Here
            </motion.h1>
          </div>
        </AnimateOnScroll>

        <StaggerContainer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-15' staggerChildren={0.1}>
          {useCasesContent.map((item) => {
            return (
              <StaggerItem key={item.title} className='flex flex-col justify-between gap-4 h-full text-center'>
                <motion.div className='w-14 h-14 text-[var(--primary)] mx-auto' whileHover={{ scale: 1.1, rotate: 10, transition: { duration: 0.2 } }}>
                  {item.icon}
                </motion.div>
                <motion.h5 className='text-xl font-bold' whileHover={{ color: 'var(--primary)', scale: 1.02 }} transition={{ duration: 0.2 }}>
                  {item.title}
                </motion.h5>
                <p className='mb-0 text-gray-400 text-sm'>{item.description}</p>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href={item.link.href} className='flex items-center justify-center gap-2 text-gray-500 text-sm font-bold'>
                    <span>{item.link.text}</span>
                    <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                      <BsArrowUpRight className='scale-75' />
                    </motion.div>
                  </Link>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default UseCases;
