'use client';

import { ReactNode, useEffect, useState } from 'react';
import { motion, useAnimation, Variants, LazyMotion, domAnimation } from 'framer-motion';

interface AnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

// 客户端专用组件包装器 - 确保组件只在客户端渲染
export const ClientOnly = ({ children, fallback = null }: { children: ReactNode; fallback?: ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

// 优化的动画加载 - 使用LazyMotion延迟加载动画功能
export const OptimizedMotion = ({ children }: { children: ReactNode }) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
};

// 淡入动画组件
export const FadeIn = ({ children, delay = 0, duration = 0.5, className = '' }: AnimationProps) => {
  const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration, delay } },
  };

  return (
    <motion.div initial='hidden' animate='visible' variants={variants} className={className}>
      {children}
    </motion.div>
  );
};

// 从下方滑入动画组件
export const SlideUp = ({ children, delay = 0, duration = 0.5, className = '' }: AnimationProps) => {
  const variants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration, delay } },
  };

  return (
    <motion.div initial='hidden' animate='visible' variants={variants} className={className}>
      {children}
    </motion.div>
  );
};

// 从左侧滑入动画组件
export const SlideRight = ({ children, delay = 0, duration = 0.5, className = '' }: AnimationProps) => {
  const variants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration, delay } },
  };

  return (
    <motion.div initial='hidden' animate='visible' variants={variants} className={className}>
      {children}
    </motion.div>
  );
};

// 从右侧滑入动画组件
export const SlideLeft = ({ children, delay = 0, duration = 0.5, className = '' }: AnimationProps) => {
  const variants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration, delay } },
  };

  return (
    <motion.div initial='hidden' animate='visible' variants={variants} className={className}>
      {children}
    </motion.div>
  );
};

// 缩放动画组件
export const Scale = ({ children, delay = 0, duration = 0.5, className = '' }: AnimationProps) => {
  const variants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration, delay } },
  };

  return (
    <motion.div initial='hidden' animate='visible' variants={variants} className={className}>
      {children}
    </motion.div>
  );
};

// 滚动触发动画组件 - SSR安全版本
interface AnimateOnScrollProps extends AnimationProps {
  threshold?: number;
  once?: boolean;
  animation?: 'fadeIn' | 'slideUp' | 'slideRight' | 'slideLeft' | 'scale';
}

export const AnimateOnScroll = ({ children, delay = 0, duration = 0.5, className = '', threshold = 0.1, once = true, animation = 'fadeIn' }: AnimateOnScrollProps) => {
  const controls = useAnimation();
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!ref || !isMounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold, isMounted]);

  // 选择动画变体
  const getVariants = (): Variants => {
    switch (animation) {
      case 'slideUp':
        return { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration, delay } } };
      case 'slideRight':
        return { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration, delay } } };
      case 'slideLeft':
        return { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration, delay } } };
      case 'scale':
        return { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration, delay } } };
      case 'fadeIn':
      default:
        return { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration, delay } } };
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  if (!isMounted) {
    // 服务端渲染或客户端首次渲染时的回退
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={setRef} initial='hidden' animate={controls} variants={getVariants()} className={className}>
      {children}
    </motion.div>
  );
};

// 支持 prefers-reduced-motion 的高阶组件
export const withReducedMotion = <P extends { children?: ReactNode }>(Component: React.ComponentType<P>) => {
  const WithReducedMotion = (props: P) => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      const onChange = () => setPrefersReducedMotion(mediaQuery.matches);
      mediaQuery.addEventListener('change', onChange);

      return () => mediaQuery.removeEventListener('change', onChange);
    }, []);

    if (!isMounted) {
      // 服务端渲染时的回退
      return <div>{props.children}</div>;
    }

    if (prefersReducedMotion) {
      return <div>{props.children}</div>;
    }

    return <Component {...props} />;
  };

  WithReducedMotion.displayName = `WithReducedMotion(${Component.displayName || Component.name || 'Component'})`;

  return WithReducedMotion;
};

// 交错动画容器 - SSR安全版本
interface StaggerContainerProps extends AnimationProps {
  staggerChildren?: number;
}

export const StaggerContainer = ({ children, delay = 0, duration = 0.5, className = '', staggerChildren = 0.1 }: StaggerContainerProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration, delay, staggerChildren, delayChildren: delay } },
  };

  if (!isMounted) {
    // 服务端渲染时的回退
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div initial='hidden' animate='visible' variants={variants} className={className}>
      {children}
    </motion.div>
  );
};

// 子元素动画，配合StaggerContainer使用
export const StaggerItem = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
};

// 脉冲动画组件 - SSR安全版本
export const Pulse = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}>
      {children}
    </motion.div>
  );
};

// 浮动动画组件 - SSR安全版本
export const Float = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}>
      {children}
    </motion.div>
  );
};
