# 5月10日

### constructor属性

```
     1.constructor 属性指向就是构造函数本身
     原型对象（prototype）上有一个属性 ：constructor
     原型对象（__proto__）上也有一个属性 ：constructor
     

     2.constructor的作用：它的作用就是用来记录对象产生于那个构造函数，可以让原型对象重       新指向原来的构造函数。 
```

### 原型链

```
    什么是原型链？
    只要是对象内部就有__proto__;
    通过对象的__proto__属性形成的链式查找机制，即原型链

    查找规则
    1.当访问一个对象的属性或方法时，首先看对象自身是否有没有该属性
    2.如果没有就查找它的原型，即__proto__,看__proto__指向的原型对象有没有。
    3.没找到继续查找，
    4.直到找到Object.prototype.__proto__为null为止；
```

### 原型对象的应用(拓展内置对象)

```
    //内置数组求和
    //字面量创建数组；//只能通过此方式
    Array.prototype.sum = function(){
        var s = 0;
        for(var i =0; i<this.length;i++){
            s +=this[i];
        }
        return s;
    };
    var arr = new Array(2,3,5,7,8);
    var res = arr.sum();
    console.log(res);
```

### 通过构造函数和原型链组合实现继承

```
<script>
    function Father(uname,age,sex){
        this.uname = uname;
        this.age = age;
        this.sex = sex;
    }
    Father.prototype = {
        constructor:Father,
        eat:function(food){
            alert(this.uname + '不喜欢吃' +food)
        },
        speak:function(lang){
            alert(this.uname + ':' +lang)
        }
    }

    function Son(uname,age,sex){
      // 实现属性的继承
    Father.call(this,uname,age,sex);

    }
    //不能使用该方法  不可取不能实现继承  Father，Son 会相互影响
    // Son.prototype = Father.prototype

    // 通过原型链方法实现的继承
    // 正确的方式
    Son.prototype = new Father();
    Son.prototype.constructor = Son;
    var s = new Son('离',17,'');
    s.eat('土');

    console.log(Father.prototype);
</script>
```

### 数组常用的API()

```
 1.Array.from(arrLink,callback)  把一个类数组转化为数字 返回转换后的新数组
    var str = 'hello'
    参数1:要转换的数据（类数组）
    var arr = Array.from(str);
    console.log(arr instanceof Array);

    参数2:回调函数
    [2,4,6,8,10]
    var arr =Array.from('12345',function(ele,i){
        // console.log(ele+'的索引是:'+i);
        return ele *2
    })
    console.log(arr);

    2.forEach(callback) 遍历数组
    参数：对遍历到的每个元素执行对应的操作
    var arr = ['a','b','c']
    arr.forEach(function(ele,i,array){
        console.log(ele+':'+i);
        
    })

    3. map(callback) 返回一个新数组
    对数组中的每个元素运行指定的函数，返回每次调用函数的结果，并将其组成一个新的数组

    var arr = [1,2,3,4,5]
    var arr1 = arr.map(function(ele){
        return ele*2;
    })
    console.log(arr1);


4. filter(callback) 过滤 筛选  对数组中的元素进行过滤筛选 将满足条件的元素组成一个新数组
    var arr = ['张三','王五','王六','张时','李三']
    // 筛选出所有姓王的名字
   var arr1 = arr.filter(function(ele,i,array){
        return /^王/.test(ele)
    })
    console.log(arr1);

var arr = [{
    title:'苹果',
    price:12
},{
    title:'栗子',
    price:1
},{
    title:'西瓜',
    price:15
},{
    title:'南瓜',
    price:11
},{
    title:'清果',
    price:7
},]
 var arr1= arr.filter(function(ele){
    //   if (ele.price>10 && ele.price<15) {
    //       return true;
    //   } 
    return ele.price>10 && ele.price<15
})
console.log(arr1);

检测是否包含某个元素
console.log('avzxczxdaad'.includes('d'));

5.some(callback) 查找数组中是否有满足条件的元素  返回布尔值
  var ber =  arr.some(function(ele,i,array){
        return ele.price >11
    })
    console.log(ber);

6. find(callback) 查找满足条件的第一个元素  返回该元素
   findIndex(callback) 查找满足条件的第一个索引 返回该元素的索引
   var item =arr.find(function(ele,i,array){
       return ele.price >11;
   })
   console.log(item);
```

# 5月11日

### ES5严格模式

