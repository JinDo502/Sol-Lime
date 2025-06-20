# Framer Motion 动画系统

这个动画系统是基于 Framer Motion 库构建的，旨在提供一种统一、可复用的方式来管理应用中的动画效果。

## 目录结构

```
src/animations/
├── components/           # 动画组件
│   ├── AnimateIn.tsx     # 入场动画组件
│   ├── AnimatePresence.tsx # 元素进出场动画组件
│   └── MotionContainer.tsx # 容器动画组件
├── constants/            # 常量
│   └── variants.ts       # 动画变体定义
├── hooks/                # 自定义 Hooks
│   ├── useAnimationControls.ts # 动画控制 Hook
│   └── useScrollAnimation.ts   # 滚动触发动画 Hook
├── utils/                # 工具函数
│   ├── springs.ts        # 弹性动画工具
│   └── transitions.ts    # 过渡动画工具
└── index.ts              # 导出所有动画相关的组件和工具
```

## 使用方法

### 基础动画组件

#### AnimateIn

用于为元素添加入场动画效果：

```tsx
import { AnimateIn, fadeInUp } from '@/animations';

const MyComponent = () => {
  return (
    <AnimateIn variants={fadeInUp} delay={0.2}>
      <div>这个元素会有淡入上升的动画效果</div>
    </AnimateIn>
  );
};
```

#### MotionContainer

用于创建容器动画，支持子元素的交错动画效果：

```tsx
import { MotionContainer, motion, itemVariants } from '@/animations';

const MyList = () => {
  return (
    <MotionContainer staggerChildren={0.1}>
      {items.map((item) => (
        <motion.div key={item.id} variants={itemVariants}>
          {item.content}
        </motion.div>
      ))}
    </MotionContainer>
  );
};
```

#### AnimatePresence

用于处理组件的进入和退出动画：

```tsx
import { AnimatePresence, motion } from '@/animations';

const MyComponent = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          这个元素会有淡入淡出的动画效果
        </motion.div>
      )}
    </AnimatePresence>
  );
};
```

### 自定义 Hooks

#### useScrollAnimation

当元素进入视口时触发动画：

```tsx
import { useScrollAnimation, fadeInUp } from '@/animations';
import { motion } from 'framer-motion';

const MyComponent = () => {
  const [ref, controls, inView] = useScrollAnimation();

  return (
    <motion.div ref={ref} initial='hidden' animate={controls} variants={fadeInUp}>
      当这个元素进入视口时会有动画效果
    </motion.div>
  );
};
```

#### useAnimationControls

简化动画控制逻辑：

```tsx
import { useAnimationControls } from '@/animations';
import { motion } from 'framer-motion';

const MyComponent = () => {
  const { controls, transitionTo } = useAnimationControls();

  return (
    <>
      <motion.div
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        这个元素的动画可以被控制
      </motion.div>
      <button onClick={() => transitionTo('visible')}>显示</button>
      <button onClick={() => transitionTo('hidden')}>隐藏</button>
    </>
  );
};
```

### 动画变体和过渡

可以使用预定义的动画变体和过渡配置：

```tsx
import { fadeIn, fadeInUp, fadeInDown, scaleIn } from '@/animations';
import { springs, baseTransition, fastTransition } from '@/animations';
import { motion } from 'framer-motion';

const MyComponent = () => {
  return (
    <>
      <motion.div initial='hidden' animate='visible' variants={fadeInUp} transition={springs.bouncy}>
        弹性上升动画
      </motion.div>

      <motion.div initial='hidden' animate='visible' variants={scaleIn} transition={fastTransition}>
        快速缩放动画
      </motion.div>
    </>
  );
};
```

### 创建自定义动画

可以使用工具函数创建自定义动画配置：

```tsx
import { createFadeInVariant, createSpring, createTransition } from '@/animations';
import { motion } from 'framer-motion';

const MyComponent = () => {
  // 创建自定义淡入动画变体
  const customFadeIn = createFadeInVariant('left', 50);

  // 创建自定义弹性配置
  const customSpring = createSpring({
    stiffness: 150,
    damping: 15,
    mass: 1.2,
  });

  return (
    <motion.div initial='hidden' animate='visible' variants={customFadeIn} transition={customSpring}>
      自定义动画效果
    </motion.div>
  );
};
```

## 最佳实践

1. **使用预定义的动画变体**：尽可能使用 `variants.ts` 中定义的动画变体，以保持一致性。
2. **选择合适的动画组件**：根据需求选择合适的动画组件，如 `AnimateIn`、`MotionContainer` 等。
3. **避免过度动画**：不要让页面上的所有元素都有动画效果，这会分散用户注意力。
4. **考虑性能**：对于列表等大量元素，使用 `MotionContainer` 和 `variants` 组合可以提高性能。
5. **考虑无障碍性**：为有前庭功能障碍的用户提供减少动画的选项，可以检查 `prefers-reduced-motion` 媒体查询。
