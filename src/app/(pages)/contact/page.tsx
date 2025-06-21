import CTA from '@/components/HomeComponents/CTA';
import ContactContent from '@/components/ContactComponents/ContactContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact SOLIME - Get in Touch With Our Team',
  description: 'Contact the SOLIME team for partnership opportunities, technical support, or general inquiries about our Web3.0 AI social platform on Solana.',
  keywords: 'SOLIME contact, contact form, partnership, technical support, Web3 social app support, Solana dApp contact',
  alternates: { canonical: 'https://solime.xyz/contact' },
  openGraph: {
    title: 'Contact SOLIME - Get in Touch With Our Team',
    description: 'Contact the SOLIME team for partnership opportunities, technical support, or general inquiries about our Web3.0 AI social platform on Solana.',
    url: 'https://solime.xyz/contact',
    siteName: 'SOLIME',
    images: [{ url: 'https://solime.xyz/images/screens/chat_dark.jpg', width: 1200, height: 630, alt: 'SOLIME - Web3.0 AI Social App' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact SOLIME - Get in Touch With Our Team',
    description: 'Contact the SOLIME team for partnership opportunities, technical support, or general inquiries about our Web3.0 AI social platform on Solana.',
    images: ['https://solime.xyz/images/screens/chat_dark.jpg'],
    creator: '@SOLIME',
  },
};

export default function Contact() {
  return (
    <div className='w-screen'>
      <ContactContent />
      <CTA />
    </div>
  );
}