```
1. 严格模式：即让javascript在更严格的条件下运行
2. 严格模式设计的目的：

- 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
- 消除代码运行的一些不安全之处，保证代码运行的安全；
- 提高编译器效率，增加运行速度；
- 为未来新版本的Javascript做好铺垫。

3. 进入严格模式的标志： "use strict"
4. 进入严格模式的两种模式：

- 将"use strict"放在脚本文件的第一行，让整个脚本文件都按照严格模式运行
- 将"use strict"放在函数体的第一行，让整个函数按照严格模式运行

5. 严格模式下一些语法的改变：
   比如： 变量声明  普通函数内this指向

- 详细内容参考文档：http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html
```

### ES6

```
1. 什么是ES6？

- ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在2015年6月正式发布了。它是由ECMA国际标准化组织制订的一项脚本语言的标准化规范。

2. ECMAScript 与 JavaScript的关系？

- ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现（另外的 ECMAScript 方言还有 Jscript 和 ActionScript）。日常场合，这两个词是可以互换的。

3. ES6 与 ECMAScript2015的关系

- ES6 的第一个版本，就这样在2015年6月发布了，正式名称就是《ECMAScript 2015标准》（简称 ES2015）
- ES6 是一个泛指，泛指ES2015及后续版本，而ES2015 则是正式名称，特指该年发布的正式版本的语言标准
- 

4. 为什么要使用ES6？

- 因为JavaScript本身有许多不合理、不完善之处，为了对js做出规范，增加新的功能，让它能够开发复杂的大型应用程序，成为企业级开发语言。

```

### var和let关键字

```
1.使用let关键字声明变量，不存在变量提升.
2.let声明的变量能形成块级作用域.变量只在它所在的代码块内生效.
3.const 声明常量,不存在变量提升，能形成块级作用域。   常量：即 值不能改变

 总结:let const var的区别
   1.是否有变量提升
   2.值是否能改变
   3.是否会形成块级作用域
```

### 箭头函数

```
箭头形式： let f = (参数)=>{函数体} 
1.在箭头函数中，如果函数体中只有一句代码，并且代码的执行结果就是函数的返回值函数体大括号{}可以略
// let sum = (a,b)=>a+b;
2.在箭头函数中，如果形参只有一个，形参外面的小括号() 也可以省略  
//let num = a => alert(a);
3. 箭头函数内部的this 等于 函数定义位置中的this

 案例4
   因为obj是一个对象，对象是无法形成作用域的，
   所以eat相当于定义在了全局作用域中,因此箭头函数内部this指向window.
   let obj= {
   uname:'张三',eat:()=>{
   console.log(this); //this指向window
   }
   }
    obj.eat()
```

### 作用域总结

```
   1.全局作用域 Global    
   - 用var定义的变量，如果在全局作用域中  
   - 该变量会被绑定到window上，作为window的属性
   
   2.局部作用域 Local
   - var let const 声明的变量如果在函数体内部，都属于局部变量
   - 作用范围是：函数体内部
   
   3.let const 声明的变量可生成块级作用域 Block
   li:    {
          let a2 = 100;
          }
          
   4.脚本作用域
   - 脚本作用域 针对 let const 声明的变量
   - 脚本作用域中的let const声明的变量不属于window的属性
   - 不能通过 window变量名访问变量       
   li:  let b2 = 200;
```

### ES6中的类和对象

```
1.js语言的传统方式 是通过构造函数定义类，并生成对象
li: function Person(uname,age){
        this.uname = uname;
        this.age = age;
    }
    Person.prototype = {
        cunstructor : Person,
        eat:function(){
            console.log('hello');
        }
    }
    new Person('LI',17)
    
2.ES6 引入了 Class(类) 这个概念 , class 关键字定义类 ,new 关键字创建对象.

- constructor 就是构造函数， 相当于上面的Person

- constructor方法是类的默认方法 ，通过new命令生成实例对象，自动调用该方法，并返回实例对象。

- 构造函数的prototype属性，在ES6的类上继续存在。

- 事实上 类中所有的方法还是定义在了构造函数的原型对象上

- 注意 ： class 中的方法 ，不适用function关键字 ； 方法之间 不能用逗号“,”

li:class Animos{
      constructor(aname,type){
        this.aname = aname;
        this.type =type ;
        }
         jump(){
           console.log('跳的真高');
       }
       }
```

### ES6类的继承

