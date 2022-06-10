## AJAX



#### 1，什么是AJAX？

ajax = 异步javaScript 和XML
AJAX 是一种用于创建快速动态网页的技术

通过在后台与服务器进行少量数据交换，ajax可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下对网页某部分进行更新。

01，创建XMLHttpRequest对象
let xmlhttp = new  XMLHttpRequest();
02,xmlhttp.open('GET',"https://mock.mengxuegu.com/mock/605b510e0d58b864da03d8dd/HappyShopping/userInfo", true)
第一个参数：请求的类型
第二个参数：url，文件在服务器上的地址
第三个参数：async（是否异步），true：异步，false：同步
03,xmlhttp.send();
将请求发送到服务器

如果请求里，是同步请求，可以直接在send后面紧跟着去使用xmlhttp去拿数据，如果是异步请求，则需要通过onreadystatechange事件中就绪状态时执行的函数：
xmlhttp.onreadystatechange =function(){
      if(xmlhttp.readyState == 4 && xmlhttp.status ==200){

​           console.log(xmlhttp.response);
​    }

}
xmlHttpRequest中readyState变化时，就会触发onreadystatechange,一个正常的请求，readyState会从0到4
0：请求未初始化
1：服务器连接已建立
2，请求已接收
3，请求处理中
4，请求已完成，且响应已就绪



100  请求处理中

200  运行正常

300  重定向

404   路径错误

500   后端错误 

<img src="D:\学习\上课笔记\100~300.png"  />

![](D:\学习\上课笔记\300~400.png)

![](D:\学习\上课笔记\400~500.png)

#### JQ里的ajax：

$.ajax({
url：请求地址
type:"get | post | put | delete " 默认是get,
data:请求参数 {"id":"123","pwd":"123456"},
dataType:请求数据类型"html | text | json | xml | script | jsonp ",
success:function(data,dataTextStatus,jqxhr){ },//请求成功时

error:function(jqxhr,textStatus,error)//请求失败时
})

例：
    

```js
$.ajax({
    url:"",
    type:"get",
    dataType:"json",
    success:function(data,textStatus,jqxhr){
        console.log("__成功__");
        console.log(data);
        console.log(textStatus);
        console.log(jqxhr);
        console.log("______");
    },
    error:function(jqxhr,textStatus,error){
        console.log("__失败__");
        console.log(error);
        console.log(textStatus);
        console.log(jqxhr);
        console.log("******");  

}
})
```



#### post  和 get 的区别

##### get  

get会把用户的数据暴露在地址栏

有长度限制   会存在数据丢失的风险

get会在浏览器缓存

get 一般用来获取信息

##### post

post  的更安全  post会把数据封装在一个方法   

没有长度限制

post 不会在浏览器缓存

post一般用来提交信息
