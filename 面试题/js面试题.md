js


2021年5月21日
11:52


1.箭头函数和普通函数的区别	


	this 的指向不同  ，箭头函数的this指向他的父级


	普通函数，谁调用它他就指向谁


2.作用域链和原型链


	作用域链 ：当调用变量时，会先在他的块级作用域查找，没有回到他的父级作用域查找，直到找到或没有，这个过程就是作用域链


原型链： 调用方法时，会现在他的原型上查找，原型没有的话会在他的原型的原型上查找，直到null,这个过程就是原型链


3.那些操作会导致内存泄漏


	闭包，定时器，意外的全局变量


4.数组的方法  es6数组方法


 arr.push();后面添加元素     .pop()后面删除元素
.shift(前面删除元素)，.unshift()前面添元素
.splice(i,n) 删除从i 开始之后的n个元素，返回值是删除的元素


.concat()连接二个数组，返回值为链接后的新数组
str.split()将字符串化为数组，


arr.slice(start,end) 切去索引值start到索引值end的数组，不包含end索引的值，返回值是切除来的数组，


forEach(callback)遍历数组，无return,及时有return，并且会影响原来的数组
map(callback) 有return; 修改数组其中的数据，返回一个数组， 一般用于数组元素计算
callback参数：value-索引的值，index--索引，array--数组


13.深浅拷贝
深拷贝是新建一个一模一样的对象，该对象与原对象共享内存，修改新对象也不会影响原对象。


浅拷贝只复制指向某个对象的指针，而不复制对象本身，相当于是新建了一个对象，该对象复制了原对象的指针，新旧对象还是共用一个内存块。




获取dom几种方式
1. document.getElementById();//id名，在实际开发中较少使用，选择器中多用class  id一般只用在顶级层存在 不能太过依赖id
2. document.getElementsByTagName();//标签名
3. document.getElementsByClassName();//类名
4. document.getElementsByName();//name属性值，一般不用
5. document.querySelector();//css选择符模式，返回与该模式匹配的第一个元素，结果为一个元素；如果没找到匹配的元素，则返回null
6. document.querySelectorAll()//css选择符模式，返回与该模式匹配的所有元素，结果为一个类数组






.js 判断数据类型的方法


typeOf 和 instanceOf 
typeof 是一个一元运算，放在一个运算数之前，运算数可以是任意类型。
返回值是一个字符串，该字符串说明运算数的类型。
instance：实例,例子
a instanceof b?alert("true"):alert("false"); //a是b的实例？真:假
instanceof 用于判断一个变量是否某个对象的实例，如 var a=new Array();alert(a instanceof Array); 会返回 true，同时 alert(a instanceof Object) 0也会返回 true;这是因为 Array 是 object 的子类。 






事件环，宏任务 和微任务那些是 
先同后异  先微后宏   
0
Macrotask (宏任务)：
	• setImmediate：把回调函数放在事件队列的尾部
	• setTimeout：定时器
	• setInterval：定时器
Microtask 微任务)：
	• process.nextTick：把回调函数放在当前执行栈的底部
	• Promise：






闭包
闭包是指有权访问另一个函数作用域中的变量的函数。
1. 可以在函数的外部访问到函数内部的局部变量。 
2. 让这些变量始终保存在内存中，不会随着函数的结束而自动销毁。


使用场景：
1函数作为返回值	2.函数作为参数来传递。不适用于返回	3.通过循环给页面上多个dom节点绑定事件	4.封装变量	5.延续局部变量的寿命




实现深拷贝和浅拷贝
JSON.stringify 对象




高阶组件(HOC)
高阶组件是一个函数，接收一个组件作为参数，并且返回值是一个新组件
目的：将可复用的逻辑进行组件化封装，更好的将逻辑与UI分离。
	在增强原有组件的功能 的同时，不破坏组件原有的特性。
	
	
js单线程的好处
切换开销小
设计成单线程，并以完善的异步队列来实现，运行成本就会比多线程的设计要小






