/**
 * 客户端缓存工具
 *
 * 提供基于 localStorage 的缓存机制，支持 TTL（过期时间）
 */

interface CacheItem<T> {
  value: T;
  expiry: number | null; // null 表示永不过期
}

/**
 * 设置缓存项
 *
 * @param key 缓存键
 * @param value 缓存值
 * @param ttl 过期时间（秒），默认 3600 秒（1小时）
 */
export const setCache = <T>(key: string, value: T, ttl: number = 3600): void => {
  if (typeof window === 'undefined') return;

  const item: CacheItem<T> = {
    value,
    expiry: ttl ? Date.now() + ttl * 1000 : null,
  };

  try {
    localStorage.setItem(`cache_${key}`, JSON.stringify(item));
  } catch (error) {
    console.error('Cache set error:', error);
  }
};

/**
 * 获取缓存项
 *
 * @param key 缓存键
 * @returns 缓存值，如果不存在或已过期则返回 null
 */
export const getCache = <T>(key: string): T | null => {
  if (typeof window === 'undefined') return null;

  try {
    const itemStr = localStorage.getItem(`cache_${key}`);
    if (!itemStr) return null;

    const item: CacheItem<T> = JSON.parse(itemStr);

    // 检查是否过期
    if (item.expiry && Date.now() > item.expiry) {
      removeCache(key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.error('Cache get error:', error);
    return null;
  }
};

/**
 * 移除缓存项
 *
 * @param key 缓存键
 */
export const removeCache = (key: string): void => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(`cache_${key}`);
  } catch (error) {
    console.error('Cache remove error:', error);
  }
};

/**
 * 清除所有缓存
 */
export const clearCache = (): void => {
  if (typeof window === 'undefined') return;

  try {
    const keys = Object.keys(localStorage);
    keys.forEach((key) => {
      if (key.startsWith('cache_')) {
        localStorage.removeItem(key);
      }
    });
  } catch (error) {
    console.error('Cache clear error:', error);
  }
};

/**
 * 带缓存的数据获取函数
 *
 * @param key 缓存键
 * @param fetchFn 数据获取函数
 * @param ttl 过期时间（秒）
 * @returns 获取的数据
 */
export const fetchWithCache = async <T>(key: string, fetchFn: () => Promise<T>, ttl: number = 3600): Promise<T> => {
  // 尝试从缓存获取
  const cachedData = getCache<T>(key);
  if (cachedData) {
    return cachedData;
  }

  // 缓存未命中，调用获取函数
  const data = await fetchFn();

  // 存入缓存
  setCache(key, data, ttl);

  return data;
};
