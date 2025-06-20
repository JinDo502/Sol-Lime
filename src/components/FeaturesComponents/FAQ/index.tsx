'use client';

import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimateIn, springs, fadeInUp } from '@/animations';

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
      'Yes, SOL-LIME &apos;s mission is to make web3 accessible to all, regardless of their technical background. The chatbot is designed to be user-friendly and easy to navigate.',
  },
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className='cursor-pointer border border-divider border-opacity-10 rounded-lg p-4 hover:border-primary'
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{ boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)', y: -2 }}
      transition={springs.soft}
      variants={fadeInUp}
    >
      <h2 className='flex items-center justify-between md:justify-start py-2 font-semibold gap-4'>
        <motion.div className='bg-primary text-background rounded-full p-1' animate={{ rotate: isOpen ? 180 : 0 }} transition={springs.bouncy}>
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
      <AnimateIn>
        <h1 className='mb-10 text-center text-3xl md:text-4xl font-bold'>
          <span>
            Questions About our SOL-LIME ? <br />
          </span>
          <motion.span className='text-primary' animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}>
            We have Answers!
          </motion.span>
        </h1>
      </AnimateIn>

      <motion.div className='flex flex-col gap-6' initial='hidden' animate='visible' variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
        {faqContent.map((item) => (
          <FAQItem key={item.question} question={item.question} answer={item.answer} />
        ))}
      </motion.div>
    </section>
  );
};

export default FAQ;
