'use client';

import { BsArrowUpRight } from 'react-icons/bs';
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8, Icon9, Icon10, Icon11, Icon12 } from './Icon';
import Link from 'next/link';

const useCasesContent = [
  {
    title: 'Token Transfers',
    description: <>Execute token transfers with SOL-LIME , ensuring a secure and straightforward experience. No need for complex blockchain commands.</>,
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
    description: <>Track your blockchain transactions seamlessly with SOL-LIME . Get a clear, chronological account of your activities.</>,
    icon: <Icon3 />,
    link: { text: 'Try Transaction History', href: '#' },
  },
  {
    title: 'Token Swapping',
    description: <>Swap one type of token for another effortlessly with SOL-LIME . Diversify your portfolio and seize market opportunities.</>,
    icon: <Icon4 />,
    link: { text: 'Try Token Swapping', href: '#' },
  },
  {
    title: 'Freezing and Unfreezing Tokens',
    description: <>Control your digital assets by making your tokens non-transferrable or transferrable again with SOL-LIME .</>,
    icon: <Icon5 />,
    link: { text: 'Try Freezing and Unfreezing', href: '#' },
  },
  {
    title: 'Borrowing Tokens',
    description: <>Leverage your existing assets to borrow tokens with SOL-LIME . Simplify your loan process on DeFi platforms.</>,
    icon: <Icon6 />,
    link: { text: 'Try Borrowing Tokens', href: '#' },
  },
  {
    title: 'Security Checks',
    description: <>Protect your digital assets with SOL-LIME &apos;s security checks. Stay safe from potential risks in the blockchain environment.</>,
    icon: <Icon7 />,
    link: { text: 'Try Security Checks', href: '#' },
  },
  {
    title: 'Market Trends and News Updates',
    description: <>Stay updated with the latest market trends and news in the blockchain and cryptocurrency world with SOL-LIME .</>,
    icon: <Icon8 />,
    link: { text: 'Try Market Trends', href: '#' },
  },
  {
    title: 'Risk Warnings',
    description: <>Enhance your awareness of blockchain risks with SOL-LIME . Get alerts for potential risks in your transactions and activities.</>,
    icon: <Icon9 />,
    link: { text: 'Try Risk Warnings', href: '#' },
  },
  {
    title: 'Real-time Messaging',
    description: <>Engage in real-time conversations with SOL-LIME &apos;s social feature. Communicate with other users instantly and efficiently.</>,
    icon: <Icon10 />,
    link: { text: 'Try Real-time Messaging', href: '#' },
  },
  {
    title: 'AI Bot Interactions',
    description: <>Interact with SOL-LIME &apos;s advanced AI bot for streamlined and intuitive web3 operations. Make your blockchain experience seamless.</>,
    icon: <Icon11 />,
    link: { text: 'Try AI Bot Interactions', href: '#' },
  },
  {
    title: 'Navigating Web3 Ecosystem',
    description: <>Navigate the web3 ecosystem effortlessly with SOL-LIME , irrespective of your technical background. Experience the democratization of access to web3.</>,
    icon: <Icon12 />,
    link: { text: 'Try Navigating Web3', href: '#' },
  },
];

const UseCases = () => {
  return (
    <section className='pt-10 px-8 md:px-0'>
      <div className='container mx-auto'>
        <div className='text-center flex flex-col items-center gap-4'>
          <p className='text-primary font-bold'>SOL-LIME Use Cases</p>
          <h1 className='text-foreground text-3xl md:text-4xl font-bold'>Streamline Your Web3 Experience, The Future of AI Blockchain Tools is Here</h1>
        </div>

        <div className='grid grid-cols-1 gap-10 py-15 md:grid-cols-2 lg:grid-cols-4'>
          {useCasesContent.map((item) => {
            return (
              <div className='flex flex-col items-start gap-4 h-full text-start p-6 rounded-xl border border-divider hover:border-primary  duration-300' key={item.title}>
                <div className='w-14 h-14 text-primary flex items-center justify-center rounded-2xl p-2 border border-divider bg-gradient-to-l from-card-bg/90 to-card-bg/50'>
                  {item.icon}
                </div>
                <h5 className='text-xl font-bold'>{item.title}</h5>
                <p className='m-0 text-gray-400 text-sm'>{item.description}</p>
                <div>
                  <Link href={item.link.href} className='flex items-center justify-center gap-2 text-primary text-sm font-bold'>
                    <span>{item.link.text}</span>
                    <div>
                      <BsArrowUpRight className='scale-75' />
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
