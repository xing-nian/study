# 5月20日

### 初始ajax请求(天气接口)

####  (1).创建请求对象

```
 let xhr = new XMLHttpRequest();
```

####  (2).指定请求方式 请求路径

```
  /*
        请求路径：
        (1)协议：  https
        (2)域名： restapi.amap.com 区分服务器
        (3)端口号： 默认端口号443 (http:80)  可以省略  区分服务器下不同的服务
        (4)资源路径：/v3/weather/weatherInfo
        (5)参数:  ? 号后面拼接get请求参数 
        参数格式： key=value  多个参数之间用 & 符号连接
    */
    
xhr.open('GET','https://restapi.amap.com/v3/weather/weatherInfo?key=d557b105e1ff9c2dc331ab9aaa24d7c1&city=郑州市')
```

####  (3).发送请求

```
 xhr.send();
```

####  (4).接服务器返回的数据

```
   当请求状态发生改变时，readystatechange绑定的事件函数就会被调用
    xhr.onreadystatechange = function(){
        /*
            readyState: 请求状态  4：请求已完成 响应已就绪
            status：服务端返回的请求状态码  200：ok
        */
        if (xhr.readyState ==4 && xhr.status == 200) {
            // 获取服务端返回的数据
            let data = xhr.responseText;
            console.log(data); 
        }
    }
```

#### json数据格式

```
  1.什么是json？
    json是一种数据交换格式，拥有固定格式的字符串

    let json1 = '{"name":"jon","age":"28","sex":"男"}'
    let json2 = '[{"title":"html","price":108},               {"title":"css","price":99}]'  

    2.将json字符串  转换为对象
    let obj1 = JSON.parse(json1);
    console.log(obj1);
    let obj2 = JSON.parse(json2)
    console.log(obj2);

    3. 将对象 转换为json字符串  
      let p = {username :'Jon',
               password:'123456',
               hobby: ['打球','唱歌'],
               sex:'男',
               address:'郑州',
               email:'123.qq@.com'}
      let str =JSON.stringify(p)  
      console.log(str);
```

# 5月21日

### from请求

#### from表单发送get请求

```
<body>
    <!-- 
        action:定义请求地址
        method：定义请求方式
        name属性：给服务器传递参数
     -->
    <form action="http://localhost:8080/register" method="GET">
        <input type="text" id="uname" name="username">
        <input type="password" id="psw" name="password">
        <input type="submit" value="注册">
    </form>
</body>


接口文档：
     1.服务器地址: http://localhost:8080/register?username=xx&password=xx
     协议类型： http
     服务器地址：本地服务 域名：localhost  对应IP：127.0.0.1
     端口号：8080
     资源路径：/register
     请求参数：username  password

     请求方式：get post 都可以
     get请求：请求参数是拼接在url之后，路径和参数直接用？连接，参      数与参数之间&连接
     不安全
     传递参数 有大小限制 4k

     2.服务器返回的数据：
     status：值为0 表示用户名已存在：值为1 表示用户注册成功
     msg：显示具体注册状态的信息
```

#### from表单发送post请求

```
<body>
    <!-- 
        action:定义请求地址
        method：定义请求方式
        name属性：给服务器传递参数
     -->
    <form action="http://localhost:8080/register" method="POST">
        <input type="text" id="uname" name="username">
        <input type="password" id="psw" name="password">
        <input type="submit" value="注册">
    </form>
</body>

  /*
     接口文档：
     1.服务器地址: http://localhost:8080/register?username=xx&password=xx
     协议类型： http
     服务器地址：本地服务 域名：localhost  对应IP：127.0.0.1
     端口号：8080
     资源路径：/register
     请求参数：username  password

     请求方式：get post 都可以
     post请求：请求参数是放在请求体中
     传递参数 无大小限制 
     相对于get安全
     

     2.服务器返回的数据：
     status：值为0 表示用户名已存在：值为1 表示用户注册成功
     msg：显示具体注册状态的信息
    */ 
```



### ajax请求

#### ajax发送post请求

