# Base Admin Vue 快速开始指南

## 项目介绍

[Base Admin Vue](https://github.com/gaao/base-admin-vue) 是一个基于 Vue 3 + TypeScript + Vite 的后台管理系统基本模板，具有以下特点：

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

[查看完整的文件目录树](/project/filetree.md)

## 项目说明

一般 admin 项目会有下面这些功能：

- 用户认证：用户登录、注册、注销等功能。
- 路由管理：系统的路由配置，包括权限控制。
- 多标签页：支持在多个标签页之间切换。
- 布局系统：系统的布局设计，包括基础布局、用户相关布局等。
- 权限管理：根据用户角色和权限控制页面访问。
- 状态管理：使用 Pinia 进行状态管理。
- 国际化：支持多语言切换。
- 接口请求：封装接口请求逻辑。
- 数据可视化：使用 ECharts 进行数据可视化。

其中，路由管理、布局系统、用户认证和状态管理是最基本的，其他功能根据实际需求进行添加或修改。
### 路由管理
路由管理是整个系统的核心，它决定了用户可以访问哪些页面，以及页面之间的跳转关系。路由管理通常包括以下几个方面：
- 路由配置：定义系统的所有路由，包括路径、组件、权限等信息。
- 路由守卫：在路由跳转前后执行的函数，用于控制路由跳转的行为。
- 权限控制：根据用户角色和权限控制页面访问。
- 路由跳转：根据路由配置，实现页面之间的跳转。

查看 [路由管理](/project/router.md) 详细说明。
### 菜单管理
菜单管理是系统的另一个重要组成部分，它决定了用户在系统中可以看到哪些菜单，以及菜单之间的层级关系。菜单管理通常包括以下几个方面：
- 菜单配置：定义系统的所有菜单，包括名称、路径、权限等信息。
- 菜单渲染：根据用户角色和权限，渲染菜单列表。
- 菜单跳转：根据菜单配置，实现页面之间的跳转。
- 菜单权限：根据用户角色和权限控制菜单的显示和隐藏。
查看 [菜单管理](/project/menu.md) 详细说明。
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
