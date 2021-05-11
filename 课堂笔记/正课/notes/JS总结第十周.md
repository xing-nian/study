# 5月10日

### constructor属性

```
     1.constructor 属性指向就是构造函数本身
     原型对象（prototype）上有一个属性 ：constructor
     原型对象（__proto__）上也有一个属性 ：constructor
     

     2.constructor的作用：它的作用就是用来记录对象产生于那个构造函数，可以让原型对象重       新指向原来的构造函数。 
```

### 原型链

```
    什么是原型链？
    只要是对象内部就有__proto__;
    通过对象的__proto__属性形成的链式查找机制，即原型链

    查找规则
    1.当访问一个对象的属性或方法时，首先看对象自身是否有没有该属性
    2.如果没有就查找它的原型，即__proto__,看__proto__指向的原型对象有没有。
    3.没找到继续查找，
    4.直到找到Object.prototype.__proto__为null为止；
```

### 原型对象的应用(拓展内置对象)

```
    //内置数组求和
    //字面量创建数组；//只能通过此方式
    Array.prototype.sum = function(){
        var s = 0;
        for(var i =0; i<this.length;i++){
            s +=this[i];
        }
        return s;
    };
    var arr = new Array(2,3,5,7,8);
    var res = arr.sum();
    console.log(res);
```

### 通过构造函数和原型链组合实现继承

```
<script>
    function Father(uname,age,sex){
        this.uname = uname;
        this.age = age;
        this.sex = sex;
    }
    Father.prototype = {
        constructor:Father,
        eat:function(food){
            alert(this.uname + '不喜欢吃' +food)
        },
        speak:function(lang){
            alert(this.uname + ':' +lang)
        }
    }

    function Son(uname,age,sex){
      // 实现属性的继承
    Father.call(this,uname,age,sex);

    }
    //不能使用该方法  不可取不能实现继承  Father，Son 会相互影响
    // Son.prototype = Father.prototype

    // 通过原型链方法实现的继承
    // 正确的方式
    Son.prototype = new Father();
    Son.prototype.constructor = Son;
    var s = new Son('离',17,'');
    s.eat('土');

    console.log(Father.prototype);
</script>
```

### 数组常用的API()

```
 1.Array.from(arrLink,callback)  把一个类数组转化为数字 返回转换后的新数组
    var str = 'hello'
    参数1:要转换的数据（类数组）
    var arr = Array.from(str);
    console.log(arr instanceof Array);

    参数2:回调函数
    [2,4,6,8,10]
    var arr =Array.from('12345',function(ele,i){
        // console.log(ele+'的索引是:'+i);
        return ele *2
    })
    console.log(arr);

    2.forEach(callback) 遍历数组
    参数：对遍历到的每个元素执行对应的操作
    var arr = ['a','b','c']
    arr.forEach(function(ele,i,array){
        console.log(ele+':'+i);
        
    })

    3. map(callback) 返回一个新数组
    对数组中的每个元素运行指定的函数，返回每次调用函数的结果，并将其组成一个新的数组

    var arr = [1,2,3,4,5]
    var arr1 = arr.map(function(ele){
        return ele*2;
    })
    console.log(arr1);


4. filter(callback) 过滤 筛选  对数组中的元素进行过滤筛选 将满足条件的元素组成一个新数组
    var arr = ['张三','王五','王六','张时','李三']
    // 筛选出所有姓王的名字
   var arr1 = arr.filter(function(ele,i,array){
        return /^王/.test(ele)
    })
    console.log(arr1);

var arr = [{
    title:'苹果',
    price:12
},{
    title:'栗子',
    price:1
},{
    title:'西瓜',
    price:15
},{
    title:'南瓜',
    price:11
},{
    title:'清果',
    price:7
},]
 var arr1= arr.filter(function(ele){
    //   if (ele.price>10 && ele.price<15) {
    //       return true;
    //   } 
    return ele.price>10 && ele.price<15
})
console.log(arr1);

检测是否包含某个元素
console.log('avzxczxdaad'.includes('d'));

5.some(callback) 查找数组中是否有满足条件的元素  返回布尔值
  var ber =  arr.some(function(ele,i,array){
        return ele.price >11
    })
    console.log(ber);

6. find(callback) 查找满足条件的第一个元素  返回该元素
   findIndex(callback) 查找满足条件的第一个索引 返回该元素的索引
   var item =arr.find(function(ele,i,array){
       return ele.price >11;
   })
   console.log(item);
```

### 5月11日

### ES5严格模式

```
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
```

### ES6

```
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

```

### var和let关键字

