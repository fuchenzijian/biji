

js 微任务 和宏任务

...mapGetters 这么获取  这么使用获取vuex里面的数据这么用它

503这么解决的 是什么问题

这么实现rem 布局的 

想实现 1px  这么实现



#### javaScript

1.js 同步 异步:

同步就是请求服务端接口，需要等待返回结果，在执行之后的代码，就是同步

异步就是不需要等待服务端返回结果，可以继续执行代码

2.强缓存，和协商缓存

协商缓存：无论是否变化，是否过期都会发起请求，如果内容没过期，直接返回304

强缓存：只要请求了一次，在有效时间内，不会再请求服务器（请求都不会发起），直接从浏览器本地缓存中获取资源

3.深浅拷贝

浅拷贝：普通的赋值；赋值的指针指向，改变数据，原来的变量也会改变，

深拷贝：就相当于创建一个新对象，把原来的属性和方法都放到新对象上；

4.jq 的获取元素的方法

​	1.标签 /# /./ul  li/:first获取网页的第一个元素、：odd获取表格中的奇书行、：visible选择可见的元素、:even 下标为偶数的、[属性]选择器

remove()删除、clone()克隆、eq()取他下标的第一个、find()查找、appentTo()添加到节点后面，.on('事件'，function())、parent()：父级、.prop()获取自定义属性、

2.jq attr 和 prop 的区别

​	attr:是获取标签的元素： prop ：获取自定义的元素

5.js判断数据类型的方法和区别

typeOf 和 instanceOf 
	typeof 是一个一元运算，放在一个运算数之前，运算数可以是任意类型。
		返回值是一个字符串，该字符串说明运算数的类型。
		instance：实例,例子
	a instanceof b?alert("true"):alert("false"); //a是b的实例？真:假
	instanceof 用于判断一个变量是否某个对象的实例，如 var a=new Array();alert(a 	instanceof Array); 会返回 true，同时 alert(a instanceof Object) 0也会返回 true;	这是因为 Array 是 object 的子类。

6.对闭包的理解

能够读取其他函数里面的变量，不会污染全局变量，会保存变量的值

7.单线程的好处

消耗小，不用考虑cpu的问题

8.强制类型转换： Boolean、Number、String、

1. 转换为数值：Number(Min)、parselnt(String/radix)、parseFloat(String)
2. 转换为字符串：toString(radix),String(mix)
3. 转换为布尔类型：Boolean(min)





8.js的内置对象 常用对象和方法

  js内置对象：date()时间、string字符串、数字对象math()、number数值对象、array数组对象、function方法对象、函数参数集合arguments、Boolean布尔对象、error错误对象、基础对象object

常用的date()、array()、string()、math()

Array对象中常用方法： 

concat（）表示把几个数组合并成一个数组
		join（）设置分隔符连接数组元素为一个字符 串pop（）移除数组最后一个元素shift()移除数组中第一个元素 

slice（start，end） 返回数组中的一段

splice（）可以用来删除，可以用来插入，也可以用来替换 
push（）往数组中新添加一个元素，返回最新长度
sort（）对数组进行排序
reverse（）反转数组的顺序 
toLocaleString()把数组转换为本地字符串

array对象属性：

length表示取得当前数组长度 （常用）

constructor引用数组对象的构造函数

prototype　通过增加属性和方法扩展数组定义

#### String对象 

charAt()　　　　　 　　　　返回指定索引的位置的字符 

indexOf() 　　　 　　　　从前向后检索字符串，看是否含有指定字符串

lastIndexOf()　　　 　　　　从后向前检索字符串，看是否含有指定字符串
concat()　　 　　　　　　　连接两个或多个字符串
match()　　   　　　　　　使用正则表达式模式对字符串执行查找，并将包含查找结果最为结果返回

replace()　　　　　　　　　替换一个与正则表达式匹配的子串
search()　　　　　　　　　 检索字符串中与正则表达式匹配的子串。如果没有找到匹配，则返回 -1。 
slice（start，end） 　　　　根据下表截取子串 

substring（start，end）　　 根据下表截取子串 
split()　　　　　　　　　　 根据指定分隔符将字符串分割成多个子串，并返回素组
substr(start，length)　　　　根据长度截取字符串 *
*

toUpperCase()　　　　　　 返回一个字符串，该字符串中的所有字母都被转化为大写字母。 
toLowerCase()　　　　　　 返回一个字符串，该字符串中的所有字母都被转化为小写字母。

#### Math对象

ceil()向上取整。

floor()向下取整。

round()四舍五入。

random()取随机数。



#### 数组、字符串各种问题解决

1.改变数组原数组的方法(常用)

​		shift(),头部删除，unshift()头部添加，pop()尾部删除，push()尾部添加；

reverse(),翻转数组； sort(function(a,b){return a-b});排序
