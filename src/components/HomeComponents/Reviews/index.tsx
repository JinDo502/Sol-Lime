'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { AiFillStar } from 'react-icons/ai';
import './index.css';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { AnimateOnScroll } from '@/components/animations';

const reviewsContent = [
  {
    avatar: '/images/review/1.png',
    name: 'John Davis',
    review: "SOL-LIME has completely changed how I manage my digital assets. It's user-friendly and intuitive, which makes it an absolute breeze to use.",
  },
  {
    avatar: '/images/review/2.png',
    name: 'Linda Smith',
    review: 'The way SOL-LIME simplifies the complex world of web3 is amazing. It truly is a game-changer for me!',
  },
  {
    avatar: '/images/review/3.png',
    name: 'Mark Thompson',
    review: 'Navigating the blockchain has always seemed daunting, but with SOL-CHAT, I feel secure and confident. The security checks are robust and reliable.',
  },
  {
    avatar: '/images/review/4.png',
    name: 'Emily Roberts',
    review: "SOL-LIME is simply amazing! It's the perfect tool for newcomers to the crypto world like me. I appreciate its ease of use and comprehensive features.",
  },
  {
    avatar: '/images/review/5.png',
    name: 'David Johnson',
    review:
      "I've been using SOL-LIME for a few months now, and it has completely transformed my experience in the crypto world. The platform is user-friendly and secure, making it a must-have for anyone looking to navigate the blockchain.",
  },
];

const StarRating = () => {
  return (
    <div className='flex items-center gap-1 mb-3 text-lg'>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, delay: index * 0.3, repeat: Infinity, repeatDelay: 3 }}
          >
            <AiFillStar className='text-[var(--primary)]' />
          </motion.div>
        ))}
    </div>
  );
};

const Reviews = () => {
  return (
    <section className='pt-20 pb-10 px-8 md:px-0'>
      <div className='container mx-auto'>
        <AnimateOnScroll animation='fadeIn'>
          <h1 className='text-3xl md:text-4xl font-bold text-center'>
            <span className='text-[var(--primary)]'>SOL-CHAT.</span>&nbsp;&nbsp;Received
            <motion.div className='inline-block w-10 h-10' initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
              <Image className='w-10 h-10' src='/images/icons/star.png' alt='' width={16} height={16} />
            </motion.div>
            4.8/5 Stars in Over 10,000+ Reviews.
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll animation='slideUp' delay={0.3}>
          <Swiper
            slidesPerView='auto'
            spaceBetween={10}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination, Autoplay]}
            pagination={{ dynamicBullets: true, clickable: true }}
            className='mt-10 h-max'
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {reviewsContent.map((item, index) => (
              <SwiperSlide key={index} className='!h-auto'>
                <motion.div
                  className='bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--divider)] border-opacity-10 h-full'
                  whileHover={{
                    scale: 1.03,
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    borderColor: 'var(--primary)',
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * index,
                  }}
                >
                  <div className='flex items-center gap-4 mb-6'>
                    <motion.div className='w-12 h-12 rounded-full overflow-hidden' whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                      <Image src={item.avatar} alt='' className='w-full h-full object-cover' width={48} height={48} />
                    </motion.div>
                    <h6 className='mb-1 text-lg font-bold'>{item.name}</h6>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <StarRating />
                    <p className='mb-0 text-gray-500'>{item?.review}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Reviews;
