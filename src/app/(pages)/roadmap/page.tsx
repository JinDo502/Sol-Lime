import CTA from '@/components/HomeComponents/CTA';
import FAQ from '@/components/HomeComponents/FAQ';
import Pricing from '@/components/RoadmapComponents/Pricing';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SOLIME Roadmap - Future Development Plans',
  description: 'Discover the SOLIME development roadmap, upcoming features, token launch plans, and the future vision for our Web3.0 AI social platform on Solana.',
  keywords: 'SOLIME roadmap, development timeline, future features, token launch, Web3 social roadmap, Solana dApp development',
  alternates: { canonical: 'https://solime.xyz/roadmap' },
  openGraph: {
    title: 'SOLIME Roadmap - Future Development Plans',
    description: 'Discover the SOLIME development roadmap, upcoming features, token launch plans, and the future vision for our Web3.0 AI social platform on Solana.',
    url: 'https://solime.xyz/roadmap',
    siteName: 'SOLIME',
    images: [{ url: 'https://solime.xyz/images/screens/chat_dark.jpg', width: 1200, height: 630, alt: 'SOLIME - Web3.0 AI Social App' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOLIME Roadmap - Future Development Plans',
    description: 'Discover the SOLIME development roadmap, upcoming features, token launch plans, and the future vision for our Web3.0 AI social platform on Solana.',
    images: ['https://solime.xyz/images/screens/chat_dark.jpg'],
    creator: '@SOLIME',
  },
};

export default function Roadmap() {
  return (
    <div className='w-screen'>
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
}
