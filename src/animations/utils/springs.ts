import { Transition } from 'framer-motion';

// 弹性配置类型
export interface SpringConfig {
  stiffness?: number;
  damping?: number;
  mass?: number;
  bounce?: number;
  duration?: number;
  velocity?: number;
  restSpeed?: number;
  restDelta?: number;
}

// 预设弹性配置
export const springs = {
  // 轻弹性 - 适合小元素
  soft: {
    type: 'spring',
    stiffness: 100,
    damping: 15,
    mass: 1,
  } as Transition,

  // 中等弹性 - 适合一般元素
  medium: {
    type: 'spring',
    stiffness: 200,
    damping: 20,
    mass: 1,
  } as Transition,

  // 强弹性 - 适合大元素或强调动画
  bouncy: {
    type: 'spring',
    stiffness: 300,
    damping: 10,
    mass: 1,
    bounce: 0.25,
  } as Transition,

  // 无弹性 - 平滑过渡
  smooth: {
    type: 'spring',
    stiffness: 300,
    damping: 30,
    mass: 1,
  } as Transition,
};

// 将CSS线性函数转换为Framer Motion弹性配置
export const cssSpringToMotion = (cssSpring: string): Transition => {
  // 提取CSS线性函数中的值
  const match = cssSpring.match(/linear\((.*?)\)/);
  if (!match) {
    return springs.medium; // 默认返回中等弹性
  }

  // 这里可以根据需要实现更复杂的转换逻辑
  // 简单实现：根据值的数量决定弹性强度
  const values = match[1].split(',').map((v) => parseFloat(v.trim()));

  if (values.length > 15) {
    // 复杂的弹性曲线，使用强弹性
    return springs.bouncy;
  } else if (values.length > 8) {
    // 中等复杂度的弹性曲线，使用中等弹性
    return springs.medium;
  } else {
    // 简单的弹性曲线，使用轻弹性
    return springs.soft;
  }
};

// 创建自定义弹性配置
export const createSpring = (config: SpringConfig): Transition => {
  return {
    type: 'spring',
    ...config,
  };
};

// 将现有的CSS弹性动画转换为Framer Motion格式
export const convertCssSpring = (cssSpringTransition: string): Transition => {
  // 提取持续时间
  const durationMatch = cssSpringTransition.match(/(\d+)ms/);
  const duration = durationMatch ? parseInt(durationMatch[1]) / 1000 : 0.8;

  return {
    type: 'spring',
    stiffness: 200,
    damping: 20,
    duration,
  };
};
