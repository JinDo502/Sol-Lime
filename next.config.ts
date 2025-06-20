import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 实验性功能
  experimental: {
    // 优化包导入
    optimizePackageImports: ['react-icons'],
    // 启用服务器操作
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // 缓存策略
  headers: async () => {
    return [
      { source: '/images/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
      { source: '/_next/static/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
    ];
  },
};

export default nextConfig;
