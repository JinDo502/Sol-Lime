'use client';

import { BsArrowUpRight } from 'react-icons/bs';
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8 } from './Icon';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimateIn, MotionContainer, fadeInUp, springs } from '@/animations';

const useCasesContent = [
  {
    title: 'Token Transfers',
    description: <>Transfer tokens between addresses effortlessly with SOL-LIME &apos;s simple command interface</>,
    icon: <Icon1 />,
    link: { text: 'Try Transfer Your Token', href: '#' },
  },
  {
    title: 'Querying Token Information',
    description: <>Get crucial data about different tokens easily with SOL-LIME </>,
    icon: <Icon2 />,
    link: { text: 'Query a Token', href: '#' },
  },
  {
    title: 'Transaction History',
    description: <>Easily track and manage your transactions with SOL-LIME &apos;s transaction history feature</>,
    icon: <Icon3 />,
    link: { text: 'Start Tracking', href: '#' },
  },
  {
    title: 'Token Swapping',
    description: <>Exchange one type of token for another with SOL-LIME , making your experience as easy as sending a message</>,
    icon: <Icon4 />,
    link: { text: 'Try Swap Now', href: '#' },
  },
  {
    title: 'Freezing and Unfreezing Tokens',
    description: <>Have additional control over your digital assets with SOL-LIME &apos;s freezing and unfreezing tokens feature</>,
    icon: <Icon5 />,
    link: { text: 'Freeze a Token', href: '#' },
  },
  {
    title: 'Security Checks',
    description: <>Protect your digital assets from potential risks with SOL-LIME &apos;s security check feature</>,
    icon: <Icon6 />,
    link: { text: 'Try Security Checks', href: '#' },
  },

  {
    title: 'Market Trends and News Updates',
    description: <>Stay updated with the latest market trends and news with SOL-LIME </>,
    icon: <Icon7 />,
    link: { text: 'Get Latest Updates', href: '#' },
  },
  {
    title: 'Risk Warnings',
    description: <>Get alerts about potential risks in your blockchain transactions and activities with SOL-LIME </>,
    icon: <Icon8 />,
    link: { text: 'Get Alert Today', href: '#' },
  },
];

const UseCases = () => {
  return (
    <section className='py-10 px-6'>
      <div className='container mx-auto'>
        <AnimateIn className='text-center flex flex-col items-center gap-4'>
          <p className='text-primary font-bold'>SOL-LIME Use Cases</p>
          <h1 className='text-foreground text-3xl md:text-4xl font-bold'>Navigate Web3 Easier and Faster, The Future of AI in Blockchain is Here</h1>
        </AnimateIn>

        <MotionContainer viewport={{ once: true, amount: 0.1 }} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-15' staggerChildren={0.1}>
          {useCasesContent.map((item) => (
            <motion.div key={item.title} className='flex flex-col justify-between gap-4 h-full text-center' variants={fadeInUp} transition={springs.soft}>
              <motion.div className='w-14 h-14 text-primary mx-auto' whileHover={{ rotate: 15, scale: 1.2 }} transition={springs.bouncy}>
                {item.icon}
              </motion.div>
              <h5 className='text-xl font-bold'>{item.title}</h5>
              <p className='mb-0 text-gray-400 text-sm'>{item.description}</p>
              <motion.div whileHover={{ x: 5 }} transition={springs.soft}>
                <Link href={item.link.href} className='flex items-center justify-center gap-2 text-gray-500 text-sm font-bold'>
                  <span>{item.link.text}</span>
                  <motion.span whileHover={{ x: 3 }} transition={springs.bouncy}>
                    <BsArrowUpRight className='scale-75' />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </MotionContainer>
      </div>
    </section>
  );
};

export default UseCases;
