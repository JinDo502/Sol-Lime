import React, { ReactNode } from 'react';
import { motion, Variants, Transition } from 'framer-motion';
import { containerVariants } from '../constants/variants';
import { createStaggerTransition } from '../utils/transitions';

interface MotionContainerProps {
  children: ReactNode;
  variants?: Variants;
  transition?: Transition;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  viewport?: { once?: boolean; amount?: number | 'some' | 'all'; margin?: string };
  tag?: keyof JSX.IntrinsicElements;
}

/**
 * 动画容器组件
 *
 * 用于创建容器动画，支持子元素的交错动画效果
 * 子元素应该使用 motion 组件并设置 variants 属性
 */
const MotionContainer: React.FC<MotionContainerProps> = ({
  children,
  variants = containerVariants,
  transition,
  className = '',
  delay = 0,
  staggerChildren = 0.1,
  viewport = { once: true, amount: 0.3 },
  tag = 'div',
}) => {
  // 合并过渡配置
  const mergedTransition: Transition = { ...createStaggerTransition(staggerChildren, delay), ...transition };

  const MotionTag = motion[tag as keyof typeof motion];

  return (
    <MotionTag initial='hidden' whileInView='visible' viewport={viewport} variants={variants} transition={mergedTransition} className={className}>
      {children}
    </MotionTag>
  );
};

export default MotionContainer;
