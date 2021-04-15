# 4月12号

### 冒泡排序

```
       [10 , 2 , 6 , 9 , 11 ,5]    length -1
        升序  从小到大
        冒泡排序 ： 比较相邻元素，如果第一个元素比第二个元素大，就交换两者的位置
        交换原理： 交换两个变量的值
                 var a = 10;
                 var b = 20;
                 var c = a
                  a = b ;
                  b = c ;
       
        /*
        第一轮   5
        10 vs 2   交换位置   [2,10,6,9,11,5]
        10 vs 6   交换位置   [2,6,10,9,11,5]
        10 vs 9   交换位置   [2,6,9,10,11,5]
        10 vs 11  不交换位置 [2,6,9,10,11,5]
        11 vs 5   交换位置   [2,6,9,10,5,11]  
        结论: 最大值就位

        第二轮   4
        2 vs 6    [2,6,9,10,5,11]
        6 vs 9    [2,6,9,10,5,11]
        9 vs 10   [2,6,9,10,5,11]
        10 vs 5   [2,6,9,5,10,11]
        10 vs 11   本次可以删除

        第三轮    3
        2 vs 6    [2,6,9,5,10,11]
        6 vs 9    [2,6,9,5,10,11]
        9 vs 5    [2,6,5,9,10,11]
        9 vs 10    本次可以删除

        第四轮    2
         2 vs 6    [2,6,5,9,10,11]
         6 vs 5    [2,5,6,9,10,11]
         6 vs 9     本次可以删除

        第五轮    1
        2 vs 5      [2,5,6,9,10,11]
       
        外层循环控制   轮次
        内层循环控制   每轮的比较次数
         
        */ 
        
例： var arr= [10 , 2 , 6 , 9 , 11 ,5]
        for(var i = 0 ;i<arr.length-1;i++){
            for(var j = 0;j<arr.length-1-i;j++){
                if(arr[j] > arr[j+1]){
                    //交换两个元素位置
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
          
        console.log(arr);
```

### 函数

```
 function  定义函数的关键字
    fun1      函数名
    () 参数列表
    {} 函数体   业务逻辑就写在这里面
    封装一段代码,可以重复调用
    
    // 定义函数
    function fun1(){
        console.log('hello');
    }
  
    //   调用
    fun1();
    fun1();
    fun1();
    
    例：
    var fun2 = function(){
        console.log('world');
    }
    fun2();
```

### 函数作用域

```
//    作用域   全局作用域和 局部作用域   局部指的是函数体内部
     var y = 20 ;  //全局作用域  在任何地方都可以使用

     function fun1(){
        var x = 10;  //局部作用域   只能在当前函数体内使用
        console.log(x+y);
    }
      fun1();
      console.log(x+y);   // 局部 放在全局 未定义
```

### 作用域链

```
例：
访问一个变量的时候  现在当前作用域中查找  不存在则向上一级查找  直到全局作用域为止
 var x = 100;
    function fun1() {
        console.log(x);
    }
    function fun2(){
        x = 1000;
        fun1();     //1000
    }
    fun2();
    
函数作用域在定义的时候确定的,跟在哪调用的无关
    var x = 100;
    function fun1() {
        console.log(x);
    }
    function fun2(){
        fun1();      //100
        x = 1000;  
    }
    fun2();
```

### 变量提升（js的缺陷）

```
 把变量的声明提升到使用之前(不会报错！)
    console.log(str);   // undefined
    var str = 'hello';
    等同于
    var str;
    console.log(str);
    str = 'hello'; 
```

### 函数传参

```
// 封装一断代码  重复调用
function fun1(a,b){   //形参
         var sum = a+b;
         console.log(sum);
     }

     fun1(110,20);    //实参  给形参赋的值
```

### 参数集合arguments

```
 //函数参数的集合 arguments  //当成参数数组遍历使用
 例：
  function fun1(){
        console.log(arguments);
        //arguments来接收传递实参的值
        var sum = 0;
        for(var i=0; i<arguments.length; i++){
            sum = sum+ arguments[i]
        }
        console.log(sum);
    }
    fun1(1,2,3,4,5)
    fun1(1,2,3,4,5,8,9)
 
```

### 函数的返回值

```
    //传参  输入
    //返回值  输出
    function add(a,b){
        var sum =a+b;
        return sum;  //return后的代码不会执行
        // sum+110;
    }
     var res = add(10,20);
     //函数体外部不能直接使用sum
```

# 4月13号

### DOM选择器

