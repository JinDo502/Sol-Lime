'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 动画上下文类型
interface AnimationContextType {
  prefersReducedMotion: boolean;
  animationsEnabled: boolean;
  toggleAnimations: () => void;
  setAnimationSpeed: (speed: 'slow' | 'normal' | 'fast') => void;
  animationSpeed: 'slow' | 'normal' | 'fast';
  getAnimationDuration: () => number;
}

// 默认上下文值，用于服务端渲染
const defaultContextValue: AnimationContextType = {
  prefersReducedMotion: false,
  animationsEnabled: true,
  toggleAnimations: () => {},
  setAnimationSpeed: () => {},
  animationSpeed: 'normal',
  getAnimationDuration: () => 0.5,
};

// 创建上下文
const AnimationContext = createContext<AnimationContextType>(defaultContextValue);

// 上下文提供者组件
interface AnimationProviderProps {
  children: ReactNode;
  initialAnimationsEnabled?: boolean;
}

export const AnimationProvider = ({ children, initialAnimationsEnabled = true }: AnimationProviderProps) => {
  // 动画状态
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(initialAnimationsEnabled);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');
  const [isMounted, setIsMounted] = useState(false);

  // 检测用户的减少动画偏好
  useEffect(() => {
    setIsMounted(true);

    try {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const updateMotionPreference = () => {
        setPrefersReducedMotion(mediaQuery.matches);
        if (mediaQuery.matches) {
          setAnimationsEnabled(false);
        }
      };

      updateMotionPreference();
      mediaQuery.addEventListener('change', updateMotionPreference);

      return () => {
        mediaQuery.removeEventListener('change', updateMotionPreference);
      };
    } catch {
      // 在服务端渲染环境中，window对象不可用
      console.warn('MediaQuery API not available in this environment');
      return () => {};
    }
  }, []);

  // 切换动画开关
  const toggleAnimations = () => {
    setAnimationsEnabled((prev) => !prev);
  };

  // 根据速度设置获取动画持续时间
  const getAnimationDuration = (): number => {
    switch (animationSpeed) {
      case 'slow':
        return 1.0;
      case 'fast':
        return 0.3;
      case 'normal':
      default:
        return 0.5;
    }
  };

  // 上下文值
  const contextValue: AnimationContextType = {
    prefersReducedMotion,
    animationsEnabled: isMounted ? animationsEnabled : false, // 服务端渲染时禁用动画
    toggleAnimations,
    setAnimationSpeed,
    animationSpeed,
    getAnimationDuration,
  };

  return <AnimationContext.Provider value={contextValue}>{children}</AnimationContext.Provider>;
};

// 自定义钩子，用于在组件中访问动画上下文
export const useAnimation = (): AnimationContextType => {
  const context = useContext(AnimationContext);
  return context;
};

// 动画包装器组件，根据上下文状态有条件地应用动画
interface ConditionalAnimationProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export const ConditionalAnimation = ({ children, fallback }: ConditionalAnimationProps) => {
  const { animationsEnabled, prefersReducedMotion } = useAnimation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !animationsEnabled || prefersReducedMotion) {
    return <>{fallback || children}</>;
  }

  return <>{children}</>;
};

// 导出默认提供者
export default AnimationProvider;
