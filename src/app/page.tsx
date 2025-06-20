import Hero from '@/components/HomeComponents/Hero';
import Features from '@/components/HomeComponents/Features';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

// 动态导入非首屏组件
const UseCases = dynamic(() => import('@/components/HomeComponents/UseCases'), {
  loading: () => <div className='w-full h-[400px] flex items-center justify-center'>Loading...</div>,
  ssr: true,
});

const AppUsers = dynamic(() => import('@/components/HomeComponents/AppUsers'), {
  loading: () => <div className='w-full h-[300px] flex items-center justify-center'>Loading...</div>,
  ssr: true,
});

const Reviews = dynamic(() => import('@/components/HomeComponents/Reviews'), {
  loading: () => <div className='w-full h-[400px] flex items-center justify-center'>Loading...</div>,
  ssr: true,
});

const Pricing = dynamic(() => import('@/components/RoadmapComponents/Pricing'), {
  loading: () => <div className='w-full h-[500px] flex items-center justify-center'>Loading...</div>,
  ssr: true,
});

const FAQ = dynamic(() => import('@/components/HomeComponents/FAQ'), {
  loading: () => <div className='w-full h-[300px] flex items-center justify-center'>Loading...</div>,
  ssr: true,
});

const CTA = dynamic(() => import('@/components/HomeComponents/CTA'), {
  loading: () => <div className='w-full h-[200px] flex items-center justify-center'>Loading...</div>,
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

// 获取页面数据，启用 ISR
export async function generateStaticParams() {
  return [{}]; // 主页只有一个路径
}

// 设置页面重新验证时间
export const revalidate = 3600; // 每小时重新验证一次

export default function Home() {
  return (
    <div className='w-screen'>
      {/* 添加骨架屏占位符，提高感知性能 */}
      <div className='contents' id='page-content'>
        <Hero />
        <Features />
        <UseCases />
        <AppUsers />
        <Reviews />
        <Pricing />
        <FAQ />
        <CTA />
      </div>
    </div>
  );
}
