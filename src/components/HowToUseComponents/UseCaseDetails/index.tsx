'use client';

import Image from 'next/image';
import { BsSend } from 'react-icons/bs';
import { motion } from 'framer-motion';

const steps = [
  {
    image: '/images/screens/screen-1.jpg',
    title: 'Write Higher Converting Posts',
    description: [
      'Everyone has been there. Even the most seasoned and well-versed writers and content producers endure mental gaps. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate anyone exercitation incididunt aliquip deserunt reprehenderit elit laborum.  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt.',
      'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt.',
    ],
  },
  {
    image: '/images/screens/screen-1.jpg',
    title: 'Start creating powerful content, for blog post',
    description: [
      'Everyone has been there. Even the most seasoned and well-versed writers and content producers endure mental gaps. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate anyone exercitation incididunt aliquip deserunt reprehenderit elit laborum.  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt.',
      'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt.',
    ],
  },
  {
    image: '/images/screens/screen-1.jpg',
    title: 'Start creating powerful content, for blog post',
    description: [
      'Everyone has been there. Even the most seasoned and well-versed writers and content producers endure mental gaps. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate anyone exercitation incididunt aliquip deserunt reprehenderit elit laborum.  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt.',
      'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt.',
    ],
  },
];

// 高级弹性动画变体
const springTransition = {
  type: 'spring' as const,
  stiffness: 100,
  damping: 10,
};

// 自定义CSS弹性动画
const cssSpringTransition =
  '800ms linear(0, 0.1187, 0.3801, 0.6679, 0.9085, 1.069, 1.1478, 1.1617, 1.1346, 1.0894, 1.0435, 1.0072, 0.9844, 0.9745, 0.9743, 0.9797, 0.9873, 0.9945, 0.9999, 1.0031, 1.0043, 1.004, 1.003, 1.0018, 1.0006, 0.9998, 1)';

const UseCaseDetails = () => {
  return (
    <section className='pt-10 pb-20 px-8 md:px-0'>
      <div className='container mx-auto'>
        <motion.div className='flex flex-col md:flex-row md:items-center gap-10 pt-10' initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={springTransition}>
          <motion.div
            className='text-center text-lg-start md:w-1/2'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...springTransition, delay: 0.2 }}
          >
            <motion.h1 className='text-3xl md:text-4xl font-bold mb-4' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ...springTransition, delay: 0.3 }}>
              Complete a blog entry in half the time.
            </motion.h1>
            <motion.p className='mb-8 text-gray-400' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ...springTransition, delay: 0.4 }}>
              With a few clicks of a button, you can create a whole outline, opening paragraph, and body for your blog.
            </motion.p>
            <motion.form action='#' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ...springTransition, delay: 0.5 }}>
              <div className='flex items-stretch'>
                <input type='email' className='flex-1 border border-r-0 border-[var(--divider)] rounded-s-md p-2' placeholder='Your email' />
                <motion.div
                  dir='rtl'
                  className='bg-[var(--primary)] text-[var(--background)] rounded-s-md px-4 flex items-center justify-center'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={springTransition}
                  style={{
                    transition: `transform ${cssSpringTransition}`,
                  }}
                >
                  <BsSend className='text-[var(--background)]' />
                </motion.div>
              </div>
            </motion.form>
          </motion.div>
          <motion.div className='text-center md:w-1/2' initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ ...springTransition, delay: 0.3 }}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              style={{
                transition: `transform ${cssSpringTransition}`,
              }}
            >
              <Image src='/images/screens/screen-3.png' alt='' className='img-fluid d-inline-block' width={1000} height={1000} />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.hr
          className='border-top border-[var(--divider)] my-18'
          initial={{ opacity: 0, width: '0%' }}
          animate={{ opacity: 1, width: '100%' }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />

        <div className='flex flex-col gap-10'>
          <motion.div className='flex flex-col gap-4' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...springTransition, delay: 0.7 }}>
            <h1 className='text-3xl md:text-4xl font-bold mb-4'>How to use AI blog post generator to speed up your writing process.</h1>
            <p className='mb-4 text-gray-400'>
              The inability to write. Everyone has been there. Even the most seasoned and well-versed writers and content producers endure mental gaps. Nulla Lorem mollit cupidatat
              irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
            </p>
            <p className='mb-4 text-gray-400'>
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor
              cupidatat incididunt.
            </p>
          </motion.div>

          {steps.map((step, index) => {
            return (
              <motion.div
                key={step.title + index}
                className='flex flex-col gap-4'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springTransition, delay: 0.8 + index * 0.2 }}
              >
                <motion.h4
                  className='text-2xl md:text-3xl font-bold'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...springTransition, delay: 0.9 + index * 0.2 }}
                >
                  <motion.span
                    className='text-[var(--primary)]'
                    animate={{
                      scale: [1, 1.1, 1],
                      color: ['#3182ce', '#63b3ed', '#3182ce'],
                    }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    Step {index + 1}:
                  </motion.span>{' '}
                  {step.title}
                </motion.h4>
                {step.description.map((description, idx) => {
                  return (
                    <motion.p
                      key={idx}
                      className='text-gray-400'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ ...springTransition, delay: 1 + index * 0.2 + idx * 0.1 }}
                    >
                      {description}
                    </motion.p>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...springTransition, delay: 1.1 + index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    transition: `transform ${cssSpringTransition}`,
                  }}
                >
                  <Image src={step.image} alt='' className='rounded shadow-lg' width={1000} height={1000} />
                </motion.div>
              </motion.div>
            );
          })}

          <motion.p className='text-gray-400' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ...springTransition, delay: 1.5 }}>
            GenAI has been there. Even the most seasoned and well-versed writers and content producers endure mental gaps. Nulla Lorem mollit cupidatat irure. Laborum magna.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default UseCaseDetails;
