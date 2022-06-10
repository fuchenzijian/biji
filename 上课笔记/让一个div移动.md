

#### 一个按钮控制div移动



```html
<div id="timename" style="width: 300px; height: 100px;border: 1px solid; position: relative;"></div>
<button id="show" style="height:45px; width:80px;"  onclick="show()">按钮</button>


```

```js
var a=0;
       function show(){
           a=a+20;
           document.getElementById("timename").style.left=a+"px";
       }
```





<div id="timename" style="width: 300px; height: 100px;border: 1px solid; position: relative;"></div> 

<button id="show" style="height:45px; width:80px;"  onclick="show()">按钮</button> 

