'use client';

import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';

const reviewsContent = [
  {
    avatar: '/images/review/1.png',
    name: 'John Davis',
    review: 'SOL-LIME has completely changed how I manage my digital assets. It&apos;s user-friendly and intuitive, which makes it an absolute breeze to use.',
  },
  {
    avatar: '/images/review/2.png',
    name: 'Linda Smith',
    review: 'The way SOL-LIME simplifies the complex world of web3 is amazing. It truly is a game-changer for me!',
  },
  {
    avatar: '/images/review/3.png',
    name: 'Mark Thompson',
    review: 'Navigating the blockchain has always seemed daunting, but with SOL-LIME , I feel secure and confident. The security checks are robust and reliable.',
  },
  {
    avatar: '/images/review/4.png',
    name: 'Emily Roberts',
    review: 'SOL-LIME is simply amazing! It&apos;s the perfect tool for newcomers to the crypto world like me. I appreciate its ease of use and comprehensive features.',
  },
  {
    avatar: '/images/review/1.png',
    name: 'Peter Brown',
    review: 'I&apos;m genuinely thrilled with SOL-LIME . It&apos;s been instrumental in helping me understand and navigate the crypto space effectively.',
  },
  {
    avatar: '/images/review/1.png',
    name: 'Samantha Kim',
    review: 'The token swapping feature in SOL-LIME is seamless and straightforward. It&apos;s become my go-to tool for managing my crypto assets.',
  },
  {
    avatar: '/images/review/2.png',
    name: 'Luke Miller',
    review: 'Keeping up with the fast-paced crypto market trends has never been easier, all thanks to SOL-LIME !',
  },
  {
    avatar: '/images/review/3.png',
    name: 'Cynthia Harris',
    review: 'SOL-LIME has become my trusted partner for all things blockchain. Its array of features and intuitive design is nothing short of awesome!',
  },
  {
    avatar: '/images/review/4.png',
    name: 'Anthony Johnson',
    review: 'SOL-LIME is a lifesaver in the truest sense. It makes the web3 ecosystem accessible and easy to understand, even for a non-techie like me.',
  },
  {
    avatar: '/images/review/1.png',
    name: 'Grace Lee',
    review: 'Managing my crypto transactions has been a fantastic experience with SOL-LIME . It&apos;s extremely user-friendly and simplifies every process.',
  },
];

const ReviewsScroll = () => {
  return (
    <div className='w-full overflow-hidden'>
      <div className='flex gap-4 cursor-grab'>
        {reviewsContent.map((item, index) => (
          <div key={index} className='w-[90vw] max-w-[400px] min-w-[300px] bg-card-bg rounded-2xl p-6 border border-divider border-opacity-10 flex-shrink-0'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-12 h-12 rounded-full overflow-hidden'>
                <Image src={item.avatar} alt={item.name} width={48} height={48} className='w-full h-full object-cover' />
              </div>
              <div>
                <h6 className=' mb-1'>{item.name}</h6>
              </div>
            </div>
            <div>
              <div className='flex items-center gap-1 mb-3'>
                {[...Array(5)].map((_, i) => (
                  <AiFillStar key={i} className='text-primary' />
                ))}
              </div>
              <p className='mb-0 text-gray-500'>{item?.review}</p>
            </div>
          </div>
        ))}

        {/* 复制评论卡片以实现无缝滚动效果 */}
        {reviewsContent.map((item, index) => (
          <div key={`clone-${index}`} className='w-[90vw] max-w-[400px] min-w-[300px] bg-card-bg rounded-2xl p-6 border border-divider border-opacity-10 flex-shrink-0'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-12 h-12 rounded-full overflow-hidden'>
                <Image src={item.avatar} alt={item.name} width={48} height={48} className='w-full h-full object-cover' />
              </div>
              <div>
                <h6 className=' mb-1'>{item.name}</h6>
              </div>
            </div>
            <div>
              <div className='flex items-center gap-1 mb-3'>
                {[...Array(5)].map((_, i) => (
                  <AiFillStar key={i} className='text-primary' />
                ))}
              </div>
              <p className='mb-0 text-gray-500'>{item?.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <section className='overflow-hidden w-screen'>
      <div className='container mx-auto py-10 px-6 '>
        <div>
          <h1>
            <span className='text-primary'>SOL-LIME .</span>
            Received{' '}
            <span className='inline-block'>
              <Image src='/images/icons/star.png' className='inline-block w-10' alt='' width={1000} height={1000} />
            </span>{' '}
            <span>4.8/5 Stars in Over 10,000+ Reviews.</span>
          </h1>
        </div>
      </div>
      <ReviewsScroll />
      <div className='mt-4'>
        <ReviewsScroll />
      </div>
    </section>
  );
};

export default Reviews;
