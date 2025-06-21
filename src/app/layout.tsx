import type { Metadata, Viewport } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { SolanaProvider } from '@/components/Solana/SolanaProvider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  title: 'SOLIME - Web3.0 AI Social App',
  description: 'An AI Social App As Good As ChatGPT - SOLIME is arrived.',
  keywords: 'SOLIME, Web3.0, AI, Social App, Solana, blockchain, crypto',
  applicationName: 'SOLIME',
  authors: [{ name: 'SOLIME Team' }],
  generator: 'Next.js',
  metadataBase: new URL('https://SOLIME.xyz'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'SOLIME - Web3.0 AI Social App',
    description: 'An AI Social App As Good As ChatGPT - SOLIME is arrived.',
    url: 'https://SOLIME.xyz',
    siteName: 'SOLIME',
    images: [{ url: 'https://solime.xyz/images/screen-1.jpg', width: 1200, height: 630, alt: 'SOLIME - Web3.0 AI Social App' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOLIME - Web3.0 AI Social App',
    description: 'An AI Social App As Good As ChatGPT - SOLIME is arrived.',
    images: ['https://solime.xyz/images/screen-1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: { google: 'verification_token' },
};

// 单独导出 viewport 配置
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem disableTransitionOnChange>
          <SolanaProvider>{children}</SolanaProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
