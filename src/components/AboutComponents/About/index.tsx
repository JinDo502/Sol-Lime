import Image from 'next/image';
import Link from 'next/link';
import ReviewLogos from '@/components/HomeComponents/ReviewLogos';

const About = () => {
  return (
    <section className='py-10 px-6 '>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center gap-8 md:flex-row'>
          <div className='text-center flex flex-col items-center gap-4 w-full md:w-2/5'>
            <p className='text-primary text-sm font-bold'>About SOL-LIME</p>
            <h2 className='text-3xl md:text-4xl font-bold'>Blockchain enthusiasts love SOL-LIME .</h2>
            <p className='mb-4 text-gray-500'>With a few simple chat commands, users can navigate the web3 space, manage their digital assets, and much more.</p>
            <Link href='#' className='bg-primary text-background px-6 py-4 rounded-lg font-bold inline-block  duration-300'>
              Start Experience
            </Link>
          </div>
          <div className='w-full md:w-3/5'>
            <Image className='w-full rounded-md' src='/images/screens/screen-4.png' alt='' width={1000} height={1000} />
          </div>
        </div>
        <hr className='border-t border-divider mb-8' />
        <ReviewLogos />
      </div>
    </section>
  );
};

export default About;
