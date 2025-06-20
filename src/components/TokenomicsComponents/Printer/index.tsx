'use client';

import { useState, useEffect } from 'react';

const strings = ['Social Connection', 'Web3 Surfing', 'Assets Management', 'Trading Experiences'];

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

  return (
    <span className='text-primary' key={currentIndex}>
      <span className='inline-flex'>
        {text.split('').map((char, index) => (
          <span key={`${index}-${char}`} style={{ display: 'inline-block', position: 'relative' }}>
            {char === ' ' ? '\u00A0' : char}
            {index === text.length - 1 && !isDeleting && <span className='absolute -bottom-1 left-0 w-full h-0.5 bg-primary' />}
          </span>
        ))}
      </span>
      <span className='inline-block ml-1 w-1 h-8 bg-current' />
    </span>
  );
};

export default Printer;
