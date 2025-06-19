'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const brands = [
  { name: 'Brand 1', image: '/images/brands/1.png' },
  { name: 'Brand 2', image: '/images/brands/2.png' },
  { name: 'Brand 3', image: '/images/brands/3.png' },
  { name: 'Brand 4', image: '/images/brands/4.png' },
  { name: 'Brand 5', image: '/images/brands/5.png' },
];

const Brands = () => {
  return (
    <section className='py-10 px-6'>
      <div className='container mx-auto flex flex-col mt-10 items-center gap-10 text-center'>
        <h4 className='font-[var(--font-montserrat)] text-2xl md:text-3xl font-bold'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]'>Famous Partners</span>
          &nbsp;that choose and trust&nbsp;
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]'>SOL-CHAT.</span>
        </h4>

        <div className='flex flex-wrap justify-center md:flex-nowrap md:gap-10'>
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              className='w-1/3 py-1'
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <Image src={brand.image} alt={brand.name} width={1000} height={1000} className='md:w-full md:h-auto' />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
