import express from "express";
const router = express.Router();

// 登录路由处理
const login = async (req, res) => {
  const db = req.dbData;  // 从请求对象中获取数据
  // console.log("登录请求", db, req.body);
  const { account, password } = req.body;
  
  // 确保db是正确的数据对象
  const users = db.users || [];

  // 查找用户
  const user = users.find(
    (u) => u.account === account && u.password === password
  );

  console.log("登录", account, password, user);
  if (user) {
    const loginResponse = db.login[user.account];
    res.jsonp({
      code: 0,
      msg: "登录成功",
      data: loginResponse,
    });
  } else {
    res.status(401).jsonp({
      code: 401,
      msg: "用户名或密码错误",
      data: null,
    });
  }
};

router.post("/login", login);

export default router;
