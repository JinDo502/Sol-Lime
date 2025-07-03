#!/bin/bash

# 颜色定义
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}SOLIME 部署脚本${NC}"
echo "========================================"

# 检查.env文件
if [ ! -f .env ]; then
  echo -e "${RED}错误: .env 文件不存在${NC}"
  echo -e "请创建 .env 文件，包含以下内容:"
  echo "GEMINI_API_KEY=your_gemini_api_key_here"
  echo "NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here"
  
  # 询问是否创建示例.env文件
  read -p "是否创建示例.env文件? (y/n): " create_env
  if [[ $create_env == "y" || $create_env == "Y" ]]; then
    echo "GEMINI_API_KEY=your_gemini_api_key_here" > .env
    echo "NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here" >> .env
    echo -e "${GREEN}已创建示例.env文件，请编辑该文件并填入正确的API密钥${NC}"
    exit 1
  else
    exit 1
  fi
fi

# 加载环境变量
echo -e "${GREEN}加载环境变量...${NC}"
export $(grep -v '^#' .env | xargs)

# 检查必要的环境变量
if [ -z "$GEMINI_API_KEY" ] || [ -z "$NEXT_PUBLIC_GEMINI_API_KEY" ]; then
  echo -e "${RED}错误: 缺少必要的环境变量${NC}"
  echo "请确保.env文件中包含以下变量:"
  echo "GEMINI_API_KEY=your_gemini_api_key_here"
  echo "NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here"
  exit 1
fi

# 构建并启动Docker容器
echo -e "${GREEN}构建并启动Docker容器...${NC}"
docker compose down
docker compose build --no-cache
docker compose up -d

# 检查容器状态
echo -e "${GREEN}检查容器状态...${NC}"
docker compose ps

echo -e "${GREEN}部署完成!${NC}"
echo "========================================"
echo -e "您的应用现在应该可以在 ${YELLOW}https://solime.xyz${NC} 访问"
echo -e "如需查看日志，请运行: ${YELLOW}docker-compose logs -f${NC}" 