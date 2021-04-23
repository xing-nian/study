# DOM选择器
1. tagName 
2. id
3. className
4. name

# 标签内容
1. innerText
2. innerHTML

# 标签属性
1. src  href   id   type   placeholder  value
2. checked  selected  (布尔值)
3. className (操作样式)
4. 自定义标签属性  setAttribute   getAttribute
   data-color    ele.dataset.color

# 标签样式
1. style  (行内样式，注意样式的优先级)

# 事件
1. 事件类型：
- 窗口事件：onload  onscroll
- 鼠标事件：onclick  onmouseenter  onmouseleave  onmousedown  onmouseup  onmousemove
- 键盘事件：onkeyup  onkeydown  onkeypress 
- 表单事件：onsubmit  onreset  onfocus  onblur (tabIndex) onchange oninput

2. 事件对象： event
3. 鼠标的位置坐标：e.clientX / e.clientY  pageX / pageY

# DOM对象属性
1. 元素的位置： offsetTop  offsetLeft 
2. 元素尺寸：offsetHeight  offsetWidth
3. 滚动高度：scrollTop （兼容性问题）
4. 自定义属性

# 事件函数内部this指向
- 谁调用该函数，this指向谁
- btn.onclick = function(){  this-->btn    } 

# 案例
1. 轮播图
2. tab栏切换
3. checkbox美化  select美化
4. 分页 
5. 快递单号

