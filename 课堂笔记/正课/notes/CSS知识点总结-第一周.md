# 日期：3月8日

### 应用开发流程

```
  
1.合理安排人员 (项目经理，产品经理，UI设计师(美工),后端,前端,测试人员)
2. 沟通了解需求 (角色一般是项目经理或产品经理，主要了解做什么，谁做，何时做，为什么做)
3. 需求分析 (角色一般是项目经理，解决怎么做，成本周期效率等问题)
4. 项目设置 (角色一般是ui设计师和后端人员,UI设计师主要负责界面设计，后端人员负责数据库设计)
5. 项目开发 (程序员使用开发工具编写代码)
6. 项目测试 (测试人员使用各种测试工具测试代码，发现bug提交开发人员)
7. 运行维护 (开发人员根据测试的结果，维护代码)
```



**参考文档**

https://www.cnblogs.com/ceshi2016/p/9212749.html

### 前端据说概况    

   

```
1. HTML / CSS
2. JavaScript，简称JS
3. 各种脚本库，比如jQuery
4. Node.js
5. 各种框架,：如 Vue， React ，小程序
```



 **浏览器页面渲染的过程**

 

```
  1.DNS解析URL的过程
- DNS解析解释将域名翻译成IP地址的过程：
- DNS是什么？
  DNS是一个域名系统，du是万维网上作为域名和IP地址相互映射的一个分布式数据库，能够使用户更方便的访问互联网，而不用去记住能够被机器直接读取的IP数串。
  2、意义：通过主机名，最终得到该主机名对应的IP地址的过程叫做域名解析（或主机名解析）。在解析域名时，可以首先采用静态域名解析的方法，如果静态域名解析不成功，再采用动态域名解析的方法，域名是互联网上的身份标识，是不可重复的唯一标识资源； 互联网的全球化使得域名成为标识一国主权的国家战略资源。
  3、某个区域的资源记录通过手动或自动方式更新到单个主名称服务器（称为主 DNS服务器）上，主 DNS 服务器可以是一个或几个区域的权威名称服务器。

2. 浏览器发送请求与服务器交互的过程：
- 浏览器通过三次握手与服务器建立连接
- 浏览器给服务器发送请求，服务器给浏览器返回数据

3. 浏览器对接收到的html页面渲染的过程：
- 当html被加载到浏览器中的时候，解析html构建dom tree （dom:document 文档 通过link解析css，构建render tree 把他俩组合到一起，渲染出我们看到的界面)
```



 **参考文档**

https://www.cnblogs.com/ceshi2016/p/9212749.html

### 了解web应用

 **一： 什么是web应用**

```
 Web应用程序是一种可以通过Web访问的应用程序。Web应用程序的一个最大好处是用户可以很容易访问应用程序。用户只需要有浏览器即可，不需要再按照其他软件。 
```



 **二：网页组成部分**

```
1) 结构层 HTML/HTML5 

网页的骨架，HTML是网页内容的载体，内容就是网页制作者放在页面上想要让用户浏览的信息，可以包含文字、图片、视频等。

2) 样式层 CSS/CSS3

CSS样式是表现。就像网页的外衣，比如，标题字体、颜色变化，或为标题加入背景图片、边框等，所有这些用来改变内容外观的东西称之为表现。

3) 行为层 Javascript

JavaScript是用来实现网页上的特效效果。如：鼠标滑过弹出下拉菜单。或鼠标滑过表格的背景颜色改变。还有焦点新闻（新闻图片）的轮换。可以这么理解，有动画的，有交互的一般都是用JavaScript来实现的。
```



**三：认识浏览器（什么是浏览器内核及分类）**

**浏览器内核的理解？**

```
　　主要分成两部分：渲染引擎(layout engineer或Rendering Engine)和JS引擎。
```

| 分类       | 功能                                                         |
| ---------- | ------------------------------------------------------------ |
| `渲染引擎` | `负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。` |
| `JS引擎`   | `解析和执行javascript来实现网页的动态效果。 最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。` |

**常见的浏览器内核有哪些？**

