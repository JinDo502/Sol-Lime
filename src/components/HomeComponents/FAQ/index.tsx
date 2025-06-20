'use client';

import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

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
    <div className='cursor-pointer border border-divider border-opacity-10 rounded-lg p-4 hover:border-primary  duration-300' onClick={() => setIsOpen(!isOpen)}>
      <h2 className='flex items-center justify-between md:justify-start py-2 font-semibold gap-4'>
        <div className='bg-primary text-background rounded-full p-1'>
          {isOpen ? <AiOutlineMinus className='text-xl md:text-2xl' /> : <AiOutlinePlus className='text-xl md:text-2xl' />}
        </div>
        <span className='flex-1'>{question}</span>
      </h2>

      {isOpen && (
        <div className='overflow-hidden'>
          <div className='py-4 pl-10 text-gray-500'>{answer}</div>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <section className='py-10 px-6 container mx-auto'>
      <h1 className='mb-10 text-center text-3xl md:text-4xl font-bold'>
        <span>
          Questions About our SOL-LIME ? <br />
        </span>
        <span className='text-primary'>We have Answers!</span>
      </h1>

      <div className='flex flex-col gap-6'>
        {faqContent.map((item) => (
          <FAQItem key={item.question} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
