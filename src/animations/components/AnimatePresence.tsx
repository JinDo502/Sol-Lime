import React, { ReactNode } from 'react';
import { AnimatePresence as FramerAnimatePresence } from 'framer-motion';

interface AnimatePresenceProps {
  children: ReactNode;
  mode?: 'sync' | 'wait' | 'popLayout';
  initial?: boolean;
  onExitComplete?: () => void;
  custom?: unknown;
}

/**
 * AnimatePresence 组件
 *
 * 包装 Framer Motion 的 AnimatePresence 组件，用于处理组件的进入和退出动画
 */
const AnimatePresence: React.FC<AnimatePresenceProps> = ({ children, mode = 'sync', initial = true, onExitComplete, custom }) => {
  return (
    <FramerAnimatePresence mode={mode} initial={initial} onExitComplete={onExitComplete} custom={custom}>
      {children}
    </FramerAnimatePresence>
  );
};

export default AnimatePresence;
