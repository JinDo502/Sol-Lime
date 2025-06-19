import { AiOutlineMail } from 'react-icons/ai';
import { BiMapAlt } from 'react-icons/bi';
import { BsPerson, BsPhone } from 'react-icons/bs';

const ContactContent = () => {
  return (
    <section className='py-15 px-8'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-8 text-center'>
          <div className='flex items-center gap-4 flex-col'>
            <div className='bg-[var(--primary)]  rounded-2xl w-16 h-16 flex items-center justify-center'>
              <BiMapAlt className='h-8 w-8 text-[var(--background)]' />
            </div>
            <h3 className='text-2xl md:text-3xl font-bold'>501 S Cherry St, Denver, CO 80246, USA, Denver, CO 80246, United States.</h3>
          </div>
          <div className='flex items-center gap-4 flex-col'>
            <div className='bg-[var(--primary)]  rounded-2xl w-16 h-16 flex items-center justify-center'>
              <AiOutlineMail className='h-8 w-8 text-[var(--background)]' />
            </div>
            <h3 className='text-2xl md:text-3xl font-bold'>SolChat.official@gmail.com</h3>
          </div>
        </div>

        <form className='flex flex-col gap-6 mt-16' id='contact-form' method='post' action='#'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='name' className='form-label fs-lg fw-medium'>
              Your name*
            </label>
            <div className='flex items-center gap-2 border border-[var(--divider)] rounded-md p-2'>
              <BsPerson className='h-4 w-4 text-gray-600' />
              <input type='text' id='name' name='name' className='placeholder:text-gray-600' placeholder="What's your name?" required />
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='email' className='form-label fs-lg fw-medium'>
              Email Address*
            </label>
            <div className='flex items-center gap-2 border border-[var(--divider)] rounded-md p-2'>
              <AiOutlineMail className='h-4 w-4 text-gray-600' />
              <input type='email' id='email' name='email' className='placeholder:text-gray-600' placeholder='Enter Your Email' required />
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='phone' className='form-label fs-lg fw-medium'>
              Phone Number
            </label>
            <div className='flex items-center gap-2 border border-[var(--divider)] rounded-md p-2'>
              <BsPhone className='h-4 w-4 text-gray-600' />
              <input type='tel' id='phone' name='phone' className='placeholder:text-gray-600' placeholder='Phone Number' />
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='message' className='form-label fs-lg fw-medium'>
              Your Message*
            </label>
            <div className='flex items-center gap-2 border border-[var(--divider)] rounded-md p-2'>
              <textarea id='message' name='message' className='placeholder:text-gray-600' placeholder='Write here your details message' rows={4} required></textarea>
            </div>
          </div>
          <div className='flex justify-start'>
            <button type='submit' className='bg-[var(--primary)] text-[var(--background)] rounded-md px-4 py-2'>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactContent;
