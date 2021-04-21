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

