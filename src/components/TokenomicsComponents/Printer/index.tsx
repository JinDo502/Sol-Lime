'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const strings = ['Social Connection', 'Web3 Surfing', 'Assets Management', 'Trading Experiences'];

// 自定义CSS弹性动画
const cssSpringTransition =
  '800ms linear(0, 0.1187, 0.3801, 0.6679, 0.9085, 1.069, 1.1478, 1.1617, 1.1346, 1.0894, 1.0435, 1.0072, 0.9844, 0.9745, 0.9743, 0.9797, 0.9873, 0.9945, 0.9999, 1.0031, 1.0043, 1.004, 1.003, 1.0018, 1.0006, 0.9998, 1)';

const Printer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentString = strings[currentIndex];

    const handleTyping = () => {
      // 当前显示的文本长度
      const fullText = currentString;

      // 如果正在删除文本
      if (isDeleting) {
        // 设置下一个文本状态（删除一个字符）
        setText(fullText.substring(0, text.length - 1));
        // 设置删除速度（比打字稍快）
        setTypingSpeed(50);
      } else {
        // 设置下一个文本状态（添加一个字符）
        setText(fullText.substring(0, text.length + 1));
        // 设置打字速度
        setTypingSpeed(150);
      }

      // 处理删除/打字状态切换和文本循环
      if (!isDeleting && text === fullText) {
        // 完成打字，等待一段时间后开始删除
        setTypingSpeed(1500); // 暂停时间
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        // 完成删除，切换到下一个文本
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % strings.length);
        setTypingSpeed(500); // 切换到下一个词之前的暂停
      }
    };

    // 设置定时器来控制打字效果
    const timer = setTimeout(handleTyping, typingSpeed);

    // 清理定时器
    return () => clearTimeout(timer);
  }, [text, isDeleting, currentIndex, typingSpeed]);

  // 为每个字母创建动画变体
  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 200,
        damping: 10,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <motion.span className='text-[var(--primary)]' key={currentIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.span className='inline-flex'>
        {text.split('').map((char, index) => (
          <motion.span
            key={`${index}-${char}`}
            variants={letterVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            transition={{ delay: index * 0.03 }}
            style={{
              display: 'inline-block',
              position: 'relative',
              transition: `transform ${cssSpringTransition}, opacity 0.3s ease`,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
            {index === text.length - 1 && !isDeleting && (
              <motion.span
                className='absolute -bottom-1 left-0 w-full h-0.5 bg-[var(--primary)]'
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
                style={{
                  transition: `transform ${cssSpringTransition}`,
                }}
              />
            )}
          </motion.span>
        ))}
      </motion.span>
      <motion.span
        animate={{
          opacity: [0, 1, 0],
          scaleY: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className='inline-block ml-1 w-1 h-8 bg-current'
        style={{
          transition: `transform ${cssSpringTransition}, opacity 0.8s ease-in-out`,
        }}
      />
    </motion.span>
  );
};

export default Printer;
