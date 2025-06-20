import ThemeModeButton from '@/components/ThemeModeButton';
import { BsBezier, BsCodeSlash, BsSearch, BsSend } from 'react-icons/bs';

const guide1 = [
  { title: 'Instruction', icon: <BsCodeSlash /> },
  { title: 'Query', icon: <BsSearch /> },
  { title: 'Workflow', icon: <BsBezier /> },
];

const guide2 = ['show my assets', "what's zkSync?", "what's BAYC?", 'Crypot influeecners on twitter', 'Linea testnet Interaction'];

const Center = () => {
  return (
    <div className='md:flex-1 flex flex-col md:w-auto w-screen'>
      {/* Header */}
      <div className='w-full p-4 flex justify-end'>
        <ThemeModeButton />
      </div>

      <div className='px-6 py-4 flex flex-1 flex-col'>
        {/* title */}
        <div className='text-4xl md:text-5xl text-primary font-bold text-center mb-20 mt-10'>Welcome To SOLIME</div>

        {/* guide */}
        <div className='flex-1'>
          <div className='flex gap-4 md:gap-10 w-full md:w-1/2 justify-between mx-auto'>
            {guide1?.map((item) => (
              <div key={item?.title} className='flex items-center flex-col px-6 md:px-0'>
                <div className='text-3xl md:text-4xl text-primary '>{item?.icon}</div>
                <span className='text-backgrount md:text-2xl'>{item?.title}</span>
              </div>
            ))}
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-15 md:w-2/3 w-full mx-auto'>
            {guide2?.map((item) => (
              <div key={item} className='px-4 py-2 bg-primary text-background w-full h-max rounded-full mx-auto text-center'>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* input */}
        <form action='#'>
          <div className='flex items-stretch w-full'>
            <input type='email' className='flex-1 w-full border border-r-0 border-divider rounded-s-md p-2' placeholder='' />
            <div dir='rtl' className='bg-primary rounded-s-md px-4 flex items-center justify-center'>
              <BsSend className='text-background' />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Center;
