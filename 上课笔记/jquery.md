## JQuery

### 调用jQuery

```js
<script src="../min-jQuery.js"></script>
```



https://code.jquery.com/jquery-3.6.0.min.js

### jQuery语法

基础语法：

$(selector).action();

$符号定义jQuery

selector选择符 查询、查找HTML元素

action负责执行对元素的操作

例：

$(this).hide();隐藏当前元素

$('p').hide();隐藏所有p元素

$('p.text').hide();隐藏所有class='test'的p元素

$('#test').hide() 隐藏id="test"的元素

原生js里，如果想让文档加载完成后再执行js代码：

**window.onload =function(){		}**

onload  是所有图片加载出来  才加载JS的脚本     

jQuery简化了这个写法

**$(document).ready(function(){		})**

ready   是不用图片加载出来只要dom加载出来就加载JS

如果你觉着这个不够简洁，可使用下面的这种方法：

#### $(function(){		})

除了语义的明了和写法简洁以外，jq和原生js的load和ready还有一些执行机制上的区别：

onload 必须等待网页全部加载完毕，包括图片等资源的下载，才可以执行onload里包裹的函数，并且只能执行一次，如果第二次，那么第一次的执行会被覆盖掉

ready 则只需要等待网页中的DOM结构加载完毕就可以执行包裹里的代码了，并且可以执行多次。

### jQuery选择器

| $("*")                   | 选取所有元素                                                |
| :----------------------- | :---------------------------------------------------------- |
| $(this)                  | 选取当前HTML元素                                            |
| $("p.intro")             | 选取class为intro的`< p >`元素                               |
| $("p.first")             | 选取第一个`< p >`元素                                       |
| $("ul li:first")         | 选取第一个 `<ul> `元素的第一个` <li>` 元素                  |
| $("ul li:first-child")   | 选取每个` <ul>` 元素的第一个 `<li>` 元素                    |
| $("[href]")              | 选取带有 href 属性的元素                                    |
| $("a[target='_blank']")  | 选取所有 target 属性值等于 "_blank" 的 `<a>` 元素           |
| $("a[target!='_blank']") | 选取所有 target 属性值不等于 "_blank" 的` <a> `元素         |
| $(":button")             | 选取所有 type="button" 的 `<input> `元素 和 `<button>` 元素 |
| $("tr:even")             | 选取偶数位置的 `<tr> `元素                                  |
| $("tr:odd")              | 选取奇数位置的 `<tr> `元素                                  |

### jQuery事件：

#### 1，常用的事件方法：

click() 点击事件

dblclick() 双击事件

mousemove() 鼠标滑动事件

mouseenter() 鼠标移入事件

mouseleave() 鼠标移出事件

mousedown() 鼠标移入元素且按下时会触发事件

mouseout() 移出且松开时会触发事件

hover() 当鼠标移入元素时候会触发第一个函数 鼠标移出元素时会触发第二个函数 仅限于能获取焦点的元素 例如输入框

focus() 元素获得焦点时 会触发事件

blur() 当元素失去焦点会触发事件

#### 2，绑定事件，解除绑定事件

bind();

unbind();

$(selector).bind('click',clickHandle1);

function clickHandle1(){

   console.log('click1');

}

再添加一个事件，

function clickHandle2(){

  console.log('click2');

}

给选择器同时再加入click2的事件

$(selector).bind('click',clickHandle1);

两个事件都会被触发

$(selector).unbind('click',clickHandle1);

如果不写第二个参数，则解除该选择器上左右的绑定事件

  $('selector').click(function(){

​             console.log('点击事件');

​      })

从jQuery1.7版本开始，on()函数提供了绑定事件处理程序所需要的所有功能。

语法：

**jQueryObject.on( events [, selector ] [, data ], handler )**

**最开始的bind可以替换为on，解除绑定使用off**

##### .cilck和on（‘cilck’）的区别

$('selector').click(function(){ })和$('selector').on（‘click’ ，function(){}）的区别

