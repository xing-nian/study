# 4月20号

### DOM节点

```
 在 HTML DOM 中，所有事物都是节点。DOM 是被视为节点树的 HTML。
 根据 W3C 的 HTML DOM 标准，HTML 文档中的所有内容都是节点：
    整个文档是一个文档节点
    每个 HTML 元素是元素节点
    HTML 元素内的文本是文本节点
    每个 HTML 属性是属性节点
    注释是注释节点
    
    节点类型  nodeType
       标签           1
       属性节点        2
       文本节点        3
       注释           8  
       
var ul = document.getElementById('list');
var li2 = document.getElementById('item2');
console.log(ul.nodeType,ul.nodeValue);

//childNodes  子节点
//console.log(ul.childNodes)  

// children  子节点的元素节点
// console.log(ul.children);
// 第一个节点
// console.log(ul.firstChild);
// 第一个元素子节点
// console.log(ul.firstElementChild);

// 兄弟节点[previousElementSibling/nextElementSibling]
console.log(li2.previousSibling);  //#text
console.log(li2.previousElementSibling); //li  上一个兄弟节点
console.log(li2.nextElementSibling); // li  下一个兄弟节点

// 父节点
console.log(ul.parentNode.parentNode.parentNode);
```

### 节点方法

```
var ul = document.getElementById('list');

    //1. 创建新节点
    var newLi = document.createElement('li');
    newLi.innerHTML = '2';

    //2. 插入节点
    // ul.appendChild(newLi);

    //3.替换
    //   ul.replaceChild(newLi,ul.children[0]);

    //4.在某个元素之前插入节点
    // ul.insertBefore(newLi,ul.children[0]);

    //5. 克隆节点
    // 默认值false 只克隆当前这个节点 ; true: 克隆该节点以及内部的所有内容
    var li =ul.children[0].cloneNode(true);
    console.log(li);

    // 6.删除节点
    ul.removeChild(ul.children[1]);
```

# 4月21号

### 事件监听

```
    /*
   DOM事件处理分为四个级别: DOM0,DOM0,DOM2,DOM3
   DOM0级: 特点是简单,跨浏览器,兼容好 . 缺点:多次绑定会覆盖
   DOM2级:DOM2级是以一种更符合逻辑的方式规范了DOM事件,多次绑定相同的事件不会被覆盖,
   会依次执行.缺点:兼容性不好.
    */   
   
   //DOM 0级事件 多次绑定相同的事件会覆盖
      btn.onclick = function(){
          console.log('hello');
      }
      btn.onclick = function(){
          console.log('我不好');
      }
    btn.onclick = null;
    
    //DOM 2级事件多次绑定相同的事件不会被覆盖,会依次执行
    
    
    btn.addEventListener("click",function(){
        console.log('天气不好!');
    });
    btn.addEventListener("click",function(){
        console.log('下雨天!');
    });
    
 //addEventListener()  参数1：事件类型  参数2：事件处理函数 
    var fn1 = function(){
      console.log('三秋');
  }
  btn.addEventListener('click',fn1);

//移出事件removeEventListener() 不能移除匿名函数
  
  setTimeout(function(){
    btn.removeEventListener('click',fn1);
  },5000)
  
  
 
```

### 事件流

```
// 事件流:当一个节点产生一个事件时,该事件会在该节点与根节点之间按照特定顺序传播,所经过的节点都会收到该事件,这个过程就称为DOM事件流.
    /*
        事件流分为三个阶段:
          1.捕获阶段(俗称挖洞)：从根节点 --》 目标节点，向下捕获
          2.目标阶段
          3.冒泡阶段

    */ 
     
    // DOM0级事件  只有冒泡阶段
    // box.onclick = function(){
    //     console.log('box');
    // }
    // small.onclick = function(){
    //     console.log('small');
    // }
    // txt.onclick = function(){
    //     console.log('txt');
    // }
    // document.documentElement.onclick= function(){
    //     console.log('html');
    // }
    // document.onclick=function(){
    //     console.log('documen');
    // }

    // 事件监听
    txt.addEventListener('click',function(){
        console.log('txt');
    })
    small.addEventListener('click',function(){
        console.log('small');
    })
    // 参数3：true表示事件处理函数在【捕获阶段】调用
    // 默认是false，表示事件处理函数在【冒泡阶段】调用
    box.addEventListener('click',function(){
        console.log('document');
    },true)
    document.addEventListener('click',function(){
        console.log('document');
    })
```

### 阻止冒泡

```
e.stopPropagation();//阻止冒泡
e.cancelBubble = true;  //IE兼容使用使用
```

### 事件委托

```
<body>
    <div id="wrap">
        <button>按钮1</button>
        <button>按钮2</button>
        <button>按钮3</button>
        <button>按钮4</button>
        <button>按钮5</button>
        <button>按钮6</button>
        <button>按钮7</button>
        <button>按钮8</button>
        <button>按钮9</button>
        <button>按钮10</button>

    </div>
</body>
<script>
    var wrap = document.getElementById('wrap');

    // 把点击事件委托给button 的父元素wrap
    wrap.onclick = function(e){
    // e.target 获取触发事件的目标节点
        console.log(e.target);
        e.target.style.color='red';
    }

    // 事件委托:利用事件冒泡的原理
    // 优点:减少事件的注册，节省内存空间
</script>
```

### target

```
<body>
    <ul id="list">
        <li>item1</li>
        <li class="active" >item2</li>
        <li>item3</li>
        <li>item4</li>
    </ul>
</body>
<script>
     var ul =document.getElementById('list')
     ul.onclick =function(e){
        if(e.target.nodeName == 'LI'){//点击的是li
            
        }
        if(e.target.className == 'active'){ //点击的是类名为active的元素
        e.target.style.color = 'red'
        }
        console.dir(e.target)
     }
     
</script>
```

