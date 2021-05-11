# 5月6日

### 闭包函数

```
闭包就是一个函数  一个作用域可以访问另外一个函数内部的局部变量，局部变量所在的函数就是闭包函数。
例如： function fn (){
         var x = 10;
         function fn2(){
             console.log(x +20);
         }
         return fn2
     }
     var f= fn();
     f();
```

### BOM

```
# DOM Document object model (文档对象模型)

- JS操作页面的接口将网页中的html标签转换为js对象（dom对象），从而使用js对象来操作页面，例如：操作页面元素样式，属性，内容等。

# BOM Broswer object model (浏览器对象模型)

- BOM主要操作浏览器，比如：创建新页面，弹出对话框，设置定时器，检测浏览器，获取url信息等。
- 常见BOM对象有： window(顶级对象)   以下BOM对象都属于window的属性

1. navigator  浏览器本身的信息
2. location   浏览器url信息
3. history    浏览器访问的历史
4. screen     客户端屏幕信息
5. document   文档对象

BOM的范围更广， 可以说DOM是BOM下的一个分支。
```

### history

```
    history： 浏览器的历史信息
    go(num) 前进
    go(-num)后退
    back()后退一级  等价于 go(-1)
    forward()前进一级  等价于 go(1)
```

### location 对象

```
location 对象  ：获取，设置浏览器的url信息

location.href = 'https://www.baidu.com';//设置可跳转的地址

location.replace('https://www.mi.com'); //替换对象（不能后退）

location.reload(); // 刷新页面
           
```

### cookie

```
cookie 的作用：记录用户的状态
http是无状态的协议

    比如:张三到丹尼斯购物，首次购物丹尼斯收银员并不认识张三，并且以后张三再来丹尼斯购物收银员也不可能认识他，为了下次购物有折扣优惠，所以丹尼斯给张三办了一张会员卡。下次张三再来购物，出示会员卡即可享受会员优惠。
    会员卡: cookie
    cookie工作原理:
    1.浏览器第一次给服务端发送请求时，服务端并不知道浏览器的身份，所以服务端创建了一个身份标识(cookie: key=value) ,随着服务端响应浏览器时将cookie发送给浏览器
    ⒉.浏览器接收到响应之后，会将cookie保存起来。等到下次发送请求时，会携带cookie,发送给服务端。
    3.服务器接收到请求之后，会发现cookie，并进行验证，如果验证成功，就正常响应浏览器的请求。
    cookie是存储在浏览器端的。
    cookie 分为:
    会话cookie:没有到期时间，会随着浏览器的关闭而删除
    持久性cookie:设置的有到期时间，会依据到期时间删除cookie。
```

### 拖拽事件

```
       html标签中有属性draggable，用于控制标签是否能被拖拽
       a标签和img标签的draggable属性值默认定true，允许被拖拽
       其他大部分标签的draggable 属性值默认时false。

        拖拽事件:
        1.dragstart 拖拽开始
        2.dragover  拖拽元素到达指定容器上时，未松开鼠标
        3.drop      放下拖拽元素
 例如：
<body>
    <img src="../study2/练习2/furit.png" alt=""  id='img'>
    <div id="box"></div>
</body>
<script>
var img = document.querySelector('#img');
     var box = document.querySelector('#box');
     img.ondragstart = function(e){
         console.log('开始拖拽');
        //  dataTransfer 可以进行数据传输
        //  e.dataTransfer.setData('index',1)
     }
     box.ondragover = function(e){
         console.log('已经到达box');
         //默认情况下，执行 dragover事件时不允许进入drop事件内部
         e.preventDefault();
     }
     box.ondrop = function (e) {
         console.log('放下');
        //  var val = e.dataTransfer.getData('index')
        //  console.log(val);
         box.appendChild(img);
     }
</script>
```

### 正则表达式定义及方法

```
正则表达式：检索字符串格式。 用于匹配字符串中字符组合的模式
 //1.字面量形式创建正则表达式
   var reg = /hello/; //规则
 //2.构造函数  创建正则表达式
   var reg2 = new RegExp(/hello/)
   var str = 'hello world';
   
 //3.检测字符串是否符合上述规则true
 // 如果字符串符合则返回true   
    var res =reg.test(str);
    console.log(res);
 //4.如果exec()找到了匹配的文本  ，返回数组
    var res2= reg2.exec(str)   
    console.log(res2);
```

### 正则表达式常用的运算符

```
  1.边界符  ^  $  匹配开头  结尾
    var reg = /^a/; //表示以a开头
    var reg = /ab/; //表示包含字符串ab
    var reg = /abc$/;//以abc结尾
    var str = 'Aa b abc'
    console.log(reg.test(str));

    var reg = /^abc$/;  //精准匹配 
    var str = 'abc';  
    console.log(reg.test(str));

  2.[]  只要匹配[]中 其中一个就行
    var reg = /[ab]/;   //包含 a 或者 b
    console.log(reg.test('boy'));

    var reg = /^[ab]/; // 以a或者以b开头；

    var reg = /^[ab]$/; // 精准匹配 a或者b

    var reg = /^[a-zA-Z]/; //以字母开头
    var reg = /^[0-9]/;  //以数字开头

    var reg = /^[^0-9]/;  //[]内部^表示取反  不以数字开头
    console.log(reg.test('ext'));

   3.量词符号  * + ？ {}
    var reg = /a*/;  //*表示出现次数 >=0
    console.log(reg.test('zxc'));

    var reg = /a?/; //?表示出现 1 || 0false
    console.log(reg.test('abc'));

    var reg = /^[a-zA-Z0-9]{6,12}$/; //表示以数字字母开头长度为6-12；
    console.log(reg.test('a123456defghi'));//false
```

