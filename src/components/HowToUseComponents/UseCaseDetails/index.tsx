'use client';

import Image from 'next/image';
import { BsSend } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { AnimateIn, MotionContainer, fadeInUp, springs } from '@/animations';
import dynamic from 'next/dynamic';

const Screen = dynamic(() => import('@/components/Screen'), { ssr: false });

const steps = [
  {
    title: 'Write Higher Converting Posts',
    description: [
      'Everyone has been there. Even the most seasoned and well-versed writers and content producers endure mental gaps. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate anyone exercitation incididunt aliquip deserunt reprehenderit elit laborum.  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt.',
      'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt.',
    ],
  },
  {
    title: 'Start creating powerful content, for blog post',
    description: [
      'Everyone has been there. Even the most seasoned and well-versed writers and content producers endure mental gaps. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate anyone exercitation incididunt aliquip deserunt reprehenderit elit laborum.  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt.',
      'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt.',
    ],
  },
  {
    title: 'Start creating powerful content, for blog post',
    description: [
      'Everyone has been there. Even the most seasoned and well-versed writers and content producers endure mental gaps. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate anyone exercitation incididunt aliquip deserunt reprehenderit elit laborum.  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt.',
      'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt.',
    ],
  },
];

const UseCaseDetails = () => {
  return (
    <section className='py-10 px-6'>
      <div className='container mx-auto'>
        <MotionContainer className='flex flex-col md:flex-row md:items-center gap-10 pt-10'>
          <motion.div className='text-center text-lg-start md:w-1/2' variants={fadeInUp}>
            <h1 className='text-3xl md:text-4xl font-bold mb-4'>Complete a blog entry in half the time.</h1>
            <p className='mb-8 text-gray-400'>With a few clicks of a button, you can create a whole outline, opening paragraph, and body for your blog.</p>
            <form action='#'>
              <div className='flex items-stretch'>
                <input type='email' className='flex-1 border border-r-0 border-divider rounded-s-md p-2' placeholder='Your email' />
                <motion.div
                  dir='rtl'
                  className='bg-primary text-background rounded-s-md px-4 flex items-center justify-center'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={springs.bouncy}
                >
                  <BsSend className='text-background' />
                </motion.div>
              </div>
            </form>
          </motion.div>
          <AnimateIn className='text-center md:w-1/2' transition={springs.bouncy}>
            <motion.div whileHover={{ scale: 1.02 }} transition={springs.soft}>
              <Image src='/images/screens/screen-3.png' alt='' className='img-fluid d-inline-block' width={1000} height={1000} />
            </motion.div>
          </AnimateIn>
        </MotionContainer>

        <hr className='border-top border-divider my-18' />

        <AnimateIn viewport={{ once: true, amount: 0.1 }}>
          <div className='flex flex-col gap-4'>
            <h1 className='text-3xl md:text-4xl font-bold mb-4'>How to use AI blog post generator to speed up your writing process.</h1>
            <p className='mb-4 text-gray-400'>
              The inability to write. Everyone has been there. Even the most seasoned and well-versed writers and content producers endure mental gaps. Nulla Lorem mollit cupidatat
              irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
            </p>
            <p className='mb-4 text-gray-400'>
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor
              cupidatat incididunt.
            </p>
          </div>
        </AnimateIn>

        <MotionContainer viewport={{ once: true, amount: 0.1 }} className='flex flex-col gap-10 mt-10'>
          {steps.map((step, index) => (
            <motion.div key={step.title + index} className='flex flex-col gap-4' variants={fadeInUp}>
              <h4 className='text-2xl md:text-3xl font-bold'>
                <span className='text-primary'>Step {index + 1}:</span> {step.title}
              </h4>
              {step.description.map((description, idx) => {
                return (
                  <p key={idx} className='text-gray-400'>
                    {description}
                  </p>
                );
              })}
              <motion.div whileHover={{ scale: 1.02 }} transition={springs.soft}>
                <Screen />
              </motion.div>
            </motion.div>
          ))}

          <motion.p className='text-gray-400' variants={fadeInUp}>
            GenAI has been there. Even the most seasoned and well-versed writers and content producers endure mental gaps. Nulla Lorem mollit cupidatat irure. Laborum magna.
          </motion.p>
        </MotionContainer>
      </div>
    </section>
  );
};

export default UseCaseDetails;
