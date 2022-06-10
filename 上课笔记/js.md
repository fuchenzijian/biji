



### JavaSrcipt组成

​	ECMScript:解释器
​	DOM：document Object model
​	BOM:browser Object model

1.  **window.alert();**  浏览器弹出框,可以输出字符,也可以做运算
2. **document.write();**  如果页面,文档还没有加载完的时候执行,会在后面做元素或者
   内容的追加,如果页面,文档已经加载完再去执行,会覆盖页面
3. **document.InnerHTML**   写入到HTML里面 必须大写 例如<p>aaa<p>修改是aaa
4. **console.log();**  控制台打印 翻译：日志


#### JS的数据类型

​	1.number 数字类型 

​	2.String字符串 字符型

​	3.boolean 布尔类型 值 ：true 和 false

​	4.undefined:未定义

​	5.null:空

​	6.symbol   说明

不包含任何值的数据类型

​	undefined:未定义

​	null:空

Object:数组和对象通过typeof检测都属于Object，可以通过Array.isArray做简单区分，
​	null也属于Object

function  函数

#### JS对象

​	JS注释 单行注释 //    多行注释/* */ 
​	JS里的对象，带有属性和方法都特殊数据类型       静态是属性 动态是方法



#### 数组

求最大值

```js
var a=[1,3,45,6,89,9]
var b=a[0];

        for(var i=0;i<6;i++){
            if (a[i]>b) {
            b=a[i];
            }
        }
        console.log(b)
			89
```

求最小值

```js
 var a=[1,3,45,6,89,9]
        var b=a[0];

        for(var i=0;i<6;i++){
            if (a[i]<b) {
            b=a[i];
            }
        }
        console.log(b)
			1
```





#### 排序

```js
     var a= [1,5,3,11,6,24,2,9];

 var b = a.sort(sorta);
 function sorta(m,n){
    return m-n;
 }
  for(var i =0;i<b.length;i++){
        console.log(b[i]);
    }
//
1
2
3
5
6
9
11
24
```

#### 选择 分支

```js
 
 var tody ="晴天"
 if(tody =="晴天"){
     console.log("短袖")
 }else{
     console.log("外套")
 }
//短袖
```

#### for in

```js
var xl={"name":"小鹿","age":20,"sex":"man"}   
for(item in xl){
      console.log(xl[item])
  }
//
小鹿
20
man
```



#### for 循环

```js
	 for(var i =o;i<10;i++){
        console.log(i);
 }
```



```js
 function person(name,age,sex){
     this.name =name;
     this.age =age;
     this.sex= sex;
    this.run=run;
    function run(){
         console.log(name+"正在跑");
     }
   }
   var zd = new person("赵迪",18,"man");
  zd.run();
   var ch = new person("程浩",18,"man");
   ch.run();
   var xl = new person("小鹿",20,"man")
   xl.run();

```



### js date 

常用 new Date()创建
var time = new Date();
time.getDate()
 从Date对象中返回一个月中的某一天（1~31）
time.getDay()
从Date对象中返回一周中的某一天（0~6）
getFullYear()
从Date对象以四位数字返回年份
getHours() 
返回Date对象的小时（0~23）
getMilliseconds()
返回Date对象的毫秒(0~999)
getMinutes()
返回Date对象的分钟(0~59)
getMonth()
返回Date对象的月份(0~11)
getSeconds()
返回Date对象的秒数(0~59)
getTime()
返回从1970年1月1日至今的毫秒数



```html
<span id="date"></span>
```



```js
var time = new Date
        var a= time.getFullYear()
        var b=time.getMonth()+1
        var c=time.getDate()
        
        var e=time.getHours()
        var f=time.getMinutes()
        var g=time.getSeconds()


        var d=time.getDay()
        if(d ==1){
            d="星期一"
        }else if(d==2){
            d="星期二"
        
        }else if(d==3){
            d="星期三"
        
        }else if(d==4){
            d="星期四"
        
        }else if(d==5){
            d="星期五"
        
        }else if(d==6){
            d="星期六"
        
        }else if(d==0){
            d="星期天"
        }


        var alltime = a+"年"+b+"月"+c+"日"+ " "+d+ "  "+e+"时"+f+"分"+g+"秒"
 
        document.getElementById("date").innerHTML=alltime
        
```

显示出来的:    2021年4月21日 星期三 17时33分32秒



#### 动起来的时间

```js
  var time = null;
        var a;
        var b;
        var c;
        var d;
        var e;
        var f;
        var g;

        setInterval(function () {
          time = new Date
         a= time.getFullYear()
         b=time.getMonth()+1
         c=time.getDate()
        
         e=time.getHours()
         f=time.getMinutes()
         g=time.getSeconds()


         d=time.getDay()
        if(d ==1){
            d="星期一"
        }else if(d==2){
            d="星期二"
        
        }else if(d==3){
            d="星期三"
        
        }else if(d==4){
            d="星期四"
        
        }else if(d==5){
            d="星期五"
        
        }else if(d==6){
            d="星期六"
        
        }else if(d==0){
            d="星期天"
        }


        var alltime = a+"年"+b+"月"+c+"日"+ " "+d+ "  "+e+"时"+f+"分"+g+"秒"
 
        document.getElementById("date").innerHTML=alltime
        
        }, 1000)
```

### JS函数

**函数** 

**1，创建函数：** 

**01，使用构造器，构造函数,先声明一个变量作为函数的标识，然后使用关键字，new一个Function进行构造** 

**var fn = new Function()** 

**02，函数表达式** 

**var fn = function(a,b){** 

**console.log(a+b);** 

**}** 

