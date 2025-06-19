import Link from 'next/link';
import { Icon1, Icon2, Icon3 } from './Icon';
import Image from 'next/image';
import { BsArrowUpRight, BsCheckLg } from 'react-icons/bs';

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
    title: 'Staking & Mining with SOL-CHAT.',
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
      <section className='py-10 px-8'>
        <div className='container mx-auto'>
          <h1 className='text-3xl md:text-4xl font-bold text-center'>Overview of SOL-CHAT Tokens $LIMO</h1>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-15'>
            {features.map((item) => (
              <div key={item?.title} className='flex flex-col gap-4'>
                <div className='w-14 h-14 text-[var(--primary)] flex items-center justify-center rounded-2xl p-2 border border-[var(--divider)] bg-gradient-to-l from-[var(--card-bg)]/90 to-[var(--card-bg)]/50'>
                  <item.icon />
                </div>
                <h4 className='text-2xl md:text-3xl font-bold'>{item?.title}</h4>
                <p className='text-gray-400 text-sm'>{item?.description}</p>
              </div>
            ))}
          </div>

          <Link href='#' className='block w-max bg-[var(--primary)] text-[var(--background)] px-6 py-4 rounded-lg mt-12 mx-auto'>
            Join IDO
          </Link>
        </div>
      </section>

      <section className='py-10 px-8'>
        <div className='container mx-auto'>
          {features2.map((item) => (
            <div key={item?.title} className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              <div className='flex flex-col gap-4'>
                <p className='text-[var(--primary)]'>{item?.tag}</p>
                <h1 className='text-foreground text-3xl md:text-4xl font-bold'>{item?.title}</h1>
                <p className='text-gray-500 '>{item?.description}</p>
                <ul className='list-disc list-outside text-gray-500'>
                  {item?.list.map((item) => (
                    <li key={item} className='flex items-center gap-4'>
                      <BsCheckLg />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href={item?.url.href} target='_blank' className='flex items-center justify-start gap-2 text-[var(--primary)] text-sm font-bold'>
                  <span>{item?.url.text}</span>
                  <BsArrowUpRight className='scale-75' />
                </Link>
              </div>
              <div className='rounded-xl overflow-hidden'>
                <Image width={1000} height={1000} src={item?.img} alt='' className='w-full h-full object-cover' />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Features;
