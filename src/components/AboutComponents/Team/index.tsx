import Image from 'next/image';

const teamContent = [
  {
    name: 'Toni Ulaisi',
    title: 'Founder',
    image: '/images/team/1.png',
  },
  {
    name: 'Eric Dizon',
    title: 'Technical Designer',
    image: '/images/team/2.png',
  },
  {
    name: 'Clara James',
    title: 'Technical Designer',
    image: '/images/team/3.png',
  },
  {
    name: 'Holly Linenberger',
    title: 'Marketing Advisor',
    image: '/images/team/4.png',
  },
  {
    name: 'Redur Rebwar',
    title: 'Product Designer',
    image: '/images/team/5.png',
  },
  {
    name: 'Verdiana M.',
    title: 'Product Designer',
    image: '/images/team/6.png',
  },
  {
    name: 'Sarim Akram',
    title: 'Marketing Manager',
    image: '/images/team/7.png',
  },
  {
    name: 'Dion Yoo',
    title: 'Marketing Manager',
    image: '/images/team/8.png',
  },
];

const Team = () => {
  return (
    <section className='py-10 px-6'>
      <div className='container mx-auto'>
        <h1 className='text-foreground text-center text-3xl md:text-4xl font-bold mb-10'>
          <span className='text-primary'>SOL-LIME </span> Powered by a Team of Web3 Enthusiasts
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8'>
          {teamContent.map((item) => {
            return (
              <div className='flex flex-col items-center gap-4' key={item.name}>
                <Image src={item.image} alt='' width={1000} height={1000} className='rounded-full w-1/3' />
                <h4 className='text-xl font-bold text-foreground'>{item.name}</h4>
                <p className='text-sm text-gray-400 text-center'>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
