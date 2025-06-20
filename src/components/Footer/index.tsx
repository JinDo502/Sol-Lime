'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BsDiscord, BsGithub, BsInstagram, BsSend, BsTelegram, BsTwitter } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { AnimateIn, MotionContainer, fadeInUp, springs, useScrollAnimation } from '@/animations';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Features', href: '/features' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'How To Use', href: '/how-to-use' },
  { label: 'Contact', href: '/contact' },
];

const footerDocuments = [
  { label: 'Cookies Policy', href: '#' },
  { label: 'Terms Of Use', href: '#' },
  { label: 'Privacy Notice', href: '#' },
  { label: 'Whitepaper', href: '#' },
];

const socialLinks = [
  { label: 'Github', href: '#', icon: <BsGithub /> },
  { label: 'Discord', href: '#', icon: <BsDiscord /> },
  { label: 'Telegram', href: '#', icon: <BsTelegram /> },
  { label: 'Twitter', href: '#', icon: <BsTwitter /> },
  { label: 'Instagram', href: '#', icon: <BsInstagram /> },
];

const footerBeforeClass = `before:no-repeat before:bg-cover before:bg-center before:z-[-1] before:blur-[100px] before:absolute before:inset-0 before:block before:w-full before:h-full before:bg-[url(/images/shapes/stripe-colored.svg)]`;

const Footer = () => {
  const [ref, controls] = useScrollAnimation();

  return (
    <footer className={`pt-10 pb-8 relative ${footerBeforeClass}`} ref={ref}>
      <motion.div className={`container mx-auto px-6 flex flex-col gap-10`} initial='hidden' animate={controls} variants={fadeInUp}>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
          <AnimateIn className='text-center'>
            <h6 className='mb-2 font-bold'>SOLIME </h6>
            <MotionContainer className='flex flex-col gap-2 text-sm text-gray-400' staggerChildren={0.05}>
              {footerLinks.map((link) => (
                <motion.div key={link.label} variants={fadeInUp} whileHover={{ x: 5 }} transition={springs.soft}>
                  <Link href={link.href}>{link.label}</Link>
                </motion.div>
              ))}
            </MotionContainer>
          </AnimateIn>

          <AnimateIn className='text-center'>
            <h6 className='mb-2 font-bold'>Documents</h6>
            <MotionContainer className='flex flex-col gap-2 text-sm text-gray-400' staggerChildren={0.05}>
              {footerDocuments.map((document) => (
                <motion.div key={document.label} variants={fadeInUp} whileHover={{ x: 5 }} transition={springs.soft}>
                  <Link href={document.href}>{document.label}</Link>
                </motion.div>
              ))}
            </MotionContainer>
          </AnimateIn>

          <AnimateIn className='text-center'>
            <h6 className='mb-4 font-bold'>News & Update</h6>
            <form action='#'>
              <div className='flex items-stretch w-full'>
                <input type='email' className='flex-1 w-full border border-r-0 border-divider rounded-s-md p-2' placeholder='Your email' />
                <motion.div
                  dir='rtl'
                  className='bg-primary rounded-s-md px-4 flex items-center justify-center'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={springs.bouncy}
                >
                  <BsSend className='text-background' />
                </motion.div>
              </div>
            </form>
            <MotionContainer className='flex flex-wrap justify-center gap-4 mt-10 md:mt-6' staggerChildren={0.05}>
              {socialLinks.map((link) => (
                <motion.div key={link.label} variants={fadeInUp} whileHover={{ scale: 1.2, rotate: 5 }} transition={springs.bouncy}>
                  <Link href={link.href}>{link.icon}</Link>
                </motion.div>
              ))}
            </MotionContainer>
          </AnimateIn>

          <AnimateIn className='text-center flex flex-col gap-2 items-center'>
            <motion.div whileHover={{ scale: 1.05 }} transition={springs.soft}>
              <Link href='/' className='flex items-center gap-2'>
                <Image src='/images/logo.png' alt='SOLIME-Logo' className='img-fluid' height='30' width='30' />
                <h1 className='text-xl md:text-2xl font-bold'>SOLIME</h1>
              </Link>
            </motion.div>
            <div className='text-sm text-gray-400'>Experience the power of AI in navigating web3. Streamline your digital asset interactions with SOLIME .</div>
          </AnimateIn>
        </div>

        <motion.div className='text-sm text-gray-400 text-center' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}>
          Copyright <span className='text-primary'>SOLIME </span>.
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
