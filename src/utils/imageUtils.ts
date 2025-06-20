import { ImageProps } from 'next/image';

export interface OptimizedImageProps extends Omit<ImageProps, 'width' | 'height' | 'alt'> {
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
}

export const getImageProps = (props: OptimizedImageProps): Omit<ImageProps, 'alt'> => {
  const { src, width = 0, height = 0, priority = false, quality = 75, ...rest } = props;

  // 判断是否为首屏重要图片
  const isPriority = priority || false;

  // 基本属性
  const imageProps: Omit<ImageProps, 'alt'> = {
    src,
    width: width || (typeof src === 'string' && src.includes('.svg') ? 24 : 1000),
    height: height || (typeof src === 'string' && src.includes('.svg') ? 24 : 1000),
    priority: isPriority,
    loading: isPriority ? undefined : 'lazy',
    quality,
    ...rest,
  };

  // 如果是SVG，设置为不优化
  if (typeof src === 'string' && src.includes('.svg')) {
    imageProps.unoptimized = true;
  }

  return imageProps;
};
