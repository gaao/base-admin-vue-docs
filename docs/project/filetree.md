项目的目录结构如下：
``` plaintext
base-admin-vue/
├── .editorconfig                # 编辑器配置
├── .env.*                       # 环境配置文件
├── .gitattributes              # Git属性配置
├── .gitconfig                   # Git配置
├── .vscode/                     # VS Code配置
├── public/                      # 静态资源
│   └── vite.svg
├── src/                        # 源代码目录
│   ├── assets/                 # 资源文件
│   │   ├── icons/             # 图标
│   │   ├── iconslucide/       # Lucide图标
│   │   ├── styles/            # 样式文件
│   │   └── vue.svg
│   ├── components/            # 公共组件
│   │   ├── HelloWorld.vue
│   │   └── SelectLang/       # 语言选择组件
│   ├── config/               # 配置文件
│   │   ├── core.ts
│   │   ├── defaultSettings.js
│   │   ├── index.ts
│   │   └── router.config.js
│   ├── layouts/              # 布局组件
│   │   ├── BasicLayout.vue   # 基础布局
│   │   ├── PageView.vue
│   │   ├── RouteView.vue
│   │   ├── UserLayout.vue
│   │   └── modules/         # 布局模块
│   ├── router/              # 路由配置
│   │   ├── index.ts
│   │   ├── index1.ts
│   │   └── routes/         # 路由定义
│   ├── service/            # 服务层
│   │   ├── api/           # API定义
│   │   ├── http/          # HTTP请求封装
│   │   └── index.ts
│   ├── stores/            # 状态管理
│   │   ├── auth.ts        # 认证状态
│   │   ├── historytabs.ts # 历史标签页状态
│   │   └── index.ts
│   ├── views/             # 页面组件
│   │   ├── RBAC-page/    # 权限管理页面
│   │   └── _core/        # 核心页面
│   └── App.vue           # 根组件
├── package.json          # 项目配置
├── tsconfig.json        # TypeScript配置
└── vite.config.ts      # Vite配置
```