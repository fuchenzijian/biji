基础语法部分：

指令部分

**day01**

**1，live-server 可以便捷的查看网页效果，实施部署更新**

​       npm install live-server -g      全局安装

​      在所在目录里面 live-server运行

**2，helloworld**

​    

​    

​    

# Hello World

------

​        {{message}}

​    

​    

**3，v-if   v-else  v-show的使用**

v-if:是vue 的一个内部指令，指令用在我们的html中。

v-if用来判断是否加载html的DOM，比如我们模拟一个用户登录状态，在用户登录后现实用户名称。

语法：

 **你好，今白**

具体:

​    

​    

​    

# v-if 判断是否加载

------

你好：今白

请登录后操作

​    

​    

**v-show ：调整标签的css的display属性，标签已经被加载出来了，只是通过css控制是否显示**

- v-if： 判断是否加载，可以减轻服务器的压力，在需要时加载。
- v-show：调整css dispaly属性，可以使客户端操作更加流畅。

**4，v-for，解决模板循环的问题**

v-for指令是循环渲染一组data中的数组，v-for 指令需要以 item in items 形式的特殊语法，items 是源数据数组并且item是数组元素迭代的别名。

语法：

​        {{item}}

var app=new Vue({

​     el:'#app',

​     data:{

​         items:[20,23,18,65,32,19,54,56,41]

​     }

})

**排序**



{{item}}

​         

​    

​    

**5,v-text   v-html**

我们已经会在html中输出data中的值了，我们已经用的是{{xxx}},这种情况是有弊端的，就是当我们网速很慢或者javascript出错时，会暴露我们的{{xxx}}

{{ message }}=

**day02**

**1，v-on 绑定事件监听器**

v-on 就是监听事件，可以用v-on指令监听DOM事件来触发一些javascript代码。

​    监听点击事件：v-on:click=" "    

例子：

做个点击按钮，完成数量的增加和减少

​         {{count}}

​         加法

 减法

​    

​    

**除了点击事件，还可以绑定其他事件，例如键盘监听事件，**回车事件  

**此外v-on:click 可以简写为：@click**

**2,v-model ：绑定数据源，vue的双向数据绑定**

   

{{message}}

​           

​    

​    

v-model.lazy 懒加载，还是会双向数据绑定，但是数据不会实时、频繁的去更新

v-model.number 绑定数字，输入数字会更新，输入字母不会同步更新

v-model.trim:前后空格会在更新的时候直接忽略掉

除了文本，选择框也可以双向绑定

### 多选按钮绑定一个值

{{isTrue}}

多选框绑定：

### 多选绑定一个数组



​            

​            JSPang

​            

​            Panda

​            

​            PanPan

{{web_Names}}



单选按钮绑定：

### 单选按钮绑定

男

女

{{sex}}

**3,v-bind   绑定数据和元素属性**

​    click me

var app = new Vue({

​    el:'.app',

​    data:{

​        url:"https://www.baidu.com",

​    }

});

以上代码中，使用v-bind绑定了a标签的href属性，当a标签被点击时，会根据对应vue中的对应的url数据进行跳转到https://www.baidu.com

不光是href属性可以被v-bind指令绑定，任何属性都可以被绑定

例如，绑定src属性、class属性

 **可以缩写**

**css样式绑定方法：**

在绑定CSS样式是，绑定的值必须在vue中的data属性中进行声明。

 1、直接绑定class样式

1、绑定classA

2、绑定classA并进行判断，在isOK为true时显示样式，在isOk为false时不显示样式。

2、绑定class中的判断

3、绑定class中的数组

3、绑定class中的数组

4、绑定class中使用三元表达式判断

4、绑定class中的三元表达式判断

5、绑定style

5、绑定style

6、用对象绑定style样式

6、用对象绑定style样式

var app=new Vue({

   el:'#app',

   data:{

​       styleObject:{

​           fontSize:'24px',

​           color:'green'

​            }

​        }

})

**4，v-pre**在模板中跳过vue的编译，直接输出原始值。就是在标签中加入v-pre就不会输出vue中的data值了。

{{message}}

**5，v-cloak** 在vue渲染完指定的整个DOM后才进行显示。它必须和CSS样式一起使用

[v-cloak] {

  display: none;

}

  {{ message }}

全局API

全局API并不在构造器里，而是先声明全局变量或者直接在Vue上定义一些新功能，Vue内置了一些全局API，比如我们今天要学习的指令Vue.directive。说的简单些就是，在构造器外部用Vue提供给我们的API函数来定义新的功能

**day03**

**1，Vue.directive 自定义指令**

使用方法：Vue.directive("自定义指令名字",function(el,binding,vnode){

​        el：指令所绑定的元素，可以用来直接操作 DOM。

binding：一个对象，包含以下 property：

name：指令名，不包括 v- 前缀。

value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。

oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。

expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。

arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。

modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。

vnode：Vue 编译生成的虚拟节点。

})

实例：

