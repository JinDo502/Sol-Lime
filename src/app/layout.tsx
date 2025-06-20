import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });

const montserrat = Montserrat({ variable: '--font-montserrat', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SOL-Lime - Web3.0 AI Social App',
  description: 'An AI Social App As Good As ChatGPT - SOL-Lime is arrived.',
  keywords: 'SOL-Lime, Web3.0, AI, Social App, Solana, blockchain, crypto',
  applicationName: 'SOL-Lime',
  authors: [{ name: 'SOL-Lime Team' }],
  generator: 'Next.js',
  metadataBase: new URL('https://solime.xyz'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'SOL-Lime - Web3.0 AI Social App',
    description: 'An AI Social App As Good As ChatGPT - SOL-Lime is arrived.',
    url: 'https://solime.xyz',
    siteName: 'SOL-Lime',
    images: [{ url: 'https://solime.xyz/screen-1.jpg', width: 1200, height: 630, alt: 'SOL-Lime - Web3.0 AI Social App' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOL-Lime - Web3.0 AI Social App',
    description: 'An AI Social App As Good As ChatGPT - SOL-Lime is arrived.',
    images: ['https://solime.xyz/screen-1.jpg'],
  },
  viewport: { width: 'device-width', initialScale: 1 },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: { google: 'verification_token' },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
