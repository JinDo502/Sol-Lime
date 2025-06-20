'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimateIn, springs, fadeInUp, useScrollAnimation } from '@/animations';

const teamContent = [
  {
    name: 'Toni Ulaisi',
    title: 'Founder',
    image: '/images/team/1.png',
  },
  {
    name: 'Eric Dizon',
    title: 'Technical Designer',
    image: '/images/team/2.png',
  },
  {
    name: 'Clara James',
    title: 'Technical Designer',
    image: '/images/team/3.png',
  },
  {
    name: 'Holly Linenberger',
    title: 'Marketing Advisor',
    image: '/images/team/4.png',
  },
  {
    name: 'Redur Rebwar',
    title: 'Product Designer',
    image: '/images/team/5.png',
  },
  {
    name: 'Verdiana M.',
    title: 'Product Designer',
    image: '/images/team/6.png',
  },
  {
    name: 'Sarim Akram',
    title: 'Marketing Manager',
    image: '/images/team/7.png',
  },
  {
    name: 'Dion Yoo',
    title: 'Marketing Manager',
    image: '/images/team/8.png',
  },
];

const Team = () => {
  const [ref, controls] = useScrollAnimation();

  return (
    <section className='py-10 px-6' ref={ref}>
      <div className='container mx-auto'>
        <AnimateIn>
          <h1 className='text-foreground text-center text-3xl md:text-4xl font-bold mb-10'>
            <motion.span className='text-primary' whileHover={{ scale: 1.1 }} transition={springs.bouncy}>
              SOL-LIME
            </motion.span>{' '}
            Powered by a Team of Web3 Enthusiasts
          </h1>
        </AnimateIn>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8'
          initial='hidden'
          animate={controls}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {teamContent.map((item) => {
            return (
              <motion.div className='flex flex-col items-center gap-4' key={item.name} variants={fadeInUp} whileHover={{ y: -10 }} transition={springs.soft}>
                <motion.div whileHover={{ scale: 1.1 }} transition={springs.bouncy} className='rounded-full w-1/3 overflow-hidden'>
                  <Image src={item.image} alt={item.name} width={1000} height={1000} className='rounded-full w-full' />
                </motion.div>
                <motion.h4 className='text-xl font-bold text-foreground' whileHover={{ color: 'var(--color-primary)' }} transition={springs.soft}>
                  {item.name}
                </motion.h4>
                <p className='text-sm text-gray-400 text-center'>{item.title}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
