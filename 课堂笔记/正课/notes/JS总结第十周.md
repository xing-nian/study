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

