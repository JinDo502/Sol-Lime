import FAQ from '@/components/FeaturesComponents/FAQ';
import UseCases from '@/components/FeaturesComponents/UseCases';
import CTA from '@/components/HomeComponents/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SOL-Lime Features - AI-Powered Web3 Social Experience',
  description: 'Explore the innovative features of SOL-Lime, including AI-powered interactions, decentralized social networking, and blockchain rewards on the Solana network.',
  keywords: 'SOL-Lime features, AI social features, Web3 social app, blockchain social network, Solana dApp features',
  alternates: { canonical: 'https://solime.xyz/features' },
  openGraph: {
    title: 'SOL-Lime Features - AI-Powered Web3 Social Experience',
    description: 'Explore the innovative features of SOL-Lime, including AI-powered interactions, decentralized social networking, and blockchain rewards on the Solana network.',
    url: 'https://solime.xyz/features',
    siteName: 'SOL-Lime',
    images: [{ url: 'https://solime.xyz/screen-1.jpg', width: 1200, height: 630, alt: 'SOL-Lime - Web3.0 AI Social App' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOL-Lime Features - AI-Powered Web3 Social Experience',
    description: 'Explore the innovative features of SOL-Lime, including AI-powered interactions, decentralized social networking, and blockchain rewards on the Solana network.',
    images: ['https://solime.xyz/screen-1.jpg'],
    creator: '@solime',
  },
};

export default function Features() {
  return (
    <div className='w-screen'>
      <UseCases />
      <FAQ />
      <CTA />
    </div>
  );
}
