# 菜单配置说明

## 菜单结构

菜单配置位于 `src/router/routes.ts` 文件中，采用树形结构设计。每个菜单项包含以下主要属性：

```ts
import { type RouteRecordRaw } from "vue-router";

interface MenuItem extends RouteRecordRaw {
  name: string; // 菜单名称需保证唯一性
  path: string; // 菜单路径
  icon?: string; // 菜单图标
  children?: MenuItem[]; // 子菜单
  meta?: MenuMeta; // 菜单元信息
}
// 菜单 meta 信息
interface MenuMeta {
  title: string; //	菜单项标题
  icon: string; // 菜单项图标
  show: boolean;// 是否显示菜单
  disabled: boolean; // 是否禁用菜单
  order: number; // 菜单排序
  keepAlive: boolean; // 是否缓存页面
  href: string; // 外部链接地址
  // 其他自定义属性
  [key: string]: any;
}
```
## 项目内侧边栏菜单

