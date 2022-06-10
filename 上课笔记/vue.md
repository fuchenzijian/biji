# Vue

## 引用

vue.js

```html
<script src="./vue.js"></script>
```



```html
<div id = "app">
<h1>{{name}}</h1>
<input type="text" v-model='name'>
</div>
```

```js
const app = new Vue({
            el: '#app',
            data: {
                name = 'hello World'
            }
```



## 基础语法

this:是那个构造器





#### v-show  和 v-if的区别

v-show : 调整标签的css的display属性，标签已经被加载出来了，只是通过css的控制是否显示

v-if： 判断是否加载，可以减轻服务器压力，在需要时加载

v-show ：调整css display 属性，可以使客户端操作更流畅



#### v-for

```html
<ul>
     <li v-for="student in students">姓名：{{student.name}}---{{student.age}} </li>
</ul>
```

```js
const app = new Vue({
            el: '#app',
            data: {
                 students: [{
                    name: "席小路",
                    age: 21
                }, {
                    name: "刘伟博",
                    age: 17
                }, {
                    name: "魏浩爽",
                    age: 18
                }, {
                    name: "盖腾飞",
                    age: 25
                }, {
                    name: "苏奕宇",
                    age: 18
                }, {
                    name: "景田阳",
                    age: 18
                }, {
                    name: "霍杰磊",
                    age: 21
                }, {
                    name: "杨金凯",
                    age: 21
                }, {
                    name: "李佳洛",
                    age: 18
                }, {
                    name: "郭嘉斌",
                    age: 19
                }]
            }
        })
```



#### v-if 和 v-for

不建议他们两个一块使用

v-for的优先级大于v-if

v-if 的优点 是可以减轻服务器压力，在需要时加载  如果同时使用的话，v-if的优点体现不出来 还会增加服务器压力



#### **v-text   v-html**

我们已经会在html中输出data中的值了，我们已经用的是{{xxx}},这种情况是有弊端的，就是当我们网速很慢或者javascript出错时，会暴露我们的{{xxx}}

```html
<span>{{ message }}</span> =
<span v-text="message"></span>
```



```html
<div id ="app">
<span v-text='mytext'></span>
<span v-html='mytext'></span>
</div>
```

```js
const app = new Vue({
    el:'#app'，
    data:{
    mytext:'<h5>这是一个测试</h5>'
}
})
```

v-text 的输出结果

`<h5>这是一个测试</h5>`

v-html 的输出结果

##### `这是一个测试`

用{}是其他地方的值,整个里面都能知道qwq！

### computed	计算属性 

#### v-on 绑定事件监听器

v-on 就是监听事件，可以用v-on指令监听DOM事件来触发一些javascript代码。
监听点击事件：v-on:click=" " 
例子：
做个点击按钮，完成数量的增加和减少

```js
<div id="app">
        <span>{{count}}</span>

        <button v-on:click="add">加法</button>
        <button v-on:click="sub">减法</button>
    </div>
    <script>
        var app = new Vue({
            el: '#app',
            data: {
                count: 0
            },
            methods: {
                add: function () {
                    this.count++;
                },
                sub: function () {
                    this.count--;
                }
            }
        })
        function sortNum(a, b) {
            return a - b;
        }
    </script>

```

除了点击事件，还可以绑定其他事件，例如键盘监听事件，

```html
<button v-on:keyup.enter="aa">回车事件</button> 
此外v-on:click 可以简写为：@click
```

#### v-bind  绑定属性

```html
<div class="app">
        <a v-bind:href="url">click me</a>
    </div>
    <script>
        var app = new Vue({
            el: '.app',
            data: {
                url: "https://www.baidu.com",
            }
        });
    </script>

以上代码中，使用v-bind绑定了a标签的href属性，当a标签被点击时，会根据对应vue中的对应的url数据进行跳转到https://www.baidu.com
```

不光是href属性可以被v-bind指令绑定，任何属性都可以被绑定
例如，绑定src属性、class属性

