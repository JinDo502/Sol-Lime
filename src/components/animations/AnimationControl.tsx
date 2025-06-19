'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from './AnimationContext';
import { FiPlay, FiPause, FiClock } from 'react-icons/fi';

interface AnimationControlProps {
  className?: string;
}

const AnimationControl: React.FC<AnimationControlProps> = ({ className = '' }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { animationsEnabled, toggleAnimations, animationSpeed, setAnimationSpeed, prefersReducedMotion } = useAnimation();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 服务端渲染或未挂载时不渲染任何内容
  if (!isMounted) {
    return null;
  }

  // 如果用户系统设置为减少动画，显示提示信息
  if (prefersReducedMotion) {
    return (
      <div className={`text-xs opacity-70 ${className}`}>
        <div className='flex items-center gap-2 p-2 rounded-md bg-opacity-20 bg-gray-500'>
          <FiClock />
          <span>动画已根据您的系统设置禁用</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.button
        className={`p-2 rounded-full ${animationsEnabled ? 'bg-green-500' : 'bg-gray-400'} text-white`}
        onClick={toggleAnimations}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title={animationsEnabled ? '禁用动画' : '启用动画'}
      >
        {animationsEnabled ? <FiPlay /> : <FiPause />}
      </motion.button>

      {animationsEnabled && (
        <div className='flex items-center gap-2'>
          <span className='text-xs opacity-70'>速度:</span>
          <div className='flex gap-1'>
            {(['slow', 'normal', 'fast'] as const).map((speed) => (
              <motion.button
                key={speed}
                className={`px-2 py-1 text-xs rounded-md ${animationSpeed === speed ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
                onClick={() => setAnimationSpeed(speed)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {speed === 'slow' ? '慢' : speed === 'normal' ? '中' : '快'}
              </motion.button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimationControl;
