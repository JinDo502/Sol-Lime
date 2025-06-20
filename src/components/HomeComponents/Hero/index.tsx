import Image from 'next/image';
import ReviewLogos from '@/components/HomeComponents/ReviewLogos';

const brands = [
  { name: 'Brand 1', image: '/images/brands/1.png' },
  { name: 'Brand 2', image: '/images/brands/2.png' },
  { name: 'Brand 3', image: '/images/brands/3.png' },
  { name: 'Brand 4', image: '/images/brands/4.png' },
  { name: 'Brand 5', image: '/images/brands/5.png' },
];

const Hero = () => {
  return (
    <section className='relative bg-background py-10 px-6'>
      <div className='container mx-auto flex flex-col items-center'>
        <div className='text-center relative z-1 flex flex-col items-center gap-10 md:flex-row'>
          <div className='flex flex-col items-center gap-10 md:w-2/5'>
            <p className='text-primary'>
              <span className='border px-4 py-2 rounded-md border-divider inline-block'>New ChatGPT in Crypto</span>
            </p>

            <h1 className='text-4xl md:text-5xl font-bold leading-tight text-center'>
              An AI Social App As Good As ChatGPT - <span className='text-primary'>SOL-LIME </span> is arrived.
            </h1>

            <form action='#' className='flex flex-col gap-4'>
              <div className='flex'>
                <input type='email' className='flex-1 border border-divider border-r-0 rounded-l-md p-2' placeholder='Enter Your Email' />
                <button className='px-4 bg-primary text-background rounded-r-md' type='button'>
                  Sign Up Free
                </button>
              </div>
            </form>

            <ReviewLogos />
          </div>

          <div className='relative w-full md:w-3/5'>
            <div className='relative z-10'>
              <Image
                src='/images/screens/screen-2.jpg'
                alt=''
                width={1000}
                height={1000}
                className='w-full object-cover border-1 border-divider rounded-md'
                priority // 优先加载图片
              />
            </div>

            <div className='z-1'>
              <Image
                src='/images/shapes/blurry-shape-2.svg'
                alt=''
                width={1000}
                height={1000}
                className='absolute top-[-20rem] md:top-[-25rem] left-[-7rem] w-[500px] h-auto'
                priority
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col mt-10 items-center gap-10 text-center w-full'>
          <h4 className='font-[var(--font-montserrat)] text-2xl md:text-3xl font-bold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>Famous Partners</span>
            &nbsp;that choose and trust&nbsp;
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>SOL-LIME .</span>
          </h4>

          <div className='flex flex-wrap justify-center md:flex-nowrap md:gap-10'>
            {brands.map((brand) => (
              <div key={brand.name} className='w-1/3 py-1'>
                <Image src={brand.image} alt={brand.name} width={1000} height={1000} className='md:w-full md:h-auto' priority />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
