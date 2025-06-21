'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BsPlusLg } from 'react-icons/bs';
// import { OKXWallet, SolanaWeb3ConfigProvider, WalletConnectWallet } from '@ant-design/web3-solana';
// import { ConnectButton, Connector } from '@ant-design/web3';
// import { ConfigProvider, theme as antdTheme } from 'antd';
// import { useTheme } from 'next-themes';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

// const customToken = {
//   dark: {
//     token: { colorPrimary: '#6C22A2', colorLink: '#6C22A2', colorLinkHover: '#6C22A2' },
//     components: {
//       Modal: {
//         contentBg: '#171825',
//         footerBg: '#171825',
//         headerBg: '#171825',
//       },
//     },
//   },
//   light: {
//     token: { colorPrimary: '#ba40ed', colorLink: '#ba40ed', colorLinkHover: '#ba40ed' },
//     components: {
//       Modal: {
//         contentBg: '#ffffff',
//         footerBg: '#ffffff',
//         headerBg: '#ffffff',
//       },
//     },
//   },
// };

const Left = () => {
  // const { theme } = useTheme();

  return (
    <div className='px-6 md:bg-card-bg flex items-center justify-between pr-0 w-[calc(100%-56px)] md:pr-6 md:w-max flex-row md:flex-col flex absolute md:relative'>
      {/* Logo */}
      <Link href='/' className='flex items-center my-4 md:border-b md:border-divider pb-4 gap-2'>
        <div className='h-10 w-10 md:h-14 md:w-14'>
          <Image src='/images/logo.png' alt='SOLIME-Logo' className='h-full object-contain aspect-square' height={75} width={75} />
        </div>
        <h1 className='text-xl lg:text-3xl font-bold'>SOLIME</h1>
      </Link>
      {/* Header */}
      <div className='gap-4 items-center justify-between bg-primary/10 py-2 px-4 rounded-lg h-max hidden md:flex'>
        <span>New Chat</span> <BsPlusLg className='text-4xl p-2 bg-primary text-background rounded-lg' />
      </div>

      {/* Chat List */}
      <div className='flex-1 hidden md:block'></div>

      {/* Wallt Btn */}
      <div className='mb-4'>
        {/* <ConfigProvider
          theme={{
            algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : undefined,
            token: customToken[theme === 'dark' ? 'dark' : 'light']?.token,
            components: customToken[theme === 'dark' ? 'dark' : 'light']?.components,
          }}
        >
          <SolanaWeb3ConfigProvider
            autoConnect
            balance
            autoAddRegisteredWallets
            wallets={[OKXWallet(), WalletConnectWallet()]}
            walletConnect={{ projectId: '18b068f4236bba0588d15a6236ec00e4' }}
          >
            <Connector modalProps={{ mode: 'simple', group: false }}>
              <ConnectButton size='small' className='custom-button w-full' />
            </Connector>
          </SolanaWeb3ConfigProvider>
        </ConfigProvider> */}
        <WalletMultiButton className='w-full' />
      </div>
    </div>
  );
};

export default Left;