事件冒泡








原生的dom操作？
DOM 创建
var el1 = document.createElement('div');
var el2 = document.createElement('input');
var node = document.createTextNode('hello world!');


DOM 查询
元素查询的API返回的结果是DOM节点或者是DOM节点的列表，document提供了下面几种查询方法：


// 返回当前文档中第一个类名为 "myclass" 的元素
var el = document.querySelector(".myclass");
// 返回一个文档中所有的class为"note"或者 "alert"的div元素
var els = document.querySelectorAll("div.note, div.alert");
// 获取元素
var el = document.getElementById('xxx');
var els = document.getElementsByClassName('highlight');
var els = document.getElementsByTagName('td');




DOM 更改


// 添加、删除子元素
ele.appendChild(el);
ele.removeChild(el);
// 替换子元素
ele.replaceChild(el1, el2);
// 插入子元素
parentElement.insertBefore(newElement, referenceElement);


innerHTML与outerHTML的区别？
outerText和innerText的区别在于outerText赋值时会把标签一起赋值掉，另外xxText赋值时HTML特殊字符会被转义。




什么是防抖和节流？
防抖：
	控制次数，在持续触发事件之后，计时器一段时间没有再次触发该事件，事件函数才会执行一次。
	或者说：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
节流：
	控制频率，在持续触发事件时，每隔指定时间触发一次事件处理函数
	或者说：规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。
区别：
	节流就是在设定时间内只执行一次函数；防抖就是多次调用只执行最后一次






js继承的6种方式


一、原型链继承
重点：让新实例的原型等于父类的实例。
特点：1、实例可继承的属性有：实例的构造函数的属性，父类构造函数属性，父类原型的属性。（新实例不会继承父类实例的属性！）
缺点：1、新实例无法向父类构造函数传参。
2、继承单一。
3、所有新实例都会共享父类实例的属性。（原型上的属性是共享的，一个实例修改了原型属性，另一个实例的原型属性也会被修改！）


二、借用构造函数继承


重点：用.call()和.apply()将父类构造函数引入子类函数（在子类函数中做了父类函数的自执行（复制））
特点：1、只继承了父类构造函数的属性，没有继承父类原型的属性。
2、解决了原型链继承缺点1、2、3。
3、可以继承多个构造函数属性（call多个）。
4、在子实例中可向父实例传参。
缺点：1、只能继承父类构造函数的属性。
2、无法实现构造函数的复用。（每次用每次都要重新调用）
3、每个新实例都有父类构造函数的副本，臃肿。


三、组合继承（组合原型链继承和借用构造函数继承）（常用）


重点：结合了两种模式的优点，传参和复用
特点：1、可以继承父类原型上的属性，可以传参，可复用。
2、每个新实例引入的构造函数属性是私有的。
缺点：调用了两次父类构造函数（耗内存），子类的构造函数会代替原型上的那个父类构造函数。


四、原型式继承


重点：用一个函数包装一个对象，然后返回这个函数的调用，这个函数就变成了个可以随意增添属性的实例或对象。object.create()就是这个原理。
特点：类似于复制一个对象，用函数来包装。
缺点：1、所有实例都会继承原型上的属性。
2、无法实现复用。（新实例属性都是后面添加的）


五、寄生式继承


重点：就是给原型式继承外面套了个壳子。
优点：没有创建自定义类型，因为只是套了个壳子返回对象（这个），这个函数顺理成章就成了创建的新对象。
缺点：没用到原型，无法复用。


六、寄生组合式继承（常用）
寄生：在函数内返回对象然后调用
组合：1、函数的原型等于另一个实例。2、在函数中用apply或者call引入另一个构造函数，可传参


重点：修复了组合继承的问题






垃圾回收
垃圾回收机制会定期（周期性）找出那些不再用到的内存（变量），然后释放其内存。






使用 Object.assign() 合并JavaScript对象




call接受多个参数，而apply接受的是一个数组