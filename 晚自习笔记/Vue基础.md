- ## **一. data 数据对象**

![1613994721384](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1613994721384.png)

**效果图：**

![1613994755438](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1613994755438.png)

- **1.Vue中用到的数据定义在data中**

- **2.data中可以写复杂类型的数据**

- **3.渲染复杂类型数据时，遵守js语法即可**

  ## Vue本地应用

  ####  一.内容绑定，事件绑定
       1.v-text：设置标签的文本值（textContent）

![1613996149328](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1613996149328.png)

![1613996277826](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1613996277826.png)

#####  1）v-text指令的作用是：设置标签的内容（textContent）

#####  2）默认写法会替换全部内容，使用差值表达式{{}}可以替换指定内容

#####  3）内部支持写表达式

####  2.v-html 指令

![1613997248021](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1613997248021.png)

![1613997261761](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1613997261761.png)



##### 1)v-html指令的作用是：设置元素的innerHTML

##### 2)内容中有html结构都会被解析为标签

##### 3)v-text指令无论内容是什么，只会解析为文本

##### 4)解析文本用v-text，解析html结构用v-html

###  3.v-on 指令

![1613999624918](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1613999624918.png)

![1613999658295](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1613999658295.png)

####   1)v-on 指令的作用是：为元素绑定事件

####   2) 事件名不需要写on

####   3)指令可以简写为@  

####   4)绑定的方法定义在methods属性中

####   5)方法的内部通过this关键字可以访问定义在data中的数据

### 4.计数器实例：

![1614253665413](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1614253665413.png)

![1614253710664](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1614253710664.png)

####        1.data中定义数据

####        2.methods中添加两个方法：比如add（递增） sub（递减）

####        3.使用v-text将num设置给span标签

####        4.使用v-on将add，sub分别绑定给+，-按钮

####        5.累加的逻辑：小于10累加，否则提示

####        6.递减的逻辑：大于0递减，否则提示

# v-show：

### 根据表达值的真假，切换元素的显示和隐藏(通过控制display：none 隐藏和显示)

![1614598833206](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1614598833206.png)



![1614598884199](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1614598884199.png)

![1614598921155](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1614598921155.png)

### 1)v-show指令的作用是：根据真假切换元素的显示状态

###   2)原理是修改元素的display，实现显示隐藏

###   3)指令后面的内容，最终都会解析为布尔值

###   4)值为true元素显示，值为false元素隐藏

###   5)数据改变后，对应元素的显示状态会随之变化

# v-if:

### 根据表达式的真假，切换元素的显示和隐藏(操作dom元素实现)

![1614598211912](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1614598211912.png)



![1614598228697](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1614598228697.png)

#### 1) v-if指令的作用是：根据表达式的真假切换元素的显示状态 

####  2) 本质是通过操作dom元素来切换显示状态

####  3) 表达式的值为true，元素存在于dom树种，weifalse，从dom树中移除

####  4)频繁的切换v-show比v-if消耗要小

# v-bind

### 设置元素的属性(比如 src，title，class)

![1614601930384](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1614601930384.png)

![1614601853036](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1614601853036.png)



![1614602004286](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1614602004286.png)

### 1)v-bind指令的作用是：为元素绑定属性

### 2)完整写法是 v-bind:属性名

### 3)简写可以直接省略v-bind，只保留：属性名

### 4)需要动态的增删class建议使用对象的方式

# v-for

### 基本应用：根据数据生成列表结构

![1614776099502](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1614776099502.png)



####  1) v-for指令的作用是：根据数据生成列表结构

####  2)数组经常和v-for结合使用

####  3)语法是(item,index) in 数据

####  4)item和index可以结合其他指令一起使用

####  5)数组长度的更新会同步到页面上，是响应式的 