/*
 * @Description: 微信 YZS43507802
 * @version: 1.0
 * @Company: 自由
 * @Author: yinZhaoSheng
 * @Date: 2019-10-23 14:56:34
 * @LastEditors: yinZhaoSheng
 * @LastEditTime: 2021-05-05 01:10:02
 * @FilePath: /vue/v/yzsvue01/static/resize.js
 */
//监听浏览器大小设置字体
(function(doc, win) {
    var html = doc.getElementsByTagName("html")[0],
      // orientationchange->手机屏幕转屏事件
      // resize->页面大小改变事件(一边pc端有用)
      reEvt = "orientationchange" in win ? "orientationchange" : "resize",
      reFontSize = function() {
        var clientW = doc.documentElement.clientWidth || doc.body.clientWidth;
        //alert(clientW);
        if(!clientW) {
          return;
        }
        //f/320=80/375
        html.style.fontSize = 100 * (clientW / 375) + "px";
      }
    win.addEventListener(reEvt, reFontSize);
    // DOMContentLoaded->dom加载完就执行,onload要dom/css/js都加载完才执行
    doc.addEventListener("DOMContentLoaded", reFontSize);
  })(document, window);
  // wdith: 3.75rem 是全屏 不管屏幕多大