'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
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

// 动画变体
const footerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const columnVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const linkVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

const socialIconVariants: Variants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
  hover: { scale: 1.2, color: 'var(--primary)' },
};

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
              <h6 className='mb-2 font-bold'>SOL-CHAT</h6>
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
              <div className='text-sm text-gray-400'>Experience the power of AI in navigating web3. Streamline your digital asset interactions with SOL-CHAT.</div>
            </div>
          </div>

          <div className='text-sm text-gray-400 text-center'>
            Copyright <span className='text-[var(--primary)]'>SOL-CHAT</span>.
          </div>
        </div>
      </footer>
    );
  }

  return (
    <motion.footer className={`pt-10 pb-8 relative ${footerBeforeClass}`} initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.1 }} variants={footerVariants}>
      <div className={`container mx-auto px-6 flex flex-col gap-10`}>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
          <motion.div className='text-center' variants={columnVariants}>
            <h6 className='mb-2 font-bold'>SOL-CHAT</h6>
            <div className='flex flex-col gap-2 text-sm text-gray-400'>
              {footerLinks.map((link, index) => (
                <motion.div key={link.label} variants={linkVariants} custom={index}>
                  <Link href={link.href} className='hover:text-[var(--primary)] transition-colors duration-300'>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className='text-center' variants={columnVariants}>
            <h6 className='mb-2 font-bold'>Documents</h6>
            <div className='flex flex-col gap-2 text-sm text-gray-400'>
              {footerDocuments.map((document, index) => (
                <motion.div key={document.label} variants={linkVariants} custom={index}>
                  <Link href={document.href} className='hover:text-[var(--primary)] transition-colors duration-300'>
                    {document.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className='text-center' variants={columnVariants}>
            <h6 className='mb-4 font-bold'>News & Update</h6>
            <form action='#'>
              <motion.div className='flex items-stretch w-full' initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <input type='email' className='flex-1 w-full border border-r-0 border-[var(--divider)] rounded-s-md p-2' placeholder='Your email' />
                <motion.div
                  dir='rtl'
                  className='bg-[var(--primary)] rounded-s-md px-4 flex items-center justify-center cursor-pointer'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BsSend className='text-[var(--background)]' />
                </motion.div>
              </motion.div>
            </form>
            <div className='flex flex-wrap justify-center gap-4 mt-10 md:mt-6'>
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  variants={socialIconVariants}
                  custom={index}
                  whileHover='hover'
                  className='text-gray-400 hover:text-[var(--primary)] transition-colors duration-300'
                >
                  <Link href={link.href}>{link.icon}</Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className='text-center flex flex-col gap-2 items-center' variants={columnVariants}>
            <Link href='/' className='flex items-center gap-2'>
              <motion.div initial={{ rotate: 0 }} whileHover={{ rotate: 10 }} transition={{ duration: 0.2 }}>
                <Image src='/images/logo.png' alt='SOL-Lime-Logo' className='img-fluid' height='30' width='30' />
              </motion.div>
              <h1 className='text-xl md:text-2xl font-bold'>SOL-Lime</h1>
            </Link>
            <motion.div className='text-sm text-gray-400' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
              Experience the power of AI in navigating web3. Streamline your digital asset interactions with SOL-CHAT.
            </motion.div>
          </motion.div>
        </div>

        <motion.div className='text-sm text-gray-400 text-center' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}>
          Copyright <span className='text-[var(--primary)]'>SOL-CHAT</span>.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
