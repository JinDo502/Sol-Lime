import Hero from '@/components/TokenomicsComponents/Hero';
import Features from '@/components/TokenomicsComponents/Features';
import CTA from '@/components/HomeComponents/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SOLIME Tokenomics - Token Distribution & Utility',
  description: 'Understand SOLIME tokenomics, including token distribution, utility, staking rewards, governance, and how our token powers the Web3.0 AI social ecosystem.',
  keywords: 'SOLIME token, tokenomics, token distribution, token utility, Solana token, Web3 social token, crypto social platform',
  alternates: { canonical: 'https://solime.xyz/tokenomics' },
  openGraph: {
    title: 'SOLIME Tokenomics - Token Distribution & Utility',
    description: 'Understand SOLIME tokenomics, including token distribution, utility, staking rewards, governance, and how our token powers the Web3.0 AI social ecosystem.',
    url: 'https://solime.xyz/tokenomics',
    siteName: 'SOLIME',
    images: [{ url: 'https://solime.xyz/images/screens/chat_dark.jpg', width: 1200, height: 630, alt: 'SOLIME - Web3.0 AI Social App' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOLIME Tokenomics - Token Distribution & Utility',
    description: 'Understand SOLIME tokenomics, including token distribution, utility, staking rewards, governance, and how our token powers the Web3.0 AI social ecosystem.',
    images: ['https://solime.xyz/images/screens/chat_dark.jpg'],
    creator: '@SOLIME',
  },
};

export default function Tokenomics() {
  return (
    <div className='w-screen'>
      <Hero />
      <Features />
      <CTA />
    </div>
  );
}
