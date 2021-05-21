let express = require("express");
let router = express.Router();
let axios = require("axios");

// const { Random } = require("mockjs");
// let Mock = require("mockjs");

let allUsers = [];

// 全局设置跨域请求头
router.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
//#region Mock数据模板
// res.json(
//   Mock.mock({
//     status: 200,
//     "data|20(数据个数)": [
//       {
//         "name|5-8(字符串长度)": /[a-zA-Z]/,
//         "id|+1(id递增)": 1,
//         "value|0-500(取值范围)": 20,
//         image: Random.image("180x150", "#999"),
//       },
//     ],
//   })
// );
//#endregion

// 注册的 GET 和 POST 请求
router.get("/register", function (req, res) {
  let username = req.query.username;
  let password = req.query.password;

  let index = allUsers.findIndex((user, i) => user.username === username);
  if (index != -1) {
    res.json({
      status: 0,
      msg: "用户名已存在",
    });
  } else {
    allUsers.push({ username, password });
    res.json({
      status: 1,
      msg: "用户注册成功",
    });
  }
});

router.post("/register", function (req, res) {
  let username = req.body.username;
  let password = req.body.password;
  let index = allUsers.findIndex((user, i) => user.username === username);
  console.log(username);
  console.log(password);

  if (index != -1) {
    res.json({
      status: 0,
      msg: "用户名已存在",
    });
  } else {
    allUsers.push({ username: username, password: password });
    res.json({
      status: 1,
      msg: "用户注册成功",
    });
  }
});

router.post("/checkName",function (req,res) {
  res.send("false");
})

// 获取新闻列表
router.get("/news", function (req, res) {
  axios.get("https://news-at.zhihu.com/api/4/news/latest").then((data) => {
    res.json(data.data);
  });
});

// 下拉加载功能
router.get("/more", function (req, res) {
  let array = [];
  for (let index = 0; index < 10; index++) {
    array.push("第" + req.query.page + "页");
  }
  res.json({
    "status": 1,
    "data": array,
  });
});

module.exports = router;