| 内核          |                           浏览器                            |
| ------------- | :---------------------------------------------------------: |
| `Trident内核` |  `IE,MaxThon,TT,The World,360,搜狗浏览器等。[又称MSHTML]`   |
| `Gecko内核`   |     `Netscape6及以上版本，FF,MozillaSuite/SeaMonkey等`      |
| `Presto内核`  | `Opera7及以上。      [Opera内核原为：Presto，现为：Blink;]` |
| `Webkit内核`  |  `Safari,Chrome等。   [ Chrome的：Blink（WebKit的分支）]`   |

**四：web标准?  为什么要遵循web标准?**

```
Web标准不是某一个标准，而是由一系列标准组合而成。网页主要由三部分组成：结构、表现和行为。对应的标准也分三方面：结构化标准语言主要包括XHTML和HTML以及XML，表现标准语言主要包括CSS，行为标准主要包括对象模型（如W3C DOM）、ECMAScript等。这些标准大部分由W3C起草和发布，也有一些是其他标准组织制订的标准。

简单了解一下这些标准：

1．结构标准语言

  （1）、XML

  XML是The Extensible Markup Language(可扩展标识语言)的简写。目前推荐遵循的是的XML1.0，和HTML基本一样，XML是一种能定义其他语言的语。XML最初设计的目的是弥补HTML的不足，以强大的扩展性满足网络信息发布的需要，后来逐渐用于网络数据的转换和描述，算是最理想的一种语言。

  （2）、XHTML

  XHTML是The Extensible HyperText Markup Language可扩展标识语言的缩写。最初是1989年由Tim Berners-Lee发明的。XML虽然数据转换能力强大，完全可以替代HTML，但面对成千上万已有的站点，直接采用XML还为时过早。简单的说，建立XHTML的目的就是实现HTML向XML的过渡。

2.表现标准语言

  CSS是Cascading Style Sheets层叠样式表的缩写。W3C创建CSS标准的目的是以CSS取代HTML表格式布局、帧和其他表现的语言。

3.行为标准

  （1）、DOM

  DOM是Document Object Model文档对象模型的缩写。DOM是一种与浏览器，平台，语言的接口，使得你可以访问页面其他的标准组件。简单理解，DOM解决了Netscaped的Javascript和Microsoft的Jscript之间的冲突，给予web设计师和开发者一个标准的方法，让他们来访问他们站点中的数据、脚本和表现层对像。

  (2) 、ECMAScript

 ECMAScript是ECMA(European Computer Manufacturers Association)制定的标准脚本语言（JAVAScript）。
```



### html的了解

**一：什么是HTML**

```
 HTML是超文本标记语言(Hyper Text Markup Language)，标准通用标记语言下的一个应用，HTML 不是一种编程语言，而是一种标记语言 (markup language)，是网页制作所必备的 
```



 **二：HTML基本结构（组成部分，语法结构）**

```
</html>

<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Document</title>

</head>

<body>

  

</body>

</html>
```

```
1.html ： 根标签， lang属性， “en”：表示英文，定义语言类型

 “zh-cn”表示中文


  2.head：文档头部

   meta charset="UTF-8" 定义编码方式为 UTF-8

   作用：防治页面出现乱码现象

   title：网页标题


3. body：文档主体

  标签关系：1)并列关系    2)嵌套关系

  标签： 单标签(自结束标签) 和双标签
```



**三：快速生成html基本结构**

```
（!或 html5）
```

### 常用块标签  



```
     1.div: 分隔，一般在垂直方向上划分区域

​    2.H标题标签，分6个级别

​    3.p标签不能嵌套块标签，浏览器解析会出错

​    4. ul ：unorder list 无序列表


​      ui里只能嵌套li，而li中可以嵌套任意元素

​      ol：order list 有序列表

​      ol里只能嵌套li，而li中可以嵌套任意元素


​      dl：define list 自定义列表

​        dt 一般对应列表标题

​        dd 一般情况下 一个dt对应多个dd
```

### 常用行标签

```
        1.span 跨度 ，行标签 ，他是从水平方向划分区域
        2.strong，b,强调 加粗标签
        3.em，i
        4.del，删除线文本
        5.sup定义上标文本，sub对应下标文本
```

### a标签页面跳转

```
        a:属于行标签
        a：anchor 锚，超链接
        href属性：定义链接地址
        target: 目标，以何种形式跳转到目标页面
        _self:在当前窗口打开链接页面
        _blank：在新页面打开目标页面
```

