# function1

####  重复出现的元素加编号   不影响正常数组元素的顺序

```
 function fun1 (arr){
        var obj = {};
    for(var i=0;i < arr.length;i++){
        var flag = true;
        for(var key in obj){
            if (key == arr[i]) {
                obj[key] = obj[key] + 1;
                flag = false;
                break
            }
        }
        if (flag) {//首次出现
            obj[arr[i]] = 1;
        }
    }
    // console.log(obj);

    for(var key in obj){
        if (obj[key] > 1) { //元素在数组中是重复出现
            var count = 0;  //表示编号
            for(var i=0;i<arr.length;i++){
                if (arr[i] == key) {
                    count++;
                    arr[i] = arr[i] + count;
                }
            } 
        }
    }
    console.log(arr);
    return arr;
    }
     
  var sem = fun1(['c','a','v','c','b','a','b','c','d','a','d']);
     console.log(sem);
```

# function2

#### 去除数组中重复出现的元素

```
//   删除方法

function fun1(arr){
    for(var i=0;i<arr.length;i++){
         var item1 = arr[i];
          for(var j=i+1;j<arr.length;j++){
            var item2 = arr[j];
             if ( item1 === item2) {
        //删除元素
             arr.splice(j,1);j--;
         }
       }
     }
        
         return arr
}
       var res = fun1([ 'a' , 'c' , 'b ' , 'a' , 'a' ,'a', 'j', 'k ' ]);
       console.log(res);


// indexOf 检测方法
    function fun1 (arr){

        var arr1 = [];
    
    for(i=0 ; i<arr.length ; i++){
        for(var k in arr){
            //该元素在arr1内部不存在才允许追加
            if(arr1.indexOf(arr[i])==-1){
                arr1.push(arr[i]);
            }
        }
    }
    return arr1
}
var res = fun1([ 'a' , 'c' , 'b ' , 'a' , 'a' ,'a', 'j', 'k ' ]);
 console.log(res);
```

