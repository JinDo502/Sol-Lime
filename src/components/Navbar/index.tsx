'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

import ThemeModeButton from '../ThemeModeButton';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Features', href: '/features' },
  { label: 'Tokenomics', href: '/tokenomics' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'How To Use', href: '/how-to-use' },
  { label: 'Contact', href: '/contact' },
  { label: 'Join Now', href: '#' },
];

const Navbar = () => {
  return (
    <nav className='sticky top-0 left-0 right-0 z-50 bg-background'>
      <div className='container mx-auto py-4 flex justify-between items-center relative'>
        <div>
          <Link href='/' className='flex items-center h-8'>
            <Image src='/images/logo.png' alt='SOL-Lime-Logo' className='h-full object-contain aspect-square' height={50} width={50} />
            <h1 className='text-xl lg:text-3xl font-bold'>SOL-Lime</h1>
          </Link>
        </div>
        <div className='flex items-center gap-4'>
          <button className='text-2xl lg:hidden'>
            <AiOutlineMenu />
          </button>
          <div className='hidden lg:flex lg:items-center lg:flex-row'>
            {navItems.map((item) => (
              <div key={item.label} className='lg:ml-4'>
                <Link className={`inline-block hover:text-primary w-max ${item.label === 'Join Now' ? 'border border-primary rounded-xl px-4 py-2' : ''}`} href={item.href}>
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
          <div className='flex items-center gap-2'>
            <ThemeModeButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
