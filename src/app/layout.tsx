import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import './critical.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider';

// 优化字体加载
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'Arial', 'sans-serif'],
  adjustFontFallback: true,
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'Arial', 'sans-serif'],
  adjustFontFallback: true,
});

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
      <head>
        {/* 预加载关键资源 */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link rel='preload' as='image' href='/images/logo.png' />

        {/* 预加载关键路由 */}
        <link rel='prefetch' href='/about' />
        <link rel='prefetch' href='/features' />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} antialiased fade-in`}>
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem disableTransitionOnChange>
          <Navbar />
          <main className='min-h-screen'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
