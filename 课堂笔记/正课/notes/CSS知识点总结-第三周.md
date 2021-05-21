# 日期：3月22日

### 背景图

```
1.background-repeat  背景平铺
  no-repeat：不平铺
  preat-x ：只平铺x轴方向
  preat-y ：只平铺y轴方向

2.background-size 
  长度尺寸
  百分比（参照容器的大小）
  contain，背景图可以完整展示，但不一定能填充满整个容器
  cover，  可以填满整个容器，但背景图不一定可以完整展示
3.background-position
  长度尺寸
  百分比（参照容器的大小减去背景图的大小进行计算）。
  比如：容器 100px * 200px, background-size: 50px 100px .
  此时 background-position: 20% 50% 计算出来具体指？？
  background-position: 10px 50px.
  方位名词 top/bottom/right/left/center 

```

### 鼠标样式

```
 cursor:default 
/* 1. 光标默认样式*/ 

 cursor: pointer; 
/* 2.小手 */

 cursor: move; 
 /*3.移动 */

 ursor: wait; 
 /*4.等待 */

 cursor: zoom-in; 
 cursor: zoom-out;  
 /*5.放大，缩小 */

 cursor: no-drop; 
 /*6.禁止点击 */
 
  cursor: url(), auto;
  /*7.自定义鼠标样式*/
```

### 行高百分比及倍数

```
 行高百分比，倍数以font-size为参照 
```

### outline属性

```
 outline:轮廓线
 outline-color：轮廓线的颜色
 outline-style：轮廓线的样式
```

### 表示特殊状态的伪类选择器

```
:focus 表示获取焦点
以下几个伪类如果同时出现要按照以下顺序出现  1.link  2.visited 3.hover 4.active */
1.未访问的链接样式 
  a:link
2.链接访问过的样式
  a:visited
3.鼠标悬浮的样式  
  a:hover
4.激活时的样式，点住元素不放
  a:active 
```

### 单行，多行文字溢出

```
单行:1. 定宽 
     width: 100px;
     height: 20px;
    2.不换行 
    white-space:nowrap;
	3.溢出隐藏
	 overflow: hidden;
	4.溢出部分用省略号表示
	 text-overflow: ellipsis;
多行：1.定宽
      width: 180px;
     2.溢出隐藏
      overflow: hidden;
     3.弹性伸缩盒子模型
      display: -webkit-box;
     4.设置伸缩盒子中的子元素的排列方式
      -webkit-box-orient: vertical;
     5.设置文本显示行数
      -webkit-line-clamp: 3;
     6.显示省略号
      text-overflow: ellipsis
      
浏览器前缀：
 -webkit- 表示谷歌 chrome
 -moz-表示火狐 firefox
 -ms-表示ie
 -o-bs  欧朋 opera
 
 ps:键盘敲烂，月薪过万，此处省略一百万字
```

# 日期：3月23日

### css结束