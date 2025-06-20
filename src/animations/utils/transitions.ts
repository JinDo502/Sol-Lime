import { Transition, Easing } from 'framer-motion';

// 基础过渡配置
export const baseTransition: Transition = {
  ease: 'easeInOut',
  duration: 0.3,
};

// 快速过渡配置
export const fastTransition: Transition = {
  ease: 'easeOut',
  duration: 0.2,
};

// 慢速过渡配置
export const slowTransition: Transition = {
  ease: 'easeInOut',
  duration: 0.6,
};

// 延迟过渡配置
export const delayedTransition = (delay: number = 0.2): Transition => ({
  ...baseTransition,
  delay,
});

// 创建自定义过渡配置
export const createTransition = (duration: number = 0.3, ease: Easing | Easing[] = 'easeInOut', delay: number = 0, times?: number[]): Transition => ({
  duration,
  ease,
  delay,
  times,
});

// 创建交错动画的过渡配置
export const createStaggerTransition = (staggerChildren: number = 0.1, delayChildren: number = 0, staggerDirection: number = 1): Transition => ({
  staggerChildren,
  delayChildren,
  staggerDirection,
});

// 常用缓动函数
export const easings: Record<string, Easing | number[]> = {
  // 标准缓动
  easeInOut: 'easeInOut',
  easeOut: 'easeOut',
  easeIn: 'easeIn',

  // 自定义缓动曲线
  gentle: [0.4, 0.0, 0.2, 1],
  bounce: [0.175, 0.885, 0.32, 1.275],
  smooth: [0.25, 0.1, 0.25, 1],

  // 弹性缓动
  anticipate: [0.6, -0.28, 0.735, 0.045],
};

// 页面切换过渡配置
export const pageTransitions = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: baseTransition,
  },

  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: baseTransition,
  },

  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 },
    transition: baseTransition,
  },
};
