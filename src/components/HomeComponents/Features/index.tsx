'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRight, BsCheck } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { AnimateOnScroll, Pulse } from '@/components/animations';

const featuresContent = [
  {
    title: 'Simplify Token Transfers',
    description: 'SOL-CHAT facilitates the transfer of tokens between addresses. By issuing a simple command, you can move digital assets effortlessly',
  },
  {
    title: 'Informative Token Insights',
    description:
      'SOL-CHAT provides crucial data about different tokens, equipping users with valuable insights to make informed decisions about their token transactions or investments',
  },
  {
    title: 'Elevate Your Web3 Experience',
    description:
      'SOL-CHAT&apos;s innovative features aim to create a safer and more rewarding web3 experience. Embrace the power of blockchain technology with an easy-to-use interface',
  },
];

const featuresContent2 = [
  {
    title: 'Experience the Power of AI in Navigating Web3.',
    description:
      'To optimize your web3 operations, understanding the dynamic ecosystem is key. SOL-CHAT bridges this complexity, making blockchain technologies accessible to everyone.',

    list: [
      'Start managing your digital assets more efficiently',
      'Communicate effortlessly with a user-friendly AI chatbot',
      'Take advantage of an all-in-one solution to navigate the web3 space',
    ],
    link: { text: 'Get Started Free', href: '#' },
    img: '/images/illustrations/feature-illustration-1-dark.svg',
  },
  {
    title: 'A Revolutionary Tool to Simplify Your Web3 Interactions.',
    description: 'SOL-CHAT enables you to navigate the web3 space seamlessly. Identify your blockchain needs and understand how SOL-CHAT can streamline your experience.',
    link: { text: 'Join Community For Updates', href: 'https://twitter.com/SOL-CHAT_eth' },
    img: '/images/illustrations/feature-illustration-2-dark.svg',
  },
  {
    title: 'Manage Tokens, Transactions, & More with SOL-CHAT.',
    description: 'To take full advantage of the web3 ecosystem, you need a comprehensive tool. SOL-CHAT offers a variety of features to enhance your digital asset interactions.',
    list: [
      'Start navigating web3 effortlessly with SOL-CHAT',
      'Engage with an AI chatbot that prioritizes user experience',
      'Use SOL-CHAT&apos;s vast array of features designed to simplify your web3 operations',
    ],
    link: { text: 'Get Started Free', href: '#' },
    img: '/images/illustrations/feature-illustration-3-dark.svg',
  },
];

const Features = () => {
  return (
    <>
      <section className='relative overflow-hidden py-10 px-6'>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] z-[-1]'>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <Image src='/images/shapes/blurry-shape-3.svg' alt='' width={1000} height={1000} className='img-fluid' />
          </motion.div>
        </div>
        <div className='container mx-auto'>
          <AnimateOnScroll animation='fadeIn' className='text-center mb-18'>
            <h1 className=' mb-0 text-3xl md:text-4xl font-bold'>
              Seamlessly Navigate Web3 with AI, <br className='d-none d-lg-block' />
              Across Your Favorite Platforms
            </h1>
          </AnimateOnScroll>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {featuresContent?.map((item, index) => {
              return (
                <AnimateOnScroll key={item.title} className='col' animation='slideUp' delay={index * 0.2}>
                  <div className='flex flex-col lg:flex-row gap-6'>
                    <motion.div
                      className='w-14 h-14 flex items-center justify-center rounded-2xl p-2 border border-[var(--divider)] bg-gradient-to-l from-[var(--card-bg)]/90 to-[var(--card-bg)]/50'
                      whileHover={{ scale: 1.1 }}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    >
                      <h4 className='m-0 p-0 text-xl font-bold text-[var(--primary)]'>0{index + 1}</h4>
                    </motion.div>
                    <div className='flex flex-col gap-4 flex-1'>
                      <h4 className='text-2xl md:text-3xl font-bold'>{item.title}</h4>
                      <p className='text-gray-500'>{item.description}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>

          <div className='text-center mt-12'>
            <Pulse>
              <motion.a href='#' className='bg-[var(--primary)] text-[var(--background)] px-6 py-4 rounded-lg inline-block' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Try Now
              </motion.a>
            </Pulse>
          </div>
        </div>
      </section>

      <section className='py-10 px-6'>
        <div className='container mx-auto grid grid-cols-1 gap-8'>
          {featuresContent2?.map((item, index) => {
            return (
              <AnimateOnScroll key={item.title} className={`bg-[var(--card-bg)] rounded-2xl p-6 flex flex-col md:flex-row gap-8`} animation='fadeIn' delay={index * 0.3}>
                <div className='w-full md:1/2 flex flex-col gap-6'>
                  <motion.p
                    className='text-[var(--primary)] font-bold md:text-xl'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.3, duration: 0.5 }}
                  >
                    Features {index + 1}
                  </motion.p>
                  <motion.h1
                    className='text-2xl md:text-4xl font-bold'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.3, duration: 0.5 }}
                  >
                    {item.title}
                  </motion.h1>
                  <motion.p className='text-gray-500' initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + index * 0.3, duration: 0.5 }}>
                    {item.description}
                  </motion.p>
                  <div className='flex flex-col gap-2 text-gray-500 text-sm'>
                    {item.list?.map((listItem, listIndex) => {
                      return (
                        <motion.div
                          key={listItem}
                          className='flex items-start gap-2'
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + listIndex * 0.1 + index * 0.3, duration: 0.5 }}
                        >
                          <BsCheck className='text-xl' />
                          {listItem}
                        </motion.div>
                      );
                    })}
                  </div>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link href={item.link.href} className='flex font-bold items-center gap-3 text-[var(--primary)]'>
                      <span>{item.link.text}</span>
                      <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        <BsArrowUpRight />
                      </motion.div>
                    </Link>
                  </motion.div>
                </div>
                <div className='w-full md:1/2 lg:w-1/3 flex justify-end'>
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <Image src={item.img} alt='' width={1000} height={1000} className='w-full' />
                  </motion.div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Features;