```
1. js继承方法
li:
  //父类
 function Father(price,num){
        this.price = price;
        this.num = num;
    }
    
   Father.prototype.compute =function(){
       return this.price * this.num
   }
   //子类
   function Son(price,num){
    //实现属性继承
   Father.call(this.price,num)
   }
    //实现方法继承
   Son.prototype = new Father();
   Son.prototype.constructor = Son;
   //通过构造函数+原型链组合  实现继承
   
2.ES6 类的继承  
li：
class Father{
    constructor(price,num){
    this.price = price;
    this.num = num
}
getTotalPrice(){
    return this.price * this.num
}
}
// ☆通过 extend 关键字实现继承
class Son extends Father{
  constructor(price,num,discount){
//super()调用父类的构造函数
// ☆注意：在子类的构造函数中，必须先使用super()调用父类的构造函数，才能访问this关键字
//否则会报错
    super(price,num)
    this.discount = discount;
  }
}

var s1 = new Son(12,5,0.88);
console.log(s1.price);
console.log(s1.getTotalPrice());


3.重写父类的方法
li:class Father{
    constructor(price,num){
    this.price = price;
    this.num = num
}
getTotalPrice(){
    return this.price * this.num
}
}
// 通过 extend 关键字实现继承
class Son extends Father{
  constructor(price,num,discount){
//super()调用父类的构造函数
//注意：在子类的构造函数中，必须先使用super()调用父类的构造函数，才能访问this关键字
//否则会报错
    super(price,num)
    this.discount = discount;
  }
  setJiFen(){
      // super 作为对象，指向父类的原型对象
      return super.getTotalPrice() /100; //每100元 积一分
  }
//  重写父类方法
//  ☆ 要求： 方法名保持一致 ， 参数列表保持一致 ，返回值保持一致,只是逻辑有所改变。
//   
 getTotalPrice(){
    return super.getTotalPrice() * this.discount;
}
}

let s1 =new Son(100,5,0.88)
var res =  s1.setJiFen()
console.log(res);

 var res2 = s1.getTotalPrice();
 console.log(res2);

```

# 5月12日

### 静态成员和实例成员

```
☆ 实例成员：构造函数内部通过 this添加的成员，称之为实例成员。实例成员只能通过实例化对象访问。
☆ 静态成员 ：在构造函数上添加的成员，只能通过构造函数访问

    //  ES6
    class Student{
        constructor(sname,sage){
            // 实例
            this.sname = sname;
            this.sage = sage;
        }
        //☆ 静态属性 只能由类名访问
        static sex = '男'
        // 实例方法
        study(){
            alert('风和日丽')
        }
        //☆ 静态方法 只能由类名访问
        static work(){
            alert('上班摸鱼');
        }
    }
    let s1 =new Student('li',19);
    s1.sage =20;
    console.log(s1.sage);
    console.log(Student.sage);//undefined
    s1.study();
    // Student.study(); //Student.study is not a function

    // console.log(s1.sex); //undefined
    console.log(Student.sex);//男

    // s1.work(); //报错  s1.work is not a function
    Student.work();

```

### jQuery

```
1.官网下载： https://jquery.com/download/
2.在线使用： https://code.jquery.com/jquery-3.6.0.min.js

<!-- 本地引入jquery.js -->
<script src="./jquery.js"></script>

<!-- 引入在线 -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

### jQuery选择器

```
1.jQuery 中的选择器与css选择器一致  $()调用
2.css()  等同于行内样式

-   一个属性样式
    $('.box').css('width','200px')

-   多个属性样式传递{} 对象
-   $('.list li:first').css({color:'#fff'});
    //第一个元素
    
-   $('.list li:last').css({color:'#fff'});
    //最后一个元素
    
-   $('.list li:eq(1)').css({color:'blue'});
    // :eq(index) 根据指定索引查找元素
    
-   $('.list li:gt(2)').css({fontSize:20})
    // :gt(index) 找到大于指定索引的元素
    
    
-   $('.nav li:even').css('color','red')
-   $('.nav li:odd').css('color','blue')
    // :even 偶数   :odd 奇数
    
-   $('.nav li:not(.active)').css('fontSize',20)
    // :not() 除了指定元素以外
```

### jQuery属性操作

```
1.获取 ，设置 标签(自带)属性 prop()
    console.log($('a').prop('href')); //获取属性值
    $('a').prop('href','https://www.mi.com')//设置属性值

2.获取，设置(自定义)标签属性 attr()
    $('div').attr('data-color','red'); //设置自定义标签属性
    console.log($('img').attr('data-src')); //获取自定义标签属性

3.移出标签的属性 removeAttr()
    $('img').removeAttr('data-src')
    
    $('a').removeAttr('href')
    $('a').removeProp('href')
```

# 5月13日

### jQuery属性操作2

```
1. attr() 也可以操作标签自带的属性
   $('a').attr('href','http://www.baidu.com')
   
