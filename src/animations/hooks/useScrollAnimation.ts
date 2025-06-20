import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

/**
 * 滚动触发动画 Hook
 *
 * 当元素进入视口时触发动画
 *
 * @param options 配置选项
 * @returns [ref, controls, inView] - ref: 需要观察的元素引用, controls: 动画控制器, inView: 元素是否在视口中
 */
export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { threshold = 0.3, triggerOnce = true, rootMargin = '0px' } = options;

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce, rootMargin });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!triggerOnce) {
      controls.start('hidden');
    }
  }, [controls, inView, triggerOnce]);

  return [ref, controls, inView] as const;
};

export default useScrollAnimation;
