'use client';

import React from 'react';
import { AnimationProvider } from '@/components/animations/AnimationContext';

interface ClientProvidersProps {
  children: React.ReactNode;
}

const ClientProviders: React.FC<ClientProvidersProps> = ({ children }) => {
  return <AnimationProvider>{children}</AnimationProvider>;
};

export default ClientProviders;
