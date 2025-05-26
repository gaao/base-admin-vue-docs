import path from 'path';
import jsonServer from "json-server";
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import menuRoutes from './routes/menu.js'; // 引入新的菜单路由
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

// 设置默认中间件 (logger, static, cors and no-cache)
server.use(middlewares);

// 添加请求体解析中间件
server.use(jsonServer.bodyParser);
// console.log("请求体解析中间件已添加",router,router.db.__wrapped__,router.db.__wrapped__.users);
// 创建一个中间件来传递数据库实例
server.use((req, res, next) => {
  req.dbData = router.db.__wrapped__;
  next();
});

// 注册自定义路由（确保在token中间件之前）
server.use('/api', authRoutes);
server.use('/api', userRoutes);
server.use('/api', menuRoutes); // 注册新的菜单路由

// token校验中间件
server.use((req, res, next) => {
  // 不需要校验token的白名单路径
  const whiteList = ["/api/health", "/api/login", "/api/captcha"];

  if (whiteList.includes(req.path)) {
    next();
    return;
  }

  const token = req.headers["x-token"];

  if (!token) {
    return res.status(401).jsonp({
      code: 401,
      msg: "未登录或token已过期",
      data: null,
    });
  }

  // 这里可以添加token的验证逻辑
  // 比如验证token是否过期等
  // 目前仅做简单演示，只要有token就通过

  next();
});

// 添加自定义响应处理中间件
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  next();
});

// 使用json-server路由中间件（放在最后）
server.use("/api", router);

// 自定义输出格式
router.render = (req, res) => {
  res.jsonp({
    code: 0,
    msg: "success",
    data: res.locals.data,
  });
};

// 启动服务器
const port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running at http://localhost:${port}`);
});
