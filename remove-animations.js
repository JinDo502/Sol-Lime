#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

// 需要处理的文件扩展名
const fileExtensions = ['.tsx', '.jsx', '.ts', '.js'];

// 递归获取目录下所有符合扩展名的文件
async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(
    subdirs.map(async (subdir) => {
      const res = path.resolve(dir, subdir);
      return (await stat(res)).isDirectory() ? getFiles(res) : res;
    })
  );
  return files.flat().filter((file) => fileExtensions.includes(path.extname(file)));
}

// 处理单个文件
async function processFile(filePath) {
  try {
    let content = await readFile(filePath, 'utf8');
    let modified = false;

    // 1. 移除framer-motion导入
    const framerMotionImportRegex = /import\s+.*from\s+['"]framer-motion['"].*?;/g;
    if (framerMotionImportRegex.test(content)) {
      content = content.replace(framerMotionImportRegex, '');
      modified = true;
      console.log(`Removed framer-motion import from ${filePath}`);
    }

    // 2. 替换motion组件为普通HTML元素
    const motionComponentRegex = /<motion\.([a-zA-Z0-9]+)(\s+[^>]*?)>/g;
    if (motionComponentRegex.test(content)) {
      content = content.replace(motionComponentRegex, '<$1$2>');
      content = content.replace(/<\/motion\.[a-zA-Z0-9]+>/g, (match) => {
        return match.replace('motion.', '');
      });
      modified = true;
      console.log(`Replaced motion components in ${filePath}`);
    }

    // 3. 移除动画相关属性
    const animationPropsRegex = /(initial|animate|exit|transition|variants|whileHover|whileTap|whileFocus|whileDrag|whileInView)=\{[^}]+\}/g;
    if (animationPropsRegex.test(content)) {
      content = content.replace(animationPropsRegex, '');
      modified = true;
      console.log(`Removed animation props in ${filePath}`);
    }

    // 4. 移除CSS动画类
    const cssAnimationRegex = /(animate-[a-zA-Z0-9-]+|transition-[a-zA-Z0-9-]+)/g;
    if (cssAnimationRegex.test(content)) {
      content = content.replace(cssAnimationRegex, '');
      modified = true;
      console.log(`Removed CSS animation classes in ${filePath}`);
    }

    // 5. 移除AnimatePresence组件
    const animatePresenceRegex = /<AnimatePresence[^>]*>([\s\S]*?)<\/AnimatePresence>/g;
    if (animatePresenceRegex.test(content)) {
      content = content.replace(animatePresenceRegex, '$1');
      modified = true;
      console.log(`Removed AnimatePresence in ${filePath}`);
    }

    // 如果文件被修改，写回文件
    if (modified) {
      await writeFile(filePath, content, 'utf8');
    }

    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
    return false;
  }
}

// 主函数
async function main() {
  try {
    const srcDir = path.join(process.cwd(), 'src');
    const files = await getFiles(srcDir);

    console.log(`Found ${files.length} files to process`);

    let modifiedCount = 0;
    for (const file of files) {
      const modified = await processFile(file);
      if (modified) {
        modifiedCount++;
      }
    }

    console.log(`Modified ${modifiedCount} files`);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
