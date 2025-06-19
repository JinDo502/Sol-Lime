import CTA from '@/components/HomeComponents/CTA';
import FAQ from '@/components/HomeComponents/FAQ';
import Pricing from '@/components/RoadmapComponents/Pricing';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SOL-Lime Roadmap - Future Development Plans',
  description: 'Discover the SOL-Lime development roadmap, upcoming features, token launch plans, and the future vision for our Web3.0 AI social platform on Solana.',
  keywords: 'SOL-Lime roadmap, development timeline, future features, token launch, Web3 social roadmap, Solana dApp development',
  alternates: { canonical: 'https://solime.xyz/roadmap' },
  openGraph: {
    title: 'SOL-Lime Roadmap - Future Development Plans',
    description: 'Discover the SOL-Lime development roadmap, upcoming features, token launch plans, and the future vision for our Web3.0 AI social platform on Solana.',
    url: 'https://solime.xyz/roadmap',
    siteName: 'SOL-Lime',
    images: [{ url: 'https://solime.xyz/screen-1.jpg', width: 1200, height: 630, alt: 'SOL-Lime - Web3.0 AI Social App' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOL-Lime Roadmap - Future Development Plans',
    description: 'Discover the SOL-Lime development roadmap, upcoming features, token launch plans, and the future vision for our Web3.0 AI social platform on Solana.',
    images: ['https://solime.xyz/screen-1.jpg'],
    creator: '@solime',
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
