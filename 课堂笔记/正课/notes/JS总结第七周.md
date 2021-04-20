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