### 字符串中可以使用正则表达式的方法

```
    var str = '八百标兵奔北坡炮兵并排北边跑炮兵怕把标兵碰标兵怕碰炮兵炮'
    var res =  str.replace(/炮兵/g,'**'); //g表示全局匹配
    console.log(res);
    
   1.search 方法 返回某一个字符在字符串第一次出现的位置
    console.log(str.search('标兵'));

   2.match 方法  返回出现次数
     var res = str.match(/标兵/g)
     console.log(res);
```

### 分组

```
()表示分组
例如：
var reg = /^\d{1,3}(\.\d{1,3}){3}$/;
console.log(res.test(ip));
```

### 贪婪模式与懒惰模式

```
正则表达式表示字符串重复个数运算符 * + ? {} ，默认都会选择贪婪模式
如果想要改变为懒惰模式，就在运算符后加?号即可

var str = 'absaz1452wrats'
var reg = /a.*s/; 
console.log(str.match(reg))
// absaz1452wrats //贪婪模式 在所有满足条件的数据中获取最长的哪一个

 var reg2 = /a.?s/;
 console.log(str.match(reg2))
 //abs            //非贪婪模式 在所有满足条件的数据中获取最短的哪一个
```



# 5月7日

### 改变this指向的方法

```
  call()  apply()  bind()  都可以改变函数内部的this指向
  其中call()  apply() 可以调用函数
例如：
  1.调用函数
  function f1(){
        console.log('hello');
    }
    f1();
    f1.call();
    f1.apply()

    2.改变函数内部的this指向
    var p1 = {
        uname:'张三',
        born:'1990',
        address:'郑州'
    }
    var p2 = {
        uname:'jean',
        born:'2000',
        address:'Canada',
        getAge:function(data){
            return data - this.born;
        }
    }
    var p2_age = p2.getAge(2021);
    console.log(p2_age);

    需求： 计算p1的年龄
    call()
    参数1:改变this指向
    参数2:调用函数正常要传递的参数
    var res = p2.getAge.call(p1,2021);
    console.log(res);
   
    apply()
    与call()不同的是：apply()传递参数时的形式应该是数组
       var res = p2.getAge.apply(p1,[2021])
       console.log(res);

    bind()
    bind() 没有调用函数的功能，只能改变函数内部的this指向
    bind()会返回原函数改变this指向之后的一个新函数
    var f2 = p2.getAge.bind(p1,2021);
    var res = f2();
    console.log(res);
```

### 创建对象

```
1. 字面量形式创建对象
 var obj1 = {
         uname : 'jon',
         eat:function(){

         }
     }
     
2. 使用构造函数Object ， new一个对象
  var obj2 = new Object({name:'张三',age:18})

3. 自定义构造函数, new 一个对象  
 (  构造函数本身也是一个函数，只不过比较特殊
 (1)函数名称:首字母大写
 (2)构造函数内部封装的是对象的一些公共的属性和操作方法
    构造函数可以理解为我们所说的‘类’
    类是抽象出来的概念，可以把类当成一个模板)
function Person(uname,age,sex){
        
        this.uname = uname;
        this.age = age;
        this.sex = sex;
        this.speak = function(lang){
            console.log(this.uname + '说' + lang);
        }
    }
  var P2 = new Person('jean',18,'女');
    P2.speak('中文');
 
    
```

### 构造函数的内存浪费问题

```
       1.每创建一个对象，系统就会开辟一块内存空间，存放对象。

       2.同时，如果构造函数内部，因为函数属于复杂数据类型，
       
       3. 此时系统就会为函数开辟一块空间，存放函数。如果创建100个对象，系统就  会开辟100块内存空间存放这100个函数，此时就会造成内存浪费。
       
       如何实现让所以对象共享一个相同的方法，从而节省内存空间？
       
       解决方式：使用构造函数的原型对象,把方法添加到构造函数的原型对象，所有对象就可以共享这一个方法。
       
```

### 原型对象

```
     原型对象是什么？

     就是一个对象  它属于构造函数的一个属性
     
     原型对象的作用：共享方法，可以把公共的方法定义在原型对象上
     公共的属性定义在构造函数中。
     
     function Person(uname,age,sex){
        
        this.uname = uname;
        this.age = age;
        this.sex = sex;
     }
     console.dir(Person)
     // 将公共的函数定义到原型对象(prototype)中去
     Person.prototype.speak = function(lang){
         console.log(this.uname + '学的'+lang);
     }
     var P1 = new Person('辉',20,'男')
     var P2 = new Person('jean',18,'女');
     P1.speak('东北方言')
     P2.speak('甲骨文')

```

### 对象原型(__proto__)

```
1.对象有一个属性 [__proto__], 该属性指向 构造函数的原型对象[prototype].
    所以，实例对象p1,p2 可以访问prototype上的函数speak。
    
2.__proto__ 对象原型存在的意义：它为实例对象提供了一个查找机制（查找方向）。
   查找机制/查找规则： 先看 p1 本身有没有speak方法，
   如果没有，就沿着__proto__查找 构造函数Person的原型对象上有没有speak函数。
   

```

