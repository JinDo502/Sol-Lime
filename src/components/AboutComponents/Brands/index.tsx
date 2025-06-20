'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimateIn, springs, fadeInUp, useScrollAnimation } from '@/animations';

const brands = [
  { name: 'Brand 1', image: '/images/brands/1.png' },
  { name: 'Brand 2', image: '/images/brands/2.png' },
  { name: 'Brand 3', image: '/images/brands/3.png' },
  { name: 'Brand 4', image: '/images/brands/4.png' },
  { name: 'Brand 5', image: '/images/brands/5.png' },
];

const Brands = () => {
  const [ref, controls] = useScrollAnimation();

  return (
    <section className='py-10 px-6' ref={ref}>
      <div className='container mx-auto flex flex-col mt-10 items-center gap-10 text-center'>
        <AnimateIn>
          <h4 className='font-[var(--font-montserrat)] text-2xl md:text-3xl font-bold'>
            <motion.span
              className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'
              animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
              transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Famous Partners
            </motion.span>
            &nbsp;that choose and trust&nbsp;
            <motion.span
              className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'
              animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
              transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
              style={{ backgroundSize: '200% 200%' }}
            >
              SOL-LIME .
            </motion.span>
          </h4>
        </AnimateIn>

        <motion.div
          className='flex flex-wrap justify-center md:flex-nowrap gap-4 md:gap-10'
          initial='hidden'
          animate={controls}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {brands.map((brand) => (
            <motion.div key={brand.name} className='w-1/4 md:w-1/3 py-1' variants={fadeInUp} whileHover={{ scale: 1.1 }} transition={springs.bouncy}>
              <Image src={brand.image} alt={brand.name} width={1000} height={1000} className='md:w-full md:h-auto' />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
