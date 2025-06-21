import FAQ from '@/components/FeaturesComponents/FAQ';
import UseCases from '@/components/FeaturesComponents/UseCases';
import CTA from '@/components/HomeComponents/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SOLIME Features - AI-Powered Web3 Social Experience',
  description: 'Explore the innovative features of SOLIME, including AI-powered interactions, decentralized social networking, and blockchain rewards on the Solana network.',
  keywords: 'SOLIME features, AI social features, Web3 social app, blockchain social network, Solana dApp features',
  alternates: { canonical: 'https://solime.xyz/features' },
  openGraph: {
    title: 'SOLIME Features - AI-Powered Web3 Social Experience',
    description: 'Explore the innovative features of SOLIME, including AI-powered interactions, decentralized social networking, and blockchain rewards on the Solana network.',
    url: 'https://solime.xyz/features',
    siteName: 'SOLIME',
    images: [{ url: 'https://solime.xyz/images/screen-1.jpg', width: 1200, height: 630, alt: 'SOLIME - Web3.0 AI Social App' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOLIME Features - AI-Powered Web3 Social Experience',
    description: 'Explore the innovative features of SOLIME, including AI-powered interactions, decentralized social networking, and blockchain rewards on the Solana network.',
    images: ['https://solime.xyz/images/screen-1.jpg'],
    creator: '@SOLIME',
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
