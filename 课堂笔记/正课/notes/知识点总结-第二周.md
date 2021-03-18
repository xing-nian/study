# 日期：3月15日

### 浮动

```
 第一阶段学习的三种布局模式：
        
        1.流式布局：按照标签的显示模式 从上往下 从左到右依次排列
        2.浮动：使用的场景一般是实现块元素从左往右水平排列。
        3.定位：把元素放在指定位置。

        浮动的特性：
        1> 浮动的元素会脱离标准文档流（脱标），导致的结果是父元素高度为0
        2> 浮动的元素特征会改变为行内块元素的特征
```

### 清除浮动

```
清除浮动  指的是清除浮动带来的影响
        清除浮动的方式：
        1.给浮动元素的父元素设置高度。
        2.隔墙法：在浮动元素的末尾添加一个空标签，注意：这个空标签必须是一个块标签）
        比如： <div style="clear:both"></div>
        3.给父元素设置 overflow：hidden （overflow：溢出  hidden:隐藏）
        4.给父元素添加伪元素：
        实例：
        .clearfix::after{
                content:"";
                display:block;
                height: 0;
                clear: both;
                /* visibility ：可见的 */
                visibility: hidden;
        }
         .clearfix{
            /* IE6 7 兼容专用 */
             *zoom:1;
        5.双伪元素：  
        伪元素：  指的就是假标签
        实例：
         .clear::before,
            .clear::after{
            content:"" ;
            display: table;
        }
        .clear::after{
            clear: both;
        }
        .clear{
            *zoom:1
        }
```

### overflow属性

```
               hidder：隐藏
               visible：可见
               scroll： 出现滚动条
               auto： 自动（如果内容有溢出就显示滚动条，否则就没有滚动条）
```

### 伪元素

​    

```
    ::before 表示前缀 ， 这里的前缀不是真正意义上的标签，但是可以当标签用
​        实例：
​        #p2::before{
​            /* 通过content属性给伪元素添加具体的内容，在任何情况下都不能省略content */
​            /* 伪元素选择器权重为10 */
​              content: "今天";
​              color: coral;
​              font-size: 40px;
​        }
​        #p2::after{
​            content:"真好";
​            font-size: 30px;
​            font-weight: 700px;
​            color: cornflowerblue;
​            font-style: italic;
​        }


```

# 日期：3月16日

### visibility属性

```
visibility： 实现元素的显示和隐藏

特点：当元素隐藏时，依旧占据原来的位置。

对比overflow属性，overflow实现溢出内容的显示和隐藏

/* 隐藏 */
visibility: hidden;

 /* 显示 */
visibility: visible;

/* 注意：鼠标经过的元素 与 显示/隐藏的元素，必须是父子关系 */


```

### display属性

```
display： 实现元素的显示和隐藏

特点：当元素隐藏时，不占据原来的位置。

 /* 隐藏 */
display: none;

/* 显示 */
display: block;
```

### 背景色及颜色取值

```
颜色取值：
  1.别名 ：如 red  blue  green等
  2.rgb（red，green，blue）取值范围：0-255
  3.rgba（red，green，blue，alpha）alpha：透明度 取值范围：0-1
  4.十六进制 #6位数 0-9a-f
```

### 外边距穿透问题

```
 /* 方式一 */
 overflow: hidden; 

 /* 方式二 */
 /* 给父元素加上边框 */
 /* transparent 透明色 */
 border-top: 1px solid transparent; 

 /* 方式三 */
 padding-top: 100px;
 box-sizing: border-box; 
 
 /* 方式4 给父元素或者子元素设置float，固定定位，绝对定位 */
 
 /* 注意：行标签设置上下外边距无效 
         行内块可以设置上下外边距,不存在外边距穿透问题
 */
 
```

### 块的居中问题

```
前提：定宽
关键：设置左右margin为auto（自动）
```

### 行元素，行内块元素之间的间隙问题

```
间隙问题是由于换行产生的

第一种方式：元素与元素紧挨着，不敲换行符

第二种方式：使用margin 让元素偏移

第三种方式：先设置父元素的font-size：0px，然后在设置子元素的font-size 

第四种方式 设置浮动偏移,要记得清除浮动带来的影响
```

### img图片与文字对齐问题

```
vertical-align: middle;
设置文字与图片对齐
```

