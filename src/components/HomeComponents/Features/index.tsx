'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRight, BsCheck } from 'react-icons/bs';

const featuresContent = [
  {
    title: 'Simplify Token Transfers',
    description: 'SOL-LIME facilitates the transfer of tokens between addresses. By issuing a simple command, you can move digital assets effortlessly',
  },
  {
    title: 'Informative Token Insights',
    description:
      'SOL-LIME provides crucial data about different tokens, equipping users with valuable insights to make informed decisions about their token transactions or investments',
  },
  {
    title: 'Elevate Your Web3 Experience',
    description:
      'SOL-LIME &apos;s innovative features aim to create a safer and more rewarding web3 experience. Embrace the power of blockchain technology with an easy-to-use interface',
  },
];

const featuresContent2 = [
  {
    title: 'Experience the Power of AI in Navigating Web3.',
    description:
      'To optimize your web3 operations, understanding the dynamic ecosystem is key. SOL-LIME bridges this complexity, making blockchain technologies accessible to everyone.',

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
    description: 'SOL-LIME enables you to navigate the web3 space seamlessly. Identify your blockchain needs and understand how SOL-LIME can streamline your experience.',
    link: { text: 'Join Community For Updates', href: 'https://twitter.com/SOL-CHAT_eth' },
    img: '/images/illustrations/feature-illustration-2-dark.svg',
  },
  {
    title: 'Manage Tokens, Transactions, & More with SOL-LIME .',
    description: 'To take full advantage of the web3 ecosystem, you need a comprehensive tool. SOL-LIME offers a variety of features to enhance your digital asset interactions.',
    list: [
      'Start navigating web3 effortlessly with SOL-LIME ',
      'Engage with an AI chatbot that prioritizes user experience',
      'Use SOL-LIME &apos;s vast array of features designed to simplify your web3 operations',
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
          <Image src='/images/shapes/blurry-shape-3.svg' alt='' width={1000} height={1000} className='img-fluid' />
        </div>
        <div className='container mx-auto'>
          <div className='text-center mb-18'>
            <h1 className=' mb-0 text-3xl md:text-4xl font-bold'>
              Seamlessly Navigate Web3 with AI, <br className='d-none d-lg-block' />
              Across Your Favorite Platforms
            </h1>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {featuresContent?.map((item, index) => {
              return (
                <div key={item.title} className='col'>
                  <div className='flex flex-col lg:flex-row gap-6'>
                    <div className='w-14 h-14 flex items-center justify-center rounded-2xl p-2 border border-divider bg-gradient-to-l from-card-bg/90 to-card-bg/50'>
                      <h4 className='m-0 p-0 text-xl font-bold text-primary'>0{index + 1}</h4>
                    </div>
                    <div className='flex flex-col gap-4 flex-1'>
                      <h4 className='text-2xl md:text-3xl font-bold'>{item.title}</h4>
                      <p className='text-gray-500'>{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className='text-center mt-12'>
            <a href='#' className='bg-primary text-background px-6 py-4 rounded-lg inline-block'>
              Try Now
            </a>
          </div>
        </div>
      </section>

      <section className='py-10 px-6'>
        <div className='container mx-auto grid grid-cols-1 gap-8'>
          {featuresContent2?.map((item, index) => {
            return (
              <div key={item.title} className={`bg-card-bg rounded-2xl p-6 flex flex-col md:flex-row gap-8`}>
                <div className='w-full md:1/2 flex flex-col gap-6'>
                  <p className='text-primary font-bold md:text-xl'>Features {index + 1}</p>
                  <h1 className='text-2xl md:text-4xl font-bold'>{item.title}</h1>
                  <p className='text-gray-500'>{item.description}</p>
                  <div className='flex flex-col gap-2 text-gray-500 text-sm'>
                    {item.list?.map((listItem) => {
                      return (
                        <div key={listItem} className='flex items-start gap-2'>
                          <BsCheck className='text-xl' />
                          {listItem}
                        </div>
                      );
                    })}
                  </div>
                  <Link href={item.link.href} className='flex font-bold items-center gap-3 text-primary'>
                    <span>{item.link.text}</span>
                    <BsArrowUpRight />
                  </Link>
                </div>
                <div className='w-full md:1/2 lg:w-1/3 flex justify-end'>
                  <Image src={item.img} alt='' width={1000} height={1000} className='w-full' />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Features;
