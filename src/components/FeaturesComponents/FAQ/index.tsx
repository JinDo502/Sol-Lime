'use client';

import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const faqContent = [
  {
    question: 'What is SOL-CHAT and how can it assist me?',
    answer:
      'SOL-CHAT is an all-in-one AI chatbot that simplifies your interactions with blockchain and web3 technologies, helping you manage tokens, stay updated with market trends, conduct security checks, and more.',
  },
  {
    question: 'How does SOL-CHAT make navigating the web3 space simpler?',
    answer:
      'SOL-CHAT breaks down technical barriers in web3 and offers a user-friendly platform. Whether it&apos;s transferring tokens, borrowing tokens, or learning about token information, SOL-CHAT streamlines these tasks.',
  },
  {
    question: 'What kind of features does SOL-CHAT provide for users?',
    answer:
      'SOL-CHAT offers features like token transfers, querying token information, transaction history viewing, token swapping, freezing and unfreezing tokens, borrowing tokens, conducting security checks, and providing market trends and news updates.',
  },
  {
    question: 'Is SOL-CHAT secure and how does it help protect my digital assets?',
    answer:
      'SOL-CHAT ensures the safety of your digital assets by providing security checks and risk warnings, helping you avoid scam tokens, vulnerable wallet addresses, and high transaction fees.',
  },
  {
    question: 'Can I use SOL-CHAT even if I have limited technical knowledge about blockchain and web3?',
    answer:
      'Yes, SOL-CHAT&apos;s mission is to make web3 accessible to all, regardless of their technical background. The chatbot is designed to be user-friendly and easy to navigate.',
  },
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
      <h2 className='flex items-center justify-between md:justify-start py-4 font-semibold gap-4 border-b border-[var(--divider)] border-opacity-10'>
        {isOpen ? <AiOutlineMinus className='text-2xl md:text-3xl' /> : <AiOutlinePlus className='text-2xl md:text-3xl' />}
        {question}
      </h2>
      <div className={`${isOpen ? 'block' : 'hidden'} py-4`}>{answer}</div>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className='py-10 px-6 container mx-auto'>
      <h1 className='mb-10 text-center text-3xl md:text-4xl font-bold'>
        Questions About our SOL-CHAT? <br />
        We have Answers!
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
