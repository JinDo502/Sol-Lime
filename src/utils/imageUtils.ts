import { ImageProps } from 'next/image';

export interface OptimizedImageProps extends Omit<ImageProps, 'width' | 'height'> {
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
}

export const getImageProps = (props: OptimizedImageProps): ImageProps => {
  const { src, alt, width = 0, height = 0, priority = false, quality = 75, ...rest } = props;

  // 判断是否为首屏重要图片
  const isPriority = priority || false;

  // 基本属性
  const imageProps: ImageProps = {
    src,
    alt: alt || '',
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
