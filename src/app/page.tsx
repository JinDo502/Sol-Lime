import Hero from '@/components/HomeComponents/Hero';
import Features from '@/components/HomeComponents/Features';
import UseCases from '@/components/HomeComponents/UseCases';
import AppUsers from '@/components/HomeComponents/AppUsers';
import Reviews from '@/components/HomeComponents/Reviews';
import Pricing from '@/components/RoadmapComponents/Pricing';
import FAQ from '@/components/HomeComponents/FAQ';
import CTA from '@/components/HomeComponents/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SOL-Lime - Web3.0 AI Social App',
  description: 'SOL-Lime is a revolutionary Web3.0 AI social application that brings AI capabilities to social interactions on the Solana blockchain.',
  keywords: 'SOL-Lime, Web3.0, AI, Social App, Solana, blockchain, crypto',
  alternates: { canonical: 'https://solime.xyz' },
  openGraph: {
    title: 'SOL-Lime - Web3.0 AI Social App',
    description: 'SOL-Lime is a revolutionary Web3.0 AI social application that brings AI capabilities to social interactions on the Solana blockchain.',
    url: 'https://solime.xyz',
    siteName: 'SOL-Lime',
    images: [{ url: 'https://solime.xyz/screen-1.jpg', width: 1200, height: 630, alt: 'SOL-Lime - Web3.0 AI Social App' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOL-Lime - Web3.0 AI Social App',
    description: 'SOL-Lime is a revolutionary Web3.0 AI social application that brings AI capabilities to social interactions on the Solana blockchain.',
    images: ['https://solime.xyz/screen-1.jpg'],
    creator: '@solime',
  },
};

export default function Home() {
  return (
    <div className='w-screen'>
      <Hero />
      <Features />
      <UseCases />
      <AppUsers />
      <Reviews />
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
}
