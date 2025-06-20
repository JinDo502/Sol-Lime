'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimateIn, springs, fadeInUp, useScrollAnimation } from '@/animations';

const teamContent = [
  {
    name: 'Toni Ulaisi',
    title: 'Founder',
    image: '/images/team/1.jpeg',
  },
  {
    name: 'Eric Dizon',
    title: 'Technical Designer',
    image: '/images/team/2.jpeg',
  },
  {
    name: 'Clara James',
    title: 'Technical Designer',
    image: '/images/team/3.jpeg',
  },
  {
    name: 'Holly Linenberger',
    title: 'Marketing Advisor',
    image: '/images/team/4.jpeg',
  },
  {
    name: 'Redur Rebwar',
    title: 'Product Designer',
    image: '/images/team/5.jpeg',
  },
  {
    name: 'Verdiana M.',
    title: 'Product Designer',
    image: '/images/team/6.jpeg',
  },
  {
    name: 'Sarim Akram',
    title: 'Marketing Manager',
    image: '/images/team/7.jpeg',
  },
  {
    name: 'Dion Yoo',
    title: 'Marketing Manager',
    image: '/images/team/8.jpeg',
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
              SOLIME
            </motion.span>{' '}
            Powered by a Team of Web3 Enthusiasts
          </h1>
        </AnimateIn>

        <motion.div
          className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8'
          initial='hidden'
          animate={controls}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {teamContent.map((item) => {
            return (
              <motion.div className='flex flex-col items-center gap-2 md:gap-4' key={item.name} variants={fadeInUp} transition={springs.soft}>
                <motion.div whileHover={{ scale: 1.1 }} transition={springs.bouncy} className='rounded-full w-1/2 md:w-1/3 overflow-hidden'>
                  <Image src={item.image} alt={item.name} width={1000} height={1000} className='rounded-full w-full' />
                </motion.div>
                <motion.h4 className='text-base md:text-xl font-bold text-foreground' whileHover={{ color: 'var(--color-primary)' }} transition={springs.soft}>
                  {item.name}
                </motion.h4>
                <p className='text-xs md:text-sm text-gray-400 text-center'>{item.title}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