# 4月22号

### 添加新元素

```
<body>
    <ul id="list">
        <li>old-1</li>
        <li>old-2</li>
        <li>old-3</li>
        <li>old-4</li>
    </ul>
    <button id="add">添加新元素</button>
</body>
<script>
     var list = document.getElementById('list');
     var lis =document.getElementsByTagName('li');
     var add = document.getElementById('add');

    // 传统方式给li绑定点击事件
     for(var i = 0;i<lis.length;i++){
         lis[i].onclick = function(){
             this.style.color = 'red';
         }
     }
     add.onclick = function(){
        //  方式1
        // innerHTML会覆盖之前的节点,之前的节点事件无法触发
        // list.innerHTML += '<li>new-1</li>';
        //  方式2
        //  不会影响之前的节点,但需要单独给新节点绑定事件
         var node = document.createElement('li');
         node.innerHTML='new-1';

         node.onclick = function(){
             this.style.color= 'red';
         }

         list.appendChild(node);
     }
```

### 添加新元素(事件委托)

```
<body>
    <ul id="list">
        <li>old-1</li>
        <li>old-2</li>
        <li>old-3</li>
        <li>old-4</li>
    </ul>
    <button id="add">添加新元素</button>
</body>
<script>
    var list = document.getElementById('list');
    var add = document.getElementById('add');
    // 事件委托
    // 优点： 当新增元素节点时 无需再次对其绑定事件
    list.onclick = function(e){
        if (e.target.nodeName=="LI") {
            e.target.style.color = 'red';
        }
    }
    add.onclick = function(){
        // 方式1
        // list.innerHTML+="<li>new-1</li>";

        // 方式2
        var node = document.createElement('li');
        node.innerHTML = 'new-1';
        list.appendChild(node);
    }
</script>
```

### 占位图

```
示例：
<body>
 <p>ps1</p>
    <p>ps2</p>
    <p>ps3</p>
    <p>ps4</p>
    <p>ps5</p>
    <p>ps6</p>
    <p>ps7</p>
    <p>ps8</p>
    <p>ps9</p>
    <p>ps10</p>
    <p>ps11</p>
    <p>ps12</p>
    <p>ps13</p>
    <p>ps14</p>
    <p>ps15</p>
    <p>ps16</p>
    <p>ps17</p>
    <p>ps18</p>
    <p>ps19</p>
    <p>ps20</p>
    <p>ps21</p>
    <p>ps22</p>
    <p>ps23</p>
    <p>ps24</p>
    <p>ps25</p>
   <img src="http://cms-bucket.ws.126.net/2021/0422/1ce1a298j00qrxu21003tc000fa007lc.jpg?      imageView&thumbnail=453y225&quality=85&type=webp"    
   alt="" data-src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png">
    <p>ps26</p>
    <p>ps27</p>
    <p>ps28</p>
    <p>ps29</p>
    <p>ps30</p>
    <p>ps31</p>
    <p>ps32</p>
    <p>ps33</p>
    <p>ps34</p>
</body>
<script>
       var img= document.getElementsByTagName('img')[0];
       window.onscroll = function(){
           // 获取页面向上滚动的高度
            var sTop = document.body.scrollTop || document.documentElement.scrollTop;
            var wHeight = window.innerHeight
        if (img.offsetTop <= sTop + wHeight -100 && img.flag == undefined){
              // 此时应该加载真正的图片
            img.src= img.dataset.src;
            img.flag = true;
       }
       }
  
  </script>
```

# 4月23号

### 案例：返回顶部

```
<style>
        #goback{
            width: 100px;
            height: 100px;
            position: fixed;
            bottom: 100px;
            right: 50px;
            display: none;
        }
        div{
            height: 3000px;
        }
    </style>
</head>
<body>
   <div> 
  
 
</div>
<button id="goback">返回顶部</button>
</body>
<script>
     var goback = document.getElementById('goback');

    //  假设页面向上滚动的高度大于等于1000px goback显示 否则隐藏
     window.onscroll = function(){
         var scrollTop= document.body.scrollTop || document.documentElement.scrollTop;

         if(scrollTop >=1000){
             goback.style.display = 'block';
         }else{
            goback.style.display = 'none';
         }
     }
    //  返回顶部
     goback.onclick = function(){
         document.body.scrollTop = 0;
         document.documentElement.scrollTop = 0;
     }
</script>
```

### 案例：元素触底

```
<style>
        #nav{
            height: 100px;
            background-color: pink;
        }
        #banner{
            height: 300px;
            background-color: skyblue;
        }
        #list{
            height: 1500px;
            background-color: gold;
        }
        #footer{
            height: 150px;
            background-color: cadetblue;
        }
       
    </style>
</head>
<body>
    <div id="nav"></div>
    <div id="banner"></div>
    <div id="list"></div>
    <div id="footer"></div>
    <div id="light"></div>
</body>
<script>
var list =document.getElementById('list')

window.onscroll = function(){
         var s_t= document.body.scrollTop || document.documentElement.scrollTop;//页面滚动       	高度 (兼容写法)
         var w_h = window.innerHeight;    //窗口高度
         var b_h = list.offsetHeight+list.offsetTop  //元素底部到页面顶部的高度 //元元素底部到页          面顶部的高度素自身高度 +元素页面顶部的高度 
       
         flag=true; //触底只执行一次
         if(b_h -w_h -s_t  <= 100 &&b_h -w_h -s_t>=0){
         if (flag) {
            console.log('触底区域');
            flag = false;
        }
       }
      }
</script>
```