### Img标签

```
1. img标签: 图片标签，单标签
           src属性：定义图片资源所在路径
           alt属性：alter 替换， 作用：1>当图片无法正常展示时，显示alt定义的文本信息 2> 给搜索引擎提供            关键字信息
           title属性:当鼠标悬停在img显示的提示文本

        2. 给 img 设置宽高： 建议只设置 width 和height 中的一个，让另一个自适应
           目的：防止图片变形
        3.相对路径
        ../  表示后退一级
```

### 字符实体

```
html 中的预留字符必须替换为字符实体 
     比如<,> 
     &lt;表示 <
     &gt;表示 >
     &nbsp;表示空格
```







# 日期：3月9日

### table标签的嵌套结构

```
 表格标签的基本嵌套结构：
            table用来定义表格的标签
            tr 用来定义表格中的行，table row
            td 用来定义表格中的单元格，table data

            表格的属性
            boder:边框
            cellspacing 设置边框与边框的间距
            cellpadding 设置边框与单元格文本之间的间距(类似于内边距)
            align 设置表格水平居中
           
```

### table的结构标签

```
        thead: 表示表格头部区域
        tbody：表示表格主体内容区域
        tfoot：表示表格页脚区域

        th：表示表格头部区域的单元格(默认样式：文字加粗，文本水平居中)
        caption：表示表格标题
```

### 表格边框等样式的处理

```
1. 表格的属性border，cellspacing，cellpadding，align 
2. css是调整表格样式：
   - 表格添加边框线：border：border-width border-color border-style
   - 合并边框 border-collapse: collapse(合并)/ separate(分离)
```

### 单元格合并

```
 单元格合并步骤:
        1.先确定行合并(rowspan)、列合并(colspan)colum：列
        2.找到要合并的单元格，设置单元格合并的属性 rowspan=“num” 或colspan=“num”
        3.删除多余的单元格

```

### input标签的type类型

```
        form:表单，用来收集用户数据信息，并发送给服务器
        action属性 指定当前表单提交数据的服务器地址
        method属性 指定表单提交数据的方式， 方式有两种：get， post 方式
        
            1.type="text" 文本输入框
            2.type="password"密码框
            3.type="checkbox"复选框(多选框)
            4.input type="radio" 单选框(注意， 要实现单选状态，input标签必须添加相同的name属性)
            5.type="button" 普通按钮，通过value属性定义内容
            6.input type="submit" 提交按钮，默认按钮标题是“提交”，可以用value属性更改
            7.input type="reset" 重置按钮，默认按钮标题是“重置”，可以用value属性更改
                 
        以下内容了解
       type="emali" 邮箱输入框，只有点击提交按钮，才能看到效果
       type="file"  上传文件
```

### 下拉框

```
        select ：下拉框  
        option：下拉框中的选项，option标签中的value属性是不可见的
        optgroup：分组标签 ，label属性用来设置每一组的标题
        selected：设置下拉框中的默认项
```

# 日期：3月10日

### nth-chlid选择器与后代选择器

```
形式： “选择器 选择器 ” 这种形式的选择器称之为：后代选择权
形式 “选择器：nth-child()” 这种形式的选择器称之为：伪类选择器

```

### input标签的value和placeholder属性

```
placeholder：占位符 提示用户输入的内容
value：输入框中的值，指用户输入的内容
```

### name属性

```
1.作为选单按钮，需要给它们添加相同的name属性
2.name属性是 表单数据序列化时需要用到的
```

### checked属性

```
checked属性：给单选或多选按钮 设置默认选项
```

### textarea标签

```
cols:定义一行能输入多少内容 
rows：表示能输入多少行
resize: none; /* 禁止用户改变文本域大小 */
```

### label标签

```
 通过制定label标签的【for属性】与表单的【id】选项保持一致，以扩大点击范围
```

# 日期：3月11日

### css引入方式

```
        1.行内样式
        2.内联样式 :在一定程度上做到了标签与样式分离，但还是在同一个html文件中，分离的不够彻底。
        3.外联样式 : html与css样式相分离，我们通常将css样式文件统一放在css文件夹中
```

