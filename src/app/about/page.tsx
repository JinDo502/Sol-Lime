import CTA from '@/components/HomeComponents/CTA';
import AboutComponent from '@/components/AboutComponents/About';
import Features from '@/components/AboutComponents/Features';
import Team from '@/components/AboutComponents/Team';
import Reviews from '@/components/AboutComponents/Reviews';
import Brands from '@/components/AboutComponents/Brands';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About SOL-Lime - Our Mission and Team',
  description: 'Learn about SOL-Lime, our mission to revolutionize social interactions with AI on the blockchain, and meet the team behind this innovative Web3.0 project.',
  keywords: 'SOL-Lime, about us, team, mission, vision, Web3.0, blockchain, AI social app',
  alternates: { canonical: 'https://solime.xyz/about' },
  openGraph: {
    title: 'About SOL-Lime - Our Mission and Team',
    description: 'Learn about SOL-Lime, our mission to revolutionize social interactions with AI on the blockchain, and meet the team behind this innovative Web3.0 project.',
    url: 'https://solime.xyz/about',
    siteName: 'SOL-Lime',
    images: [{ url: 'https://solime.xyz/screen-1.jpg', width: 1200, height: 630, alt: 'SOL-Lime - Web3.0 AI Social App' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About SOL-Lime - Our Mission and Team',
    description: 'Learn about SOL-Lime, our mission to revolutionize social interactions with AI on the blockchain, and meet the team behind this innovative Web3.0 project.',
    images: ['https://solime.xyz/screen-1.jpg'],
    creator: '@solime',
  },
};

export default function About() {
  return (
    <div className='w-screen'>
      <AboutComponent />
      <Features />
      <Team />
      <Reviews />
      <Brands />
      <CTA />
    </div>
  );
}
