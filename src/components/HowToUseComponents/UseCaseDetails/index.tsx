import Image from 'next/image';
import { BsSend } from 'react-icons/bs';

const steps = [
  {
    image: '/images/screens/screen-1.jpg',
    title: 'Write Higher Converting Posts',
    description: [
      'Everyone has been there. Even the most seasoned and well-versed writers and content producers endure mental gaps. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate anyone exercitation incididunt aliquip deserunt reprehenderit elit laborum.  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt.',
      'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt.',
    ],
  },
  {
    image: '/images/screens/screen-1.jpg',
    title: 'Start creating powerful content, for blog post',
    description: [
      'Everyone has been there. Even the most seasoned and well-versed writers and content producers endure mental gaps. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate anyone exercitation incididunt aliquip deserunt reprehenderit elit laborum.  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt.',
      'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt.',
    ],
  },
  {
    image: '/images/screens/screen-1.jpg',
    title: 'Start creating powerful content, for blog post',
    description: [
      'Everyone has been there. Even the most seasoned and well-versed writers and content producers endure mental gaps. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate anyone exercitation incididunt aliquip deserunt reprehenderit elit laborum.  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt.',
      'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt.',
    ],
  },
];

const UseCaseDetails = () => {
  return (
    <section className='pt-10 pb-20 px-8'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-10 pt-10'>
          <div className='text-center text-lg-start'>
            <h1 className='text-3xl md:text-4xl font-bold mb-4'>Complete a blog entry in half the time.</h1>
            <p className='mb-8 text-gray-400'>With a few clicks of a button, you can create a whole outline, opening paragraph, and body for your blog.</p>
            <form action='#'>
              <div className='flex items-stretch'>
                <input type='email' className='flex-1 border border-r-0 border-[var(--divider)] rounded-s-md p-2' placeholder='Your email' />
                <div dir='rtl' className='bg-[var(--primary)] text-[var(--background)] rounded-s-md px-4 flex items-center justify-center'>
                  <BsSend className='text-[var(--background)]' />
                </div>
              </div>
            </form>
          </div>
          <div className='text-center'>
            <Image src='/images/screens/screen-3.png' alt='' className='img-fluid d-inline-block' width={1000} height={1000} />
          </div>
        </div>

        <hr className='border-top border-[var(--divider)] my-18' />

        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-3xl md:text-4xl font-bold mb-4'>How to use AI blog post generator to speed up your writing process.</h1>
            <p className='mb-4 text-gray-400'>
              The inability to write. Everyone has been there. Even the most seasoned and well-versed writers and content producers endure mental gaps. Nulla Lorem mollit cupidatat
              irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
            </p>
            <p className='mb-4 text-gray-400'>
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor
              cupidatat incididunt.
            </p>
          </div>

          {steps.map((step, index) => {
            return (
              <div key={step.title + index} className='flex flex-col gap-4'>
                <h4 className='text-2xl md:text-3xl font-bold'>
                  <span className='text-[var(--primary)]'>Step {index + 1}:</span> {step.title}
                </h4>
                {step.description.map((description, index) => {
                  return (
                    <p key={index} className='text-gray-400'>
                      {description}
                    </p>
                  );
                })}
                <Image src={step.image} alt='' className='rounded' width={1000} height={1000} />
              </div>
            );
          })}

          <p className='text-gray-400'>
            GenAI has been there. Even the most seasoned and well-versed writers and content producers endure mental gaps. Nulla Lorem mollit cupidatat irure. Laborum magna.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UseCaseDetails;
