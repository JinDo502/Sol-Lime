'use client';

import { BsArrowUpRight } from 'react-icons/bs';
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8, Icon9, Icon10, Icon11, Icon12 } from './Icon';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '@/components/animations';

const useCasesContent = [
  {
    title: 'Token Transfers',
    description: <>Execute token transfers with SOL-CHAT, ensuring a secure and straightforward experience. No need for complex blockchain commands.</>,
    icon: <Icon1 />,
    link: { text: 'Try Token Transfers', href: '#' },
  },
  {
    title: 'Querying Token Information',
    description: <>An intuitive tool to obtain essential information about different tokens. Understand your digital assets better.</>,
    icon: <Icon2 />,
    link: { text: 'Try Querying Token Information', href: '#' },
  },
  {
    title: 'Transaction History',
    description: <>Track your blockchain transactions seamlessly with SOL-CHAT. Get a clear, chronological account of your activities.</>,
    icon: <Icon3 />,
    link: { text: 'Try Transaction History', href: '#' },
  },
  {
    title: 'Token Swapping',
    description: <>Swap one type of token for another effortlessly with SOL-CHAT. Diversify your portfolio and seize market opportunities.</>,
    icon: <Icon4 />,
    link: { text: 'Try Token Swapping', href: '#' },
  },
  {
    title: 'Freezing and Unfreezing Tokens',
    description: <>Control your digital assets by making your tokens non-transferrable or transferrable again with SOL-CHAT.</>,
    icon: <Icon5 />,
    link: { text: 'Try Freezing and Unfreezing', href: '#' },
  },
  {
    title: 'Borrowing Tokens',
    description: <>Leverage your existing assets to borrow tokens with SOL-CHAT. Simplify your loan process on DeFi platforms.</>,
    icon: <Icon6 />,
    link: { text: 'Try Borrowing Tokens', href: '#' },
  },
  {
    title: 'Security Checks',
    description: <>Protect your digital assets with SOL-CHAT&apos;s security checks. Stay safe from potential risks in the blockchain environment.</>,
    icon: <Icon7 />,
    link: { text: 'Try Security Checks', href: '#' },
  },
  {
    title: 'Market Trends and News Updates',
    description: <>Stay updated with the latest market trends and news in the blockchain and cryptocurrency world with SOL-CHAT.</>,
    icon: <Icon8 />,
    link: { text: 'Try Market Trends', href: '#' },
  },
  {
    title: 'Risk Warnings',
    description: <>Enhance your awareness of blockchain risks with SOL-CHAT. Get alerts for potential risks in your transactions and activities.</>,
    icon: <Icon9 />,
    link: { text: 'Try Risk Warnings', href: '#' },
  },
  {
    title: 'Real-time Messaging',
    description: <>Engage in real-time conversations with SOL-CHAT&apos;s social feature. Communicate with other users instantly and efficiently.</>,
    icon: <Icon10 />,
    link: { text: 'Try Real-time Messaging', href: '#' },
  },
  {
    title: 'AI Bot Interactions',
    description: <>Interact with SOL-CHAT&apos;s advanced AI bot for streamlined and intuitive web3 operations. Make your blockchain experience seamless.</>,
    icon: <Icon11 />,
    link: { text: 'Try AI Bot Interactions', href: '#' },
  },
  {
    title: 'Navigating Web3 Ecosystem',
    description: <>Navigate the web3 ecosystem effortlessly with SOL-CHAT, irrespective of your technical background. Experience the democratization of access to web3.</>,
    icon: <Icon12 />,
    link: { text: 'Try Navigating Web3', href: '#' },
  },
];

const UseCases = () => {
  return (
    <section className='pt-10 px-8 md:px-0'>
      <div className='container mx-auto'>
        <StaggerContainer className='text-center flex flex-col items-center gap-4' staggerChildren={0.2}>
          <StaggerItem>
            <motion.p className='text-[var(--primary)] font-bold' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              SOL-CHAT Use Cases
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

        <AnimateOnScroll animation='fadeIn' className='grid grid-cols-1 gap-10 py-15 md:grid-cols-2 lg:grid-cols-4'>
          {useCasesContent.map((item, index) => {
            return (
              <motion.div
                className='flex flex-col items-start gap-4 h-full text-start p-6 rounded-xl border border-[var(--divider)] hover:border-[var(--primary)] transition-all duration-300'
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index % 4) }}
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
                  {item.icon}
                </motion.div>
                <h5 className='text-xl font-bold'>{item.title}</h5>
                <p className='m-0 text-gray-400 text-sm'>{item.description}</p>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href={item.link.href} className='flex items-center justify-center gap-2 text-[var(--primary)] text-sm font-bold'>
                    <span>{item.link.text}</span>
                    <motion.div whileHover={{ rotate: 45 }} transition={{ duration: 0.2 }}>
                      <BsArrowUpRight className='scale-75' />
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default UseCases;
