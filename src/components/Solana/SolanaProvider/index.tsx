'use client';

import React, { FC, ReactNode, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';
import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare';
import { WalletConnectWalletAdapter } from '@walletconnect/solana-adapter';
interface SolanaProviderProps {
  children: ReactNode;
}

export const SolanaProvider: FC<SolanaProviderProps> = ({ children }) => {
  const network = WalletAdapterNetwork.Devnet;
  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // 根据当前环境确定URL
  const appUrl = useMemo(() => {
    if (typeof window !== 'undefined') {
      return window.location.origin;
    }
    return 'https://solime.xyz'; // 服务器端渲染时的默认值
  }, []);

  const wallets = useMemo(
    () => [
      new SolflareWalletAdapter(),
      new WalletConnectWalletAdapter({
        network: network,
        options: {
          projectId: '9c43d95019f023b93743bf332fbbbd5a',
          metadata: {
            name: 'Solime',
            description: 'Solime',
            url: appUrl,
            icons: [`${appUrl}/images/logo.png`],
          },
        },
      }),
    ],
    [network, appUrl]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
