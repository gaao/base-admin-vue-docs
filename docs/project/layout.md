# 布局 layout 说明

> 布局组件位于 `@/layouts` 目录下

## 目前有下面几种布局

主要包含：

- BasicLayout：基础布局，包含顶部导航栏和侧边栏，适用于大部分页面。
- PageLayout：空白布局，不包含任何导航栏和侧边栏，适用于登录、注册等页面。
- UserLayout：用户相关页面布局，不包含侧边栏，适用于登录、注册等页面。

### BasicLayout 基础布局

项目的基础布局采用经典的“品”字形后台管理系统布局方案

> 对应文件 BasicLayout.vue

```vue
  <a-layout>
    <!-- 顶部栏 -->
    <a-layout class="main">
      <!-- 侧边栏 -->
      <a-layout class="content">
        <!-- 历史记录列表 -->
        <!-- 面包屑 -->
        <!-- 页头 -->
        <!-- 主要内容展示区 -->
        <!-- 页脚 -->
      </a-layout>
    </a-layout>
  </a-layout>
```

### UserLayout 用户相关页面布局

采用垂直布局方案，仅包含主要顶栏、内容展示区和页脚

> 对应文件 UserLayout.vue

```vue
  <a-layout>
    <!-- 顶部栏 -->
    <a-layout class="main">
      <a-layout class="content">
        <!-- 主要内容展示区 -->
        <!-- 页脚 -->
      </a-layout>
    </a-layout>
  </a-layout>
```

## 主要包含以下几个部分

- 顶部导航栏（Header）
  - Logo
  - 全局搜索
  - 个人中心
- 侧边菜单栏（Sidebar）
  - 可折叠菜单
  - 菜单项图标
  - 多级菜单支持
- 主内容区（Main Content）
  - 面包屑导航
  - 页面标题
  - 主要内容展示区
  - 页脚

### 侧边菜单栏（Sidebar）

侧边菜单栏用于导航和切换页面，包含以下几个部分：

- 可折叠菜单：在小屏幕设备上，侧边栏会自动折叠，只显示菜单图标。
- 菜单项图标：每个菜单项都有对应的图标，用于区分不同的页面。
- 多级菜单支持：菜单项可以包含子菜单，实现多级菜单的效果。

菜单的展示是根据用户的权限和角色进行动态渲染的。
通过 vue-router 的 beforeEach 钩子函数，在路由跳转前判断用户是否有权限访问该页面。
如果用户没有权限，则跳转到 403 页面。
[路由配置](/project/router.md)


菜单的显示是自动完成的，系统会根据路由的配置自动生成菜单。
通过 vue-router 的 getRoutes() 方法获取所有路由信息，然后根据路由配置生成菜单。

```ts
// 获取所有路由信息
const routes = router.getRoutes();

// 过滤出需要显示的路由
const filterRoutes = routes.filter(route => {
  // 过滤掉不需要显示的路由
  // 如：登录页、404 页面等
  // 并排序
  return route.meta.showInMenu !== false;   // 显示在菜单中
})
// 生成菜单数据
const menuData = filterRoutes.map(route => {
  // 生成菜单项数据对应antdv的menu组件结构 https://antdv.com/components/menu-cn#menuitemtype
  // 如：菜单项名称、菜单项图标、菜单项路径等
  return {
    danger: route.meta.danger,
    disabled: route.meta.disabled,
    icon: route.meta.icon,
    key: route.name,
    label: route.meta.title,
  }
})

// 渲染菜单
<a-menu :items="menuData" />
```


位于 `src/router/routes` 目录下，每个文件对应一个路由模块。路由模块通常包括以下内容：

<!--
## 响应式设计

布局支持响应式设计，在不同尺寸的设备上都能获得良好的显示效果：

- 桌面端：完整显示所有布局元素
- 平板：自动折叠侧边栏，可通过按钮展开
- 移动端：隐藏侧边栏，通过抽屉式菜单访问

## 主题定制

布局支持主题定制，可以调整：

- 主题色彩
- 导航栏样式
- 侧边栏宽度和样式
- 内容区域宽度
- 字体大小等
 -->

## 使用方式

在需要使用布局的路由配置中，指定使用的布局组件：

```js
{
  path: '/dashboard',
  name: 'Dashboard',
  component: () => import('@/views/dashboard/index.vue'),
  meta: { title: '仪表盘', icon: 'dashboard', layout: 'BasicLayout' }
}
```

其中，layout 属性指定使用的布局组件名称，如 'BasicLayout'。
不建议直接在页面中使用