1. 监听的事件范围不同，$('selector').click(）只能监听点击事件，$('selector').on可以监听所有的事件

2. 参数项不同$('selector').on  可以传递三个参数，$('selector').on（‘事件’ ，‘选择器’，callback），$('selector').click(callback）

3. $('selector').click(）只能为静态并且是提前建立好的dom添加事件，$('selector').on（‘事件’ ，‘选择器’，callback）可以为临时动态创建的dom添加事件

   a.当dom是静态的情况，两种方法监听click事件没有区别，而且此时$(selector).on('事件'，"选择器",callback)可以不在参数项里匹配选择器

   ```js
   $('.dw').click(function(){
   
   alert('点击了');
   
   })
   
   $('.dw').on('click',function(){
   
   alert('点击了');
   
   })
   //会触发两次alert
   ```

   b.当dom是动态生成的情况

   ```js
   $('.dw').click(function(){
   
   $(this).after('<button id="dw">点我</button>');
   
   })
   
   $('#dw').click(function(){
   
   alert('直接写click的点我');//不会被触发
   
   })
   
   $('body').on('click',"#dw",function(){
   
   alert('通过on监听的选择事件的点我');//会被触发
   
   
   
   })
   ```

   

#### 3，事件的冒泡

​      event.stopPropagation()只阻止父级

​     event.stopImmediatePropagation()阻止所有

​    同一个元素绑定两个事件 

#### 4，自定义事件

刚才说了bind和unbind可以被on替换。之前一直用bind和unbind是为自定义事件做准备

语法：

$(selector).trigger(type,data);

作用：在每一个匹配的元素上触发某类事件，它触发的是由bind()注册的自定义事件

参数：type(string):要采用的事件类型

data(Array):可选参数，传递给事件处理函数的附加参数

$("button").bind("myClick",function(ev,a,b){

​      //给button添加自定义事件myClick

})

然后通过trigger()触发自定义的事件

$("button").trigger('myClick',[1,2]);

**trigger()方法触发被选元素的指定事件类型**

```html
 /*点击三次触发 把内容更换为ccc */
<button id="mybtn">点我</button>
    <div id="mytext">测试文字</div>

	<script src="./min-jQuery.js"></script>
    <script>
        let count =0;
        $('#mybtn').on('thrClick',function(){
            count++;
            if(count%3 ==0){
                console.log('点我嘎嘎');
                $('#mytext').text('ccc');

            }
        });
         $('#mybtn').on('click',function(){
            $('#mybtn').trigger('thrClick')
        })
	</script>
```



### jQuery dom操作：

上周我们刚学了原生js的dom操作，单词比较冗长，以至于上周考试反馈有人在沾我给你们讲解的例子，jq简化了dom的操作

#### 1，捕获

$(selector).text();

$(selector).html();

总结类比js中的innerHTML,innerText和这两个操作的区别

$(selector).val();

$(selector).attr('想要获取的属性');

上列举的都是获取，我们原生的js里面，一般获取和设置都会对应一个get一个set方法，但是在jq里，简化了这些操作，我们直接使用获取的方法就可以完成设置

$(selector).text('想要设置的文字');

$(selector).html('想要设置的html');

$(selector).val('想要设置的值');

$(selector).attr('属性','设置的值');

同时，这里还有个比较强大的地方，可以通过回调来获取一些信息，比如就用text

$(selector).text(function(i,o){

​     return "old"+o+" 下标"+i       i是指的下标   o指的旧值

})

hasClass()检查匹配的元素是否拥有指定的类

removeAttr() 从所匹配的元素中移除指定的属性

removeClass()从匹配的元素中删除全部或者指定的类

toggleClass()对设置或移除被选元素的一个或多个类进行切换，该方法检查每一个元素中指定的类。如果不存在则添加类，如果已设置则删除之。

```html
<button id="mybtn2">开关</button>
    <div id="deng" class="colorR">
        
       <style>
        .colorR{
            width: 100px;
            height: 100px;
            background-color: red  !important;
        }
        #deng{
            width: 100px;
            height: 100px;
            background-color: #00ff15;
        }
    	</style> 
  <script>
$('#mybtn2').on('click',function(){
            
           $('#deng').toggleClass('colorR');   
        })
      
      //$('#deng').toggleClass('colorR');  对class操作  当有class="colorR"的时候删除  没有的时候添加
  </script>

```



$(selector).click(function(){

  $("p").toggleClass("main");

})

#### 2，添加元素

append() //在选择元素内部子节点后添加

prepend()//在选择元素内部子节点前添加

before()//在选择元素外部前添加

after()//在选择元素外部后添加

添加可以是文字，dom，jq（let a = $('').text('测试')

）

#### 3，删除元素

remove();

empty();

remove 是将该节点下所有子节点和本身删除

empty 将该节点下所有子节点删除

### jQuery效果

#### 1，元素的显示和隐藏

js原生的操作：

document.style.display ="none";

document.style.display ="block/inline";

原生操作代码量会多一些，并且还需要根据元素是行元素还是块级元素来进行不同操作，jq：

hide();

show();

#### 2，滑动

slideDonw(time)

slideUp(time)

slideToggle(time)

time是毫秒,可以省略

```html
<button id="mybtn2">开关</button>
    <div id="deng" >
        
       <style>
       
        #deng{
            width: 100px;
            height: 100px;
            background-color: #00ff15;
        }
    	</style> 
        <script>

			$('#mybtn2').on('click',function(){
            
            	$('#deng').solidUp(1000);
        	})
          //默认是有    用solidUp向上隐藏
          //   $('#deng').slideDown(1000);  是没有的时候显现出来
          //$('#deng').slideToggle(1000);  是没有的时候显现   有的时候隐藏
	</script>
```



#### 3，淡入淡出

fadeIn(time)

fadeOut(time)

fadeTo(time,浮点数(0-1)),第二个参数设置的是透明度

fadeToggle(time)

time是毫秒，可以省略

```html
<button id="mybtn2">开关</button>
    <div id="deng" >
        
       <style>
       
        #deng{
            width: 100px;
            height: 100px;
            background-color: #00ff15;
        }
    	</style> 
 	<script>
			$('#mybtn2').on('click',function(){
            
            	$('#deng').fadeToggle(1000);
        	})
        //$('#deng').fadeToggle(1000);  是没有的时候显现   有的时候隐藏
     	</script>
```



#### 4，回调

$(selector).hide(1000,function(){

​     //动作执行完毕后，执行的回调

})

#### jQuery动画：

$(selector).animate({params},speed,callback);

params:必须传，定义形成动画的css属性

speed，可选。定义规定效果的时长，可是slow，fast或毫秒

callback，可选。完成动画后的回调

$('div').animate({left:'250px'});

### jQuery遍历：

下图展示了一个家族树。通过 jQuery 遍历，您能够从被选（当前的）元素开始，轻松地在家族树中向上移动（祖先），向下移动（子孙），水平移动（同胞）。这种移动被称为对 DOM 进行遍历。

![http://note.youdao.com/yws/public/resource/d2343dfd825c6c3cc6d148e55a2b5545/xmlnote/EC5970C32C514F17B1A159DFF55BD271/8094](http://note.youdao.com/yws/public/resource/d2343dfd825c6c3cc6d148e55a2b5545/xmlnote/EC5970C32C514F17B1A159DFF55BD271/8094) 

01，`<div> `元素是 `<ul>` 的父元素，同时是其中所有内容的祖先。

02， `<ul>` 元素是  `<li>` 元素的父元素，同时是 `<div> ` 的子元素

03，左边的  `<li>`  元素是  `<span>` 的父元素，`<ul>` 的子元素，同时是 `<div> ` 的后代。

04，   `<span>` 元素是  `<li>`  的子元素，同时是  `<ul>`   和  `<div> `  的后代。

05，两个   `<li>`  元素是同胞（拥有相同的父元素）。

06，右边的    `<li>`   元素是 `<b>` 的父元素，`<ul>` 的子元素，同时是 `<div> ` 的后代。

07， `<b>`  元素是右边的 `<li>` 的子元素，同时是 `<ul>` 和 `<div> ` 的后代。



#### 链式调用

```html
        <div>
            <ul>
                <li>
                    <span id="sapn1"></span>
                    <span></span>
                </li>
                <li>
                    <b></b>
                </li>
            </ul>
        </div>

<script>
            $('#span1').parent()				//返回  li
    		$('#span1').parents()				//返回  li ul div body html
    		$('#span1').parentsUntil('div')		//返回  li ul
</script>

```



#### jq中关于祖先的遍历：

##### parent();

parent() 方法返回被选元素的直接父元素。

该方法只会向上一级对 DOM 树进行遍历。

##### **parents() 方法**

parents() 方法返回被选元素的所有祖先元素，它一路向上直到文档的根元素 ()。

##### parentsUntil() 方法

parentsUntil() 方法返回介于两个给定元素之间的所有祖先元素。

参数传需要到目的元素之间的目的元素

#### jq中关于后代的遍历：

##### children()

children() 方法返回被选元素的所有直接子元素。

该方法只会向下一级对 DOM 树进行遍历。

##### find()

find() 方法返回被选元素的后代元素，一路向下直到最后一个后代。

#### jq中关于同胞的遍历：

##### siblings() 

返回被选元素所有的同胞元素，这个词本意就是兄弟、姐妹

##### next()

方法返回被选元素的下一个同胞元素，该方法只会返回一个元素

##### nextAll()

 方法返回被选元素的所有跟随的同胞元素

##### nextUntil() 

方法返回介于两个给定参数之间的所有跟随同胞元素

**prev(), prevAll() 以及 prevUntil() 方法的工作方式与上面的方法类似，只不过方向相反而已：它们返回的是前面的同胞元素（在 DOM 树中沿着同胞元素向后遍历，而不是向前）** 

##### prev()

方法返回被选元素的上一个同胞元素，该方法只会返回一个元素

##### prevAll()

方法返回被选元素的所有上面的同胞元素

##### prevUntil() 

方法返回介于两个给定参数之间的所有跟随同胞元素

**first(),last() 和 eq()，它们允许您基于其在一组元素中的位置来选择一个特定的元素其他过滤方法，比如filter()和not()允许您选取匹配或不匹配某项指定标准的元素。** 

##### first() 

方法返回被元素的首个元素。

##### last() 

方法返回被选元素的最后一个元素。

##### eq() 

方法返回被选元素中带有指定索引号的元素

##### filter()

方法匀速您规定一个标准。不匹配这个标准的元素会被从集合中删除，匹配的元素会被返回。

**$("p").filter(".intro")     $("p.intro")   这两个一模一样**

##### not()

方法返回不匹配标准的所有元素

#### attr()

必须加两个参数  第一个是参数名字  第二个是value

