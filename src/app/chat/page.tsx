import Left from '@/components/ChatComponents/Left';
import Center from '@/components/ChatComponents/Cneter';

const Chat = () => {
  return (
    <div className='w-screen h-screen box-border'>
      <div className='flex mx-auto h-full relative'>
        <Left />
        <Center />
      </div>
    </div>
  );
};

export default Chat;
