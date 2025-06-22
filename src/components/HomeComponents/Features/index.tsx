'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRight, BsCheck } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { AnimateIn, MotionContainer, fadeInUp, springs, useScrollAnimation } from '@/animations';

const featuresContent = [
  {
    title: 'Simplify Token Transfers',
    description: 'SOLIME facilitates the transfer of tokens between addresses. By issuing a simple command, you can move digital assets effortlessly',
  },
  {
    title: 'Informative Token Insights',
    description:
      'SOLIME provides crucial data about different tokens, equipping users with valuable insights to make informed decisions about their token transactions or investments',
  },
  {
    title: 'Elevate Your Web3 Experience',
    description:
      'SOLIME &apos;s innovative features aim to create a safer and more rewarding web3 experience. Embrace the power of blockchain technology with an easy-to-use interface',
  },
];

const featuresContent2 = [
  {
    title: 'Experience the Power of AI in Navigating Web3.',
    description:
      'To optimize your web3 operations, understanding the dynamic ecosystem is key. SOLIME bridges this complexity, making blockchain technologies accessible to everyone.',

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
    description: 'SOLIME enables you to navigate the web3 space seamlessly. Identify your blockchain needs and understand how SOLIME can streamline your experience.',
    link: { text: 'Join Community For Updates', href: 'https://x.com/SoLime_xyz' },
    img: '/images/illustrations/feature-illustration-2-dark.svg',
  },
  {
    title: 'Manage Tokens, Transactions, & More with SOLIME .',
    description: 'To take full advantage of the web3 ecosystem, you need a comprehensive tool. SOLIME offers a variety of features to enhance your digital asset interactions.',
    list: [
      'Start navigating web3 effortlessly with SOLIME ',
      'Engage with an AI chatbot that prioritizes user experience',
      'Use SOLIME &apos;s vast array of features designed to simplify your web3 operations',
    ],
    link: { text: 'Get Started Free', href: '#' },
    img: '/images/illustrations/feature-illustration-3-dark.svg',
  },
];

const Features = () => {
  const [ref, controls] = useScrollAnimation({ threshold: 0.1 });
  const [ref2, controls2] = useScrollAnimation({ threshold: 0.1 });
  const [ref3, controls3] = useScrollAnimation({ threshold: 0.1 });

  return (
    <>
      <section className='relative overflow-hidden py-10 px-6'>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] z-[-1]'>
          <Image src='/images/shapes/blurry-shape-3.svg' alt='' width={1000} height={1000} />
        </div>
        <div className='container mx-auto'>
          <AnimateIn className='text-center mb-18'>
            <h1 className='mb-0 text-3xl md:text-4xl font-bold'>
              Seamlessly Navigate Web3 with AI, <br className='d-none d-lg-block' />
              Across Your Favorite Platforms
            </h1>
          </AnimateIn>

          <MotionContainer className='grid grid-cols-1 lg:grid-cols-3 gap-8' staggerChildren={0.2}>
            {featuresContent?.map((item, index) => {
              return (
                <motion.div key={item.title} className='col' variants={fadeInUp}>
                  <motion.div className='flex flex-col lg:flex-row gap-6' whileHover={{ y: -5 }} transition={springs.soft}>
                    <motion.div
                      className='w-14 h-14 flex items-center justify-center rounded-2xl p-2 border border-divider bg-gradient-to-l from-card-bg/90 to-card-bg/50'
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={springs.bouncy}
                    >
                      <h4 className='m-0 p-0 text-xl font-bold text-primary'>0{index + 1}</h4>
                    </motion.div>
                    <div className='flex flex-col gap-4 flex-1'>
                      <h4 className='text-2xl md:text-3xl font-bold'>{item.title}</h4>
                      <p className='text-gray-500'>{item.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </MotionContainer>

          <div className='text-center mt-12'>
            <motion.a
              href='#'
              className='bg-primary text-background px-6 py-4 rounded-lg inline-block'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={springs.bouncy}
            >
              Try Now
            </motion.a>
          </div>
        </div>
      </section>

      <section className='py-10 px-6'>
        <div className='container mx-auto grid grid-cols-1 gap-8'>
          {featuresContent2?.map((item, index) => {
            return (
              <motion.div
                key={item.title}
                className={`bg-card-bg rounded-2xl p-6 flex flex-col md:flex-row gap-8 hover-lift`}
                ref={index === 0 ? ref : index === 1 ? ref2 : ref3}
                initial='hidden'
                animate={index === 0 ? controls : index === 1 ? controls2 : controls3}
                variants={fadeInUp}
                transition={springs.soft}
              >
                <div className='w-full md:1/2 flex flex-col gap-6'>
                  <motion.p className='text-primary font-bold md:text-xl' whileHover={{ scale: 1.05 }} transition={springs.soft}>
                    Features {index + 1}
                  </motion.p>
                  <h1 className='text-2xl md:text-4xl font-bold'>{item.title}</h1>
                  <p className='text-gray-500'>{item.description}</p>
                  <div className='flex flex-col gap-2 text-gray-500 text-sm'>
                    {item.list?.map((listItem) => {
                      return (
                        <motion.div key={listItem} className='flex items-start gap-2' whileHover={{ x: 5 }} transition={springs.soft}>
                          <BsCheck className='text-xl text-primary' />
                          {listItem}
                        </motion.div>
                      );
                    })}
                  </div>
                  <motion.div whileHover={{ x: 5 }} transition={springs.soft}>
                    <Link href={item.link.href} className='flex font-bold items-center gap-3 text-primary'>
                      <span>{item.link.text}</span>
                      <motion.span whileHover={{ x: 3 }} transition={springs.bouncy}>
                        <BsArrowUpRight />
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>
                <motion.div className='w-full md:1/2 lg:w-1/3 flex justify-end' whileHover={{ scale: 1.05 }} transition={springs.soft}>
                  <Image src={item.img} alt='' width={1000} height={1000} className='w-full' />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Features;
