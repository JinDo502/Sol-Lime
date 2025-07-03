# 依赖安装阶段
FROM node:20-alpine AS deps

WORKDIR /app

# 安装构建依赖
RUN apk add --no-cache python3 make g++ gcc git openssl

# 只复制依赖相关文件，提高缓存利用率
COPY package.json package-lock.json ./

# 安装依赖 - 包括开发依赖
RUN npm install --ignore-scripts

# 构建阶段
FROM node:20-alpine AS builder

WORKDIR /app

# 复制依赖
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 构建应用
ENV NEXT_TELEMETRY_DISABLED 1

# 设置构建时环境变量，可以在docker-compose.yml中覆盖
ARG GEMINI_API_KEY
ARG NEXT_PUBLIC_GEMINI_API_KEY
ENV GEMINI_API_KEY=${GEMINI_API_KEY}
ENV NEXT_PUBLIC_GEMINI_API_KEY=${NEXT_PUBLIC_GEMINI_API_KEY}

RUN npm run build

# 运行阶段 - 使用更小的基础镜像
FROM node:20-alpine AS runner

WORKDIR /app

# 安装运行时必要的依赖
RUN apk add --no-cache openssl

# 设置为生产环境
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV PATH $PATH:/app/node_modules/.bin

# 创建非root用户提高安全性
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# 只复制必要的文件
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/next.config.ts ./

# 使用非root用户运行应用
USER nextjs

# 暴露端口
EXPOSE 3000

# 设置健康检查
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# 启动应用
CMD ["npm", "start"]