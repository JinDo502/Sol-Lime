'use client';

import Link from 'next/link';
import { Icon1, Icon2, Icon3 } from './Icon';
import Image from 'next/image';
import { BsArrowUpRight, BsCheck } from 'react-icons/bs';

const features = [
  {
    icon: Icon1,
    title: 'Usage of Tokens',
    description: 'The LinkAI token serves as the lifeblood of the LinkAI ecosystem. It provides a means of exchange, drives user engagement, and incentivizes behaviors.',
  },
  {
    icon: Icon2,
    title: 'Ethereum Chain',
    description: 'Tokenized on Ethereum Chain. An Ethereum-powered decentralized applications and trade it on decentralized exchanges.',
  },
  {
    icon: Icon3,
    title: 'Future Outlook',
    description: 'LinkAI plans to continue innovating and expanding its capabilities, and keeping up with the latest trends in blockchain technology and AI',
  },
];

const features2 = [
  {
    tag: 'Tokenomics',
    title: 'Launch on Ethereum Chain.',
    description: "The total supply is set at one quadrillion tokens (1,000,000,000,000,000). Here's how we've allocated them",
    list: ['IDO: 50%', 'Initial LP: 20%', 'Operation: 7%', 'Technology: 5%', 'Ecosystem: 13%', 'Exchange: 5%'],
    url: { text: 'Read Whitepaper', href: '#' },
    img: '/images/illustrations/feature-illustration-1-dark.svg',
  },
  {
    tag: 'About IDO',
    title: 'Join our IDO and get your $LIMO!',
    description: 'We will be launching our IDO here at our official platform Please stay tuned for more information and updates.',
    list: ['Hard Cap: 270 ETH', '1 ETH = 1,851,851,851,851 $LIMO', 'Whitelist Volume: 80ETH (Min: 0.1ETH, Max:1ETH)', 'Public IDO Volume: 190ETH (Min: 0.05ETH, Max:2ETH)'],
    url: { text: 'Follow Twitter', href: '#' },
    img: '/images/illustrations/feature-illustration-2-dark.svg',
  },
  {
    tag: 'Other Mechanism',
    title: 'Staking & Mining with SOL-LIME .',
    description: 'To further incentivize user engagement and participation, LinkAI offers staking and mining opportunities.',
    list: [
      'Users can earn rewards, contributing to the overall health and vibrancy of the ecosystem.',
      'Using the chatbot functionality, participating in community events, or contributing in other ways.',
      'Incentive mechanism, encouraging active participation and engagement within the LinkAI ecosystem.',
    ],
    url: { text: 'Coming Soon', href: '#' },
    img: '/images/illustrations/feature-illustration-3-dark.svg',
  },
];

const Features = () => {
  return (
    <>
      <section className='py-10 px-6'>
        <div className='container mx-auto'>
          <h1 className='text-3xl md:text-4xl font-bold text-center'>Overview of SOL-Lime Tokens $LIMO</h1>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-15'>
            {features.map((item) => (
              <div key={item?.title} className='flex flex-col gap-4'>
                <div className='w-14 h-14 text-primary flex items-center justify-center rounded-2xl p-2 border border-divider bg-gradient-to-l from-card-bg/90 to-card-bg/50'>
                  <item.icon />
                </div>
                <h4 className='text-2xl md:text-3xl font-bold'>{item?.title}</h4>
                <p className='text-gray-400 text-sm'>{item?.description}</p>
              </div>
            ))}
          </div>

          <Link href='#' className='block w-max bg-primary text-background px-6 py-4 rounded-lg mt-12 mx-auto'>
            Join Now
          </Link>
        </div>
      </section>

      <section className='py-10 px-6'>
        <div className='container mx-auto grid grid-cols-1 gap-8'>
          {features2?.map((item, index) => {
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
                  <div>
                    <Link href={item.url.href} className='flex font-bold items-center gap-3 text-primary'>
                      <span>{item.url.text}</span>
                      <div>
                        <BsArrowUpRight />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='w-full md:1/2 lg:w-1/3 flex justify-end'>
                  <div>
                    <Image src={item.img} alt='' width={1000} height={1000} className='w-full' />
                  </div>
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