```
<body>
    <button>按钮1</button>
    <button>按钮2</button>
    <h1 class="title">标题1</h1>
    <h2 class="title2">标题2</h2>
    <p id="txt1">一段文本</p>
    <p id="txt2">一段文本</p>
    <input type="text" name="username" />
  </body>
  <script>
    //  通过标签名查找元素   Element 元素 TagName 标签名称
    //   结果是一个集合 (伪数组),要访问具体元素  通过索引访问
    var btn = document.getElementsByTagName("button");
    console.log(btn[1]);

    // 一个元素返回的也是集合
    var h1 = document.getElementsByTagName("h1");
    console.log(h1[0]);

    // 通过类名查找元素   ClassName 类名
    // 结果是一个集合  通过索引访问
    var h = document.getElementsByClassName("title");
    console.log(h[0]);

    // 通过id来查找元素  id唯一性
    //  结果是具体的元素
    var p1 = document.getElementById("txt1");
    console.log(p1);

    // 通过name属性查找元素
    // 结果是一个集合
    var input = document.getElementsByName('username')[0];
    console.log(input);
  </script>
```

### DOM选择器2

```
<body>
     <div class="box">
         <p id = 'txt'>hello</p>
     </div>
</body>
<script>
    // 嵌套
    var div = document.getElementsByClassName('box')[0];
    var p = div.getElementsByTagName('p')[0];
    console.log(p);

    // 注意: 如果根据id 查找元素,只能使用document调用getElementById()
    // var p2 = div.getElementById('txt');
    // console.log(p2);  //报错 无法调用
</script>
```

### 对象的方法

```
<script>
    var student = {
        name : 'jon',
        sex : '男',
        age:18,
        // 方法(函数):表示对象的动态行为
        eat:function(food){
            console.log('Jon喜欢吃' + food);
        },
        hoddies:['a','bc','d']
    }
    // 访问对象的属性   .  []
    student.name 
    student['name']

    // 访问对象的函数
    student.eat('水果')
    student['eat']('肉')

    // Math
    Math.max(1,2,3,4);
    Math.PI
    // 定义函数
    function fun1(){

    }
    var fun2 = function(){

    }
</script>
```

### 修改DOM样式

```
.box{
    width: 200px;
    height: 200px;
    background-color: red;
}

</style>
<body>
     <div class="box">
        <button id = 'btn'>按钮</button>
     </div>
</body>
<script>
    // var box = document.getElementsByClassName(box)
    // var btn= box.getElementsByTagName('button')[0];

    var btn = document.getElementById('btn');
    // 通过js给btn添加样式
    btn.style.color = 'red';
    // 带 - 的样式 转换为 驼峰型
    btn.style.borderLeft ='1px solid red';
    btn.style.fontSize = '20px'
```

### 设置样式

```
<body>
     <div id="box">hello</div>
     <div id="nav">world</div>
</body>
<script>
    // 封装一个方法  功能：给指定元素设置样式   参数1：指定元素   参数2：样式

    // 是否要传参 ，传几个参数

    // 是否有返回值 ，返回什么

    function setStyle(eleObj,styleSheet){
          for(var key in styleSheet){
          eleObj.style[key] =styleSheet[key];
          }
    }
    //setStyle()
    var box = document.getElementById('box');
    //  宽  高   背景色   字体大小   字体颜色
    var  styleObj= {
        width:'200px',
        height:'200px',
        backgroundColor:'red',
        fontSize:'18px',
        color:'#333'
    }
    setStyle(box,styleObj);

    var box = document.getElementById('nav');
    var  styleObj1= {
        width:'100px',
        height:'100px',
        backgroundColor:'pink',
        fontSize:'12px',
        color:'#333'
    }
    setStyle(nav,styleObj1);
</script>
```

### 内容节点

```
<body>
    <h1 id="title">hello</h1>
    <h2>你好</h2>
    <h3><em>world</em></h3>
</body>
<script>
     var h1 = document.getElementById('title');
     var h2 = document.getElementsByTagName('h2')[0];
     var h3 = document.getElementsByTagName('h3')[0];
    //  设置标签的文本内容
    h1.innerText = '你好';
    // 获取标签的文本内容
    console.log(h2.innerHTML);
    console.log(h2.innerText);
    // 可以解析标签 设置标签中的内容
    h3.innerHTML ='<em>world</em>';
    console.log(h3.innerHTML);

</script>
```

### 设置标签的属性

