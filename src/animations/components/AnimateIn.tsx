import React, { ReactNode } from 'react';
import { motion, Variants, Transition } from 'framer-motion';
import { fadeInUp } from '../constants/variants';
import { baseTransition } from '../utils/transitions';

interface AnimateInProps {
  children: ReactNode;
  variants?: Variants;
  transition?: Transition;
  className?: string;
  delay?: number;
  duration?: number;
  viewport?: { once?: boolean; amount?: number | 'some' | 'all'; margin?: string };
}

/**
 * 元素入场动画组件
 *
 * 用于为子元素添加入场动画效果，支持自定义动画变体和过渡配置
 */
const AnimateIn: React.FC<AnimateInProps> = ({
  children,
  variants = fadeInUp,
  transition = baseTransition,
  className = '',
  delay = 0,
  duration,
  viewport = { once: true, amount: 0.3 },
}) => {
  // 合并过渡配置
  const mergedTransition: Transition = { ...transition, delay, ...(duration ? { duration } : {}) };

  return (
    <motion.div initial='hidden' whileInView='visible' viewport={viewport} variants={variants} transition={mergedTransition} className={className}>
      {children}
    </motion.div>
  );
};

export default AnimateIn;
