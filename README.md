# SOLIME - Web3.0 AI 社交应用

<div align="center">
  <img src="public/images/logo.png" alt="SOLIME Logo" width="200"/>
  <p>基于Solana区块链的AI驱动社交应用</p>
</div>

## 项目简介

SOLIME 是一款革命性的 Web3.0 AI 社交应用，将人工智能能力引入到 Solana 区块链上的社交互动中。该应用旨在简化 Web3 交互，提供用户友好的界面，使区块链技术更易于访问。

SOLIME 通过 AI 驱动的聊天机器人提供无缝的 Web3 导航体验，帮助用户管理数字资产、获取代币洞察，并优化他们的区块链操作。

## 特性和功能

- **代币转账简化** - 通过简单的命令轻松在地址间转移数字资产
- **代币洞察** - 提供关于不同代币的重要数据，帮助用户做出明智的交易决策
- **AI 驱动的 Web3 导航** - 使用 AI 聊天机器人轻松导航 Web3 空间
- **用户友好界面** - 现代、响应式的设计，确保在所有设备上的最佳体验
- **安全的区块链交互** - 增强的安全功能，保护用户的数字资产
- **跨平台支持** - 在各种平台上无缝运行

## 技术栈

- **前端框架**：[Next.js](https://nextjs.org/) 15.3.3
- **UI 库**：[React](https://reactjs.org/) 19.0.0
- **样式**：[Tailwind CSS](https://tailwindcss.com/) 4.0
- **动画**：[Motion](https://motion.dev/) 12.18.1
- **UI 组件**：[Shadcn UI](https://ui.shadcn.com/)、[Radix UI](https://www.radix-ui.com/)
- **主题**：[next-themes](https://github.com/pacocoursey/next-themes)
- **轮播**：[Swiper](https://swiperjs.com/) 11.2.8
- **容器化**：Docker & Docker Compose
- **Web 服务器**：Nginx
- **SSL**：Certbot (Let's Encrypt)

## 快速开始

### 前提条件

- Node.js 20.x 或更高
- npm 10.x 或更高

### 安装

1. 克隆仓库

   ```bash
   git clone https://github.com/yourusername/SOLIME.git
   cd SOLIME
   ```

2. 安装依赖

   ```bash
   npm install
   ```

3. 设置环境变量

   创建一个 `.env.local` 文件在项目根目录下，并添加以下内容：

   ```
   # Gemini API密钥
   GEMINI_API_KEY=your_gemini_api_key_here
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. 运行开发服务器

   ```bash
   npm run dev
   ```

5. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 开发指南

### 目录结构

- `/src/app` - Next.js App Router 页面
- `/src/components` - React 组件
- `/src/animations` - 动画相关代码
- `/src/utils` - 工具函数
- `/public` - 静态资源

### 构建项目

```bash
npm run build
```

### 运行生产版本

```bash
npm start
```

### 代码规范检查

```bash
npm run lint
```

## 部署方法

### 使用 Docker 部署

项目包含 Docker 和 Docker Compose 配置，可以轻松部署到任何支持 Docker 的环境。

1. 创建环境变量文件

   在项目根目录创建一个 `.env` 文件，包含以下内容：

   ```
   # Gemini API密钥
   GEMINI_API_KEY=your_gemini_api_key_here
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
   ```

2. 构建并启动容器

   ```bash
   docker-compose up -d
   ```

3. 应用将在 `https://yourdomain.com` 上可用

### 配置说明

- `docker-compose.yml` - Docker Compose 配置
- `Dockerfile` - Docker 构建配置
- `nginx.conf` - Nginx 服务器配置

## 贡献指南

我们欢迎所有形式的贡献！

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开 Pull Request

## 许可证

此项目采用[MIT 许可证](LICENSE)。

---

<div align="center">
  <p>© 2023 SOLIME Team. All rights reserved.</p>
</div>
