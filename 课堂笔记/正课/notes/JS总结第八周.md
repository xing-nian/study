# 4月26日

### DOM选择器补充

```
 //1. querySelector() 查找满足选择器条件的第一个元素对象；
    var h3 = document.querySelector('h3')
    console.log(h3);
 //2. querySelectorAll()查找满足选择器条件的所有元素对象；
    var h3s = document.querySelectorAll('h3')
    console.log(h3s);
```

```
 <style>
        .box{
            width: 200px;
            height: 200px;
            background-color: skyblue;
        }
        .active{
            width: 300px;
            height: 300px;
            background-color: red;
            border-radius: 50%;
        }
    </style>
</head>
<body>
    <div class="box item parent">
       hello
    </div>
</body>
<script>
       var div = document.querySelector('.box');
       div.onclick = function(){
    //   div.className = 'active';  // 表示替换div原来的类命
    //   div.className = 'active box';//在原来基础上添加
    //   div.classList.add('active') 
    // 

    // if (flag==false) {
    //     div.classList.remove('active');  
    //     flag = true;
  
    // }else{
    //     div.classList.remove('active');
    //     flag = false;
    // }
    // toggle 切换
    // 如果包含某个类名就删除，如果不包含某个类名就 添加
    div.classList.toggle('active');
}
</script>
```

### 阻止浏览器默认行为

```
<script>
    var a = document.querySelector("a");
    a.onclick = function (e) {
      //阻止默认事件
      //preventDefault()[dom标准写法(ie678不兼容)]
      //ie678用returnValue
      //或者利用return false也能阻止默认行为,没有兼容问题(只限传统注册方式)
      e.preventDefault(); //阻止默认行为
    };
    
    // document.onkeydown = function (e) {
    //   if (e.ctrlKey && e.keyCode == 67) {
    //     console.log("-----");
    //     //ctrl + c 复制
    //     e.preventDefault();
    //     // return false;
    //   }
    // };
    // document.oncontextmenu = function(e){
    //     e.preventDefault();// 阻止用户点击右键
    //      // return false;
    // }
    // 开始选中事件
    document.onselectstart = function(e){
        // e.preventDefault()
        return false;  //禁止用户选中！
    }
  </script>
```

### this指向

```
<script>
    var btn = document.querySelector('#btn')
    //  1. 事件函数内部  this指向   绑定事件的DOM对象
    btn.onclick = function(){
        console.log(this);
    }

    // 2.普通函数内部  this指向
    // 全局作用域中定义的变量，函数属于window的对象属性
    // function  fn(){
    //      console.log(this);
    // }
    // fn()
    // window.fn();
    // var x = 10;
    // console.log(window.x);

    // 3.对象的方法内部this指向对象本身
    var obj = {
        name: 'Jon',
        age: '18',
        say:function(){
            console.log(this);
        }
    }
    obj.say();

    // 谁调用  this指向谁！
</script>
```

### 立即执行函数

```
// 立即执行函数 IIFE  
    (
        function(x){
    console.log('bukai '+x);
        }
    )(10)

   var res = (
        function(x,y){
            console.log(this);
            return x+y
        }
    )(10,20);

    console.log(res);
    // 立即执行函数 this指向?  window
```

### 变量作用域

```
<script>
    //    函数会形成局部作用域（作用于区域）
    //    全局变量： 在任何地方都可以访问    持久保持
    //    局部变量： 只能在函数内部访问  在函数执行结束后  局部变量就会被浏览器收回，销毁。

    // function fn(){
    //     var x = 10;
    //     console.log(x);
    // }
    // fn();
    // console.log(x); // x is not defined
    // 函数的作用域是在定义函数时确定的，与在哪调用无关
    // function  fn(){
    //     var  x =10;
    //     fn2
    // }
    // function  fn2(){
    //     console.log(x);  // x is not defined
    // }
    // fn()
    
    // function fn1(){
    //     var x = 10;
    //     console.log(x);//?10
    //     fn2()
    // }
    // var x = 20;
    // function fn2(){
    //     console.log(x);//?20
        
    // }

    // fn1();

    function fn(a,b){ //a,b 形参也属于局部变量
        return a+b;
    }
    var res = fn(10,20);
    // console.log(a,b);

</script>
```

### 闭包

```
// 闭包：  闭包就是一个函数  一个作用域可以访问另外一个函数内部的局部变量，局部变量所在的函数就是闭包函数。
//  闭包的作用：可以让变量持久保存， 延伸了变量的作用范围
    function fun1 (){
        var x =10;
        function fun2(){
            console.log(x);
        };
        return fun2;
    }

    var f =fun1();
    f();  
    fun1()();

    // function  fun1(){
    //     var x =10;
    // }

    // var f = function(){
    //     console.log(x);
    // }
    // f();
```

### 递归函数

```
 // 递归函数 ： 函数内部自己调用自己
     // 递归函数的作用：循环效果
    // 注意： 递归函数内部一定要有退出函数 

    // 死递归 
      //  function fn(){
      //     console.log('hello');
      //     fn();
      //  }

      //  fn()
      var num = 0
      function fn1(){
         console.log(num);
         num++;
         if (num>9) { //退出条件
            return;
         }
         fn1()

      }
      fn1() 
```

