# 4月12号

### 冒泡排序

```
       [10 , 2 , 6 , 9 , 11 ,5]    length -1
        升序  从小到大
        冒泡排序 ： 比较相邻元素，如果第一个元素比第二个元素大，就交换两者的位置
        交换原理： 交换两个变量的值
                 var a = 10;
                 var b = 20;
                 var c = a
                  a = b ;
                  b = c ;
       
        /*
        第一轮   5
        10 vs 2   交换位置   [2,10,6,9,11,5]
        10 vs 6   交换位置   [2,6,10,9,11,5]
        10 vs 9   交换位置   [2,6,9,10,11,5]
        10 vs 11  不交换位置 [2,6,9,10,11,5]
        11 vs 5   交换位置   [2,6,9,10,5,11]  
        结论: 最大值就位

        第二轮   4
        2 vs 6    [2,6,9,10,5,11]
        6 vs 9    [2,6,9,10,5,11]
        9 vs 10   [2,6,9,10,5,11]
        10 vs 5   [2,6,9,5,10,11]
        10 vs 11   本次可以删除

        第三轮    3
        2 vs 6    [2,6,9,5,10,11]
        6 vs 9    [2,6,9,5,10,11]
        9 vs 5    [2,6,5,9,10,11]
        9 vs 10    本次可以删除

        第四轮    2
         2 vs 6    [2,6,5,9,10,11]
         6 vs 5    [2,5,6,9,10,11]
         6 vs 9     本次可以删除

        第五轮    1
        2 vs 5      [2,5,6,9,10,11]
       
        外层循环控制   轮次
        内层循环控制   每轮的比较次数
         
        */ 
        
例： var arr= [10 , 2 , 6 , 9 , 11 ,5]
        for(var i = 0 ;i<arr.length-1;i++){
            for(var j = 0;j<arr.length-1-i;j++){
                if(arr[j] > arr[j+1]){
                    //交换两个元素位置
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
          
        console.log(arr);
```

### 函数

```
 function  定义函数的关键字
    fun1      函数名
    () 参数列表
    {} 函数体   业务逻辑就写在这里面
    封装一段代码,可以重复调用
    
    // 定义函数
    function fun1(){
        console.log('hello');
    }
  
    //   调用
    fun1();
    fun1();
    fun1();
    
    例：
    var fun2 = function(){
        console.log('world');
    }
    fun2();
```

### 函数作用域

```
//    作用域   全局作用域和 局部作用域   局部指的是函数体内部
     var y = 20 ;  //全局作用域  在任何地方都可以使用

     function fun1(){
        var x = 10;  //局部作用域   只能在当前函数体内使用
        console.log(x+y);
    }
      fun1();
      console.log(x+y);   // 局部 放在全局 未定义
```

### 作用域链

```
例：
访问一个变量的时候  现在当前作用域中查找  不存在则向上一级查找  直到全局作用域为止
 var x = 100;
    function fun1() {
        console.log(x);
    }
    function fun2(){
        x = 1000;
        fun1();     //1000
    }
    fun2();
    
函数作用域在定义的时候确定的,跟在哪调用的无关
    var x = 100;
    function fun1() {
        console.log(x);
    }
    function fun2(){
        fun1();      //100
        x = 1000;  
    }
    fun2();
```

### 变量提升（js的问题）

```
 把变量的声明提升到使用之前(不会报错！)
    console.log(str);   // undefined
    var str = 'hello';
    等同于
    var str;
    console.log(str);
    str = 'hello'; 
```

### 函数传参

```
// 封装一断代码  重复调用
function fun1(a,b){   //形参
         var sum = a+b;
         console.log(sum);
     }

     fun1(110,20);    //实参  给形参赋的值
```

### 参数集合arguments

```
 //函数参数的集合 arguments  //当成参数数组遍历使用
 例：
  function fun1(){
        console.log(arguments);
        //arguments来接收传递实参的值
        var sum = 0;
        for(var i=0; i<arguments.length; i++){
            sum = sum+ arguments[i]
        }
        console.log(sum);
    }
    fun1(1,2,3,4,5)
    fun1(1,2,3,4,5,8,9)
 
```

### 函数的返回值

```
    //传参  输入
    //返回值  输出
    function add(a,b){
        var sum =a+b;
        return sum;  //return后的代码不会执行
        // sum+110;
    }
     var res = add(10,20);
     //函数体外部不能直接使用sum
```

