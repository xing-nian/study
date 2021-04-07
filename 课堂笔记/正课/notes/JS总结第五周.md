# 日期：4月6号

### 循环控制

```
       1.break
       for(var i = 0 ; i < 5 ; i++){
        if( i==2 ){
            break;//终止循环
        }
    }
        console.log(i); // 0 1

        
       2.continue
       for(var i = 0 ; i < 5 ; i++){
        if( i==2 ){
            continue;//跳出本轮循环 继续下一轮循环
        }
        console.log(i);
    }
        console.log(i); // 0 1
 
```

#### 双层for循环

```
 for( var i = 0; i<5 ; i++){
         console.log("内层循环开始");
         for(var j = 0 ; j< 5; j++){
             console.log('i ='+i+',j='+j);
         }
         console.log("内层循环结束");
    }
```

### switch语句

```
//判断变量是否等于某些值   === ；
例如： var day =prompt('请输入1-7的数字');
    day*=1
    switch(day){
        case 1:
            alert('周一');
        break;
        case 2:
            alert('周二');
        break;
        case 3:
            alert('周三');
        break;
        case 4:
            alert('周四');
        break;
        case 5:
            alert('周五');
        break;
        case 6:
            alert('周六');
        break;
        case 7:
            alert('周日');
        break;

        default:
        alert('可能吗');
            break;
    }
```

### 三元表达式（三目运算符）

```
     a ? b : c
     a  表示条件表达式
     b  表示条件成立的结果
     c  表示条件不成立的结果
     
     例如：  
   			 var age = 20;
   			 age >= 18 ? alert('已成年') :alert('未成年')
   			 
   	 等同于：  var age = 17
              if(age >= 18){
                  alert('已成年');
              }else{
                  alert('未成年');
              }		 
   	
```

### 对象

```
             var obj = {
                     uname :"jon",
                     age: 18,
                     sex:'男',
                 }
               // 1.获取属性值
                console.log(obj.age);
                console.log(obj);
                //2.修改属性值
                obj.age = 19;
            
                //3.删除属性值
                delete obj.age;
                 
               // 访问属性的方式 :  对象. 属性值   对象["属性名"]
                console.log(car['color'])
                car['color'] = 'red';
                console.log(car['color'])
                console.log(car)
```

### 遍历对象

```
               var car = {
                      name: '保驰捷',
                      color:'white',
                      model:'911',
                      price:'123万',
                      from:'德国'
                  }
                  // for  in   遍历对象
                     for(var key in car){
                  // key : 代表属性名
                  // car : 代表对象
                  // car.key  遍历对象时，不能使用  对象，属性名  访问属性  ,只能用  对象[key]来访问
                  // console.log(key); 
                  console.log(key + ':'+ car[key]);  
                  }
```

# 日期：4月7号

### for in 遍历数组

```
     var arr = ['a','b','c','d'];
      for(var i in arr){
      console.log(i);// i 索引
      }
```

### while循环

```
for(var i = 0; i< 10; i++){

 //先判断，后执行   
  }
  var  j = 0;
  while(j<10){
      console.log(j);
      j++
  };


 //先执行后判断  ,至少会执行一次
   var a = 0;
   do{
       console.log(a);
       a++
   }while(a<10)            
```

### 值类型和引用类型

```
 // 值类型 ： number  string  boolean  null  undefined    存储在栈中
 // 引用类型 ： array  object    存储在堆中
 // 值类型:存储时,变量中存储得是值本身 ,存储在栈中.
 // 引用类型:在存储时,变量中存储得失 指针地址 存储在栈中 ,而值存储在堆中.
 
    栈                                       堆
    str    'hello'-->'world'
    str 2  'hello'

    arr  指针地址1                         [1,3,5,6]
    arr2 指针地址1

```

### 类型转换

```
1.转换为布尔值  Boolean()

2.转换为number类型    
(1)Number() 如果不是纯数字的字符串, 转换后是NaN
(2)parseInt() 整形  parseFloat() 浮点型
从第一位开始到第一位非数字的字符结束,提取出来字符串中开头位置的数字.

3.转换为字符串 toString()
例如：num.toString();

     
```

### Math对象

```
    Math.round() 四舍五入方法
    console.log(Math.round(num2));

    Math.ceil() 向上求整
    console.log(Math.ceil(num2));  

    Math.floor() 向下求整
    console.log(Math.floor(num2)); 

    Math.abs() 求绝对值
    console.log(Math.abs(num3)); 

    Math.max()  Math.min() 求最大值 最小值
    console.log(Math.max(100,62,55,33)); 
    console.log(Math.min(100,62,55,33)); 

    Math.pow()幂
    console.log(Math.pow(5,3)); 
    
    Math.sqrt() 开平方
    console.log(Math.sqrt(25)); 

    Math.PI   π = 3.1415926
    console.log(Math.PI); 

    正切tan  正弦sin   余弦cos
      console.log(Math.tan(Math.PI/4)); 

    Math.random() 随机数 [0  1) 包含0,不包含1
     console.log(Math.random());
```

