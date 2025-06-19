import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section className='py-15 px-8'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center gap-8'>
          <div className='text-center flex flex-col items-center gap-4'>
            <p className='text-[var(--primary)] text-sm font-bold'>About SOL-CHAT</p>
            <h2 className='text-3xl md:text-4xl font-bold'>Blockchain enthusiasts love SOL-CHAT.</h2>
            <p className='mb-4 text-gray-500'>With a few simple chat commands, users can navigate the web3 space, manage their digital assets, and much more.</p>
            <Link href='#' className='bg-[var(--primary)] text-[var(--background)] px-6 py-4 rounded-lg font-bold'>
              Start Experience
            </Link>
          </div>
          <Image className='w-full mb-8' src='/images/screens/screen-4.png' alt='' width={1000} height={1000} />
        </div>
        <hr className='border-t border-[var(--divider)]' />
        <div className='flex gap-8 items-center justify-center mt-12 px-8'>
          <Image className='w-1/2' src='/images/review-logos/trustpilot_reviews.svg' alt='' width={1000} height={1000} />
          <Image className='w-1/2' src='/images/review-logos/capterra_reviews.svg' alt='' width={1000} height={1000} />
        </div>
      </div>
    </section>
  );
};

export default About;
