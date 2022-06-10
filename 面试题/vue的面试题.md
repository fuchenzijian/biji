vue


2021年5月21日
11:53


next tick  回调函数


	在created里使用，想在没有加载dom前获取dom，相当于 onlond;


watch 和computed的区别


	watch 没有返回值，支持异步


	computed 需要返回值，不支持异步


	计算属性变量在computed中定义，属性监听在data中定义



路由的原理
1）路由器是依据路由表来转发数据得！ 

2）如果成功匹配路由表，则根据表的方向来转发数据！ 

3）如果没有匹配路由表，则丢弃数据！

4）匹配路由表时，优先匹配直连，然后是S，最后是S* 。


不太清楚，可以给他扯路由的二中模式，hash和history;


hash 模式下，仅 hash 符号之前的内容会被包含在请求中，如 http://www.abc.com，因此对于后端来说，即使没有做到对路由的全覆盖，也不会返回 404 错误。

2 history 模式下，前端的 URL 必须和实际向后端发起请求的 URL 一致，如 http://www.abc.com/book/id 如果后端缺少对 /book/id 的路由处理，将返回 404 错误。Vue-Router 官网里如此描述：“不过这种模式要玩好，还需要后台配置支持……所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。”






created 和 mounted的区别


	created 和mounted 都可以获取到data数据，


	created  是页面初始化，dom还未加载


	mounted是dom 加载完成，挂载时；


6.刷新页面经过什么哪些钩子函数


	beforecreate ,created,beforemount,monted;


7.搭建cli


         回答的话说 ，跟着官网搭建项目，因为有肯能vue会跟新，跟着vue官网不会错


8.vue 打包 


	npm run build,


	打包文件体积过大这么办，按需加载，异步加载




9.组件传值使用场景  vuex使用场景


	一般使用vuex ，


	父给子传值：$ref，props


	子传夫：$emit;


	兄弟间传值：parent 


	祖先和后代： provide/inject 



14.自定义指令
    Vue.directive的方法实现；



15.Sass和less的区别


 功能sass币less强一些，项目中使用的话没什么区别，就是一个用@ 一个用$





vue 刷新页面数据会消失，解决办法
	刷新页面，vue实例会重新加载，数据会丢失，不希望页面刷新的数据使用本地存储


	解决办法 ：监听beforeunLoad方法，将数据存到sessionStoreage里，页面刷新时，读取数据到store



自定义指令的生命周期
	bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
	unbind：只调用一次，指令与元素解绑时调用。
	inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。 只会执行一次
	update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新。
	componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
	


vue 解决浏览器兼容性问题


1.  安装babel-polyfill ;npm install --save babel-polyfill


2. 在main.js引入。import 'babel-polyfill'


3. 在webpack.base.conf.js中配置，


   	entry{


   		app:['babel-polyfill', './src/main.js']


   }



vue-router跳转的几种方式
router-link
this.$router.push({ path:’/user’})
this.$router.replace{path：

vue路由传参四种方式
父组件: 使用<router-link to = "/跳转路径/传入的参数"></router-link>
例如：<router-link to="/a/123">routerlink传参</router-link>
子组件: this.$route.params.num接收父组件传递过来的参数

调用$router.push实现路由传参
父组件: 绑定点击事件，编写跳转代码
子组件: this.$route.params.id接收父组件传递过来的参数

用name传参：
路由里的name值可以在模板里用$route.name来获取

<p>{{ $route.name}}</p >
这就间接的做了传参操作，但是需要注意，如果一个组件有子路由，他的name是无效的。





vue中router与route区别
router：为VueRouter的实例，相当于一个全局的路由器对象，里面含有很多属性和子对象，例如history对象。。。经常用的跳转链接就可以用this.$router.push，和router-link跳转一样


$route：对象表示当前的路由信息，包含了当前 URL 解析得到的信息。包含当前的路径，参数，query对象等



动态路由
有的时候为了进行全面的权限控制，会需要后台给出路由表，前端再渲染。不用在前端配置。



导航守卫
beforeRouteEnter，beforeRouteUpdate，beforeRouteLeave





vue路由的钩子函数
	Router.beforeEach
	

自定义过滤器
	filter



后台给的小数  拿过滤器该怎么做
toFixed
toFixed() 方法可把 Number 四舍五入为指定小数位数的数字，返回数值字符串



vue常用的修饰符
.lazy：
输入框改变，这个数据就会改变，lazy这个修饰符会在光标离开input框才会更新数据：

.trim：
输入框过滤首尾的空格：

.number：
先输入数字就会限制输入只能是数字，先字符串就相当于没有加number，注意，不是输入框不能输入字符串，是这个数据是数字：

.stop：
阻止事件冒泡，相当于调用了event.stopPropagation()方法：





Promise
Promise.all可以将多个Promise实例包装成一个新的Promise实例。同时，成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，而失败的时候则返回最先被reject失败状态的值。


Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。




Promise.all获得的成功结果的数组里面的数据顺序和Promise.all接收到的数组顺序是一致的，即p1的结果在前，即便p1的结果获取的比p2要晚。这带来了一个绝大的好处：在前端开发请求数据的过程中，偶尔会遇到发送多个请求并根据请求顺序获取和使用数据的场景，使用Promise.all毫无疑问可以解决这个问题


Promse.all在处理多个异步处理时非常有用，比如说一个页面上需要等两个或多个ajax的数据回来以后才正常显示，在此之前只显示loading图标。



vue2中如何监测数组变化
使用了函数劫持的方式，重写了数组的方法，vue将dada中的数组进行了原型链的重写，指向了自己定义的数组原型方法。
这样当调用数组api时，可以通知依赖更新。如果数组中包含着引用类型，会对数组中的引用类型再次递归遍历进行监控。这样就实现了监测数组变化，






你都做过哪些 Vue 的性能优化？
编码阶段


尽量减少 data 中的数据，data 中的数据都会增加 getter 和 setter，会收集对应的 watcher


v-if 和 v-for 不能连用


如果需要使用 v-for 给每项元素绑定事件时使用事件代理


SPA 页面采用 keep-alive 缓存组件


在更多的情况下，使用 v-if 替代 v-show


key 保证唯一


使用路由懒加载、异步组件


防抖、节流


第三方模块按需导入


长列表滚动到可视区域动态加载


图片懒加载


SEO 优化


预渲染


服务端渲染 SSR


打包优化


压缩代码


Tree Shaking/Scope Hoisting


使用 cdn 加载第三方模块


多线程打包 happypack


splitChunks 抽离公共文件


sourceMap 优化


用户体验


骨架屏


PWA


还可以使用缓存(客户端缓存、服务端缓存)优化、服务端开启 gzip 压缩等。


(优化是个大工程，会涉及很多方面，这里申请另开一个专栏)





1.this.$router.push()
描述：跳转到不同的url，但这个方法会向history栈添加一个记录，点击后退会返回到上一个页面。
2.this.$router.replace()
描述：同样是跳转到指定的url，但是这个方法不会向history里面添加新的记录，点击返回，会跳转到上上一个页面。上一个记录是不存在的。


来自 <https://blog.csdn.net/sinat_36729274/article/details/82114764> 






改element样式 dep