```
 <style>
        .box{
            width: 100px;
            height: 100px;
            border: 1px solid red;

        }
        .active{
            width: 100px;
            background-color: green;
            color: red;
        }
    </style>
</head>
<body>
    <a href="https://www.baidu.com" id="link" class="">百度</a>
    <img src="" id="pic" alt="">
    <input type="text" value="" placeholder="请输入用户名"><br>
    <input type="checkbox" name="fruit" id=""  checked>苹果<br>
    <input type="checkbox" name="fruit" id="" >苹果1<br>
    <input type="checkbox" name="fruit" id="" >苹果2<br>

    <select name="" id="sele">
        <option value="" selected>选项1</option>
        <option value="">选项2</option>
        <option value="">选项3</option>
        <option value="">选项4</option>
    </select><br>

    <div class="box">你好</div>
</body>
<script>
     var a = document.getElementById('link');
     var img =document.getElementById('pic');
     var checkboxs = document.getElementsByName('fruit')
     var select = document.getElementById('sele')
     var div = document.getElementsByClassName('box')[0];
    //  获取标签属性  ele.属性
    console.log(a.href);
    a.href = "https://www.sina.com.cn"
    img.src ='存储方式.png'
    img.style.width = '100px'

    // checked 属性  通过true/false控制 勾选状态
    console.log(checkboxs[0].checked);  // true
    console.log(checkboxs[0].checked);  // false
    checkboxs[2].checked = true;
    select[2].selected = true;


    // 类型
    div.className = "active";
    div.className = 'box active'
</script>
```

### 点击事件

```
<style>
        #next{
            display: inline-block;
            width: 60px;
            height: 40px;
            background-color: #667;
            color: red;
            line-height: 40px;
            text-align: center;
            cursor: pointer;
            }
    </style>
</head>
<body>
    <button id="btn" >按钮</button><br>
    <span id="next">&gt;</span>
</body>
<script>
    //  获取元素
    var btn = document.getElementById('btn');
    // 绑定点击事件  onclick
    btn.onclick = function(){
        alert('hello');

    }
    btn.style.cursor='pointer'
    var span =document.getElementById('next');
    span.onclick =function(){
        alert('我很不好!认真的')
    }


</script>
```

# 4月14号

### 自定义标签属性

```
<body>
    <a href="https://baidu.com" id="a" x ="1"></a>
    <select name="" id="">
        <option value="" provid='10' cityid='1' data-areaid='9'>东</option>
        <option value="" id="xi">西</option>
        <option value="">南</option>
        <option value="">北</option>
    </select>
</body>
<script>
    var a = document.getElementById('a');
    // a.href
    // console.log(a.x);  //undefined
    var xi =document.getElementById('xi');
    var options = document.getElementsByTagName('option');

    // 1.获取自定义属性值
   var res = a.getAttribute('x');
   console.log(res);

    // 2.设置自定义标签属性值    
    a.setAttribute('x',100);

    xi.setAttribute('provid','10')

    var area = options[0].getAttribute('data-areaid');
    console.log(area);

    // 3.只针对data-开头的自定义标签属性 //data-areaid 
    options[0].dataset.areaid =90 ;
    
</script>
```

### 事件函数内部的this指向

```
<script>
  var btn =document.getElementById('btn');
  var div =document.getElementById('box');
//   绑定点击事件
btn.onclick = function(){ //内部的this指向当前绑定事件的DOM对象
    console.log(this);    //button
}
btn.click()               //谁调用function this就指向谁

div.onclick = function(){
    console.log(this);  //div
}

var obj = {
    eat:function(){
        console.log('吃饭');
    }
}
obj.eat();
obj.say = function(){
    console.log('hello');
}
obj.say();
</script>
```

### DOM对象的属性

```
<body>
    <button id="btn">按钮</button>
</body>
<script>
    // DOM对象 也是一个对象{}
    var btn = document.getElementById('btn');
    btn.innerHTML = '按钮1';
    btn.style.color = 'red';
    //给DOM对象添加属性
    btn.x =1;
    // 遍历DOM对象 属性
    for(var k in btn){
        // console.log(k);
    }
    // console.log(btn);
    // 可以打印输出 DOM对象的所有属性及方法
    console.dir(btn);
```

### 事件

```
 /*
       窗口事件
       onload 当网页加载完毕的时候触发 
       onscroll 滚动窗口时触发
    */  
    /*
       鼠标事件
       onclick  点击事件
       ondblclick  双击事件
       onmouseover  onmouseout  鼠标移入 鼠标移出
       onmouserenter  onmouseleave  鼠标移入移出
       onmousemove  鼠标移动
       onmousedown  鼠标按下
       onmouseup    鼠标抬起
       oncontextmenu  鼠标右键
       onselectstarts 鼠标开始选中
    */    
    /*
      键盘事件
        onkeydown    键盘按下
        onkeyup      键盘松开
        onkeypress   键盘按下
    */    
    /*
       表单事件
       onsubmit  当提交表单是触发
       onreset   当重置表单时触发
       onfocus   获取焦点时触发
       onblur    失去焦点时触发
       oninput   当输入内容时触发
       onchange  当表单元素发生改变时触发
    */  
```

