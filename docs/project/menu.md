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
  show: boolean; // 是否在菜单栏显示（仅仅是不显示，但是菜单还是存在的，可以手动跳转）
  disabled: boolean; // 是否禁用菜单
  order: number; // 菜单排序
  keepAlive: boolean; // 是否缓存页面
  href: string; // 外部链接地址
  // 其他自定义属性
  [key: string]: any;
}
```

## 项目内菜单实现方法

项目内侧边栏菜单位于 `src/layouts/default/SiderMenu.vue` 文件中，采用递归方式渲染菜单。

### 从路由中获取菜单

从路由中获取菜单的方式如下：

```ts
import { useRoute } from "vue-router";
const router = useRouter();
let allRouters = router.getRoutes();
```

1. 过滤出需要展示的菜单：

```ts
let needShowRouters = allRouters.filter((item) => {
  return item.meta?.show !== false;
});
```

2. 对菜单进行排序：

```ts
const sortedRouters = needShowRouters.sort((a, b) => {
  return (a.meta?.order || 0) - (b.meta?.order || 0);
});
```

3. 按 antdv 的字段名进行转换：

> antdv 菜单格式请查看 [a-menu 官方文档](https://antdv.com/components/menu-cn/#itemtype)

```ts
sortedRouters
  .map((item) => {
    if (item.name) {
      const menuItem: ItemType = {
        disabled: item.meta?.disabled || false,
        label: item.meta?.title || item.name,
        key: item.name,
        icon: item.meta?.icon
          ? () => h(item.meta.icon as VNode<RendererNode>)
          : undefined,
      };
    }
  })
  .filter((item) => item !== undefined) as ItemType[]; // 过滤掉undefined项
```

按照上面步骤使用递归函数生成菜单项：

完整代码如下：

```ts
// 递归对应菜单项字段方法
const generateMenuItems = (routes: any[]): ItemType[] => {
  // 对当前层级的路由进行筛选和排序
  const filteredAndSortedRoutes = routes
    .filter((item) => item.meta && item.meta.show)
    .sort((a, b) => {
      const orderA =
        a.meta && (a.meta.order as number)
          ? (a.meta.order as number)
          : Infinity;
      const orderB =
        b.meta && (b.meta.order as number)
          ? (b.meta.order as number)
          : Infinity;
      return orderA - orderB;
    });

  return filteredAndSortedRoutes
    .map((item) => {
      if (item.name) {
        const menuItem: ItemType = {
          disabled: item.meta?.disabled || false,
          label: item.meta?.title || item.name,
          key: item.name,
          icon: item.meta?.icon
            ? () => h(item.meta.icon as VNode<RendererNode>)
            : undefined,
        };
        if (item.children && item.children.length > 0) {
          // 递归调用 generateMenuItems 处理子路由
          menuItem.children = generateMenuItems(item.children);
        }
        return menuItem;
      }
      return undefined; // 或者根据需要处理没有name的路由
    })
    .filter((item) => item !== undefined) as ItemType[]; // 过滤掉undefined项
};
// 使用递归函数生成菜单项
menuItems.value = generateMenuItems(allRouters); // 将原始的 allRouters 传递给函数
```

## 其他

这里的 antdv 菜单 item 是可以添加自定义属性的，比如外链可以加个 href，然后在 clickmenu 点击菜单的时候判断有 herf 字段的时候打开窗口`window.open(to.meta.href)`。

本项目没有这么做。本项目跳转外链是在路由守卫中做的（如下）。

```ts
router.beforeEach((to, from, next) => {
  if (to.meta.href) {
    window.open(to.meta.href);
    next(false);
  }
  //...其他逻辑
});
```
