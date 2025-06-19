'use client';

import { useState, useEffect } from 'react';
import { motion, Variants, TargetAndTransition } from 'framer-motion';

// 基本动画变体
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

// 动画HOC - 基础版本
export const withAnimation = <P extends object>(
  Component: React.ComponentType<P>,
  animationVariants: Variants = fadeInVariants,
  options?: {
    delay?: number;
    duration?: number;
    staggerChildren?: number;
    type?: 'spring' | 'tween' | 'inertia';
    stiffness?: number;
    damping?: number;
  }
) => {
  const WithAnimation = (props: P) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    if (!isMounted) {
      // 服务端渲染时的回退
      return <Component {...props} />;
    }

    return (
      <motion.div
        initial='hidden'
        animate='visible'
        variants={animationVariants}
        transition={{
          delay: options?.delay || 0,
          duration: options?.duration || 0.5,
          type: options?.type || 'tween',
          stiffness: options?.stiffness,
          damping: options?.damping,
          staggerChildren: options?.staggerChildren,
        }}
      >
        <Component {...props} />
      </motion.div>
    );
  };

  WithAnimation.displayName = `WithAnimation(${Component.displayName || Component.name || 'Component'})`;

  return WithAnimation;
};

// 滚动触发动画HOC
export const withScrollAnimation = <P extends object>(
  Component: React.ComponentType<P>,
  animationVariants: Variants = fadeInVariants,
  options?: {
    delay?: number;
    duration?: number;
    threshold?: number;
    once?: boolean;
    type?: 'spring' | 'tween' | 'inertia';
    stiffness?: number;
    damping?: number;
  }
) => {
  const WithScrollAnimation = (props: P) => {
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
        { threshold: options?.threshold || 0.1 }
      );

      observer.observe(ref);
      return () => observer.disconnect();
    }, [ref, isMounted]);

    if (!isMounted) {
      // 服务端渲染时的回退
      return <Component {...props} />;
    }

    return (
      <motion.div
        ref={setRef}
        initial='hidden'
        animate={inView ? 'visible' : options?.once ? undefined : 'hidden'}
        variants={animationVariants}
        transition={{
          delay: options?.delay || 0,
          duration: options?.duration || 0.5,
          type: options?.type || 'tween',
          stiffness: options?.stiffness,
          damping: options?.damping,
        }}
      >
        <Component {...props} />
      </motion.div>
    );
  };

  WithScrollAnimation.displayName = `WithScrollAnimation(${Component.displayName || Component.name || 'Component'})`;

  return WithScrollAnimation;
};

// 悬停动画HOC
export const withHoverAnimation = <P extends object>(
  Component: React.ComponentType<P>,
  hoverVariants?: {
    initial?: TargetAndTransition;
    hover?: TargetAndTransition;
    tap?: TargetAndTransition;
  },
  options?: {
    duration?: number;
    type?: 'spring' | 'tween' | 'inertia';
    stiffness?: number;
    damping?: number;
  }
) => {
  const WithHoverAnimation = (props: P) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    if (!isMounted) {
      // 服务端渲染时的回退
      return <Component {...props} />;
    }

    return (
      <motion.div
        whileHover={hoverVariants?.hover || { scale: 1.05 }}
        whileTap={hoverVariants?.tap || { scale: 0.95 }}
        initial={hoverVariants?.initial}
        transition={{
          duration: options?.duration || 0.2,
          type: options?.type || 'spring',
          stiffness: options?.stiffness || 300,
          damping: options?.damping || 10,
        }}
      >
        <Component {...props} />
      </motion.div>
    );
  };

  WithHoverAnimation.displayName = `WithHoverAnimation(${Component.displayName || Component.name || 'Component'})`;

  return WithHoverAnimation;
};

// 组合多个HOC
export const composeAnimations = <P extends object>(...hocs: Array<(component: React.ComponentType<P>) => React.ComponentType<P>>) => {
  return (BaseComponent: React.ComponentType<P>) => {
    return hocs.reduceRight((AccumulatedComponent, hoc) => {
      return hoc(AccumulatedComponent);
    }, BaseComponent);
  };
};
