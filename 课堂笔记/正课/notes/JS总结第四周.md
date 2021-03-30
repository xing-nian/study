# 日期：3月30号

### js引入方式

```
 1.行内 js    不推荐使用，代码可读性差
 2.内部 js    只能应用于当前页面，其他页面无法使用。
 3.外部 js，  推荐使用
```

### 弹窗与内容输出方法

```
    1.提示框
    alert('提示内容') 

    2.询问框
    confirm("确定要退出吗");
    
    3.信息输入框
    var res = prompt('请输入年龄');

    4.打印 (控制台输出)  
    console.log(res);

   5.输出到页面上
    document.write('<h1>Java Script</h1>')
    document.write('hello');
```

### 变量

```
变量: 可变化的量
var 声明变量的关键字  ：x 变量名称  代号 "abc" 变量值  数据
var x = "abc";

先声明，后赋值   
= 运算符  运算顺序从右往左 

    var a = 10;
    var b = 11;
    var c = 12;
    声明多个变量
var a = 10,b = 11,c = 12;

变量命名规范:
1.有意义
2.首字母只能是英文字母，_,$,其余的字符可以是数字，字母，_
3.不能使用关键字和保留字符，如：
var for if else break continue while let const function 等
4. 驼峰命名法， 如 var userName
```

### 数据类型

```
【基本数据类型/简单类型】
    1.字符串类型 string  定义文本信息 用 "" ' '包裹
    可以使用转义符
    \',单引号
    \'',双引号
    var uname = '李\'四\''
     console.log(uname)
     
    2. 数字类型 number  可以进行数学运算
      var price = 168;
    
    3.布尔类型  boolean  真(true)和假(flase)
    var isMale = true;
    
    4. undefined  未定义  变量未赋值时
      var y;
      
    5. null 空值 空对象  不存在
    var box = document.getElementById('box'); 
    
【复杂数据类型/引用类型】    

   1.对象 用{}包裹
    //var num = "李四",age = 18, isMale = true;
    var person = {
        // 属性： 值
        uname:"lisi",
        age:18,
        isMale:true
        
    2. 数组 一组数据的集合 用[]包裹
    元素 ->数据
    索引(编号) 从0开始，通过索引访问数组中的元素

    var arr = ["张三","李四","刘晓华",1,2,3]
    arr[3]
    console.log(arr[3])      
```



### 赋值运算

```
1. = 赋值运算符  ,运算顺序从右往左
2. += ,-= ,*= ,/=
```

### 算数运算符

```
 + - * /  加, 减, 乘, 除.
 
 % 求余运算符 余数 3/2 = 1...1
    console.log(10 / 3);
    console.log(10 % 3);
    console.log(10 % 2);
    // 如何使用 求余运算符来判断一个数是否是整数或者是奇数
    
 ++x;  //x自增之后再参加其他运算 
 x++   //先参加其他运算再自增
 
 var c = 10 ;
 var d = c++ + ++c -(c-- - --c);    //实际运算：10 + 12 -(12 - 10)
 console.log(d);
```



### 比较运算符

```
1. >  < 
2. >=  <=
3.== 等于  ===全等于         ==只比较值不比较数据类型  === 既比较值又比较数据类型
4.!=不等于, !== 不完全等于

      var x = 10 ;  //值的类型 : number
      var y = '10'; //          string
      console.log(x == y );    //true
      console.log(x === y );   //false
      console.log(x != y ) ;   //false
      console.log(x !== y );   //true
```

### 逻辑运算符

```
&& and  且     多个表达式必须同时成立 才会返回 true

||  or  或   多个表达式只要有一个成立,返回true,所有都不成立返回fales

!  not 非    对结果进行取反操作
```



### 判断语句

```
if (条件表达式) {
          // 如果  条件表达式成立(if 小括号中的值是true), 则执行此代码块
      } else {
        //   如果 if小括号中的条件表达式不成立,则执行此代码块
      }
```

