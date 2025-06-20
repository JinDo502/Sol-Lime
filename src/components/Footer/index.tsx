'use client';

import Image from 'next/image';
import Link from 'next/link';

import { BsDiscord, BsGithub, BsInstagram, BsSend, BsTelegram, BsTwitter } from 'react-icons/bs';
import { useState, useEffect } from 'react';

const footerLinks = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Features',
    href: '/features',
  },
  {
    label: 'Roadmap',
    href: '/roadmap',
  },
  {
    label: 'How To Use',
    href: '/how-to-use',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

const footerDocuments = [
  {
    label: 'Cookies Policy',
    href: '#',
  },
  {
    label: 'Terms Of Use',
    href: '#',
  },
  {
    label: 'Privacy Notice',
    href: '#',
  },
  {
    label: 'Whitepaper',
    href: '#',
  },
];

const socialLinks = [
  {
    label: 'Github',
    href: '#',
    icon: <BsGithub />,
  },
  {
    label: 'Discord',
    href: '#',
    icon: <BsDiscord />,
  },
  {
    label: 'Telegram',
    href: '#',
    icon: <BsTelegram />,
  },
  {
    label: 'Twitter',
    href: '#',
    icon: <BsTwitter />,
  },
  {
    label: 'Instagram',
    href: '#',
    icon: <BsInstagram />,
  },
];

const footerBeforeClass = `before:no-repeat before:bg-cover before:bg-center before:z-[-1] before:blur-[100px] before:absolute before:inset-0 before:block before:w-full before:h-full before:bg-[url(/images/shapes/stripe-colored.svg)]`;

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 服务端渲染或未挂载时的静态版本
  if (!isMounted) {
    return (
      <footer className={`pt-10 pb-8 relative ${footerBeforeClass}`}>
        <div className={`container mx-auto px-6 flex flex-col gap-10`}>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
            {/* 静态内容，与动画版本相同但没有动画效果 */}
            <div className='text-center '>
              <h6 className='mb-2 font-bold'>SOL-LIME </h6>
              <div className='flex flex-col gap-2 text-sm text-gray-400'>
                {footerLinks.map((link) => (
                  <Link key={link.label} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className='text-center '>
              <h6 className='mb-2 font-bold'>Documents</h6>
              <div className='flex flex-col gap-2 text-sm text-gray-400'>
                {footerDocuments.map((document) => (
                  <Link key={document.label} href={document.href}>
                    {document.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className='text-center'>
              <h6 className='mb-4 font-bold'>News & Update</h6>
              <form action='#'>
                <div className='flex items-stretch w-full'>
                  <input type='email' className='flex-1 w-full border border-r-0 border-[var(--divider)] rounded-s-md p-2' placeholder='Your email' />
                  <div dir='rtl' className='bg-[var(--primary)] rounded-s-md px-4 flex items-center justify-center'>
                    <BsSend className='text-[var(--background)]' />
                  </div>
                </div>
              </form>
              <div className='flex flex-wrap justify-center gap-4 mt-10 md:mt-6'>
                {socialLinks.map((link) => (
                  <Link key={link.label} href={link.href}>
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>

            <div className='text-center flex flex-col gap-2 items-center'>
              <Link href='/' className='flex items-center gap-2'>
                <Image src='/images/logo.png' alt='SOL-Lime-Logo' className='img-fluid' height='30' width='30' />
                <h1 className='text-xl md:text-2xl font-bold'>SOL-Lime</h1>
              </Link>
              <div className='text-sm text-gray-400'>Experience the power of AI in navigating web3. Streamline your digital asset interactions with SOL-LIME .</div>
            </div>
          </div>

          <div className='text-sm text-gray-400 text-center'>
            Copyright <span className='text-[var(--primary)]'>SOL-LIME </span>.
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className={`pt-10 pb-8 relative ${footerBeforeClass}`}>
      <div className={`container mx-auto px-6 flex flex-col gap-10`}>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
          <div className='text-center'>
            <h6 className='mb-2 font-bold'>SOL-LIME </h6>
            <div className='flex flex-col gap-2 text-sm text-gray-400'>
              {footerLinks.map((link) => (
                <div key={link.label}>
                  <Link href={link.href} className='hover:text-[var(--primary)]  duration-300'>
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className='text-center'>
            <h6 className='mb-2 font-bold'>Documents</h6>
            <div className='flex flex-col gap-2 text-sm text-gray-400'>
              {footerDocuments.map((document) => (
                <div key={document.label}>
                  <Link href={document.href} className='hover:text-[var(--primary)]  duration-300'>
                    {document.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className='text-center'>
            <h6 className='mb-4 font-bold'>News & Update</h6>
            <form action='#'>
              <div className='flex items-stretch w-full'>
                <input type='email' className='flex-1 w-full border border-r-0 border-[var(--divider)] rounded-s-md p-2' placeholder='Your email' />
                <div dir='rtl' className='bg-[var(--primary)] rounded-s-md px-4 flex items-center justify-center cursor-pointer'>
                  <BsSend className='text-[var(--background)]' />
                </div>
              </div>
            </form>
            <div className='flex flex-wrap justify-center gap-4 mt-10 md:mt-6'>
              {socialLinks.map((link) => (
                <div key={link.label} className='text-gray-400 hover:text-[var(--primary)]  duration-300'>
                  <Link href={link.href}>{link.icon}</Link>
                </div>
              ))}
            </div>
          </div>

          <div className='text-center flex flex-col gap-2 items-center'>
            <Link href='/' className='flex items-center gap-2'>
              <div>
                <Image src='/images/logo.png' alt='SOL-Lime-Logo' className='img-fluid' height='30' width='30' />
              </div>
              <h1 className='text-xl md:text-2xl font-bold'>SOL-Lime</h1>
            </Link>
            <div className='text-sm text-gray-400'>Experience the power of AI in navigating web3. Streamline your digital asset interactions with SOL-LIME .</div>
          </div>
        </div>

        <div className='text-sm text-gray-400 text-center'>
          Copyright <span className='text-[var(--primary)]'>SOL-LIME </span>.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