Vue.directive('jinbai',function(el,binding,vnode){

​            console.log(el);

​            el.style="color:"+binding.value;

​        })

自定义自动获取焦点的指令，其中涉及里自定义指令的钩子函数：

Vue.directive('autofocus',{

​            inserted:function(el){

​                el.focus();

​            }

​        })

**自定义指令的生命周期：**

自定义指令有五个生命周期（也叫钩子函数），分别是 bind,inserted,update,componentUpdated,unbind

bind:只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个绑定时执行一次的初始化动作。

inserted:被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于document中）。

update:被绑定于元素所在的模板更新时调用，而无论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。

componentUpdated:被绑定元素所在模板完成一次更新周期时调用。

unbind:只调用一次，指令与元素解绑时调用。

例子：

bind:function(){//被绑定

​     console.log('1 - bind');

},

inserted:function(){//绑定到节点

​      console.log('2 - inserted');

},

update:function(){//组件更新

​      console.log('3 - update');

},

componentUpdated:function(){//组件更新完成

​      console.log('4 - componentUpdated');

},

unbind:function(){//解绑

​      console.log('1 - bind');

}

**Vue.extend**

Vue.extend 返回的是一个“扩展实例构造器”,也就是预设了部分选项的Vue实例构造器。经常服务于Vue.component用来生成组件，可以简单理解为当在模板中遇到该组件名称作为标签的自定义元素时，会自动调用“扩展实例构造器”来生产组件实例，并挂载到自定义元素上。

   

​         

​    

​    

扩展主要是和组件搭配，暂时未接触组件，这里可以在绑定挂载的时候，通过id



 替换成

new authorExtend().$mount('author'); 替换成：new authorExtend().$mount('#author');

**day04**

**1，Vue.set()**

由于Javascript的限制，Vue不能自动检测以下变动的数组。

当你利用索引直接设置一个项时，vue不会为我们自动更新。

当你修改数组的长度时，vue不会为我们自动更新。

外部数据里面的数组，如果我们使用数组的push等方法是没有问题的，可以实时完成视图上数据的更新，但是直接通过下标该数据项或者数组长度，则不会更新

   

{{message}}

{{count}}



{{item}}

​         

​         加法

​    

​    

这里的add方法并不会实时得到更新，因此需要我们使用vue的set方法进行vue的数据和视图更新。

**2，vue的生命周期（钩子函数）**

​    ![0](https://note.youdao.com/yws/public/resource/9d741ea726081f2ab339458e51c8c9ff/xmlnote/8E852EBCA5F4453B871BA4D6A22BB7A8/4403)

​    ![0](https://note.youdao.com/yws/public/resource/9d741ea726081f2ab339458e51c8c9ff/xmlnote/A05F9C9665F94B02B0BF8E7DA50DA07A/4406)

​    ![0](https://note.youdao.com/yws/public/resource/9d741ea726081f2ab339458e51c8c9ff/xmlnote/C2B3206AF5914A10A22C7CCCE040C3EA/4408)

​    ![0](https://note.youdao.com/yws/public/resource/9d741ea726081f2ab339458e51c8c9ff/xmlnote/B6588CDADE51488A9552D4CC392CEE81/4410)

​        {{message}}

加分

​    

​        销毁

​    

**3，vue  template 模板**

1,直接在构造器里的template选项后边编写。这种写法比较直观，但是如果模板html代码太多，不建议这么写。

javascript代码：

var app=new Vue({

​     el:'#app',

​     data:{

​         message:'hello Vue!'

​      },

​     template:`

# 我是选项模板

​     `

})

这里需要注意的是模板的标识不是单引号和双引号，而是，就是Tab上面的键。

2、写在template标签里的模板

这种写法更像是在写HTML代码，就算不会写Vue的人，也可以制作页面。

   

​    

3,写在script里的模板

这种写模板的方法，可以让模板文件从外部引入。

​    

**day5** 

**component  组件**

**组件是vue里面的重点**

**1，**全局注册组件

# component-1

------

​        

​    

​    

**2，局部注册组件**

局部注册组件局部注册组件和全局注册组件是向对应的，局部注册的组件只能在组件注册的作用域里进行使用，其他作用域使用无效。

# component-1

------

​      

​    

​    

全局数据如果碰上组件复用引发的问题及处理方法

​          

​         

​         

​         

​    

 

​    

组件复用，某个组件点击后改变绑定的值会影响其他组件的值，因为

他们公用的是同一个全局变量，解决办法：局部设立对应绑定值 

**$on 在构造器外部添加事件。**

app.$on('reduce',function(){

​    console.log('执行了reduce()');

​    this.num--;

});

如果按钮在作用域外部，可以利用$emit来执行。

//外部调用内部事件

function reduce(){

​    app.$emit('reduce');

}

**slot   vue插槽**

**自定义组件，用插槽占位**

​      

​            {{count}}

​         

在script标签里，组件上的模板进行插入

components:{

​                "baidu":{

​                    template:`

`

​                }

​         }