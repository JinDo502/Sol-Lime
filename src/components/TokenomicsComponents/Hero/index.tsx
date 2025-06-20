import Image from 'next/image';
import Link from 'next/link';
import Printer from '../Printer';
import ReviewLogos from '@/components/HomeComponents/ReviewLogos';

const btnBg = 'bg-linear-65 from-primary to-secondary';

const Hero = () => {
  return (
    <section className='py-10 container mx-auto'>
      <div className='relative z-1 text-center'>
        <p className='text-primary'>Best AI Chat Tools</p>
        <h1 className='my-8 text-4xl md:text-5xl font-bold leading-tight'>
          Providing You The Best <br />
          <Printer />
        </h1>
        <div>
          <Link href='#' className={`${btnBg} mt-4 font-bold font-2xl px-6 py-4 rounded-xl text-background`}>
            Follow Us Today
          </Link>
        </div>
      </div>
      <div className='relative px-8'>
        <div className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[700px] h-auto z-[-1]'>
          <Image src='/images/shapes/blurry-shape-1.svg' className='w-full' alt='' width={1000} height={1000} />
        </div>
        <div>
          <div>
            <Image
              src='/images/screens/screen-1.jpg'
              alt=''
              width={1000}
              height={1000}
              className='mt-12 w-full rounded-xl border border-divider shadow-lg overflow-hidden relative z-1'
            />
          </div>
        </div>
      </div>
      <ul className='px-8 text-gray-500 flex flex-wrap gap-4 align-center justify-center my-8 list-disc list-inside'>
        <li>Connect With Community</li>
        <li>Manage Your Assets</li>
        <li>As Good As ChatGPT</li>
      </ul>
      <ReviewLogos />
    </section>
  );
};

export default Hero;
