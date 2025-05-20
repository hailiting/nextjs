# 现代化企业官网

基于 Next.js 14 构建的现代化企业官网，采用最新的 Web 技术和最佳实践。

## 技术栈

- **Next.js 14**: React 框架，提供服务器端渲染、静态站点生成等特性
- **TypeScript**: 提供类型安全和更好的开发体验
- **Tailwind CSS**: 实用优先的 CSS 框架，用于快速构建自定义设计

## 核心依赖包说明

### 1. framer-motion
一个强大的 React 动画库，用于创建流畅的动画效果。

主要功能：
- 声明式动画 API
- 支持手势控制
- 自动处理动画性能

常用示例：
```tsx
// 1. 基础动画
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  淡入效果
</motion.div>

// 2. 手势动画
<motion.div
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  悬停和点击效果
</motion.div>
```

### 2. lucide-react
一个现代化的图标库，提供简洁的 SVG 图标。

特性：
- 轻量级
- 可定制
- 支持动画

常用示例：
```tsx
import { Menu, Search, User } from 'lucide-react'

// 1. 基础使用
<Menu className="w-6 h-6" />

// 2. 自定义颜色和大小
<Search className="w-5 h-5 text-gray-500" />

// 3. 动画效果
<User className="w-6 h-6 hover:scale-110 transition-transform" />
```

## 项目结构

```
src/
├── app/                 # Next.js 应用目录
├── components/         # React 组件
│   ├── ui/            # 基础 UI 组件
│   └── ...            # 其他组件
├── lib/               # 工具函数和配置
├── styles/            # 全局样式
└── types/             # TypeScript 类型定义
```

## 包管理器说明

本项目使用 pnpm 作为包管理器。以下是 pnpm 与 npm 的主要区别和注意事项：

### pnpm vs npm 主要区别

1. **依赖存储方式**
   - npm: 使用扁平化的 node_modules 结构，可能导致幽灵依赖问题
   - pnpm: 使用硬链接和符号链接，创建非扁平的 node_modules 结构，更安全可靠

2. **安装速度**
   - npm: 需要复制所有文件到 node_modules
   - pnpm: 使用硬链接，大大减少磁盘空间占用和安装时间

3. **磁盘空间使用**
   - npm: 每个项目都复制一份依赖
   - pnpm: 所有项目共享同一个依赖存储，节省大量磁盘空间

4. **依赖管理**
   - npm: 允许访问未声明的依赖（幽灵依赖）
   - pnpm: 严格的依赖树结构，只能访问 package.json 中声明的依赖

### 使用 pnpm 的注意事项

1. **全局安装**
```bash
# 安装 pnpm
npm install -g pnpm
```

2. **常用命令对比**
```bash
# npm                    # pnpm
npm install             pnpm install
npm install <pkg>       pnpm add <pkg>
npm install -D <pkg>    pnpm add -D <pkg>
npm uninstall <pkg>     pnpm remove <pkg>
npm update              pnpm update
```

3. **特殊命令**
```bash
# 清理依赖
pnpm store prune

# 查看依赖树
pnpm why <pkg>

# 运行 package.json 中定义的脚本
pnpm run <script>
```

4. **可能遇到的问题及解决方案**

- **问题**: 某些包可能依赖 npm 的扁平结构
  **解决**: 使用 `--shamefully-hoist` 参数
  ```bash
  pnpm install --shamefully-hoist
  ```

- **问题**: 与某些工具的兼容性问题
  **解决**: 在项目根目录创建 `.npmrc` 文件
  ```
  node-linker=hoisted
  ```

- **问题**: 需要运行包的构建脚本
  **解决**: 使用 `pnpm rebuild` 或 `pnpm install --force`

### 迁移到 pnpm

如果从 npm 迁移到 pnpm，建议按以下步骤操作：

1. 删除现有的依赖文件：
```bash
rm -rf node_modules package-lock.json
```

2. 使用 pnpm 重新安装：
```bash
pnpm install
```

3. 更新 CI/CD 配置（如果有）：
   - 将 `npm install` 改为 `pnpm install`
   - 确保 CI 环境中安装了 pnpm

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 特性

- 🎨 现代化设计
- 📱 完全响应式
- ⚡ 高性能
- 🔍 SEO 友好
- 🎭 流畅动画

## 最佳实践

1. **组件设计**
   - 使用原子设计模式
   - 保持组件的可复用性
   - 遵循单一职责原则

2. **样式管理**
   - 使用 Tailwind CSS 的工具类
   - 保持样式的一致性

3. **性能优化**
   - 使用图片优化
   - 实现代码分割
   - 优化加载性能

## 贡献

欢迎提交 Pull Request 或创建 Issue。

## 许可证

MIT

