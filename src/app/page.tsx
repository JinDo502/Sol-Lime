import dynamic from 'next/dynamic';
import Hero from '@/components/HomeComponents/Hero';
import type { Metadata } from 'next';

// 懒加载非首屏组件
const Features = dynamic(() => import('@/components/HomeComponents/Features'), {
  loading: () => <div className='min-h-[300px] animate-pulse bg-gray-100 rounded-md' />,
  ssr: true,
});

const UseCases = dynamic(() => import('@/components/HomeComponents/UseCases'), {
  ssr: true,
});

const AppUsers = dynamic(() => import('@/components/HomeComponents/AppUsers'), {
  ssr: true,
});

const Reviews = dynamic(() => import('@/components/HomeComponents/Reviews'), {
  ssr: true,
});

const Pricing = dynamic(() => import('@/components/RoadmapComponents/Pricing'), {
  ssr: true,
});

const FAQ = dynamic(() => import('@/components/HomeComponents/FAQ'), {
  ssr: true,
});

const CTA = dynamic(() => import('@/components/HomeComponents/CTA'), {
  ssr: true,
});

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
