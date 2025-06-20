'use client';

import React, { Suspense, lazy, ComponentType } from 'react';

interface LazyLoadProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function LazyLoadWrapper({ children, fallback = <div className='min-h-[100px] animate-pulse bg-gray-100 rounded-md' /> }: LazyLoadProps) {
  return <Suspense fallback={fallback}>{children}</Suspense>;
}

LazyLoadWrapper.displayName = 'LazyLoadWrapper';

// 简化版本的懒加载函数，避免复杂的类型问题
export function lazyLoad<P extends object>(importFunc: () => Promise<{ default: ComponentType<P> }>, options?: { fallback?: React.ReactNode }) {
  const LazyComponent = lazy(importFunc);

  const LazyLoadComponent = (props: P) => (
    <LazyLoadWrapper fallback={options?.fallback}>
      <LazyComponent {...(props as React.ComponentProps<typeof LazyComponent>)} />
    </LazyLoadWrapper>
  );

  LazyLoadComponent.displayName = 'LazyLoadedComponent';

  return LazyLoadComponent;
}
