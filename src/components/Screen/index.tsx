'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';

const Screen = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      {isDark ? (
        <Image
          src='/images/screens/chat_dark.jpg'
          alt=''
          width={1000}
          height={1000}
          className='mt-12 w-full rounded-xl border border-divider shadow-lg overflow-hidden relative z-1'
        />
      ) : (
        <Image
          src='/images/screens/chat_light.jpg'
          alt=''
          width={1000}
          height={1000}
          className='mt-12 w-full rounded-xl border border-divider shadow-lg overflow-hidden relative z-1'
        />
      )}
    </>
  );
};

export default Screen;
