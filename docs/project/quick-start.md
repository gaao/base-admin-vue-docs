# Base Admin Vue 快速开始指南

## 项目介绍

Base Admin Vue 是一个基于 Vue 3 + TypeScript + Vite 的后台管理系统基本模板，具有以下特点：

- 🚀 使用 Vue 3 + TypeScript + Vite 构建
- 📦 集成 Ant Design Vue 组件库
- 🔐 完整的权限管理系统
- 📱 响应式布局
- 🎯 多标签页功能
- 🌍 国际化支持
- 💾 状态管理使用 Pinia

## 环境要求

- Node.js >= 16
- npm >= 7

## 快速开始

```bash
# 克隆项目
git clone https://github.com/gaao/base-admin-vue
```

```bash
# 安装依赖
npm install
```

```bash
# 启动开发服务器
npm run dev
```

```bash
# 打包生产环境
npm run build
```

## 项目结构

```
base-admin-vue/
├── src/                        # 源代码目录
│   ├── assets/                 # 静态资源
│   ├── components/            # 公共组件
│   ├── config/               # 配置文件
│   ├── layouts/              # 布局组件
│   ├── router/              # 路由配置
│   ├── service/            # 服务层
│   ├── stores/            # 状态管理
│   ├── views/             # 页面组件
│   └── App.vue           # 根组件
......
↓点击下面链接查看完整的文件目录树↓
```

[查看完整的文件目录树](/filetree.md)

## 主要功能

### 1. 用户认证

> 系统使用基于 Token 的认证机制，主要认证逻辑在 src/stores/auth.ts 中：

```typescript
// 登录
const login = async (account: string, password: string) => {
  const { code, data } = await fetchLogin({ account, password });
  if (code === 0) {
    await handleLoginInfo(data);
  }
};
```

### 2. 路由管理

路由配置位于 src/router/routes/ 目录，包含基础路由和动态路由：

```typescript
const routes = [
  ...coreRoutes, // 核心路由
  ...externalRoutes, // 外部路由
  fallbackNotFoundRoute, // 404 路由
];
```

### 3. 多标签页

系统支持多标签页功能，通过 src/stores/historytabs.ts 管理：

```typescript
const addTab = (route: RouteLocationNormalized) => {
  const tab: HistoryTab = {
    name: route.name as string,
    path: route.path,
    title: (route.meta?.title as string) || "未命名页面",
  };
  // ... 标签页管理逻辑
};
```

## 开发指南

### 1. 新增页面

在 src/views 下创建页面组件
在 src/router/routes 中添加路由配置
配置页面权限和菜单显示

### 2. 状态管理

使用 Pinia 进行状态管理，store 文件位于 src/stores 目录：

auth.ts: 用户认证状态
historytabs.ts: 标签页状态 3. 布局系统
系统使用模块化的布局系统：

- BasicLayout.vue: 基础布局
- UserLayout.vue: 用户相关页面布局
- RouteView.vue: 路由视图

## 构建部署

```bash
# 开发环境
npm run dev
```

```bash
# 生产环境
npm run build
```

```bash
# 分析构建
npm run analyze
```

## 注意事项

开发时请遵循 TypeScript 规范
组件开发请参考 Ant Design Vue 文档
注意权限控制的配置
保持良好的代码风格和注释