```
<style>
         #errow{
             color: red;
         }
    </style>
</head>
<body>
    <form id="myform">
        <input type="text" id="uname"><em id="errow"></em><br>
        <input type="text" id="psw"><br>
        <input type="submit" value="注册">
    </form>
</body>
<script>
     let myform = document.querySelector('#myform');
     let uname = document.querySelector('#uname');
     let psw = document.querySelector('#psw');
     let errow = document.querySelector('#errow');

     myform.onsubmit = function(e){
         e.preventDefault();//阻止默认事件

        // 1. 创建请求对象
        let xhr = new XMLHttpRequest();
        // 2.指定请求方式 请求路径
        xhr.open('GET',`http://localhost:8080/register?username=${uname.value}&password=${psw.value}`)
        //  console.log('提交');
        // 3.发送请求
        xhr.send();

        // 4.监听事件
        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4 && xhr.status ==200) {
               let data = JSON.parse(xhr.responseText);
               if (data.status == 0) {
                errow.innerHTML = data.msg
               }else{
                //    alert(data.msg)
                location.href = 'https://www.baidu.com'
               }
               console.log(data);
            }
        }
     }
</script>//案例为本地 需启动node
```

#### ajax发送post请求

```
<style>
         #errow{
             color: red;
         }
    </style>
</head>
<body>
    <form id="myform">
        <input type="text" id="uname"><em id="errow"></em><br>
        <input type="text" id="psw"><br>
        <input type="submit" value="注册">
    </form>
</body>
<script>
     let myform = document.querySelector('#myform');
     let uname = document.querySelector('#uname');
     let psw = document.querySelector('#psw');
     let errow = document.querySelector('#errow');
    
    //  事件绑定
     myform.onsubmit = function(e){
         e.preventDefault();//阻止默认事件

        // 1. 创建请求对象
        let xhr = new XMLHttpRequest();
        // 2.指定请求方式 请求路径
        xhr.open('POST',`http://localhost:8080/register`)
     
        // 3.设置请求头 定义参数格式类型
        //  xhr.setRequestHeader('Content-type','application','x-www-form-urlencoded')
        xhr.setRequestHeader('Content-type','application/json')
        //   拼接请求参数
        //  let param = `username=${uname.value}&password${psw.value}`;
        let param = {
            username:uname.value,
            password:psw.value
        }
        // 把对象转换为json字符串
        let paramStr = JSON.stringify(param)
        //  4.发送请求
         xhr.send(paramStr);

        // 5.监听事件
        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4 && xhr.status ==200) {
               let data = JSON.parse(xhr.responseText);
               if (data.status == 0) {
                errow.innerHTML = data.msg
               }else{
                //    alert(data.msg)
                location.href = 'https://www.baidu.com'
               }
               console.log(data);
            }
        }
     }
</script> //案例为本地  需启动node
```

#### ajax发送get请求练习

```
<body>
    <button id="btn">提交</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>5</button>
    <ul id="list">

    </ul>
</body>
<script>
let list = document.querySelector('#list')
let btns = document.getElementsByTagName('button');
for(let i = 0; i<btns.length;i++){
    btns[i].onclick = function(){
        
 //  1.创建请求对象
let xhr =new XMLHttpRequest();
// 2.指定请求方式，请求路径
xhr.open('get',`https://autumnfish.cn/top/artists?offset=${i*10}&limit=10`)
// 3.发送请求
xhr.send();
// 4.获取服务端返回的数据
xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200) {
        let data = JSON.parse(xhr.responseText);
        let html = ''
        data.artists.forEach(singer =>{
           html+=`
            <li>
                <img src = "${singer.picUrl}">
                <h3>${singer.name}</h3>
                </li>
           `
        });
        list.innerHTML =  html;
    }
}
    }
}
</script>
```

#### 封装ajax

```
<body>
    <button id="btn">按钮</button>
</body>
<script>
     function ajax(params){
        let xhr = new XMLHttpRequest();
        // data.offset&limit=10
        let str = '';
        for(const key in params.data){
           str = str + key + '=' + params.data[key]+'&' 
        }
        str = str.substr(0,str.length-1)
        xhr.open(params.type,params.url + '?' + str)

        xhr.send();

        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4 && xhr.status == 200) {
                let data = JSON.parse(xhr.responseText);
                params.success(data);
            }
        }
     }

     btn.onclick = function(){
        ajax({
            type:"get",
            url:"https://autumnfish.cn/top/artists",
            data:{
                offset:0,
                limit:10
            },
            success:function(responseData){
                // 界面操作
            }
        })
     }
</script>
```