### border设置三角形

```
默认样式
  .tip1{
            width: 0;
            height: 0;
            border-top: 20px solid red;
            border-left: 20px solid blue;
            border-right: 20px solid #222;
            border-bottom: 20px solid yellow;
        }
通过改变边框属性值达到设置三角形的目的
/* 等腰直角三角形 */
        .tip2{
            width: 0;
            height: 0;
            border-top: 40px solid red;
            /* transparent: 透明色*/
            border-left: 40px solid transparent;
            border-right: 40px solid transparent;
            border-bottom: 40px solid transparent;
        }
```

### 精灵图的使用

```

        1.为什么要使用精灵图（雪碧图 css sprites）？
        一个网页中往往会应用到很多小的背景图作为修饰，当网页中的图像过多时，服务器会频繁的发送和接收请求，造成服务器压力过大，降低页面加载速度。

        2.精灵图的核心：
          (1)将网页中的一些小背景图整合到一张图片上（雪碧图）
          (2)通过 背景图片的定位（background-position），在不同的地方展示雪碧图中的小图标

```

# 日期：3月17日

### 元素宽高比设置百分比

```
参考 https://blog.csdn.net/huitoukest/article/details/51375345
方法一：从根的Html开始，到字的div结束，全部都具有百分比高度，这样，就都能够获取到高度信息
方法二：给父元素设置具体宽高，子元素百分比高度
方法三：使用定位，实现子元素与父元素宽高一致
```

### 静态定位

```
1. position：指定定位方式。 static：静态定位
2. 通常我们通过top/left/right/bottom指定元素的位置
3. 元素默认的状态就是静态定位，通过top，left，right，bottom 无法调整元素的位置
4. 静态定位不脱离标准文档流
```

### 相对定位

```
  常用的定位模式：相对定位（relative），绝对定位（absolute），固定定位（fixed）
         （1）通过position 指定定位模式
         （2）指定偏移量：top ，定位元素相对于参照物上边线的距离
                       left，定位元素相对于参照物左边线的距离
                       right，定位元素相对于参照物右边线的距离
                       bottom，定位元素相对于参照物下边线的距离
  相对定位一般使用在
   				 （1）微调元素位置的场景
                 （2）“子绝父相”，通过相对定位将某个元素设置为绝对定位元素的【参照物】
    相对定位的特征:
                 （1）元素相对于自己原来的位置移动（参照点就是原来的位置）
                  (2) 相对定位的元素不会脱离标准文档流，它依然占据着原来的空间
```

### 绝对定位

```
 常规使用：【子绝父相】，一般某个元素要进行绝对定位，会指定它的父元素作为参照物
          绝对定位的元素会脱离标准文档流，不再占据原来的空间)
          绝对定位的元素性质会发生改变，会变成行内块元素。（与浮动元素的特征相同）

 绝对定位元素查找参照物的规律：
        一个元素进行绝对定位，如果没有指定参照物，那么他会一层一层向上查找参照物。
        首先先看最近的父元素是否有定位（相对、绝对、固定）如果没有，会继续向上一级查找；直         到找到某一级的父元素有定位，此时以该元素为参照物；
        如果一直找到根标签html都没找到定位元素，则以根标签html为参照物。
        
 
```

# 日期：3月18日

### 固定定位 position: fixed;

```
 1.固定定位是以浏览器可视窗口为参照物，与父元素无关
    
 2.固定定位的元素也会脱标，不占据原来的空间
```

### 粘性定位  position: sticky;

```
1.粘性定位的元素会根据标准文档流进行定位，它被认为是相对定位于固定定位的结合体，元素在没有到达指定偏移量时属于相对定位，到达指定偏移量时变为固定定位.

2.粘性定位必须指定 top/bottom/right/left,否则粘性定位是无效的，就相当于是相对定位

3.粘性定位的父元素或者父元素的父元素等（总之就是直系长辈元素）verflow :任意一个设置ohidden;overflow-x: hidden; overflow-y: hidden;overflow: auto;overflow-x : auto;overflow-y : auto;的任意一种时，就会不生效。
```

### z-index属性

```
z-index:1.设置定位（除了静态定位）元素的堆叠层级，值越大，层级越高。
        2.默认值是0。可以设置正值或负值
```

