'use client';

import React from 'react';
import Script from 'next/script';
import { useEffect } from 'react';

interface PreloadProps {
  fonts?: boolean;
  images?: string[];
  scripts?: string[];
}

const Preload: React.FC<PreloadProps> = ({ fonts = true, images = [], scripts = [] }) => {
  useEffect(() => {
    // 预加载关键字体
    if (fonts) {
      const fontLinks = ['/_next/static/media/inter-latin.woff2', '/_next/static/media/montserrat-latin.woff2'];

      fontLinks.forEach((href) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    }

    // 预加载关键图片
    images.forEach((image) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = image;
      link.as = 'image';
      document.head.appendChild(link);
    });
  }, [fonts, images]);

  return (
    <>
      {/* 预加载关键脚本 */}
      {scripts.map((script, index) => (
        <Script key={`preload-script-${index}`} src={script} strategy='beforeInteractive' />
      ))}
    </>
  );
};

export default Preload;
