# Mock Server 使用教程

本教程将指导您如何安装和启用项目的 Mock Server 功能（接口使用 json-server 生成，mock 接口简单快速）。

> 注意: 本教程假设您已经安装了 Node.js 和 npm。
## 1. 下载本项目

首先，您需要下载本项目的代码。您可以通过以下命令来克隆项目:

```bash
git clone  https://github.com/gaao/base-admin-vue-docs.git
# 切换到项目目录
cd base-admin-vue-docs

```

## 2. 安装依赖

首先需要安装必要的依赖包。在项目根目录下运行:

```bash
npm install json-server
```

## 3. 启动 Mock Server

在项目根目录下运行:

```bash
npm run mock
```

这将启动 Mock Server，您可以在浏览器中访问 `http://localhost:3000/` 来查看 Mock Server 的运行状态。

## 4. 使用 Mock Server

此时打开前端项目，就可以使用 Mock Server 提供的接口了。（前端项目使用的是 vite 开发环境，已经在 vite 中配置了代理功能）
