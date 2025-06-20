import { useMemo, useCallback, DependencyList } from 'react';

/**
 * 记忆化计算值，避免重复计算
 * @param factory 计算函数
 * @param deps 依赖数组
 * @returns 记忆化的计算结果
 */
export function useMemoizedValue<T>(factory: () => T, deps: DependencyList): T {
  return useMemo(() => factory(), deps);
}

/**
 * 记忆化回调函数，避免不必要的重新创建
 * @param callback 回调函数
 * @param deps 依赖数组
 * @returns 记忆化的回调函数
 */
export function useMemoizedCallback<T extends (...args: unknown[]) => unknown>(callback: T, deps: DependencyList): T {
  return useCallback(callback, deps);
}
