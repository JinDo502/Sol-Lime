import Reviews from '@/components/AboutComponents/Reviews';
import CTA from '@/components/HomeComponents/CTA';
import UseCaseDetails from '@/components/HowToUseComponents/UseCaseDetails';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Use SOL-Lime - User Guide & Tutorials',
  description: 'Learn how to use SOL-Lime with our comprehensive guides and tutorials. Get started with our Web3.0 AI social platform on Solana blockchain.',
  keywords: 'SOL-Lime tutorial, how to use SOL-Lime, Web3 social app guide, Solana dApp tutorial, AI social platform guide',
  alternates: { canonical: 'https://solime.xyz/how-to-use' },
  openGraph: {
    title: 'How to Use SOL-Lime - User Guide & Tutorials',
    description: 'Learn how to use SOL-Lime with our comprehensive guides and tutorials. Get started with our Web3.0 AI social platform on Solana blockchain.',
    url: 'https://solime.xyz/how-to-use',
    siteName: 'SOL-Lime',
    images: [{ url: 'https://solime.xyz/screen-1.jpg', width: 1200, height: 630, alt: 'SOL-Lime - Web3.0 AI Social App' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Use SOL-Lime - User Guide & Tutorials',
    description: 'Learn how to use SOL-Lime with our comprehensive guides and tutorials. Get started with our Web3.0 AI social platform on Solana blockchain.',
    images: ['https://solime.xyz/screen-1.jpg'],
    creator: '@solime',
  },
};

export default function HowToUse() {
  return (
    <div className='w-screen'>
      <UseCaseDetails />
      <Reviews />
      <CTA />
    </div>
  );
}
