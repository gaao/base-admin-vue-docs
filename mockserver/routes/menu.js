import express from 'express';
const router = express.Router();

// 获取菜单路由处理
const getMenus = (req, res) => {
  const dbData = req.dbData;
  const token = req.headers["x-token"]; // 获取请求头中的token
  const userInfo = dbData.userInfo[token]; // 根据token获取用户信息

  let menus = [];

  if (userInfo && userInfo.role === 'admin') {
    // 管理员角色，返回所有菜单
    menus = dbData.menus || [];
  } else if (userInfo && userInfo.role === 'user') {
    // 普通用户角色，只返回Dashboard菜单
    // 您可以根据需要修改这里的过滤逻辑
    menus = (dbData.menus || []).filter(menu => menu.path !== '/role');
  } else {
    // 未知角色或无用户信息，返回空菜单
    menus = [];
  }


  res.jsonp({
    code: 0,
    msg: 'success',
    data: menus
  });
};

router.get('/menus', getMenus);

export default router;