### css基础选择器

```
       1.标签选择器: 根据标签名查找对应的一个或者多个标签，给它们添加对应的样式

       2.id选择器：根据 【id名 （#id）】查找出特定的样式，给其添加特定样式（id具有唯一性）

        3.class选择器(类选择器)：根据 【类名 （.class）】查找对应的一个或者多个标签，给它们添加某一类样式
       1>. 不同的标签可以具有相同的类名 (通常 我们给不同的标签 添加相同的类名是因为他们具有相同的样式，这样可以优化代码)
       2>.同一个标签可以具有多个类名，类名与类名之间用空格隔开

       注意： id与class的命名规范；要有意义，不能以数字开通，不要使用中文
        4.后代选择器:选择器 选择器
          父子选择器:选择器>选择器(后代选择器和父子选择器是根据 标签的嵌套关系 衍生出来的选择器)
          写法：ul>#hong{}
        5.并列选择器:选择器,选择器 
        6.通配符 *
```

### 选择器的权重

```
        - css的优先级：指的就是css选择器的权重值，权重值越大，优先级越高。
        - 优先级的排名顺序（!important除外）：
        1.行内样式，权重值：1000
        2.id 选择器的权重：100
        3.class选择器 |伪类| 属性 的权重 10
        4.标签选择器 | 伪元素 的权重：1
        5**!important 权重无穷大**
        6.最终优先级顺序：!important > 行内style > id  > class > 标签选择器
```

### 文本样式

```
           一、font-**
            font-size: 字体大小
            font-weight:字体粗细 (100-900， 400-normal，700-bold)
            font-style:字体风格，italic 表示斜体，normal 表示正常
            font-family：设置字体
            字体复合属性 font： font-style font-weight font-size/line-   			height font-family
            注意:必须按照一定的顺序书写
            不需要设置的属性可以省略，但是需要保留font-size和font-family
            
```

```
      二、text-**
        text-align：文本对齐方式  left center right
        text-indent：首行缩进

        text-decoration：文本的修饰线， underline：下划线，
        overline：上划线，line-through 删除线，none：去除修饰线

        text-transform:文本转换大小写， lowercase 所以英文字母小写
        uppercase 所以英文字母大写，capitalize 单词首字母大写

        text-shadow: 文字阴影(参数1：x轴 方向偏移量， 参数2： y轴方向偏移量，         参数3：模糊程度， 参数4：颜色)
```

```
      三、【其他】
            line-height：行高
            1> 多行文本，设置行间距
            2> 单行文本，设置文本垂直方向对齐方式

            letter-spacing：字符间距
            word-spacing： 单词与单词直接的间距
```

### 样式继承性

```
       继承权重为0
        - css样式继承性，给父元素设置一些样式属性，子元素可以继承这些样式属性
        - 判断一个样式是否具有继承性，可以查看css资料
        - 具有继承性的css样式：
        和元素相关的，如 color等
        和文字相关的，如 font-**
        和文本相关的，如：text-**，line-height
        和表格相关的，如 border-collapse等
        和列表相关的，如：list-style等

        -css、 参考手册 http://css.doyoe.com/
```

# 日期：3月12日

### 标签显示模式

```
          element：元素
        1.行元素 inline（行内元素）:span  a  strong  em  i  sup  sub             del  label  
          
          1>布局：从左往右
          2>特点：不独占一行（根据内容尽可能少的占用宽度），默认不能设置宽高
           
        2.块元素 block：div h1-h6  p  ul li ol dl dt dd table
          1>布局：从上往下
          2>特点：独占一行，默认可以设置宽高

        3.行内块元素 inline-block: img input
          1>布局：从左往右
          2>特点：不独占一行（根据内容尽可能少的占用宽度），默认可以设置宽高
```

### 盒模型

```
        盒模型：box-sizing: content-box(默认值)
        1>content: 内容
        如果 box-sizing:border-box，那么 content区域的实际宽度 = width -         paddingLeft/Right - borderLeft/Right。

        如果 box-sizing:content-box，那么 content区域的实际宽度 =width。

        2>padding: 内边距
        3>border：边框

        box-sizing 属性是用来指定盒模型的。
        盒模型有两种：content-box(默认值)，border-box
```

