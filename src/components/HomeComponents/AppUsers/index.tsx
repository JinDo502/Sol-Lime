'use client';

import { Icon1, Icon2, Icon3 } from './Icon';

const appUsersContent = [
  {
    title: 'Blockchain Enthusiasts',
    description: 'Individuals interested in navigating the web3 ecosystem effortlessly and securely.',
    icon: <Icon1 />,
  },
  {
    title: 'Crypto Traders',
    description: 'Crypto traders who need to manage their digital assets more efficiently and stay updated with market trends.',
    icon: <Icon2 />,
  },
  {
    title: 'Web3 Developers',
    description: 'Developers who want a user-friendly platform to interact with blockchain technologies.',
    icon: <Icon3 />,
  },
];

const AppUsers = () => {
  return (
    <section className='py-20 px-8 md:px-0 bg-[var(--card-bg)]'>
      <div className='container mx-auto'>
        <div className='text-center flex flex-col items-center gap-4'>
          <h1 className='text-3xl md:text-4xl font-bold'>
            Who are the users of&nbsp;
            <span className='text-[var(--primary)]'>SOL-LIME</span> ?
          </h1>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 pt-15 md:gap-0 md:divide-x-1 md:divide-[var(--divider)]'>
        {appUsersContent.map((item) => {
          return (
            <div key={item?.title} className='flex flex-col items-start md:items-center gap-4 md:px-5'>
              <div className='w-14 h-14 text-[var(--background)] bg-[var(--primary)] rounded-2xl p-2'>{item.icon}</div>
              <div className='flex flex-col items-start gap-2 md:items-center text-center'>
                <h4 className='text-xl font-bold'>{item.title}</h4>
                <p className='mb-0 text-gray-400 text-sm'>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 分隔线动画 */}
      <div className='hidden md:flex justify-between mt-10'>
        {[0, 1].map((_, index) => (
          <div key={index} className='h-[1px] bg-[var(--divider)] opacity-50' style={{ width: '32%' }} />
        ))}
      </div>
    </section>
  );
};

export default AppUsers;
