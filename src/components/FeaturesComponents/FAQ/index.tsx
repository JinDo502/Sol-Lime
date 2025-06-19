'use client';

import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimateOnScroll } from '@/components/animations';

const faqContent = [
  {
    question: 'What is SOL-LIME and how can it assist me?',
    answer:
      'SOL-LIME is an all-in-one AI chatbot that simplifies your interactions with blockchain and web3 technologies, helping you manage tokens, stay updated with market trends, conduct security checks, and more.',
  },
  {
    question: 'How does SOL-LIME make navigating the web3 space simpler?',
    answer:
      'SOL-LIME breaks down technical barriers in web3 and offers a user-friendly platform. Whether it&apos;s transferring tokens, borrowing tokens, or learning about token information, SOL-LIME streamlines these tasks.',
  },
  {
    question: 'What kind of features does SOL-LIME provide for users?',
    answer:
      'SOL-LIME offers features like token transfers, querying token information, transaction history viewing, token swapping, freezing and unfreezing tokens, borrowing tokens, conducting security checks, and providing market trends and news updates.',
  },
  {
    question: 'Is SOL-LIME secure and how does it help protect my digital assets?',
    answer:
      'SOL-LIME ensures the safety of your digital assets by providing security checks and risk warnings, helping you avoid scam tokens, vulnerable wallet addresses, and high transaction fees.',
  },
  {
    question: 'Can I use SOL-LIME even if I have limited technical knowledge about blockchain and web3?',
    answer:
      'Yes, SOL-CHAT&apos;s mission is to make web3 accessible to all, regardless of their technical background. The chatbot is designed to be user-friendly and easy to navigate.',
  },
];

const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className='cursor-pointer border border-[var(--divider)] border-opacity-10 rounded-lg p-4 hover:border-[var(--primary)] transition-all duration-300'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)', y: -5 }}
    >
      <motion.h2 className='flex items-center justify-between md:justify-start py-2 font-semibold gap-4' initial={{ opacity: 0.8 }} animate={{ opacity: 1 }}>
        <motion.div
          whileHover={{ rotate: isOpen ? -90 : 90 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className='bg-[var(--primary)] text-[var(--background)] rounded-full p-1'
        >
          {isOpen ? <AiOutlineMinus className='text-xl md:text-2xl' /> : <AiOutlinePlus className='text-xl md:text-2xl' />}
        </motion.div>
        <span className='flex-1'>{question}</span>
      </motion.h2>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='overflow-hidden'
          >
            <motion.div className='py-4 pl-10 text-gray-500' initial={{ y: -10 }} animate={{ y: 0 }} transition={{ duration: 0.2 }}>
              {answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  return (
    <section className='py-10 px-6 container mx-auto'>
      <AnimateOnScroll animation='fadeIn'>
        <motion.h1 className='mb-10 text-center text-3xl md:text-4xl font-bold' initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
            Questions About our SOL-CHAT? <br />
          </motion.span>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className='text-[var(--primary)]'>
            We have Answers!
          </motion.span>
        </motion.h1>
      </AnimateOnScroll>

      <AnimateOnScroll animation='fadeIn' className='flex flex-col gap-6'>
        {faqContent.map((item, index) => (
          <FAQItem key={item.question} question={item.question} answer={item.answer} index={index} />
        ))}
      </AnimateOnScroll>
    </section>
  );
};

export default FAQ;