```
1.使用let关键字声明变量，不存在变量提升.
2.let声明的变量能形成块级作用域.变量只在它所在的代码块内生效.
3.const 声明常量,不存在变量提升，能形成块级作用域。   常量：即 值不能改变

 总结:let const var的区别
   1.是否有变量提升
   2.值是否能改变
   3.是否会形成块级作用域
```

### 箭头函数

```
箭头形式： let f = (参数)=>{函数体} 
1.在箭头函数中，如果函数体中只有一句代码，并且代码的执行结果就是函数的返回值函数体大括号{}可以略
// let sum = (a,b)=>a+b;
2.在箭头函数中，如果形参只有一个，形参外面的小括号() 也可以省略  
//let num = a => alert(a);
3. 箭头函数内部的this 等于 函数定义位置中的this

 案例4
   因为obj是一个对象，对象是无法形成作用域的，
   所以eat相当于定义在了全局作用域中,因此箭头函数内部this指向window.
   let obj= {
   uname:'张三',eat:()=>{
   console.log(this); //this指向window
   }
   }
    obj.eat()
```

### 作用域总结

```
   1.全局作用域 Global    
   - 用var定义的变量，如果在全局作用域中  
   - 该变量会被绑定到window上，作为window的属性
   
   2.局部作用域 Local
   - var let const 声明的变量如果在函数体内部，都属于局部变量
   - 作用范围是：函数体内部
   
   3.let const 声明的变量可生成块级作用域 Block
   li:    {
          let a2 = 100;
          }
          
   4.脚本作用域
   - 脚本作用域 针对 let const 声明的变量
   - 脚本作用域中的let const声明的变量不属于window的属性
   - 不能通过 window变量名访问变量       
   li:  let b2 = 200;
```

### ES6中的类和对象

```
1.js语言的传统方式 是通过构造函数定义类，并生成对象
li: function Person(uname,age){
        this.uname = uname;
        this.age = age;
    }
    Person.prototype = {
        cunstructor : Person,
        eat:function(){
            console.log('hello');
        }
    }
    new Person('LI',17)
    
2.ES6 引入了 Class(类) 这个概念 , class 关键字定义类 ,new 关键字创建对象.

- constructor 就是构造函数， 相当于上面的Person

- constructor方法是类的默认方法 ，通过new命令生成实例对象，自动调用该方法，并返回实例对象。

- 构造函数的prototype属性，在ES6的类上继续存在。

- 事实上 类中所有的方法还是定义在了构造函数的原型对象上

- 注意 ： class 中的方法 ，不适用function关键字 ； 方法之间 不能用逗号“,”

li:class Animos{
      constructor(aname,type){
        this.aname = aname;
        this.type =type ;
        }
         jump(){
           console.log('跳的真高');
       }
       }
```

### ES6类的继承

```
1. js继承方法
li:
  //父类
 function Father(price,num){
        this.price = price;
        this.num = num;
    }
    
   Father.prototype.compute =function(){
       return this.price * this.num
   }
   //子类
   function Son(price,num){
    //实现属性继承
   Father.call(this.price,num)
   }
    //实现方法继承
   Son.prototype = new Father();
   Son.prototype.constructor = Son;
   //通过构造函数+原型链组合  实现继承
   
2.ES6 类的继承  
li：
class Father{
    constructor(price,num){
    this.price = price;
    this.num = num
}
getTotalPrice(){
    return this.price * this.num
}
}
// ☆通过 extend 关键字实现继承
class Son extends Father{
  constructor(price,num,discount){
//super()调用父类的构造函数
// ☆注意：在子类的构造函数中，必须先使用super()调用父类的构造函数，才能访问this关键字
//否则会报错
    super(price,num)
    this.discount = discount;
  }
}

var s1 = new Son(12,5,0.88);
console.log(s1.price);
console.log(s1.getTotalPrice());


3.重写父类的方法
li:class Father{
    constructor(price,num){
    this.price = price;
    this.num = num
}
getTotalPrice(){
    return this.price * this.num
}
}
// 通过 extend 关键字实现继承
class Son extends Father{
  constructor(price,num,discount){
//super()调用父类的构造函数
//注意：在子类的构造函数中，必须先使用super()调用父类的构造函数，才能访问this关键字
//否则会报错
    super(price,num)
    this.discount = discount;
  }
  setJiFen(){
      // super 作为对象，指向父类的原型对象
      return super.getTotalPrice() /100; //每100元 积一分
  }
//  重写父类方法
//  ☆ 要求： 方法名保持一致 ， 参数列表保持一致 ，返回值保持一致,只是逻辑有所改变。
//   
 getTotalPrice(){
    return super.getTotalPrice() * this.discount;
}
}

let s1 =new Son(100,5,0.88)
var res =  s1.setJiFen()
console.log(res);

 var res2 = s1.getTotalPrice();
 console.log(res2);

```