```html
例如，绑定src属性、class属性
可以缩写
<!-- 完整语法 -->
<a v-bind:href="url"></a>
<!-- 缩写 -->
<a :href="url"></a>

css样式绑定方法：
    在绑定CSS样式是，绑定的值必须在vue中的data属性中进行声明。
    1、直接绑定class样式

    <div :class="className">1、绑定classA</div>

	<style>
        .red{
            color:red;
            font-size: 24px;
        }
    </style>


	<script>
   const app=new Vue({
    el:'#app',
    data:{
    
    classname:"red"
    		
   	 	}
    })
    </script>


    2、绑定classA并进行判断，在isOK为true时显示样式，在isOk为false时不显示样式。

    <div :class="{classA:isOk}">2、绑定class中的判断</div>

    3、绑定class中的数组

    <div :class="[classA,classB]">3、绑定class中的数组</div>

    4、绑定class中使用三元表达式判断

    <div :class="isOk?classA:classB">4、绑定class中的三元表达式判断</div>

    5、绑定style

    <div :style="{color:red,fontSize:font}">5、绑定style</div>

	<script>
    var app=new Vue({
    el:'#app',
    data:{
    
    font:'24px',
    red:'green'
    		}
   		
    })

    6、用对象绑定style样式

    <div :style="styleObject">6、用对象绑定style样式</div>


	<script>
    var app=new Vue({
    el:'#app',
    data:{
    styleObject:{
    fontSize:'24px',
    color:'green'
    		}
   		}
    })
	</script>
    
 
```



#### v-pre

v-pre在模板中跳过vue的编译，直接输出原始值。就是在标签中加入v-pre就不会输出vue中的data值了。

 `  <div v-pre>{{message}}</div>`

#### v-on

v-on绑定事件@click="",绑定click事件;v-on:click="";

#### v-bind

绑定的是属性:key="key";v-bind:key="key"

#### v-model ：绑定数据源，vue的双向数据绑定

##### 文本双向绑定

```html
 <div id="app">
        <p>{{message}}</p>
        <i nput type="text" v-model="message">
    </div>
    <script>
        var app = new Vue({
            el: '#app',
            data: {
                message: 'hello'
            },

        })
    </script>
     

```

v-model.lazy 懒加载，还是会双向数据绑定，但是数据不会实时、频繁的去更新
v-model.number 绑定数字，输入数字会更新，输入字母不会同步更新
v-model.trim:前后空格会在更新的时候直接忽略掉



##### 选择框双向绑定

```html
  <div id="app">
    <h3>多选按钮绑定一个值</h3>
    <input type="checkbox" id="isTrue" v-model="isTrue" :value="打游戏">打游戏
    <label >{{isTrue}}</label>
</div>
    <script>
        const app = new Vue({
            el:"#app",
            data:{
                isTrue:[]
            }
        })
    </script>
```



##### 单选按钮绑定：

```html
   <div id="app">
    <h3>单选按钮绑定</h3> 
    <input type="radio" id="one" value="男" v-model="sex" name="sex" checked>
    <label for="one">男</label>
    <input type="radio" id="two" value="女" v-model="sex" name="sex">
    <label for="one">女</label>
    <p>{{sex}}</p>
</div>
    <script>
        const app = new Vue({
            el:"#app",
            data:{
                sex:""
            }
        })
    </script>
```



## vue的生命周期（钩子函数）

```html
<div id="app">
        {{message}}
        <p><button @click="jia">加分</button></p>
    </div>
    <button onclick="app.$destroy()">销毁</button>

    <script type="text/javascript">
        var app = new Vue({
            el: '#app',
            data: {
                message: 1
            },
            methods: {
                jia: function () {
                    this.message++;
                }
            },
            beforeCreate: function () {
                console.log('1-beforeCreate 初始化之后');
            },
            created: function () {
                console.log('2-created 创建完成');
            },
            beforeMount: function () {
                console.log('3-beforeMount 挂载之前');
            },
            mounted: function () {
                console.log('4-mounted 被创建');
                把虚拟dom一些东西更改
            },
            beforeUpdate: function () {
                console.log('5-beforeUpdate 数据更新前');
                数据更改之前
            },
            updated: function () {
                console.log('6-updated 被更新后');
                数据更改
            },
            activated: function () {
                console.log('7-activated');
            },
            deactivated: function () {
                console.log('8-deactivated');
            },
            beforeDestroy: function () {
                console.log('9-beforeDestroy 销毁之前');
            },
            destroyed: function () {
                console.log('10-destroyed 销毁之后')
            }

        })
    </script>
```



## vue 脚手架的搭建



