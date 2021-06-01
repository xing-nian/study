/*
 * @Description: 微信 YZS43507802 整理之前封装过的函数
 * @version: 1.0
 * @Company:
 * @Author: yinZhaoSheng
 * @Date: 2021-01-03 22:51:56
 * @LastEditors: yinZhaoSheng
 * @LastEditTime: 2021-05-29 13:31:37
 * @FilePath: \H5+CSS3\手机端\02移动事件\js\util.yzs.js
 */
// 封装:
function loadingImg(obj) {
  //  记录 下载的个数
  var n = 0;
  // 预加载所有图片
  obj.imgArray.forEach(function (value, index) {
    // 创建图片对象
    var imgObj = new Image();
    //指定地址开始缓存
    imgObj.src = value;
    // 监听缓存过程
    imgObj.onload = function () {
      // 只有在这里面才能拿到 图片大小
      n++;
      //下载进度
      var floatValue = n / obj.imgArray.length;
      obj.loadingCallBack && obj.loadingCallBack(floatValue);

      if (n == obj.imgArray.length) {
        // mask.style.display = "none";
        // 获取到所有图片大小
        // 定时器做优化了 如果只传2个参数不报错
        setTimeout(obj.successCallBack, 100);
      }
    };
  });
}
function randomNumber(a = 1, b = 10) {
  var max = Math.max(a, b);
  var min = Math.min(a, b);
  if (isNaN(max)) throw "参数不规范!！!";
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomColor() {
  var r = randomNumber(0, 255);
  var g = randomNumber(0, 255);
  var b = randomNumber(0, 255);

  return `rgb(${r},${g},${b})`;
}
// 浏览器高度
function clientHeight() {
  return window.innerHeight || document.documentElement.clientHeight;
}
// 上滚动距离  文档滚动的高度
function getScroTop() {
  return document.documentElement.scrollTop;
}
function getoffsetTop(ele) {
  var top = 0;
  while (true) {
    top = top + ele.offsetTop + ele.offsetParent.clientTop;
    ele = ele.offsetParent;
    // ele是body 的时候 ,就到顶了
    if (ele.offsetParent == null) {
      break;
    }
  }
  return top;
}

// // 常用的 习惯
// loadingImg({
//     imgArray: [],
//     loadingCallBack: function () { },
//     successCallBack: function () { },
// });