**03,函数声明（最常用的方法）** 

**function fn(){ ** 

**}** 

**三种方式的异同点：**

主要不同是构造函数和函数表达式：

构造函数和函数表达式存在变量提升的问题，也就是说调用该函数必须在该函数已经被创建后才能调用，而函数声明不存在这个问题，无论在何处调用都可以

![https://note.youdao.com/yws/public/resource/43dbf35bccd365021d9f7b563b0f22c4/xmlnote/1FB40A255C784CABAB1D7DC060D5D9C4/6517](https://note.youdao.com/yws/public/resource/43dbf35bccd365021d9f7b563b0f22c4/xmlnote/1FB40A255C784CABAB1D7DC060D5D9C4/6517) 

![https://note.youdao.com/yws/public/resource/43dbf35bccd365021d9f7b563b0f22c4/xmlnote/20E59F3DA9D449DABF98E2016CE32A38/6518](https://note.youdao.com/yws/public/resource/43dbf35bccd365021d9f7b563b0f22c4/xmlnote/20E59F3DA9D449DABF98E2016CE32A38/6518) 

**2，函数声明前置** 

**js执行顺序是自上而下，但是这个规则对函数声明和var变量是有重大影响的。到这里就可以先看下var的变量提升：** 

**console.log(a);** 

**var a =10;** 

**console.log(a);** 

**console.log(m)//报错，在js作用域里没有找到有关m的定义** 

**同时，为了避免这个问题，在ES6里面，let和const这两个是不存在变量提升的** 

**console.log(b);** 

**let b=10;** 

**console.log(b);** 

**同样的道理，这也是为什么我们可以先fn()** 

**然后在下面定义的function fn(){}**   

**依然可以正常执行** 

**然后我们在回头看下，为什么函数表达式和构造函数的调用要放到函数体后面。** 

**比如：** 

**fn();** 

**var fn = function(){** 

**console.log(1);** 

**}** 

**根据我们变量提升的分析，他的过程是这样的， ** 

**var fn ;** 

**fn();** 

**fn = function(){** 

**console.log(a);** 

**}** 

**我们可以看到，fn被提升后，fn()调用，但是此时的fn还不是一个函数。 ** 

**3，函数的参数：** 

**形参，实参** 

**我们都知道在java，c这种非弱类型的语言里面，方法的参数必须规定类型，因此有方法重载的说法，但是js是弱类型语言，没有直接的方法重载，方法名相同，后面的会覆盖前面的方法，但是我们可以结束typeof+if判断来实现参数类型不同的重载** 

![https://note.youdao.com/yws/public/resource/43dbf35bccd365021d9f7b563b0f22c4/xmlnote/B3201F4D17FC43B0955190EAF241CC88/6516](https://note.youdao.com/yws/public/resource/43dbf35bccd365021d9f7b563b0f22c4/xmlnote/B3201F4D17FC43B0955190EAF241CC88/6516)  

![https://note.youdao.com/yws/public/resource/43dbf35bccd365021d9f7b563b0f22c4/xmlnote/65B2B3FFA3664ED99470EC301D71DF19/6515](https://note.youdao.com/yws/public/resource/43dbf35bccd365021d9f7b563b0f22c4/xmlnote/65B2B3FFA3664ED99470EC301D71DF19/6515) 

**4，返回值 return** 

**return是函数返回值的一个关键字** 

**function fn(a,b){** 

**return a+b;** 

**}** 

**console.log(fn(1,2)+3);** 

**我们在java等语言里面，返回值是要在定义方法的时候给出类型，如果没有返回值用的void，但是js里面，函数入后有return ，则返回 值就是return 的，如果没有return的函数，默认会返回undefined** 

**5，立即执行函数** 

**01，声明函数和匿名函数** 

​      **无论是构造函数，表达式函数还是我们通用写法里的函数，声明的时候都需要有一个名字，这种函数就是声明函数。** 

​     **匿名函数是指一个函数没有名字，并且被立刻调用，立即执行函数就是匿名函数** 

**02，立即执行函数常用的写法：** 

​        **用小括号包裹整那个函数体，然后在后面用小括号调用** 

**(function(){})()**  **用小阔包裹函数体和函数调用的小括号**  



**(function(){}())** 

**用+运算符连接函数体** 

**+function(){}()** 

**03，立即执行函数的作用** 

**立即执行函数的主要作用就是防止变量的污染，在自身函数内部创建一个作用域，所有在内部创建的变量在被执行后都会被销毁，对外部没有任何影响**   



#### 延时执行     setTimeout

##### 一秒以后执行

```js
setTimeout(function () {
                    console.log(1)
                },
                1000)
```





##### 一秒执行一次

```js
for (var m = 0; m < 10; m++) {
           ys(m);
        }

        function ys(m){
            setTimeout(function () {
                    console.log(m)
                },
                1000*m)
        }
```



#### 一直执行  setInterval

```js
 var a=0;
       setInterval(function(){a++;console.log(a)},1000);
一秒输出一个a
```

两个参数

函数,时间

#### 限制次数的执行

```js
var a=0;
       var b=setInterval(function(){a++;console.log(a)},1000);


       setTimeout(function(){
           clearInterval(b)
       },10000);

```



#### JS Boolean对象

Boolean 有两个值:true和flase

##### 可以代表false的:

1. 无初始值
2. 0
3. -0
4. null
5. ""
6. false
7. udefined
8. NaN



**" "代表的是true** 



#### 滚动条事件

```css
onscroll="gundong()"
```

```js
var a ;
        function gundong(){
            a=document.documentElement.scrollTop;
            if (a>500) {
                console.log("触发了特定的事件")
            }
        }
```

scrollTop   滚动条离顶的距离

#### 鼠标滚轮事件

```css
onmousewheel="gundong()"
```

```js
var a ;
        function gundong(){
            a=document.documentElement.scrollTop;
            if (a>500) {
                console.log("触发了特定的事件")
            }
        }
```

#### 鼠标事件

**onclick** 						单击鼠标

**ondblclick**  				 双击鼠标

**onmousemove** 			鼠标滑动

**onmouseover** 			鼠标滑过

**onmouseout** 			鼠标划出

**onmouseleave** 			鼠标离开

#### 跟随鼠标移动

clientX    以浏览器窗口左上顶点为原点,定位x轴坐标

clientY    以浏览器窗口左上顶点为原点,定位y轴坐标

offsetX	以当前事件的目标对象左上顶点为原点,定位X轴坐标

offsetY	以当前事件的目标对象左上顶点为原点,定位y轴坐标

pageX	以document对象(即文档窗口)左上顶点为原点,定位X轴坐标

pageY	以document对象(即文档窗口)左上顶点为原点,定位Y轴坐标

screenX	计算机屏幕左上顶点为原点,定位X轴坐标

screenY	计算机屏幕左上顶点为原点,定位Y轴坐标



#### 事件冒泡和捕获

##### 事件冒泡

事件触发的时候,从里向外层传递

##### 事件捕获

事件触发的时候,从外向里层传递

##### 取消冒泡:

event.cancelBubble = true;

##### 取消捕获:

event.stopImmediatePropagation();  

需要注意，event.stopImmediatePropagation()同时也可以阻止事件冒泡，在阻止事件冒泡和事件捕获的时候需要注意，事件冒泡要写在最里层子元素的事件里，事件捕获则需要写在最外层的事件里，也就是事件最先被触发的地方



#### 事件委托

element.addEventListener("监听事件",执行的函数方法,布尔值控制捕获还是冒泡(true是捕获,false是冒泡,默认是false))

#### 取消事件委托

element.removeEventListener("需要停止监听的事件",需要停止执行的函数方法);

#### 

#### arguments   指代当前函数的参数   实参





#### JS Math

##### abs(x)      返回x的绝对值

##### ceil(x)	   对x的上舍入         

```
var a=10.001;
console.log(Math.ceil(a));
      
      11
```



##### floor(x)    对x的下舍入

```
var a=10.999;
console.log(Math.floor(a));
       
       10
```



##### max(x,y,m....n)   返回x,y,m....n里面的最大值

##### min(x,y,m....n)   返回x,y,m....n里面的最小值

#### 6位随机数

```js
Math.round(Math.random()*899999+100000)
parseInt(Math.random()*899999+100000)
```



#### JS string

String对象的方法

##### 1,charAt();

返回在指定位置的字符

```js
let a='123';
let b=a.charAt(2)
b

//"3"
```



##### 2，charCodeAt();

返回在指定位置字符的unicode编码

##### 3，concat()

连接两个或多个字符串，并返回新的字符串       合并字符串

##### 4，indexOf();

返回某个指定字符串的值在字符串中首次出现的位置

##### 5，includes()

查找字符串中是否包含指定的子字符串

##### 6，replace()

在字符串中查找匹配的子串，并替换与正则表达式匹配的子串
var a = "good good study,day day up.";
var b = a.replace("d","b");
只完成了第一个good里面d的替换，如果想要全部替换，则需要配合正则表达式
var b = a.replace(/d/g,"b"); 在正则表达式里面，g代表全局global

##### 7，slice();

提取字符串片段，并在新的字符串中返回被提取的部分

##### 8，split();

将字符串分隔成字符串数组

##### 9，substr(),

从起始索引号开始提取指定个数的字符
var a ="abcdefg";
var b = a.substr(2,2);
从下标为2的字符c开始，截取2个字符

##### 10，substring(); 

截取两个索引之间的字符

##### 11，trim(); 

去处字符串两端的空白

##### 12，toLowerCase()   toUpperCase() 大小写转换







#### 数组去重

```js
var arr =[1,2,3,4,5,1,2,3,7,6,8,5];
        var arrnew = [];
        
        for(var i=0;i<arr.length;i++){
            if(arrnew.indexOf(arr[i])==-1){
                arrnew.push(arr[i]);

            }
        }
		console.log(arrnew);

[1, 2, 3, 4, 5, 7, 6, 8]
```

##### ...解构

用解构的方法去重

```js
var arr =[1,2,3,4,5,1,2,3,7,6,8,5];
var arrnew=[...new Set(arr)]
console.log(arrnew)

 [1, 2, 3, 4, 5, 7, 6, 8]
```





#### 数组排序   sort

##### 从小到大

```JS
 var arr =[1,2,3,4,5,1,2,3,7,6,8,5];
 var arrnew=arr.sort(function(a,b){return a-b})
 console.log(arrnew);

```

##### 从大到小

```js
 var arr =[1,2,3,4,5,1,2,3,7,6,8,5];
 var arrnew=arr.sort(function(a,b){return b-a})
 console.log(arrnew);

```

**sort会改变原数组的排列顺序**

**用箭头函数来写**

```JS
arr.sort((a,b)=>{return a-b})

arr.sort((a,b)=>{return b-a})
```



#### JS Array

Array对象用在变量中存储多个值
var cars =["奔驰","宝马","奥迪"];

内置方法：

##### 1，concat() 连接

 连接两个或更多数组，并返回结果

语法：array1.concat(array2,array3····arrayn),需要注意该方法不会改变原数组，而是仅仅会会返回被连接数组的副本。

```JS
var car1 = ["奔驰","宝马","奥迪"];
var car2=["大众","丰田","红旗"];
var car3=["别克","福特","标志"];

var car = console.log(car1.concat(car2,car3))
```

```JS
["奔驰", "宝马", "奥迪", "大众", "丰田", "红旗", "别克", "福特", "标志"]
```

##### 2，fill() 替换

用于将一个固定值替换数组的元素
语法：array.fill(val,start,end)

var car1 = ["奔驰","宝马","奥迪","大众","丰田"];
用fill把大众和丰田换成别克
car1.fill("别克",3,5)

```JS
var car1 = ["奔驰","宝马","奥迪","大众","丰田"];
console.log(car1.fill("别克",3,4))
```

```JS
["奔驰", "宝马", "奥迪", "别克", "丰田"]
```



##### 3，filter() 过滤，

该方法会创建一个新的数组，新数组中的元素会通过检查指定数组中**符合条件的所有元素** 

\* filter不会对空数组进行检查
\* filter不会改变原数组
语法：array.filter(function(currentValue,index,arr), thisValue)

简单的用法可以传入过滤函数：
var ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}

var adult = ages.filter(checkAdult);

也可以用匿名函数过滤
ages.filter(function(a,b,c){
console.log(a);
console.log(b);
console.log(c);
})

```js
var ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}

var adult = ages.filter(checkAdult);
console.log(adult)
```

```js
[32, 33, 40]
```



##### 4,	find();查找**符合条件的第一个对象** 

查找**符合条件的第一个对象** 
var ages = [3, 10, 18, 20];

function checkAdult(age) {
    return age >= 18;
}

function myFunction() {
    document.getElementById("demo").innerHTML = ages.find(checkAdult);
}
\* find()不会对空数组进行检查
\* find()不会改变原数组
语法：array.find(function(currentValue, index, arr),thisValue)

```js
var ages = [3, 10, 18, 20];
var adult =ages.find(checkAdult);
function checkAdult(age) {
    return age >= 18;
}
console.log(adult)
18
```



#####  5，findIndex()返回的是符合条件元素对应的下标

findIndex()和find用法类似，不同的是返回的是符合条件元素对应的下标

```js
var ages = [3, 10, 18, 20];
var adult =ages.findIndex(checkAdult);
function checkAdult(age) {
    return age >= 18;
}
console.log(adult)
2
```



##### 6，forEach();

forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
用法：array.forEach(function(currentValue, index, arr), thisValue)

第一个是当前数组里面的内容

第二个是当前数组里面元素的下标

第三个是当前整个数组

```js
var ages =[18,26,17,96,];
  ages.forEach(function(d,e,f){
            console.log(d+":"+e);
        })
 
 18:0
 26:1
 17:2
 96:3
```



##### 7，form（）；把字符串数组化

常用于把字符串数组化
var a = "abcdse"; var b = Array.from(a);console.log(b[2])

```js
var a = "abcdse"; var b = Array.from(a);console.log(b)

 ["a", "b", "c", "d", "s", "e"]
```



##### 8，includes()  

方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。

```js
var car1 = ["奔驰","宝马","奥迪"];

console.log(car1.includes('奔驰'));
true

var car1 = ["奔驰","宝马","奥迪"];

console.log(car1.includes('大众'));
false
```



##### 9,    indexOf();

搜索数组中的元素，并返回该元素所在位置

```js
var fruits = ["香蕉", "橙子", "苹果", "甜瓜"];
	var a = fruits.indexOf("苹果")
console.log(a)
2
```



##### 10，isArray();判断对象是否是数组

判断对象是否是数组

var a=[];console.log(Array.isArray(a))

```js
var a=[];console.log(Array.isArray(a))
 true

var a={};console.log(Array.isArray(a))
 false
```



##### 11,   join();  把数组元素转换成字符串

把数组元素转换成字符串，可以传入参数，参数为分隔符，默认不传参数为逗号

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join());
Banana,Orange,Apple,Mango
```



##### 12，map()

map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
map() 方法按照原始数组元素顺序依次处理元素。
*： map() 不会对空数组进行检测。
*： map() 不会改变原始数组

array.map(function(currentValue,index,arr), thisValue)

```js
var numbers = [4, 9, 16, 25];
console.log(numbers.map(Math.sqrt))
// 获取数组元素的平方根
[2, 3, 4, 5]
```



##### 13，pop();删除数组的最后一个元素

删除数组的最后一个元素，并返回删除元素

```js
var ages = [32, 33, 16, 40];
 var array4=ages;
        array4.pop();
        console.log(array4);
[32, 33, 16]
```



##### 14，push();向数组的末尾添加

向数组的末尾添加一个或多个元素，并返回新的长度

```js
ar ages = [32, 33, 16, 40];
 ages.push(17,83,21);
        console.log(ages);
[32, 33, 16, 40, 17, 83, 21]
```



##### 15，shift();删除

删除并返回数组的第一个元素；

```js
var a=['11','22','33','44','55'];
     console.log(a.shift())
     console.log(a)
 11
["22", "33", "44", "55"]
```



##### 16，unshift():在数组头部添加一个或更多元素

在数组头部添加一个或更多元素，并返回新的长度
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");
该方法会改变数组的长度

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");
console.log(fruits)

 ["Lemon", "Pineapple", "Banana", "Orange", "Apple", "Mango"]
```



##### 17,reverse();反转

反转数组的元素顺序

```js
var a=['1','2','3','4'];
   console.log(a.reverse())
["4", "3", "2", "1"]
```



##### 18，slice()选取数组的一部分

选取数组的一部分，并返回一个新数组,截取数组，里面可以传入两个参数，start和end， 也可以传入一个参数，这个还可以用作截取字符串

```js
var a=['1','2','3','4','5','6'];
     console.log(a.slice(2,6))
["3", "4", "5", "6"]
```

##### 19，sort()排序

需要传入匿名函数来写入排序规则,sort会返回排序好的数组,而且会改变原数组

```js
var arr =[1,2,3,4,5,12,13,17,62,81,25];
 var arrnew=arr.sort(function(a,b){return a-b})
 console.log(arrnew);
[1, 2, 3, 4, 5, 12, 13, 17, 25, 62, 81]


var arr =[1,2,3,4,5,12,13,17,62,81,25];
 var arrnew=arr.sort(function(a,b){return b-a})
 console.log(arrnew);
[81, 62, 25, 17, 13, 12, 5, 4, 3, 2, 1]
```



##### 20，splice（）添加或删除

从数组中添加或删除元素

*这种方法会改变原数组

array.splice(index,howmany,item1,item2····itemn);
第一个参数：该参数是开始插入和（或）删除的数组元素的下标，必须是数字。

第二个参数：可选，删除多少个，可以是0   

第三个参数，可选，需要添加到数组中的元素

第一个参数是要删除的下标    第二个参数是从第一个下标开始要删除几个    第三个参数是要加的参数

```js
var a=['1','2','3','4','5','6'];
     a.splice(4,2,'1')
     console.log(a)
["1", "2", "3", "4", "1"]
```



#### JS判断变量是否是数组

##### 1.Array.isArray(a)

```js
var a=[];
Array.isArray(a)
// true
```

##### 2.ary instanceof Array

```js
var ary=[];
console.log(ary instanceof Array)
// true
```

##### 3.ary.constructor.toString.indexOf()

```js
var ary=[];
ary.constructor.toString().indexOf("Array")
// 9
var ary={};
ary.constructor.toString().indexOf("Array")
// -1
```



#### JS Number

##### 01，m.toFixed(x);

对m进行小数位截取，保留x位，返回一个截取后的数字，返回类型为string

##### 02，toString();

把数字转化为字符串

##### 03，Number.parseFloat();

把字符串转换成浮点数字，和全局parseFloat()一样

##### 04，Number.parseInt();

把字符串转换成整型数字，和全局parseInt()一样

##### 05,isNaN();

判断传递的参数是否是 isNaN(). NaN 是：not a number

```js
let m = '';
isNaN(m)
// ture   
m 不是一个数字
```



##### 06,Number.isInteger();

判断传递参数是否是整数



##### parseInt()

把字符串转换成数字

```JS

```



#### Number的最大整数值

Number.MAX_SAFE_INTEGER

##### 9007199254740991

#### 数字型的最大值和最小值 ：

**最大值**：Number.MAX_VALUE，输出结果：1.7976931348623157e+308

**最小值**：Number.MIN_VALUE，输出结果：5e-324

#### Number()转换

Number("1")   返回的是1

Number("3.14")   返回的是3.14

Number("")   返回的是0

Number(" ")   返回的是0

Number("99 j")   返回的是NaN(not a number)

Number("kk")   返回的是NaN(not a number)

##### parseInt() 返回的是整型数字，

只有字符串中的第一个数字会被返回。

开头和结尾的空格是允许的。

如果字符串的第一个字符不能被转换为数字，那么 parseInt() 会返回 NaN。

```js
parseInt("10")
10
parseInt("10.33")
10
parseInt("34 45 66")
34
parseFloat(" 60 ")
60
parseFloat("40 years")
40
parseFloat("He was 40")
NaN
parseInt("10",10)
10
write(parseInt("10",16)
16
parseInt("010")
10

```



##### parseFloat()返回的是浮点数字

 字符串中只返回第一个数字。

开头和结尾的空格是允许的。

如果字符串的第一个字符不能被转换为数字，那么 parseFloat() 会返回 NaN。

```js
parseFloat("10")
10
parseFloat("10.33")
10.33
parseFloat("34 45 66")
34
parseFloat(" 60 ")
60
parseFloat("40 years")
40
parseFloat("He was 40")
NaN
```



##### toFixed()

toFixed() 方法可把 Number 四舍五入为指定小数位数的数字。



#### *号三角形

```JS
var a = "";
        for (var i = 0; i < 5; i++) {
            a+="*";
            console.log(a);
        }
```

结果

```
 *
 **
 ***
 ****
 *****
```

```
var a = "";
        for (var i = 0; i < 5; i++) {
            a = "";
            for (var j = 0; j < i; j++) {
                a += "*"
            }
            console.log(a);

        }
```

```
 *
 **
 ***
 ****
```



#### 99乘法表

```js
var a =""; 
 for(var i=1;i<=9;i++){
      for(var j=1;j<=i;j++){
          a+=j+"*"+i+"="+j*i+"\t";
      }
      console.log(a);
      a="";
  }
```

打印结果

```
1*1=1	
1*2=2	2*2=4	
1*3=3	2*3=6	3*3=9	
1*4=4	2*4=8	3*4=12	4*4=16	
1*5=5	2*5=10	3*5=15	4*5=20	5*5=25	
1*6=6	2*6=12	3*6=18	4*6=24	5*6=30	6*6=36	
1*7=7	2*7=14	3*7=21	4*7=28	5*7=35	6*7=42	7*7=49	
1*8=8	2*8=16	3*8=24	4*8=32	5*8=40	6*8=48	7*8=56	8*8=64	
1*9=9	2*9=18	3*9=27	4*9=36	5*9=45	6*9=54	7*9=63	8*9=72	9*9=81	
```

#### 特殊字符 代表字符

![image-20210509152113455](C:\Users\腾飞\AppData\Roaming\Typora\typora-user-images\image-20210509152113455.png)



####  JavaScript this 关键字

java中，this是当前对象的引用，在js中，存在的地方不同，this指向也会不同

##### 1，在对象方法中，this指向调用他所在方法的对象

```js
var person ={
	firstName:"迈克尔",
	lastName:"乔丹",
	fullName:function(){
		return this.firstName+"·"+this.lastName;
	}
}
person.fullName();
```

这里this所在方法是fullName，这个方法在对象person里，调用的时候使用person
点方法调用，所以this指向的是person

##### 2，在函数中使用this

```js
function aa(){
	console.log(this)
}
aa();
```

这里的this所在方法是aa，调用的时候aa看着是直接调用，但是实际上aa这个方法所属的是浏览器的全局对象，浏览器的全局对象就指的是window，window对象调用的，所以这里的this指向的是window对象

##### 3，在事件中的this，绑定到元素事件里的this代指的是当前元素

```html
<div onclick="clicktest(this)">点击</div>

function clicktest(that){
console.log(that);
}


<div onclick="clicktest(this.style.background=red)">点击</div>
```

##### call 和apply的引用，改变this的指向

```js
function printName(){
	console.log(this.name)
}
var student ={
	name:"小明",
	age:18
}
printName.()
//undefined
```



```js
function printName(){
	console.log(this.name)
}
var student ={
	name:"小明",
	age:18
}
printName.call(student) 
//小明
```

这里的call里的第一个参数是一个对象，也就是你要将前面的this绑定到第一个参数对象上
apply和call在没有第二个参数的时候，用法一样


call的参数传递：

```js 
function printName(edu,marry){
	console.log(this.name+"学历："+edu+"婚姻："+marry)
}
var student ={
	name:"小明",
	age:18
}
printName.call(student,"本科","未婚")
```



##### call和apply的区别：

printName.apply(student,["本科","未婚"])

```js
function printName(edu,marry){
  	console.log(this.name+"学历："+edu+"婚姻："+marry)
}
var student ={
  	name:"小明",
  	age:18
}
printName.apply(student,["本科","未婚"])
```

可以看到，**call后面的实参和方法里的是一一对应**，但是作为**apply**，**需要把后面的实参封装成一个数组传递过去**



##### setTimeout和setInterval 里的this   指向的都是window

遇见setTimeout和setInterval都是把函数放到队列里,是由浏览器调用的,所以this都是指向window

```js
setTimeout(function () {
                    console.log(this)
                },1000)
setInterval(function () {
                    console.log(this)
                }, 1000)
```

##### 构造函数的this 指向他的实例对象

##### this的应用

```js
1，var o = {
    a: 10,
    b: {
        a: 12,
        fn: function(){
            console.log(this.a);   			12
            console.log(this);     			b
   	}
    }
}

o.b.fn();
 var o = {
    a: 10,
    b:  {
        fn: function(){
            console.log(this.a);  			undefined 
            console.log(this);       		b
    	}
}
}
o.b.fn()

2，var o = {
    a: 10,
    b: {
        a: 12,
        fn: function(){
            console.log(this.a);          	undefined    
            console.log(this);  			window
      }
    }
}
var j = o.b.fn; 
j(); 

3，var point = { 
    x : 0, 
    y : 0, 
    moveTo : function(x, y) { 
        this.x = this.x + x; 
        this.y = this.y + y;
        console.log(this.x);				1
        console.log(this.y);     } 			1
}; 
point.moveTo(1, 1)



4，function someFun(x) { 
    this.x = x; 							window
} 
someFun(5); 
console.log(x); 							5



5，
var a = 10;
var foo = {
    a: 20,
    fn: (function(){
        console.log(this); 					window
        console.log(this.a);})()			10
}


6.
var a=10;                        
        var foo={                  
               a:20,            
               bar:function(){                     
                      var a=30;                       
                      return this.a;                      
               }                      
         }                        		  this		  this.a
         foo.bar()                        off    		20
         (foo.bar)()                      off     		20
         (foo.bar=foo.bar)()              window     	10            
         (foo.bar,foo.bar)()			  window		10
```





#### 箭头函数

箭头函数表达式的语法比函数表达式更简洁，并且没有自己的this，arguents，super等。箭头函数表达式更适用于那些搬来需要匿名函数的地方，并且它不能用作构造函数

```js
(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
//相当于：(param1, param2, …, paramN) =>{ return expression; }

// 当只有一个参数时，圆括号是可选的：
(singleParam) => { statements }
singleParam => { statements }

// 没有参数的函数应该写成一对圆括号。
() => { statements }
```

var elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

elements.map(function(element) {
  return element.length;
}); // 返回数组：[8, 6, 7, 9]

// 上面的普通函数可以改写成如下的箭头函数
elements.map((element) => {
  return element.length;
}); // [8, 6, 7, 9]

// 当箭头函数只有一个参数时，可以省略参数的圆括号
elements.map(element => {
 return element.length;
}); // [8, 6, 7, 9]

// 当箭头函数的函数体只有一个 `return` 语句时，可以省略 `return` 关键字和方法体的花括号
elements.map(element => element.length); // [8, 6, 7, 9]

// 在这个例子中，因为我们只需要 `length` 属性，所以可以使用参数解构
// 需要注意的是字符串 `"length"` 是我们想要获得的属性的名称，而 `lengthFooBArX` 则只是个变量名，
// 可以替换成任意合法的变量名
elements.map(({ "length": lengthFooBArX }) => lengthFooBArX); // [8, 6, 7, 9]



#### 解构赋值

```js
//基本
let [a,b,c]=[1,2,3]//a=1, b=2, c=3
//可忽略
let [a,,c]=[1,2,3]//a=1,c=3
//剩余运算符
let [a, ...b] = [1, 2, 3, 4, 5]//a = 1,b = [2, 3, 4, 5] …b只能作为最后一个
//可嵌套
let [a, [[b], c]] = [1, [[2], 3]];// a = 1,b = 2, c = 3
let [a,b,c]=[1, [2, 4],3];// a = 1,b = [2, 4], c = 3
//字符串解构赋值
let [a, b, c, d, e] = 'hello';// a = 'h', b = 'e', c = 'l', d = 'l', e = 'o'
```

#### 扩展运算符（...）和rest运算符（...）

###### 扩展运算符：

01，当我们写一个方法时，运用扩展运算符可以允许传入的参数是不确定的,取代agruments
function aaa(...args){
console.log(args[0]);
console.log(args[1]);
console.log(args[2])
console.log(args[3])
}
aaa(1,2,3);

02,扩展运算符解决浅拷贝带来的问题

let arr1=['aa','bb','cc'];
let arr2=arr1;
console.log(arr2);
arr2.push('dd');
console.log(arr1);
这里声明了两个数组，然后我们把arr1赋值给arr2，然后我们改变arr2的值，你会发现arr1的值也改变了，因为我们这是对内存堆栈的引用，而不是真正的赋值。
let arr1=['aa','bb','cc'];
let arr2=[...arr1];
console.log(arr2);
arr2.push('dd');
console.log(arr1);
03，进行数组合并

let arr1=['aa','bb','cc'];
let arr2=["dd","ee"];
let arr3 = [...arr1,...arr2]

04,字符串转数组
let a ="abcdefg";

let arr =[...a];

###### rest运算符

rest运算符也是三个点号，不过其功能与扩展运算符恰好相反，把逗号隔开的值序列组合成一个数组
其实第一个例子应该算是rest应用，...扩展运算符是把一个完整的数组拆分出小元素，而rest刚好是反向操作，是把一些散装的元素合并成一个数组
var array = [1,2,3,4,5,6];
var [a,b,...c] = array;
console.log(a);//1
console.log(b);//2
console.log(c);//[3, 4, 5, 6]
这个结合我们之前的解构赋值





#### let 和const

**let 声明的变量只在 let 命令所在的代码块内有效。**
**const 声明一个只读的常量，一旦声明，常量的值就不能改变。**

```js
let ：
{
   let a =100;
   console.log(a)
}
	console.log(a)


{
   let a =100;
   var b =200;
}
console.log(a)
console.log(b)
```

**let声明变量只能声明一次**

let a =10;
let a =20;

var b=10;
var b =20;

关于for循环和计时器一起使用的问题：

```js
for (var i = 0; i < 10; i++) {
  setTimeout(function(){
    console.log(i);
  })
}
//输出结果  一分钟以后输出10次10
```

```JS
for (let j = 0; j < 10; j++) {
  setTimeout(function(){
    console.log(j);
  })
}
//输出结果 
 10
 0
 1
 2
 3
 4
 5
 6
 7
 8
 9
```

变量 i 是用 var 声明的，在全局范围内有效，所以全局中只有一个变量 i, 每次循环时，setTimeout 定时器里面的 i 指的是全局变量 i ，而循环里的十个 setTimeout 是在循环结束后才执行，所以此时的 i 都是 10。

变量 j 是用 let 声明的，当前的 j 只在本轮循环中有效，每次循环的 j 其实都是一个新的变量，所以 setTimeout 定时器里面的 j 其实是不同的变量，即最后输出 12345。（若每次循环的变量 j 都是重新声明的，如何知道前一个循环的值？这是因为 JavaScript 引擎内部会记住前一个循环的值）。

##### 变量提升问题，



```JS
console.log(a); 
let a = "apple";
//输出结果:  ReferenceError: a is not defined

console.log(b); 
var b = "banana";
 //输出结果:  undefined
```

##### const

const 声明一个只读变量，声明之后不允许改变。意味着，一旦声明必须初始化，否则会报错。

const 如何做到变量在声明初始化之后不允许改变的？其实 const 其实保证的不是变量的值不变，而是保证变量指向的内存地址所保存的数据不允许改动。此时，你可能已经想到，简单类型和复合类型保存值的方式是不同的。是的，对于简单类型（数值 number、字符串 string 、布尔值 boolean）,值就保存在变量指向的那个内存地址，因此 const 声明的简单类型变量等同于常量。而复杂类型（对象 object，数组 array，函数 function），变量指向的内存地址其实是保存了一个指向实际数据的指针，所以 const 只能保证指针是固定的，至于指针指向的数据结构变不变就无法控制了，所以使用 const 声明复杂类型对象时要慎重。

```js
// 正确写法
const PI = 3.14159265359;

//创建常量对象
const car = {type:"Fiat", model:"500", color:"white"};
 
// 修改属性:
car.color = "red";
 
// 添加属性
car.owner = "Johnson";

// 创建常量数组
const cars = ["Saab", "Volvo", "BMW"];
 
// 修改元素
cars[0] = "Toyota";
 
// 添加元素
cars.push("Audi");
```

##### var let const 的区别

var   会变量提升   可以再次声明   声明后   后面的会覆盖前面的

let const   不会变量提升  

let 声明的变量只在 let 命令所在的代码块内有效   不能被重复   只能通过赋值的方式来改变

const    是一个常量   必须赋默认值  只能声明一次   声明之后不允许改变

#### 找出str里面出现最多的字母,并输出该字母出现的次数

```JS
//找出str里面出现最多的字母,并输出该字母出现的次数
    function findMax(str) {
        let strArr = [...str];
        let zimu = '';
        let zimuNum = 0;
        let char = '';
        let number = 0;
        let Max = {
            maxzimu: '',
            maxzimuNum: 0
        }

        for (let i = 0; i < str.length; i++) {
            zimuNum = 0;
            zimu = str[i];
            for (let j = 0; j < str.length; j++) {
                if (zimu == strArr[j]) {
                    zimuNum++;
                }

            }
            if (zimuNum > number) {
                char = zimu;
                number = zimuNum;
            }
        }
        Max['maxzimu'] = char;
        Max['maxzimuNum'] = number;
        return Max;

    }
    let str = "dsafkfyauyfyuagsgykufgyfyvdsavk";
    findMax(str)
// 输出为 {maxzimu: "y", maxzimuNum: 6}

```

```JS
function findMax(str) {
        let strObj = {};
        for (let i = 0; i < str.length; i++) {
            if (strObj.hasOwnProperty(str[i])) {
                strObj[str[i]]++;
            } else {
                strObj[str[i]] = 1
            }
        }
        let Obj2={
            
            maxChar:'',
            maxNum:0
        }
        for (key in strObj){
            if(strObj[key]>Obj2.maxNum){
                Obj2.maxChar =key;
                Obj2.maxNum =strObj[key]
            }
        }
        return Obj2
    }
```

const  Requestarr=[1，3，5，7，12，18，21，18，12，6，5，4，3，1]

#### 需求:拿到最接近最大数的重复数

```js
const requestArr =[1,3,5,7,12,18,21,18,12,6,5,4,3,1];
let objArr ={};
requestArr.forEach((val,index)=>{
   if(objArr.hasOwnProperty(val)){
    objArr[val]++;
   }else{
       objArr[val] =1;
   }

})
let numMax=0;
let numMaxCount =0;
for (const key in objArr) {
    if(objArr[key]>= numMaxCount){
        numMaxCount =objArr[key];
        numMax =key;
    }  
}
console.log(numMax)
```

#### 实现数字货币化

```js
function huobi() {
            let a = "2125678346773" ;
            let arr=[...a];
            let f=arr.length;
            let d=(parseInt(arr.length/3));
           
           
            for(let i=d;i>0;i--){
                console.log(i)
                arr[f-3*i-1]+=','
            }
        
           return arr.join('');
        }
```



#### 点击隐藏 点击出现



```html
<div class="yc" >
```



```css
.shc{
    display: block;
    width: 246px;
    height: 312px;
    margin: 0 auto;
    padding: 0 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 20px;
    position: absolute;
    right: 115px;
    top: 85px;
}
.yc{
    display: none;
    width: 246px;
    height: 312px;
    margin: 0 auto;
    padding: 0 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 20px;
    position: absolute;
    right: 115px;
    top: 85px;
}
```



```js
function shangcheng(){
    var chu1=document.getElementsByClassName("shc");
    
    if(chu1.length>0){
        document.getElementsByClassName("shc")[0].setAttribute("class","yc");

    }else{
        document.getElementsByClassName("yc")[0].setAttribute("class","shc");
    }
    }
```

​			

#### JSON

JSON是JS的一个对象，也是一种数据格式，JSON中的两个api如下

1. 将JSON字符串转换成JSON对象 `JSON.parse()`
2. 将JSON对象转换成JSON字符串 `JSON.stringify()`



#### 弹出框

console.log()		打印日志

##### alert()    		  警告框

警告框经常用于确保用户可以得到某些信息。

当警告框出现后，用户需要点击确定按钮才能继续进行操作。

##### confirm()  	  弹出确认框

确认框通常用于验证是否接受用户操作。

当确认卡弹出时，用户可以点击 "确认" 或者 "取消" 来确定用户操作。

当你点击 "确认", 确认框返回 true， 如果点击 "取消", 确认框返回 false。

##### prompt()		弹出提示框

提示框经常用于提示用户在进入页面前输入某个值。

当提示框出现后，用户需要输入某个值，然后点击确认或取消按钮才能继续操纵。

如果用户点击确认，那么返回值为输入的值。如果用户点击取消，那么返回值为 null。



#### cloneNode()克隆



#### 把数组转换成对象

```js
let a  =["a","b","a","c","f","m","n","f","h","s","a","c","a"];
let b  = {};

for(let i=0;i<a.length;i++){
    if(b.hasOwnProperty(a[i])){
        b[a[i]]++;
    }else{
        b[a[i]]=1;
    }
}
console.log(b);
//{a: 4, b: 1, c: 2, f: 2, m: 1, n: 1, s: 1}
```

#### 把对象转换成两个数组

```js
let c =[];
let d =[];
for (key in b) {
        c.push(key);
        d.push(c[key])

    }
//c=["a", "b", "c", "f", "m", "n", "h", "s"]
//d=[4, 1, 2, 2, 1, 1, 1, 1]
```

#### 特殊的this指向;

- 1，setTimeout   setInterval 会强制把函数的this指向window

  2，箭头函数本身没有this，它的this是寄托于上下文环境

  

  