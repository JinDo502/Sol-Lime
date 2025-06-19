'use client';

import { AiOutlineMail } from 'react-icons/ai';
import { BiMapAlt } from 'react-icons/bi';
import { BsPerson, BsPhone } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '@/components/animations';

const ContactContent = () => {
  return (
    <section className='py-15 px-8 md:px-0'>
      <div className='container mx-auto'>
        <AnimateOnScroll animation='fadeIn' className='flex flex-col gap-8 text-center md:flex-row md:py-10'>
          <motion.div className='flex items-center gap-4 flex-col md:w-1/2 md:px-10' initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <motion.div
              className='bg-[var(--primary)] rounded-2xl w-16 h-16 flex items-center justify-center'
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              <BiMapAlt className='h-8 w-8 text-[var(--background)]' />
            </motion.div>
            <motion.h3 className='text-2xl md:text-3xl font-bold' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
              501 S Cherry St, Denver, CO 80246, USA, Denver, CO 80246, United States.
            </motion.h3>
          </motion.div>
          <motion.div className='flex items-center gap-4 flex-col md:w-1/2 md:px-10' initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <motion.div
              className='bg-[var(--primary)] rounded-2xl w-16 h-16 flex items-center justify-center'
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              <AiOutlineMail className='h-8 w-8 text-[var(--background)]' />
            </motion.div>
            <motion.h3 className='text-2xl md:text-3xl font-bold' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
              SolLime.official@gmail.com
            </motion.h3>
          </motion.div>
        </AnimateOnScroll>

        <form className='flex flex-col gap-6 mt-16 md:w-100 md:mx-auto' id='contact-form' method='post' action='#'>
          <StaggerContainer className='flex flex-col gap-6' staggerChildren={0.1}>
            <StaggerItem>
              <div className='flex flex-col gap-2'>
                <motion.label htmlFor='name' className='form-label fs-lg fw-medium' initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                  Your name*
                </motion.label>
                <motion.div
                  className='flex items-center gap-2 border border-[var(--divider)] rounded-md p-2 overflow-hidden'
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ borderColor: 'var(--primary)' }}
                >
                  <BsPerson className='h-4 w-4 text-gray-600' />
                  <input type='text' id='name' name='name' className='placeholder:text-gray-600 w-full bg-transparent outline-none' placeholder="What's your name?" required />
                </motion.div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className='flex flex-col gap-2'>
                <motion.label htmlFor='email' className='form-label fs-lg fw-medium' initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                  Email Address*
                </motion.label>
                <motion.div
                  className='flex items-center gap-2 border border-[var(--divider)] rounded-md p-2 overflow-hidden'
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ borderColor: 'var(--primary)' }}
                >
                  <AiOutlineMail className='h-4 w-4 text-gray-600' />
                  <input type='email' id='email' name='email' className='placeholder:text-gray-600 w-full bg-transparent outline-none' placeholder='Enter Your Email' required />
                </motion.div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className='flex flex-col gap-2'>
                <motion.label htmlFor='phone' className='form-label fs-lg fw-medium' initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                  Phone Number
                </motion.label>
                <motion.div
                  className='flex items-center gap-2 border border-[var(--divider)] rounded-md p-2 overflow-hidden'
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ borderColor: 'var(--primary)' }}
                >
                  <BsPhone className='h-4 w-4 text-gray-600' />
                  <input type='tel' id='phone' name='phone' className='placeholder:text-gray-600 w-full bg-transparent outline-none' placeholder='Phone Number' />
                </motion.div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className='flex flex-col gap-2'>
                <motion.label
                  htmlFor='message'
                  className='form-label fs-lg fw-medium'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Your Message*
                </motion.label>
                <motion.div
                  className='flex items-center gap-2 border border-[var(--divider)] rounded-md p-2 overflow-hidden'
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ borderColor: 'var(--primary)' }}
                >
                  <textarea
                    id='message'
                    name='message'
                    className='placeholder:text-gray-600 w-full bg-transparent outline-none'
                    placeholder='Write here your details message'
                    rows={4}
                    required
                  ></textarea>
                </motion.div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className='flex justify-start'>
                <motion.button
                  type='submit'
                  className='bg-[var(--primary)] text-[var(--background)] rounded-md px-6 py-3 font-bold'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Send Message
                </motion.button>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </form>
      </div>
    </section>
  );
};

export default ContactContent;
