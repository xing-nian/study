/*
 * @Description: 微信 YZS43507802
 * @version: 1.0
 * @Company: 梦想
 * @Author: yinZhaoSheng
 * @Date: 2021-05-25 16:31:45
 * @LastEditors: yinZhaoSheng
 * @LastEditTime: 2021-05-25 16:33:14
 * @FilePath: \H5+CSS3\05025\yzs.tool.js
 */

// 存储
function savaCookie(name, cookie, d = 7) {
    var deadTime = new Date();
    var days = d * 24 * 60 * 60 * 1000
    // 怎么把毫秒数转为日期
    deadTime.setTime(deadTime.getTime() + days)
    document.cookie = `${name}=${cookie};expires=${deadTime}`
}

//获取cookie 
function getCookie(key) {
    //cookie字符串 并不是json字符串
    console.log("获取:", document.cookie);
    var cookieArr = document.cookie.split(";")
    console.log("cookie转为数组:", cookieArr);
    for (const k in cookieArr) {
        var msg = cookieArr[k].split("=")

        console.log("msg", msg);
        if (msg[0] == key) {
            return msg[1]
        } else {
            console.log("不存在这个key");
        }

    }
}
