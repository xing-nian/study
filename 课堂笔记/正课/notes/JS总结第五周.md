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