2. attr可以设置多组属性  参数：传对象
    $('a').attr({
        href:'https://www.baidu.com',
        title:'baidu'
    })
 
3. 获取input的选中状态
   console.log($('#inp').prop('checked')); //false  true
   console.log($('#inp').attr('checked'));  //undefined      checked
   
4. 设置，获取获取标签的内容
    html() text()
    console.log($('#txt').html());
    console.log($('#txt').text());
   html传参  代表设置标签的内容
    $('#txt p').html('world') 
    
5.val() 获取，设置输入框中的值
    console.log($('#uname').val());
   
6.class属性的操作
  addClass()添加类 removeClass()删除类 toggleClass()类开关
   $('#list li:eq(1)').addClass('active')
   $('#list li:eq(0)').removeClass('active')
   $('#list li:eq(2)').toggleClass('active')//有删无增
```

### jQuery链式调用

```

<body>
    <a href="https://www.baidu.com">baidu</a>
</body>
<script src="./jquery.js"></script>
<script>
    // 链式调用
    $('a')
    .attr('href','https://www.mi.com')
    .html('小米')
    .css('color','red')
</script>
```

### jQuery获取元素偏移量

```
 1.offset()  返回的是一个对象{left:x,top:y}
    //获取指定元素 对于视口的偏移量
    console.log($('.child').offset().top);
    
 2.position() 返回的是一个对象{left:x,top:y}
    console.log($('.small').position());
```

### jQuery获取元素尺寸

```
1.width() = width
    console.log($('.box').width());

2.innerWidth() = width + padding
    console.log($('.box').innerWidth());

3.outerWidth() = width +padding + border + margin
    console.log($('.box').outerWidth());

4.获取浏览器可视区域宽高（不包含滚动条）
    console.log($(window).innerWidth());
    console.log($(window).outerWidth());
```

### jQuery获取滚动高度

```
获取滚动高度scrollTop方法
let st = $('body').scrollTop()||$('html').scrollTop();
console.log(st);//即为滚动高度
```

### jQuery过滤器

```
first() last()  eq() 从获取的元素集合中筛选出来指定的某一个元素
  1.第一个
 $('.list li').first().css({
        color:'red',
        fontSize:20
    })  
    
  2.最后一个 
 $('.list li').last().css({
        color:'red',
        fontSize:20
    })
    
  3.负值表示倒数第几个元素
$('.list li').eq(-2).css({
        color:'red',
        fontSize:20
    })
```

### jQuery节点操作

```
1.子节点 children()
    $('.list').children().css({
        borderBottom:"1px solid #e0e0e0"
    })

2.父节点 parent()
    console.log($('.list').parent());
    // 注意：parents()获取所有祖先元素
    console.log($('.list').parents());

3.兄弟节点
    // 上一个兄弟节点  prev()
    // 下一个兄弟节点  next()
    $('.active').prev().css('color','red');
    $('.active').next().css('color','skyblue');

4.所有同级兄弟节点 siblings()
 $('.active').siblings().css('backgroundColor','gold');
```

### jQuery事件

```
1.$(this) 指的是jQuery对象
$('button:eq(0)').click(function(){
        $(this).css('color','red');
    })
    
2.index()可以获取当前多点击元素的索引
    let x = 0;
    $('button:eq(0)').css('color','red');
    $('button').click(function(){
        $('button').eq(x).css('color','black');
        $(this).css('color','red');
        x = $(this).index(); 
        console.log($(this).index()); 
    })
    
3.on()
    $('button:eq(0)').on('mouseenter',function(){
        $(this).css('color','red')
    }) 
    
4.one() 事件只执行一次
    $('button:eq(1)').one('click',function () {
        alert('点击我了')
    })
   
5.鼠标的悬停事件 （存在冒泡）
    $('.box').hover(function(e){
        // 鼠标移入
        $(this).css('color','#fff')
    },function(){
        // 鼠标离开
        $(this).css('color','black')
    })
 
```

### jQuery轮播图

```
<style>
    .pic{
    width: 800px;
    height: 500px;
    display: none;
}
view{
    margin: 50px auto;
}
</style>
<body>
     <div class="view">
        <img class="pic" src="../../study2/练习2/img/a.webp" alt="">
        <img class="pic" src="../../study2/练习2/img/b.jpg" alt="">
        <img class="pic" src="../../study2/练习2/img/c.webp" alt="">
        <img class="pic" src="../../study2/练习2/img/d.webp" alt="">
    </div>
    <button id="next">下一张</button>

