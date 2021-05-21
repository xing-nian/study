1. 什么是AJAX？
AJAX 是 异步 JavaScript 和 XML。英文全称：Asynchronous Javascript And XML。
是指一种创建交互式、快速动态网页应用的网页开发技术，无需重新加载整个网页的情况下，能够更新部分网页的技术。

xml: 可扩展的标记语言。可以认为HTML是XML的子集。
xml主要用来传输数据的，是一种数据交换格式，是比较旧的数据交换格式，原来webService中使用。后面再介绍一种数据交换格式：JSON
html主要用来渲染数据。
https://www.w3school.com.cn/xml/index.asp(XML简介)


AJAX的两个主要特点(与传统方式相比)：
a. 不需要重新加载整个网页，更改局部网页内容。即无刷新，用户体验好。
b. 异步加载数据，用户不用等待数据加载过程。用户体验好。

课外阅读：
https://baike.baidu.com/item/AJAX/8425


2. 什么是异步和同步？ 什么是阻塞和非阻塞？
同步：一句代码不执行完，下一句代码不能执行，JS语句顺序执行的过程就是同步。同步会造成阻塞代码。特别是执行数据量大的业务逻辑时，用户体验不好。

异步：代码的执行没有顺序，代码并行执行，哪句代码执行的时间短，哪句代码先执行完，异步不会造成阻塞代码。用户体验好。而AJAX就是一种异步的操作。

课外阅读：
https://www.jianshu.com/p/e0fa13f399ce

3. 进程和线程？（了解）
专业解读：进程（Process）是计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位，是操作系统结构的基础。

简单理解：操作系统中一个程序运行的环境就是进程，比如：QQ，360管家，浏览器等

专业解读：线程（Thread）是操作系统能够进行运算调度的最小单位。它被包含在进程之中，是进程中的实际运作单位。

简单理解：如果把进程比作一个车间，那么线程就是车间中的工人。

课外阅读：
https://baike.baidu.com/item/%E7%BA%BF%E7%A8%8B/103101?fr=aladdin
https://blog.csdn.net/luhao19980909/article/details/89403233

4. XMLHttpRequest 对象
XMLHttpRequest 对象是js提供的进行AJAX请求操作的对象。也是最早的AJAX技术方案。它内置很多的API，具体参考课件。

随着技术的发展，各大互联网公司在XMLHttpRequest基础上，封装了各种脚本库，如:jquery.js,axios.js。另外JS语言本身也在发展，交提供了新的异步方案，比如：Promise对象, fetch()方法，async/await。这些脚本库及新的异步方案，我们会在后面的课程中有体现。

文档：
https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest

5. 主要的请求类型（请求方式）有哪些？
GET,POST,PUT,DELETE
GET请求     主要用来查询数据。
POST请求    主要用来提交数据。
PUT请求     主要用来修改数据。
DELETE请求  主要用来删除数据。

