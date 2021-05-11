# 严格模式
1. 严格模式：即让javascript在更严格的条件下运行
2. 严格模式设计的目的：
- 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
- 消除代码运行的一些不安全之处，保证代码运行的安全；
- 提高编译器效率，增加运行速度；
- 为未来新版本的Javascript做好铺垫。
3. 进入严格模式的标志： "use strict"
4. 进入严格模式的两种模式：
- 将"use strict"放在脚本文件的第一行，让整个脚本文件都按照严格模式运行
- 将"use strict"放在函数体的第一行，让整个函数按照严格模式运行
5. 严格模式下一些语法的改变：
比如： 变量声明  普通函数内this指向
- 详细内容参考文档：http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html
  
# ES6
1. 什么是ES6？
- ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在2015年6月正式发布了。它是由ECMA国际标准化组织制订的一项脚本语言的标准化规范。
 
2. ECMAScript 与 JavaScript的关系？
- ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现（另外的 ECMAScript 方言还有 Jscript 和 ActionScript）。日常场合，这两个词是可以互换的。
3. ES6 与 ECMAScript2015的关系
- ES6 的第一个版本，就这样在2015年6月发布了，正式名称就是《ECMAScript 2015标准》（简称 ES2015）
- ES6 是一个泛指，泛指ES2015及后续版本，而ES2015 则是正式名称，特指该年发布的正式版本的语言标准
- 
4. 为什么要使用ES6？
- 因为JavaScript本身有许多不合理、不完善之处，为了对js做出规范，增加新的功能，让它能够开发复杂的大型应用程序，成为企业级开发语言。

5. let const 关键字声明变量 与 var的区别
   
6. 箭头函数 
- 语法结构 let fn = ()=>{}
- 箭头函数内部this指向？ 等于 箭头函数定义的位置上的this
  
7. 作用域
- Global 全局作用域
- Local 局部作用域（函数作用域）
- Block 块级作用域 （let const）
- Script 脚本作用域 （let const）

8. ES6中的类和对象
- 定义类的关键字 class
- constructor方法 指的就是构造函数，在构造函数内定义属性
- 方法定义在 类 中，本质上还是定义在构造函数的原型对象上。
- 类的继承   通过 extends 关键字实现继承
- 子类的构造函数 （constructor）中访问this之前，一定要先调用父类的constructor方法（super()）
- 子类方法的扩展  
- 重写父类方法 （方法名  参数列表 返回值 结构要保持一致）