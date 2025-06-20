'use client';

import { BsArrowUpRight, BsCash, BsController, BsEmojiKiss, BsPalette, BsPersonHearts, BsRobot } from 'react-icons/bs';
// import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8, Icon9, Icon10, Icon11, Icon12 } from './Icon';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimateIn, springs, fadeInUp, useScrollAnimation } from '@/animations';

// const useCasesContent = [
//   {
//     title: 'Token Transfers',
//     description: <>Execute token transfers with SOLIME , ensuring a secure and straightforward experience. No need for complex blockchain commands.</>,
//     icon: <Icon1 />,
//     link: { text: 'Try Token Transfers', href: '#' },
//   },
//   {
//     title: 'Querying Token Information',
//     description: <>An intuitive tool to obtain essential information about different tokens. Understand your digital assets better.</>,
//     icon: <Icon2 />,
//     link: { text: 'Try Querying Token Information', href: '#' },
//   },
//   {
//     title: 'Transaction History',
//     description: <>Track your blockchain transactions seamlessly with SOLIME . Get a clear, chronological account of your activities.</>,
//     icon: <Icon3 />,
//     link: { text: 'Try Transaction History', href: '#' },
//   },
//   {
//     title: 'Token Swapping',
//     description: <>Swap one type of token for another effortlessly with SOLIME . Diversify your portfolio and seize market opportunities.</>,
//     icon: <Icon4 />,
//     link: { text: 'Try Token Swapping', href: '#' },
//   },
//   {
//     title: 'Freezing and Unfreezing Tokens',
//     description: <>Control your digital assets by making your tokens non-transferrable or transferrable again with SOLIME .</>,
//     icon: <Icon5 />,
//     link: { text: 'Try Freezing and Unfreezing', href: '#' },
//   },
//   {
//     title: 'Borrowing Tokens',
//     description: <>Leverage your existing assets to borrow tokens with SOLIME . Simplify your loan process on DeFi platforms.</>,
//     icon: <Icon6 />,
//     link: { text: 'Try Borrowing Tokens', href: '#' },
//   },
//   {
//     title: 'Security Checks',
//     description: <>Protect your digital assets with SOLIME &apos;s security checks. Stay safe from potential risks in the blockchain environment.</>,
//     icon: <Icon7 />,
//     link: { text: 'Try Security Checks', href: '#' },
//   },
//   {
//     title: 'Market Trends and News Updates',
//     description: <>Stay updated with the latest market trends and news in the blockchain and cryptocurrency world with SOLIME .</>,
//     icon: <Icon8 />,
//     link: { text: 'Try Market Trends', href: '#' },
//   },
//   {
//     title: 'Risk Warnings',
//     description: <>Enhance your awareness of blockchain risks with SOLIME . Get alerts for potential risks in your transactions and activities.</>,
//     icon: <Icon9 />,
//     link: { text: 'Try Risk Warnings', href: '#' },
//   },
//   {
//     title: 'Real-time Messaging',
//     description: <>Engage in real-time conversations with SOLIME &apos;s social feature. Communicate with other users instantly and efficiently.</>,
//     icon: <Icon10 />,
//     link: { text: 'Try Real-time Messaging', href: '#' },
//   },
//   {
//     title: 'AI Bot Interactions',
//     description: <>Interact with SOLIME &apos;s advanced AI bot for streamlined and intuitive web3 operations. Make your blockchain experience seamless.</>,
//     icon: <Icon11 />,
//     link: { text: 'Try AI Bot Interactions', href: '#' },
//   },
//   {
//     title: 'Navigating Web3 Ecosystem',
//     description: <>Navigate the web3 ecosystem effortlessly with SOLIME , irrespective of your technical background. Experience the democratization of access to web3.</>,
//     icon: <Icon12 />,
//     link: { text: 'Try Navigating Web3', href: '#' },
//   },
// ];

const useCasesContent = [
  {
    title: 'Meme Creation Tool',
    description: <>AI-powered meme generator supporting various templates and custom creations, enabling every user to become a meme artist</>,
    icon: <BsEmojiKiss />,
    link: { text: 'Try', href: '#' },
  },
  {
    title: 'Social Interaction System',
    description: <>Meme culture-based social network supporting group chats, private messaging, community building, and content sharing</>,
    icon: <BsPersonHearts />,
    link: { text: 'Try', href: '#' },
  },
  {
    title: 'Play-to-Earn Games',
    description: <>Diverse game modes including meme battles, creativity contests, social mining, and more, with SLC rewards for players</>,
    icon: <BsController />,
    link: { text: 'Try', href: '#' },
  },
  {
    title: 'NFT Integration',
    description: <>Quality memes can be minted as NFTs with one click, supporting trading, collecting, and displaying, with royalty income for creators</>,
    icon: <BsPalette />,
    link: { text: 'Try', href: '#' },
  },
  {
    title: 'AI Smart Assistant',
    description: <>ChatGPT-integrated AI assistant helping users with content creation, market analysis, and social interactions</>,
    icon: <BsRobot />,
    link: { text: 'Try', href: '#' },
  },
  {
    title: 'DeFi Staking Mining',
    description: <>Earn yields by staking SLC tokens, participate in liquidity mining, and enjoy platform revenue sharing</>,
    icon: <BsCash />,
    link: { text: 'Try', href: '#' },
  },
];

const UseCases = () => {
  const [ref, controls] = useScrollAnimation({ threshold: 0.01 });

  return (
    <section className='py-10 px-6' ref={ref}>
      <div className='container mx-auto'>
        <AnimateIn className='text-center flex flex-col items-center gap-4'>
          <p className='text-primary font-bold'>SOLIME Use Cases</p>
          <h1 className='text-foreground text-3xl md:text-4xl font-bold'>Streamline Your Web3 Experience, The Future of AI Blockchain Tools is Here</h1>
        </AnimateIn>

        <motion.div
          className='grid grid-cols-1 gap-10 py-15 md:grid-cols-2 lg:grid-cols-4'
          initial='hidden'
          animate={controls}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {useCasesContent.map((item) => {
            return (
              <motion.div
                className='flex flex-col items-start gap-4 h-full text-start p-6 rounded-xl border border-divider'
                key={item.title}
                variants={fadeInUp}
                whileHover={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)', borderColor: 'var(--color-primary)' }}
                transition={springs.soft}
              >
                <motion.div
                  className='w-14 h-14 text-primary flex items-center justify-center rounded-2xl p-2 border border-divider bg-gradient-to-l from-card-bg/90 to-card-bg/50'
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={springs.bouncy}
                >
                  {item.icon}
                </motion.div>
                <h5 className='text-xl font-bold'>{item.title}</h5>
                <p className='m-0 text-gray-400 text-sm'>{item.description}</p>
                <motion.div className='flex-1 flex items-end' whileHover={{ x: 5 }} transition={springs.soft}>
                  <Link href={item.link.href} className='flex items-center justify-center gap-2 text-primary text-sm font-bold'>
                    <span>{item.link.text}</span>
                    <motion.div whileHover={{ x: 3 }} transition={springs.bouncy}>
                      <BsArrowUpRight className='scale-75' />
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;
