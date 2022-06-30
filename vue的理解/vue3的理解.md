# 1.vue 是一个渐进式框架。

### 		也就是如果后期项目重构，可以一点点地重新构建。

# 2.vue只关注于视图层。

### 		vue 不需要写自定义的方法,只需要调用一个ajax以后视图层就自己变了。

# 3.vue的社区比较活跃。

### 		懂了，就是大牛比较多，大牛分享的资料牛逼。

# 4.现代化的工具链。

### 		1, html,css,js中’目前不支持‘ import export 导入导出功能实现模块化。

### 		2,webpack, wvite,  能模块化按需引入，没有污染全局变量的概念。

### 		3.webpack,wvite的区别，目前wvite有替代webpack的趋势因为，webpack基于node.js环境来写的。关于性能方面肯定是，在浏览器本身环境来写，肯定更快。vue-cli底层就是用到webpack。webpack还要在编译过程中，内部转化为原生js。

### 		4.vue2不支持 wvite。

### 		5.你了解什么前端模块化吗？

# 5.vue-cli  另外别称 vue全家桶。axios,vuex,vue-router,element-ui,vant。ts重中之重,pwa离线缓存。单页面应用。

# 6.单页面应用与多页面应用。

### 单页面应用:一个项目只有一个html页面的项目叫单页面应用。webpack编译的过程转换成html能理解的东西在之后存放到index.html页面中去，本质上把好多页面放到,index.html页面去了。

### vue打包后会把文件编译到public中index.html页面中去。

### 单页面的应用场景:一般是页面的某一块。

### 百度搜的出来的就是多页面应用，搜不出来的就是单页面应用。

### SEO搜索引擎搜索。

### 单页面应用，页面数据是动态加载出来的,调用完页面还要调用ajax才能显示。

### 单页面seo性能优化。这个东西需要node.js映射，爬虫处理。

### 前端学vue精通就是19,学会node.js到20，底层框架25,能写后端35,全寨40到50。ts,学完egrite，scripte,完美学习node.js，python学完 ts,都变得很简单。java也就简单了。

# 7.CDN网络分发。

### CDN概念，cdn与普通网址的区别。

### 性能优化之一就是走CDN优先就近的信号.

### CDN的话，可以买阿里云,腾讯云啥的，也会解决项目加载慢的问题。

### CDN的话也有快的也有慢的。

### 写项目中能走cdn也能放到自身服务器上。在公司里面一般都是自行托管这个东西会很稳定。

### 在公司中，走cdn会有风险iconfont一般都是自行托管的。

### CDN具有延迟性，可能更新会几个小时以后。

### CDN分布式，类似于把总地址的代码copy到自己这，并且CDN是隔一段时间才能同步。

# 8.加载顺序:

### HTML加载顺序一般从上到下执行,css样式啥的都是同步 非阻塞,而js是异步的阻塞加载。会影响页面加载。

# 9.npm install   node node.js   package包manage管理工具;

### 只要是node的文件，都要有node.module的文件。 但是市场上这些框架都是基于node;是node环境才能npm install;

# 10.GUI图形化，CLI 命令行终端。   

# 任何项目的命名不能有中文，git hub 编译的时候 不能识别中文。git 不能识别大小写。

## src下面是存放代码,当前文件夹下面还要有readme.md文件。

# 第二种传统型多页面开发项目目录

```
-| project-name
	-|src
	  -|pages
	  	pageName.html
	  	pageName2.html
	  	pageName3.html
	   -|pageName
	   		pageName.html
	   		pageName.js
	   		pageName.css
	   -| assets
       		-| images or imgs or img or image
       		-| lib //库 jquery vue.js library
       		-| utils//公共的js
       		-| js
       			pageName1.js
       			pageName2.js
       			pageName3.js
       		-| css 公共的css
       			pageName1.css
       			pageName2.css
       			pageName3.css
       			common.css
      README.md//必读文件 			
```

# 第一种传统目录

```
-| project-name
	-| src
		-| pages
			 pageName.html
			 pageName1.html
             pageName2.html
         -| assets
         	-| images or imgs
         	-| lib
         	-| utils
         	-| css
         		common.css
         		
```

# 传统型多页面开发+模块化项目结构说明

```
-| project-name
	-| node_modules // npm install 下载的以来
	-| dist
		index.html
		xxx.css
		xxx.js
		xxx.png
	-| public 如果是单页面
    	index.html
	-| src
		-| pages
			 pageName.html
			 pageName.js
             pageName2.css
         -| assets
         	-| images or imgs
         	-| lib
         	-| utils
         	-| css
         		common.css
         	package.json //项目安装依赖的说明
            package.lock.json // 项目安装依赖的说明文件
            README.md必读文件
            *注：因为项目是基于node环境开发的,当打包完成侯，需要打包一份浏览器识别的文件,这个dist文件就是浏览器可以访问的html地址文件，dist文件夹 通常是 npm run build 自动生成的，不需要手动。
```

# Vue3的写法。 vue3的思想万物皆组件类似与react。

## 类似于,用组件封装一个单独的功能。,只要是一个功能new一个实例。

# Vue2中data是写的Object ， 而vue3 是一个方法;