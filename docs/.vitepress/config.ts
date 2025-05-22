import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/base-admin-vue-docs/',
  title: "Base-Admin-Vue",
  description: "项目文档+mock接口",
  // 忽略检查的链接
  ignoreDeadLinks: [
    'http://localhost:3000/',
    'http://localhost:3000/api',
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/project/quick-start' },
      { text: 'mock 接口使用', link: '/api/api-tutorials' },
      { text: 'api接口', link: 'http://localhost:3000/' }
    ],

    sidebar: [
      {
        text: '项目文档',
        items: [
          { text: '快速开始', link: '/project/quick-start' },
          { text: '文件目录树', link: '/project/filetree' },
          { text: '布局layout', link: '/project/layout' },
          { text: '路由配置', link: '/project/router' },
          { text: '菜单配置', link: '/project/menu' },
          // { text: '面包屑配置', link: '/project/breadcrumb' },
          // { text: '权限配置', link: '/project/permission' },
          // { text: '项目配置', link: '/project/config' },
          // { text: '组件', link: '/project/component' },
          // { text: '全局样式', link: '/project/style' },
          { text: '全局水印', link: '/project/watermark' },
          // { text: '全局变量', link: '/project/global' },
          // { text: '全局方法', link: '/project/global-method' },
          // { text: '全局指令', link: '/project/global-directive' },
        ]
      },
      {
        text: '项目依赖接口',
        items: [
          { text: '接口列表', link: '/api/allapi' },
          { text: '怎么使用mock接口', link: '/api/api-tutorials' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gaao/base-admin-vue' }
    ]
  }
})
