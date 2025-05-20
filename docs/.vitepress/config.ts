import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Base-Admin-Vue",
  description: "项目文档+mock接口",
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
          { text: '文件目录树', link: '/project/filetree' }
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
