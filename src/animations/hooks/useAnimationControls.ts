import { useState, useCallback } from 'react';
import { useAnimation } from 'framer-motion';

interface AnimationControlsOptions {
  initialState?: string;
}

/**
 * 动画控制 Hook
 *
 * 简化动画控制逻辑，提供状态管理和过渡方法
 *
 * @param options 配置选项
 * @returns 包含动画控制器和状态管理方法的对象
 */
const useAnimationControls = (options: AnimationControlsOptions = {}) => {
  const { initialState = 'initial' } = options;
  const [currentState, setCurrentState] = useState(initialState);
  const controls = useAnimation();

  // 切换到指定状态
  const transitionTo = useCallback(
    async (state: string) => {
      await controls.start(state);
      setCurrentState(state);
      return true;
    },
    [controls]
  );

  // 重置到初始状态
  const reset = useCallback(async () => {
    await transitionTo(initialState);
  }, [initialState, transitionTo]);

  // 切换到下一个状态（如果有定义状态序列）
  const next = useCallback(
    async (sequence: string[]) => {
      const currentIndex = sequence.indexOf(currentState);
      if (currentIndex >= 0 && currentIndex < sequence.length - 1) {
        const nextState = sequence[currentIndex + 1];
        await transitionTo(nextState);
        return true;
      }
      return false;
    },
    [currentState, transitionTo]
  );

  return {
    controls,
    currentState,
    transitionTo,
    reset,
    next,
  };
};

export default useAnimationControls;