</body>
<script src="../jquery.js"></script>
<script>
     let imgs = $('.view img');
     let x = 0;
     
 ☆☆// show() 设置元素显示 hide()设置元素隐藏
     imgs.eq(x).show();
     
     $('#next').click(function(){
         x++
         if (x>imgs.length - 1) {
             x = 0 ;
         }
        imgs.hide().eq(x).show()
     })
</script>
```

### show()和hide()动画

```
简介：.hide()/.show() 隐藏和显示元素
使用.hide()/.show()会同时改变被选元素的高度、宽度和透明度，参数为duration（毫秒）或‘slow’/‘fast’，也可以不加参数，不加参数效果与display：none/block；效果一致。
li：
<style>
     .box{
         width: 300px;
         height: 300px;
         background-color: red;
     }
</style>
<body>
    <button id="show">显示</button>
    <button id="hide">隐藏</button>
    <button id="toggle">显示或隐藏</button>
    <button id="sd">隐藏然后显示</button>
    <div class="box"></div>
</body>
<script src="./jquery.js"></script>
<script>
    $('#show').click(function(){
        $('.box').show(2000)
    })  //显示

    $('#hide').click(function(){
        $('.box').hide(2000)
    })  //隐藏

    $('#toggle').click(function(){
        $('.box').toggle(2000)
    })  //显示或隐藏
    

    $('#sd').click(function(){
        $('.box').hide(2000,function(){ 
        $('.box').show(2000)
    })
    }) //隐藏然后显示
</script>
```

### slideDown()动画和slideup()动画

```
简介： .slideUp()/.slideDown() 滑上和滑下
使用.slideUp()/.slideDown()会使被选元素由页面上滑动出现或滑出页面，参数为duration（毫秒）或‘slow’/‘fast’。
li：
<style>
        .box{
            width: 300px;
            height: 300px;
            background-color: red;
        }
   </style>
</head>
<body>
    <button id="show">隐藏</button>
    <button id="hide">显示</button>
    <button id="toggle">显示或隐藏</button>
  
    <div class="box"></div>
</body>
<script src="./jquery.js"></script>
<script>
    //  隐藏
    $("#hide").click(function(){
        $('.box').slideDown(2000)
    })
    // 显示
    $("#show").click(function(){
        $('.box').slideUp(2000)
    })
    // 显示或隐藏
    $("#toggle").click(function(){
        $('.box').slideToggle(2000)
    })
</script>
```

### fadeOut()动画和fadeIn()动画

```
简介：.fadeIn()/.fadeOut() 淡入和淡出
使用.fadeIn()/.fadeOut()会改变被选元素的透明度，参数为duration（毫秒）或‘slow’/‘fast’。
li：
<style>
        .box{
            width: 300px;
            height: 300px;
            background-color: red;
        }
   </style>
</head>
<body>
    <button id="show">显示</button>
    <button id="hide">隐藏</button>
    <button id="toggle">显示或隐藏</button>
  
    <div class="box"></div>
</body>
<script src="./jquery.js"></script>
<script>
    //  隐藏
    $("#hide").click(function(){
        $('.box').fadeOut(2000)
    })
    // 显示
    $("#show").click(function(){
        $('.box').fadeIn(2000)
    })
    // 显示或隐藏
    $("#toggle").click(function(){
        $('.box').fadeToggle(2000)
    })
</script>
```

### animate动画

```
1.参数1：一组动画属性及终止
2.参数2：动画速度（时间）
3.参数3：动画效果 （jQuery只提供了linear swing其他的需要插件支持） 
4.参数4：动画结束后执行的回调函数
5.下载插件地址：https://gsgd.co.uk/sandbox/jquery/easing/
li:
  $('#start').click(function(){
        $('.box').animate({
            marginLeft:500,
            fontSize: 24
        },2000,'easeInBounce',function(){
            alert('动画完成后执行的函数')
        })
    })

    $('#stop').click(function(){
        // stop() 停止动画
        $('.box').stop()
    })

```

### DOM对象和jQuery对象转换

```
1. DOM只能访问原生DOM的API
    let div = document.getElementById('box');
    // div.html('world');//报错
    // div.innerHTML = 'world'

2. jQuert对象只能访问jQuert的API
    let div1 = $('#box');
    // div1.style.color = 'red'//报错
    // div1.css('color','red')

3.DOM对象和jQuery对象的相互转换：
  (1)DOM对象转换为jQuery对象
  ☆ 使用$()包装
     $(div).html('world')

  (2)jQuery对象 转换为DOM对象：
  ☆ 使用get(index)方法 或者 [index]
     div1.get(0).style.color = 'red';
     div1[0].style.color = 'blue';
```

