'use client';

import { memo } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { AiFillStar } from 'react-icons/ai';
import './index.css';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { AnimateIn, springs } from '@/animations';
import { getImageProps } from '@/utils/imageUtils';
import { useMemoizedValue } from '@/utils/memoUtils';

const reviewsContent = [
  {
    avatar: '/images/review/1.png',
    name: 'John Davis',
    review: "SOLIME has completely changed how I manage my digital assets. It's user-friendly and intuitive, which makes it an absolute breeze to use.",
  },
  {
    avatar: '/images/review/2.png',
    name: 'Linda Smith',
    review: 'The way SOLIME simplifies the complex world of web3 is amazing. It truly is a game-changer for me!',
  },
  {
    avatar: '/images/review/3.png',
    name: 'Mark Thompson',
    review: 'Navigating the blockchain has always seemed daunting, but with SOLIME , I feel secure and confident. The security checks are robust and reliable.',
  },
  {
    avatar: '/images/review/4.png',
    name: 'Emily Roberts',
    review: "SOLIME is simply amazing! It's the perfect tool for newcomers to the crypto world like me. I appreciate its ease of use and comprehensive features.",
  },
  {
    avatar: '/images/review/5.png',
    name: 'David Johnson',
    review:
      "I've been using SOLIME for a few months now, and it has completely transformed my experience in the crypto world. The platform is user-friendly and secure, making it a must-have for anyone looking to navigate the blockchain.",
  },
];

const StarRating = memo(() => {
  return (
    <motion.div className='flex items-center gap-1 mb-3 text-lg' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <motion.div key={index} animate={{ scale: [1, 1.2, 1] }} transition={{ delay: index * 0.1, duration: 2, repeat: Infinity, repeatDelay: 5 }}>
            <AiFillStar className='text-primary' />
          </motion.div>
        ))}
    </motion.div>
  );
});

StarRating.displayName = 'StarRating';

const ReviewCard = memo(({ item }: { item: (typeof reviewsContent)[0] }) => {
  return (
    <motion.div
      className='bg-card-bg rounded-2xl p-6 border border-divider border-opacity-10 h-full'
      whileHover={{ borderColor: 'var(--color-primary)' }}
      transition={springs.soft}
    >
      <div className='flex items-center gap-4 mb-6'>
        <motion.div className='w-12 h-12 rounded-full overflow-hidden' whileHover={{ scale: 1.1 }} transition={springs.bouncy}>
          <Image alt={item.name} {...getImageProps({ src: item.avatar, className: 'w-full h-full object-cover', width: 48, height: 48 })} />
        </motion.div>
        <h6 className='mb-1 text-lg font-bold'>{item.name}</h6>
      </div>
      <div className='flex flex-col gap-3'>
        <StarRating />
        <p className='mb-0 text-gray-500'>{item?.review}</p>
      </div>
    </motion.div>
  );
});

ReviewCard.displayName = 'ReviewCard';

const Reviews = () => {
  const swiperBreakpoints = useMemoizedValue(() => ({ 768: { slidesPerView: 2, spaceBetween: 10 }, 1024: { slidesPerView: 3, spaceBetween: 10 } }), []);

  return (
    <section className='py-10 px-6'>
      <div className='container mx-auto'>
        <AnimateIn>
          <h1 className='text-3xl md:text-4xl font-bold text-center'>
            <motion.span className='text-primary' whileHover={{ scale: 1.1 }} transition={springs.bouncy}>
              SOLIME .
            </motion.span>
            &nbsp;&nbsp;Received
            <motion.div className='inline-block w-10 h-10' animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
              <Image alt='Star rating' {...getImageProps({ src: '/images/icons/star.png', className: 'w-10 h-10', width: 40, height: 40, priority: true })} />
            </motion.div>
            4.8/5 Stars in Over 10,000+ Reviews.
          </h1>
        </AnimateIn>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, ...springs.soft }}>
          <Swiper
            slidesPerView='auto'
            spaceBetween={10}
            breakpoints={swiperBreakpoints}
            modules={[Pagination, Autoplay]}
            pagination={{ dynamicBullets: true, clickable: true }}
            className='mt-10 h-max'
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
          >
            {reviewsContent.map((item, index) => (
              <SwiperSlide key={index} className='!h-auto'>
                <ReviewCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Reviews);
