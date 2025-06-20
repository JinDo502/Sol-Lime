'use client';

import Image from 'next/image';
import Icon from './Icon';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className='py-10 px-6 container mx-auto'>
      <div className='rounded-2xl border p-6 overflow-hidden bg-card-bg border-primary border-opacity-10 flex flex-col md:flex-row md:p-8 md:gap-20'>
        <div className='text-center flex flex-col gap-4 md:w-1/2 items-cneter justify-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-pretty mb-6'>
            With <span className='text-primary'>SOL-LIME </span> navigating the web3 space has never been easier or safer!
          </h2>
          <Link href='#' className='h-max w-max mx-auto bg-primary text-background px-6 py-4 rounded-md inline-block'>
            Get Started Free
          </Link>
        </div>

        <div className='relative mt-10 md:w-1/2'>
          <div className='absolute top-0 right-0 text-primary w-[20%] h-auto translate-x-[-50%] translate-y-[-50%] z-[2]'>
            <Icon />
          </div>
          <div>
            <Image src='/images/screens/screen-2.jpg' width={500} height={500} alt='' className='w-full h-auto object-cover rounded-2xl border border-divider border-opacity-10' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
