# 路由配置说明

## 路由结构

本项目使用 Vue Router 进行路由管理，路由配置文件位于 `src/router` 目录下。主要包含以下结构：
```txt
 router/              # 路由配置
 │   ├── index.ts
 │   └── routes/         # 路由定义
 │   │   ├── index.ts
 │   │   └── base.ts  
```
路由包括两部分：
- `index.ts`：路由配置文件，用于配置路由的基本信息，如路由模式、路由守卫等。
- `routes/`：路由定义目录，用于定义具体的路由。

## 路由定义

路由定义位于 `routes/` 目录下，每个文件对应一个路由模块。路由模块通常包括以下内容：
- 路由配置：包括路由路径、组件、名称、元信息等。
- 子路由：如果该路由有子路由，子路由也会在该文件中定义。

路由定义文件的命名规范为 `moduleName.ts`，其中 `moduleName` 为模块名称。例如，`user.ts` 表示用户模块的路由定义。

## 路由配置

路由配置位于 `index.ts` 文件中，用于配置路由的基本信息，如路由模式、路由守卫等。路由配置文件的内容如下：
```ts
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
```
路由配置文件中，`createRouter` 函数用于创建路由实例，`createWebHistory` 函数用于创建路由模式为 `history` 的实例。`routes` 变量用于导入路由定义。

## 路由守卫

路由守卫是在路由跳转前后执行的函数，用于控制路由跳转的行为。路由守卫包括以下类型：
- 全局守卫：在路由跳转前后执行的函数。
- 路由独享守卫：在路由跳转前执行的函数，只对当前路由生效。
- 组件内守卫：在组件内定义的路由守卫，只对当前组件生效。

路由守卫的使用方法与 Vue Router 官方文档一致，可参考 Vue Router 官方文档。  

```ts
// 路由守卫
router.beforeEach((to, from, next) => {
  // 判断用户是否登录
  if (!isLoggedIn) {
    // 如果用户未登录，则跳转到登录页面
    next('/login'); // 跳转到登录页面
  }
  // 其他情况，允许跳转
  next();
})
```