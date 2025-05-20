# Base Admin Vue Mock

这是[base-admin-vue](https://github.com/gaao/base-admin-vue)项目的文档，集成了 Mock 数据功能。
可以通过 https://gaao.github.io/base-admin-vue-docs/ 查看在线文档。

## 开发环境要求

- Node.js
- npm

## 项目结构

```
base-admin-vue-mock+docs/
├── .editorconfig                # 编辑器配置
├── .github/                     # GitHub配置
│   └── workflows/              # GitHub Actions工作流
│       └── deploy.yml          # 部署配置
├── .gitignore                  # Git忽略文件
├── .vscode/                    # VS Code配置
│   └── settings.json          # VS Code设置
├── README.md                   # 项目说明文档
├── docs/                       # 文档目录
│   ├── .vitepress/            # VitePress配置
│   │   ├── cache/            # 缓存目录
│   │   ├── config.ts         # VitePress配置文件
│   │   └── dist/            # 构建输出目录
│   ├── api/                   # API文档
│   │   ├── allapi.md        # 所有API文档
│   │   └── api-tutorials.md # API使用教程
│   ├── index.md              # 文档首页
│   └── project/              # 项目文档
│       ├── filetree.md      # 文件树说明
│       └── quick-start.md   # 快速开始指南
├── mockserver/                 # Mock服务器
│   ├── db.json               # Mock数据
│   ├── routes.json          # 路由配置
│   ├── routes/              # 路由处理
│   │   ├── auth.js         # 认证相关路由
│   │   └── user.js         # 用户相关路由
│   └── server.js           # 服务器入口文件
├── package-lock.json          # 依赖版本锁定文件
└── package.json              # 项目配置文件
```

## 启动项目

```bash
# 克隆项目
git clone # 克隆项目
git clone https://github.com/gaao/base-admin-vue-docs.git

# 进入项目目录
cd base-admin-vue-docs

# 安装依赖
npm install

# 启动开发服务器
npm run start
```

## 打包项目

```bash
# 打包生产环境
npm run docs:build
```

## 项目部署

```bash
# 部署到GitHub Pages
git push origin main
# 提交到 github 仓库的 main 分支会自动执行github actions的并发布到github pages
```