​    ![0](https://note.youdao.com/yws/public/resource/672070bb76dc7422468a424164d04b27/xmlnote/E837D7DC979C49E19C9E5DCDFEFC65D0/4607)

先检测node 和 npm全局安装是否正确，如果不正确，需要在环境变量里添加path

C:\Program Files\nodejs\node_global

然后在cmd下使用npm先安装webpack

npm install webpack -g

使用webpack -v测试

​    ![0](https://note.youdao.com/yws/public/resource/672070bb76dc7422468a424164d04b27/xmlnote/B2523586F36D44448D337EA6499D0685/4606)



然后根据提示安装webpack-cli

 

​    ![0](https://note.youdao.com/yws/public/resource/672070bb76dc7422468a424164d04b27/xmlnote/B33C4CAD3AE74844B914136AC2A5C141/4608)

 

然后cmd下继续全局安装vue-cli

npm install --global vue-cli

 

然后输入vue -V 检测安装是否正常，需要注意其中V大写

如果出现在CMD下面可以vue -V但是在vscode终端缺报错

vue : 无法加载文件 C:\Users\lenovo\AppData\Roaming\npm\vue.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_ Policies

是电脑权限设置问题，需要用管理员身份运行power shell ，然后输入 set-ExecutionPolicy RemoteSigned      回车后，输入Y 重新打开vscode就可以

 

然后新建一个文件夹，拖进vscode编辑器里ctrl+` 快捷键打开命令行

输入： vue init webpack myvue

其中myvue  是你新建的项目名字，要注意不能有中文和大写字母

 

 

然后按部就班

 

最终一定要进入到最内层的文件夹去运行npm run dev



axios:一般放在,create或者mounted里面;



**day5** 

**component  组件**

**组件是vue里面的重点**

```
<h1>component-1</h1>
    <hr>
    <div id="app">
        <jspang></jspang>
    </div>

    <script type="text/javascript">
        //注册全局组件
        Vue.component('jspang',{
            template:`<div style="color:red;">全局化注册的jspang标签</div>`
        })
        var app=new Vue({
            el:'#app',
            data:{
            }
        })
    </script>
```



------

   **2，局部注册组件**

局部注册组件局部注册组件和全局注册组件是向对应的，局部注册的组件只能在组件注册的作用域里进行使用，其他作用域使用无效。     

​    

```
<h1>component-1</h1>
    <hr>
    <div id="app">
      <panda></panda>
    </div>

    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            components:{
                "panda":{
                    template:`<div style="color:red;">局部注册的panda标签</div>`
                }
            }
        })
    </script>
```

​    全局数据如果碰上组件复用引发的问题及处理方法

```
<div id="app">
          
         <mycomponent></mycomponent>
         <mycomponent></mycomponent>
         <mycomponent></mycomponent>

    </div>
 
    <script>
         
        var data ={
            "count":0
        }

        Vue.component('mycomponent',{
            template:`<button @click="count++">{{count}}</button>`,
            data:function(){
                return data;
            }
        })

        var app =new Vue({
            el:"#app",
            data:{
            }
        })
</script>
```

组件复用，某个组件点击后改变绑定的值会影响其他组件的值，因为

他们公用的是同一个全局变量，解决办法：局部设立对应绑定值 



**$on 在构造器外部添加事件。**

```
app.$on('reduce',function(){
    console.log('执行了reduce()');
    this.num--;
});

如果按钮在作用域外部，可以利用$emit来执行。

//外部调用内部事件
function reduce(){
    app.$emit('reduce');
}

```

**slot   vue插槽**

**自定义组件，用插槽占位**

```
<baidu>
            <span slot="aa">{{count}}</span>
        </baidu> 


在script标签里，组件上的模板进行插入
components:{
                "baidu":{
                    template:`<div><slot name="aa"></slot></div>`
                }
         }
```

自定义东西:

#### 使用方法：Vue.directive("自定义指令名字",function(el,binding,vnode){

  el：指令所绑定的元素，可以用来直接操作 DOM。
binding：一个对象，包含以下 property：
name：指令名，不包括 v- 前缀。
value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
vnode：Vue 编译生成的虚拟节点。
})

 Vue.directive('autofocus', {
            //生命周期就是vue里的钩子函数
            bind: function(el, binding, vnode) { //被绑定
                console.log('1 - bind');
                el.style.color = "blue"
            },
            inserted: function() { //绑定到节点
                console.log('2 - inserted');
            },
            update: function(el, binding, vnode) { //组件更新
                console.log('3 - update');
                //更新数据的时候，把字体颜色改为红色
                el.style.color = "red"
            },
            componentUpdated: function() { //组件更新完成
                console.log('4 - componentUpdated');
            },
            unbind: function() { //解绑
                console.log('1 - bind');
            }

​        })