# 4月15号

### 窗口事件

```
 /* 溢出内容隐藏 hidden */
  /*无论是否有溢出时 都有滚动条 scroll  */
  /* 当有溢出内容时,出现滚动条 auto */
   overflow: auto;
   
<script>
        window.onload = function(){   //文档加载完毕时会触发
            var btn =document.getElementById('btn');
        console.log(btn);
        btn.onclick = function(){
            alert('hello');
        };
        var box1 = document.getElementById('box1')
        box1.onscroll = function(){   //滚动窗口时触发
        console.log('box1在滚动');
    }
    }
   
</script>
```

### 键盘事件

```
    // onkeydown 键盘按下
    // onkeyup   键盘松开
    // onkeypess 键盘按下松开
    // 绑定在文档对象document上  或者 表单元素上
    document.onkeydown = function(){
        console.log('键盘按下');
    }
    document.onkeyup = function(){
        console.log('键盘松开');
    }
    // keypress 无法识别某些功能键,如 ctrl alt shift
    document.onkeypress = function(){
        console.log('键盘按下松开');
    }
```

### 表单事件

```
//表单提交事件
   myform.onsubmit = function(){
        // 在表单提交信息之前 验证表单信息格式

        // 获取用户输入的值
         var username = uname.value
         if (username.length < 6 || username.length > 12) {
             alert('格式错误')
             return; //终止提交
         }
     }
  //  表单重置事件
    myform.onreset = function(){
        return false  //禁止重置
    }   
```

### 表单的change事件

```
<body>
     <input type="text" id="uname"><br>
     <input type="checkbox" id="checkbox" checked>同意<br>
     <select name="" id="address">
         <option >郑州</option>
         <option >开封</option>
         <option >新乡</option>
         <option >洛阳</option>
     </select>

</body>
<script>
     var uname = document.getElementById('uname')
     var checkbox = document.getElementById('checkbox');
     var address = document.getElementById('address')

     //onchange 事件在文本框上使用不合适
     uname.onchange =function(){
         console.log(this.value);
     }

     checkbox.onchange = function(){
        //  this.checked 获取当前勾选的状态
         if (this.checked == true) {
             console.log('在原来总价基础上 + 当前勾选商品的价格');
         }else{//取消勾选
            console.log('在原来总价基础上 - 当前取消勾选商品的价格');
         }
     }

     address.onchange = function(){
        
         console.log(this.selectedIndex);//所选option的索引

        //  当option 没有设置value属性时 ， 获取到的是option标签的文本内容
        // 如果option设置value属性 获取到的是option的value属性值；
         console.log(this.value);
     }

</script>
```

### 表单输入事件

```
<style>
        #btn{
            display: none;
        }
 </style>
</head>
<body>
    <input type="text" id="uname" placeholder="请输入">
    <span id="btn"></span>
</body>
<script>
    var uname = document.getElementById('uname');
    var btn = document.getElementById('btn');
    // 输入内容时触发输入事件
    uname.oninput = function(){
        // console.log(uname.value);
        if (uname.value.length <6 && uname.value.length>0) {
            btn.style.display= 'inline';
            btn.innerHTML= '长度小于6位'
        }
        if (uname.value.length>=6 &&uname.value.length<=12 ||                         uname.value.length == 0) {
            btn.style.display= 'none';
           
        }
        if (uname.value.length >12) {
            btn.style.display= 'inline';
            btn.innerHTML= '长度大于12位'
        }
       
    }
    
</script>
```

### 焦点事件

```
<body>
     <input type="text" id="inp">
</body>
<script>
    var inp = document.getElementById('inp');
    // 获取焦点
    inp.onfocus = function(){
        console.log('获取焦点了');
    }

    // 失去焦点
    inp.onblur = function(){
        console.log('失去焦点了');
    }
```

### 普通元素使用焦点事件

```
<style>
      #box {
        width: 200px;
        height: 30px;
        border: 1px solid #333;
        line-height: 30px;
        padding-left: 15px;
        border-radius: 5px;
        margin: 50px auto;
        outline: none;
      }
    </style>
  </head>
  <body>
    <!--添加 tabindex 属性可以让元素拥有焦点事件 -->
    <div id="box" tabindex="1"></div>
  </body>
  <script>
    var div = document.getElementById("box");
    div.onfocus = function () {
      console.log("获取焦点");
    };
    div.onblur = function () {
      console.log("失去焦点");
    };
  </script>
```

