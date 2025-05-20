# Base Admin Vue Mock API 文档

## 基础信息

- 基础 URL: http://localhost:3000/api
- 所有接口返回格式:

```json
{
    "code": 0,        // 0表示成功，其他值
    表示错误
    "msg": "success", // 响应消息
    "data": {}        // 响应数据
}
```

## 接口列表

### 1. 验证码接口

- 请求路径 : /captcha
- 请求方法 : GET
- 响应数据 :

```json
{
  "captchaId": "abcd-efgh-ijkl",
  "picture": "base64图片数据",
  "expireTime": "验证码过期时间"
}
```

### 2. 登录接口

- 请求路径 : /login
- 请求方法 : POST
- 请求参数 :

```json
{
  "account": "用户账号",
  "password": "用户密码"
}
```

- 响应数据 :

```json
{
  "token": "用户token",
  "expireTime": "token过期时间",
  "userInfo": {
    "id": "用户ID",
    "account": "账号",
    "nickname": "昵称",
    "avatar": "头像URL",
    "role": "角色"
  }
}
```

### 3. 用户信息接口

- 请求路径 : /userinfo
- 请求方法 : GET
- 请求头 : 需要携带 x-Token
- 响应数据 :

```json
{
  "id": "用户ID",
  "account": "账号",
  "nickname": "昵称",
  "avatar": "头像URL",
  "role": "角色"
}
```

### 4. 菜单列表

- 请求路径 : /menus
- 请求方法 : GET
- 请求头 : 需要携带 x-Token
- 响应数据 :

```json
[
  {
    "id": "菜单ID",
    "name": "菜单名称",
    "path": "路由路径",
    "icon": "图标",
    "parentId": "父级ID"
  }
]
```

### 5. 角色列表

- 请求路径 : /roles
- 请求方法 : GET
- 请求头 : 需要携带 x-Token
- 响应数据 :

```json
[
  {
    "id": "角色ID",
    "name": "角色名称",
    "code": "角色代码",
    "permissions": ["权限列表"]
  }
]
```

### 6. 系统设置

- 请求路径 : /settings
- 请求方法 : GET
- 请求头 : 需要携带 x-Token
- 响应数据 :

```json
{
  "siteName": "站点名称",
  "siteDescription": "站点描述",
  "copyright": "版权信息"
}
```

## 权限说明

1. 系统包含两种角色：

   - 管理员(admin): 拥有所有权限
   - 普通用户(user): 仅拥有 dashboard 和 profile 权限

2. Token 验证：

   - 除登录和验证码接口外，所有接口都需要在请求头中携带 x-Token
   - Token 未携带或已过期将返回 401 错误

## 测试账号

1. 管理员账号：

   - 账号：admin
   - 密码：123456

2. 普通用户账号：

   - 账号：user
   - 密码：123456
