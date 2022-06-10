#### 移动端适配 rem

```js
<script>
     var devicewidth=document.documentElement.clientWidth || document.body.clientWidth;
        var daxiao = devicewidth/20+"px";
        document.getElementsByTagName("html")[0].style.fontSize= daxiao;
</script>
```

​	1.固定高度，宽度百分比
​	2.Media Query（媒体查询）如boostrap
​	3.flex布局 rem布局
rem：他会根据根元素字体大小的变化而变化
rem（font size of the root element）是相对长度单位。相对根元素，font-size计算值的倍数 
如果 默认字体是16px ， 1rem= 16px
根据屏幕的大小比例，然后动态更改字体大小
​	获取屏幕宽度
​	var deviceW=document.documentElement.clientWidth || document.body.clientWidth
​	火狐 谷歌 苹果 
​	获得字体大小
​	let htmlEle=document.getElementByTagName（‘html’）[0];
​	按照比例设置字体大小
​	htmlEle.style.fontSize=deviceW/20+"px";
​	
div:nth-of-type(1){
​	获取第一个div
}


PC端转移动端
1.
<script>
let htmlWidth=document.documentElement.clientWidth||document.body.clientWidth;
let DocumentDao=document.getElementsByTagName("html")[0];
DocumentDao.style.fontSize=htmlWidth/32+'px';
</script>



2.
(function(){
        var html = document.documentElement;
        var htmlW = html.getBoundingClientRect().width;
        html.style.fontSize = htmlW/32 + 'px';


        //console.log('1rem=' + htmlW/32 + 'px')；
        //console.log(htmlW);
        //console.log(html);
        // 1rem = 5px
        // 20px =  20/5 = 4rem；
    })()
</script>



1.320 * 568 宽 * 高 设备宽高 device-width;
2.div:nth-of-type(1) 获取第一个div;
3.rem： 他会根据跟元素字体的大小变化而变化； 根元素就是 Html;



### 单位

#### px:

像素值,固定像素值

#### em:

相对于字体大小来计算大小,如果自己没有设置字体大小,会往上层找直到找到根元素为止

#### rem:

r 就是root(根)

根据HTML的根元素的字体大小来计算,如果根元素字体大小设置的16px(默认), 1rem=16px





```js
{
  "data1"[{
    "name":"每日一练",
    "imgUrl": "../img/每日一练.gif"
  }
  {
    "name":"全部题库",
    "imgUrl": "../img/全部题库.gif"
  }
  {
    "name":"找面经",
    "imgUrl": "../img/找面经.gif"
  }
    ]
}

```

