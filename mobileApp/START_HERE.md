# 🚀 物藏录移动应用 - 快速开始

欢迎使用物藏录移动应用！这是从 uTools 插件迁移到 React Native + Expo 的版本。

## ⚡ 3 步快速启动

### 1️⃣ 安装依赖

```bash
cd mobileApp/wucanglu
npm install
```

### 2️⃣ 启动应用

```bash
npm start
```

### 3️⃣ 选择运行方式

启动后，按键盘上的：
- **`w`** - 在浏览器中打开（最简单）
- **`a`** - 在 Android 模拟器中打开
- **`i`** - 在 iOS 模拟器中打开（仅 macOS）
- 或扫描二维码在手机上的 Expo Go 应用中打开

## 📱 在手机上运行

1. 在手机上安装 **Expo Go** 应用
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Android Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. 扫描终端中显示的二维码

3. 应用会自动加载并运行

## 📚 文档导航

- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - 详细的安装和运行指南
- **[README_APP.md](./README_APP.md)** - 应用功能和技术说明
- **[MIGRATION_NOTES.md](./MIGRATION_NOTES.md)** - 从 uTools 插件迁移的详细说明

## ✨ 主要功能

- ✅ 物品管理（添加、查看、筛选）
- ✅ 分类管理
- ✅ 数据统计分析
- ✅ 本地数据持久化
- ✅ 现代化移动端 UI

## 🎯 快速测试

1. 启动应用后，点击右下角的 **"+"** 按钮
2. 填写物品信息并保存
3. 切换到 **"分析"** 标签查看统计数据
4. 点击分类标签筛选不同类别的物品

## 🔧 常用命令

```bash
# 启动开发服务器
npm start

# 清除缓存并重启
npx expo start -c

# 在 Android 上运行
npm run android

# 在 iOS 上运行（仅 macOS）
npm run ios

# 在浏览器中运行
npm run web
```

## ❓ 遇到问题？

### 依赖安装失败
```bash
rm -rf node_modules package-lock.json
npm install
```

### 应用无法启动
```bash
npx expo start -c
```

### 查看更多帮助
- 查看 [SETUP_GUIDE.md](./SETUP_GUIDE.md) 中的故障排除部分
- 访问 [Expo 官方文档](https://docs.expo.dev/)

## 🎨 技术栈

- **React Native 0.81.5** - 跨平台框架
- **Expo SDK 54** - 开发工具
- **TypeScript** - 类型安全
- **Expo Router 6** - 文件路由
- **AsyncStorage** - 数据存储

## 📦 项目结构

```
mobileApp/wucanglu/
├── app/              # 应用页面
│   ├── (tabs)/      # Tab 导航
│   │   ├── index.tsx    # 物品列表
│   │   └── explore.tsx  # 数据分析
│   └── modal.tsx    # 添加物品
├── contexts/        # 状态管理
├── utils/           # 工具函数
└── components/      # UI 组件
```

## 🚀 下一步

1. **探索代码**
   - 查看 `app/(tabs)/index.tsx` 了解物品列表实现
   - 查看 `utils/storage.ts` 了解数据存储逻辑
   - 查看 `contexts/DataContext.tsx` 了解状态管理

2. **自定义应用**
   - 修改 `constants/theme.ts` 调整主题颜色
   - 添加新的页面和功能
   - 实现图表可视化

3. **构建发布**
   - 使用 EAS Build 构建生产版本
   - 发布到应用商店

## 💡 提示

- 修改代码后应用会自动重新加载
- 使用 `console.log()` 在终端查看日志
- 在浏览器中运行时可以使用 Chrome DevTools 调试

## 🎉 开始使用

现在就运行 `npm start` 开始体验吧！

---

**需要帮助？** 查看详细文档或访问 [Expo 官方文档](https://docs.expo.dev/)
