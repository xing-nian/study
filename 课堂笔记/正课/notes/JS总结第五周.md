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

# 日期：4月8号

### Data日期对象

```
// 获取日期对象（当前系统的标准时间）
     var d =new Date();
     
// 获取年份
     var year = d.getFullYear();  
     
// 获取月份  注意：月份是从0开始计算；
     var month = d.getMonth() + 1;
     if(month<10){
         month="0"+month;
     }
     
//  日
    var date = d.getDate();
    if(date<10){
        date="0"+date;
     }
     
// 星期 星期一 - 星期六： 1-6   星期日：0
    var week = d.getDay()
    if (week == 0){
        var week ='星期日';
    };
    if (week == 1){
        var week ='星期一';
    };
    if (week == 2){
        var week ='星期二';
    };
    if (week == 3){
        var week ='星期三';
    };
    if (week == 4){
        var week ='星期四';
    };
    if (week == 5){
        var week ='星期五';
    };
    if (week == 6){
        var week ='星期六';
    }; 
    
// 时
    var h = d.getHours();
    if(h<10){
        h="0"+h;
     }
     
// 分
    var m = d.getMinutes();
    m<10 ?m = '0'+m :m ;
    
// 秒
    var s = d.getSeconds();
    s<10 ? s ='0'+s :s ;
//完整时间输出:var sj = year+'-'+month+'-'+date+' '+h+ ':'+ m +':'+ s +"  "+week;
```

### 时间戳

```
 var d = new Date();
 
// 获取时间戳  距离 1970年 1月1日 00:00:00 之间的毫秒数  1秒= 1000毫秒；
   var ms = Date.parse(d);
   
// 例如：计算现在到2021-5-1 00:00:00 的倒计时
   var d2 = new Date('2021-5-1 00:00:00')
        // console.log(d2);
        var ms2 = d2.getTime();
        console.log(ms2);
        console.log(ms2-ms);

        
        var time =(ms2-ms)/1000
        var s =parseInt(time%60);
        // console.log(s);
        var m =parseInt(time/60)%60;
        // console.log(m);
        var h =parseInt(time/60/60%24);
        // console.log(h);
        var d =parseInt(time/60/60/24);
        // console.log(d);
        var djs = d+'天'+h+ '小时'+ m +'分钟'+ s +'秒';
        console.log(djs);
```

### 深浅拷贝问题

```
    值类型和引用类型
    值类型：在存储的时候，变量存储的是值本身，存储在栈内存中
    引用类型：在存储时，变量存储的是指针地址，指针地址存储在栈中，而值存储在堆内存中.
 
    深浅拷贝只针对引用类型，值类型不存在深浅拷贝问题。
    什么是深拷贝？ 什么是浅拷贝？
    var car1 ={
        name:'保驰捷',
        color:'red',
        model:'911',
        price:'110万'

    }
    浅拷贝 :只拷贝指针地址
    var car2 = car1;
    console.log(car2);
    car1['from']='德国';
    console.log(car2);
    深拷贝 :不仅将原对象的各个属性逐个复制出去，而且将原对象各个属性所包含的对象也依次采用深复制的方法递归复     制到新对象上。这就不会存在上面 obj 和 shallowObj 的 arr 属性指向同一个对象的问题。
    var car2 = {};
    for (var key in car1){
        // car2.name = "保驰捷"
        // car2.color = "red"
        car2[key] = car1[key];
        
    }
    car1['from']='德国';
    console.log(car2);
```

### 深拷贝

```
 
    var obj = {
        name: 'Jon',
        age:18,
        isMale:true,
        hobbies:['吃饭','睡觉','打豆豆']
    }
    var obj2 = {};
    obj2.hobbies = [];
    for (var key in obj){
        if(obj[key] instanceof Array){ //判断是否存在数字，若存在则进行
            obj2[key]= [];
            for(var i = 0 ;i<obj[key].length;i++){
                obj2[key][i]=obj[key][i];此操作进行更深一层拷贝
            }
        }else{
                obj2[key]=obj[key]
            
        }
    
        }
    
        obj.hobbies[0]='sport'
        console.log(obj2);
```

### 字符串对象

```
var str = '天朗气清 我很不好';

    //通过索引 访问单个字符
    console.log(str[1]);
     console.log(str.charAt(4));

    //字符串的长度length
     console.log(str.length);
   
    // 截取字符串片段,从索引为0的位置开始,截取到4的位置 但不包含4的字符
    console.log(str.slice(0,2));

    // 从2开始截取2个字符长度
    console.log(str.substr(2,2));

    //以指定字符切割字符串  返回数组    
    var str2 ="name = jon ; age =18; sex =true";
    console.log(str2.split(';'));
    var str3 = '青果/香蕉/桃子/peach'
    console.log(str3.split('/'));
    
    // 替换字符片段
    var str4 = "你不在真是个好人"
    console.log(str4.replace('好人','帽子'));
    var str5 = "你真好真好真好真好真好真好二"
    console.log(str4.replace('真好','真坏'));

    // 转换大小写
    var str6 = 'JavaScript',str7 ='HTML';
    console.log(str6.toUpperCase());
    console.log(str7.toLocaleLowerCase());

    // 检测某个字符在字符串中首次出现的位置
    console.log(str5.indexOf('二')); //13
    console.log(str5.indexOf('不存在')); //-1

    /*
     slice   substr  split  replace  toUpperCase  toLowerCase  indexOf
    */

```

# 日期：4月9号

### 数组对象

```
 //1. 新增元素
    // 后面追加
    arr.push('f');

    // 前面添加
    arr.unshift('0')

 //2. 删除元素
    //后面删除
    arr.pop()        //删除后面一个元素
    // 从前面删除
    arr.shift()      //删除前面一个元素

    arr.splice(2,1)  //从某个位置删除几位

    arr.splice(2,1, 'y','z','s') //从某个位置删除几位元素并添加某些元素
    console.log(arr);

    var arr1 = ['border','left','color']
    // 以指定字符将数组中元素拼接成字符串
    arr1.join('-');
    console.log(arr1.join('-'));

 //3. 颠倒数组中的元素
        arr.reverse();
       console.log(arr);

 //4. 合并数组
    var arr1 = [1,2,3];
    var arr2 = [4,5,6];
    var arr3 = [7,8,9];
    console.log(arr1.concat(arr2,arr3));
    console.log(arr1);

 //5. 排序
    var arr1 = [3, 1, 4, 6, 8, 7, 2, "a", "f", "b"];
    console.log(arr1.sort());

    arr1.sort(function (a, b) {
      if (a < b) {
        //a>b升序   a<b 降序
        return 1; //换位
      } else {
        return -1; //不换位
      }
    });
     console.log(arr1);

 //6.截取数组中的元素 包含开始 不包含结束位置
    console.log(arr.slice(2,4));


```

