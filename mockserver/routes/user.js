import express from 'express';
const router = express.Router();

// 用户信息路由处理
const getUserInfo = (req, res) => {
  const dbData = req.dbData;
  res.jsonp({
    code: 0,
    msg: 'success',
    data: dbData.userinfo
  });
};

router.get('/userinfo', getUserInfo);

export default router;