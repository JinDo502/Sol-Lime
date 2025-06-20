'use client';

import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimateIn, MotionContainer, fadeInUp, springs } from '@/animations';

const faqContent = [
  {
    question: 'What is SOLIME and how can it assist me?',
    answer:
      'SOLIME is an all-in-one AI chatbot that simplifies your interactions with blockchain and web3 technologies, helping you manage tokens, stay updated with market trends, conduct security checks, and more.',
  },
  {
    question: 'How does SOLIME make navigating the web3 space simpler?',
    answer:
      'SOLIME breaks down technical barriers in web3 and offers a user-friendly platform. Whether it&apos;s transferring tokens, borrowing tokens, or learning about token information, SOLIME streamlines these tasks.',
  },
  {
    question: 'What kind of features does SOLIME provide for users?',
    answer:
      'SOLIME offers features like token transfers, querying token information, transaction history viewing, token swapping, freezing and unfreezing tokens, borrowing tokens, conducting security checks, and providing market trends and news updates.',
  },
  {
    question: 'Is SOLIME secure and how does it help protect my digital assets?',
    answer:
      'SOLIME ensures the safety of your digital assets by providing security checks and risk warnings, helping you avoid scam tokens, vulnerable wallet addresses, and high transaction fees.',
  },
  {
    question: 'Can I use SOLIME even if I have limited technical knowledge about blockchain and web3?',
    answer:
      'Yes, SOLIME &apos;s mission is to make web3 accessible to all, regardless of their technical background. The chatbot is designed to be user-friendly and easy to navigate.',
  },
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className='cursor-pointer border border-divider border-opacity-10 rounded-lg p-4 hover:border-primary duration-300'
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{ scale: 1.01 }}
      transition={springs.soft}
    >
      <h2 className='flex items-center justify-between md:justify-start py-2 font-semibold gap-4'>
        <motion.div
          className='bg-primary text-background rounded-full p-1'
          whileHover={{ scale: 1.1, rotate: isOpen ? -90 : 90 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={springs.bouncy}
        >
          {isOpen ? <AiOutlineMinus className='text-xl md:text-2xl' /> : <AiOutlinePlus className='text-xl md:text-2xl' />}
        </motion.div>
        <span className='flex-1'>{question}</span>
      </h2>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='overflow-hidden'
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={springs.soft}
          >
            <div className='py-4 pl-10 text-gray-500'>{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  return (
    <section className='py-10 px-6 container mx-auto'>
      <AnimateIn className='mb-10 text-center'>
        <h1 className='text-3xl md:text-4xl font-bold'>
          <span>
            Questions About our SOLIME ? <br />
          </span>
          <span className='text-primary'>We have Answers!</span>
        </h1>
      </AnimateIn>

      <MotionContainer className='flex flex-col gap-6' staggerChildren={0.1}>
        {faqContent.map((item) => (
          <motion.div key={item.question} variants={fadeInUp}>
            <FAQItem question={item.question} answer={item.answer} />
          </motion.div>
        ))}
      </MotionContainer>
    </section>
  );
};

export default FAQ;
