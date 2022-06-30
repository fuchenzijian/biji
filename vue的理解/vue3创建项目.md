# vue3 + vite

```javascript
1. npm install -g @vue/cli //全局安装vue-cli 命令

//注:
yarn global add @vue/cli
# 或
npm install -g @vue/cli

//目前市场上,这种包管理工具一共有两个一个npm 一个是 yarn
//比较快的是yarn
//知识点
//1. 如果 npm install 中有 -g --global 等 可以忽略文件夹安装
// -g --global 是全局的意思
//2. npm install -g @vue/cli 全局安装完以后，会自动在终端生成一个vue 开头的关键字。
// vue create project-name
// 3. 在npm 中，除了-g 常用的有 --save-dev 和 --save
//--save-dev === -S
//--save === -s,
//如果你下载的包不包含这些关键字则默认为 --save;
//npm install jquery --save === npm i jquery

//4.什么时候用--save ? 什么时候用 --save-dev?
//5. 在项目中引入的抱都需要用--save,
//相反，如果项目中页面上不需要引用的抱，就必须用--save-dev
//6. 用 npm install 下载的包 可以通过 package.json中的dependence 和 devDepences
```

# 2.项目启动的流程

```
1.cd <project-name>
2. npm install
3. npm run dev
//之后只需要npm run dev
```

# 3.进入App.vue页面

## 	1.删除template,及style中无用的样式。

# 4.做项目时,要引入common.css

## 	1.注:common.css负责公共样式

## 	2.在main.js中引入

```

```

# 5,安装路由

## 	1, npm install vue-router

## 	

### 6.路由重定向:

#### 	答:在router文件夹下面的index.js的routers选项中配置redirect选项。

### 7.项目中如何使用<span>vue-router</span>?

```javascript
1. npm install vue-router 下载
2. 在src 下面创建router文件夹
3. 在router文件夹下创建index.js
4. 配置router相关参数,导入router的实例,
5. 在main.js 中导出该配置并用use方法进行挂在,
6. 在APP.vue中引入<router-view />标签
```

### 说一下项目中common.css的理解?

#### 	答:在项目中通常会在main.js中导出一个common.css来初始化项目的默认样式及声明公共样式，以便在项目的每个页面进行使用。

### 说一下你在构建项目时，都配置过哪些东西?

```javascript
答;在b端项目中，主要配置路由，配置vuex的状态管理,配置跨域，配置axios;
1.element-ui  //cms 后台管理使用的ui 框架
2.vue-router  
3.vant   // vant 是移动端项目中用的ui框架
4.axios
5.vuex
```

### 说一下对element-ui的理解？

```
答:
1.element-ui是一个ui组件库,适应于vue 和 react;
2.element-ui是用来做后台管理项目的。
```

### 说一下什么是后台管理项目?

```
答:后台管理被统称为cms,是面向B（2b or toB or tob or to business）端用户的系统，包含了，增删改查，上传下载，导出，echarts图表，及权限管理相关的功能。通常是pc端。
```

### 说一下对2b和2c的理解?

```
答: 1. 2b 指的是 to business， 指的是面向商户的项目；
    2. 2c 指的是 to client ,指的是面向客户；
项目使用的维度不一样，使用的人群不一样,注:并不是pc端就是2b的项目，移动端也可以有toB的项目，只是比较少；
```

### 说一下在项目中toB和toC的项目有什么区别？

```
答: 
	1. toB的项目，要求样式标准不高，业务逻辑能力要求较强，不需优化太多客户体验。以功能为主。
	2. toC的项目，要求更高的样式要求，及客户体验为主；
```

### 说一下在cms中，项目所用的技术栈有哪些?

```javascript
答:vue,element-ui,axios,vue-router,vuex,echarts
```

### vue-cli和jquery的区别吧？

```
答:不建议这么使用，原因:vue不建议操作dom，而jq就是操作dom,从理念上都冲突。
```

### 知识点:项目中view文件目录结构

```javascript
-|src
	-|views
		-|pageName 文件夹
			-|pageName.vue
				-|components //用来存放pageName中的业务组件
					OrderList.vue
					OrderListItem.vue
					OrderDetail.vue
// PageName.vue
	<template>
            <page-main>
            	<order-list>
            		<order-list-item></order-list-item>
            	</order-list>
				<order-detail>
                        //el-title公共模块的组件
            		<el-title></el-title>
            	</order-detail>
            </page-main>
    </template>
```

### 说一下路由懒加载?

```js
答:路由懒加载也叫按需加载，在加载路由时, 用 import pageName from '../views/pageName/pageName.vue';实现普通加载。
用 component import(/*webpackchunkName : 'pageName'*/,'../views/pageName/pageName.vue')实现路由懒加载.路由懒加载可以用于性能优化,在用户访问时再去加载对应页面,来实现性能提升，通常，页面于登录页面是普通加载。但其他场景都是懒加载;

//eg :
	var route = [
        {
            path:'/home',
            component:Home,
        },
        {
            path:'/activityDetail',
            component:import(/*webpackChunkName :'PageName'*/'../views/pageName/pageName.vue]'),
        },
    ]
```

### 配置路由相关的知识点

```
1. 配置路由时候,path 路径要以 /开头，通常情况下，使用驼峰命名法，
2. 通常情况下，path的值鹤name的值一样，不过name首字母大写;
3. 通常情况下,path 要和该模块的名称保持一致  比如: path:'activityDetail'  ActivityDetail.vue  name:'ActivityDetail' ActivityDetail.vue
```

### 移动端相关知识点

```
1. 在开发移动端项目时，应该打开f12，调成移动端。
2. 移动端的开屏幕的宽应该等于设计稿的整数倍,一般情况下是两倍。
3. 目前市场上主流的所有的移动端的设计稿 宽魏 750px
4. 设计稿为手机分辨率的两倍。换句话说，开发时我们手机屏幕的宽调成375px 也就是iphone6s,或者 iphoneSE;
```

### 如何适配移动端?

```js
答:采用rem布局实现适配。
利用ali适配方案来解决;
注：ali适配方案底层采用的rem（flexible.js/amfe-flexible）布局适配;
注:在项目中还有一种解决方案是结合ali适配和px2rem的插件来实现的
px2rem是可以默认把你的px单位
```

### 有关像素的知识点:

```js
1.图片是由像素组成的。
2.目前手机电脑电视，都是由像素组成的。
3.像素是一个单位;
4.代表的是分辨率,像素越高，清晰度越高。
5.像素是会失真的。
6.失真并不是模糊。
7.如果图片是由像素组成的就会失真;
8.如果不是由像素组成的,则这张图叫做矢量图;
9.目前市场上前端中，常用的矢量图的格式为 svg矢量图;
10.矢量图和像素图的最大区别是矢量图不会失真，可以被无限放大;

//例: 电视:4k 分辨率 1024(px) * 4;
//在4k电视上有的视频还非常模糊，原因是因为电视剧的像素没那么高
```

### svg?

```html
1.svg 是矢量图，不会失真;
2.html中可以写xml;
3.目前svg可以做动画;
4.还可以在服务端支付功能;
5.svg性能要比png,jpg好很多; //因为他不需要加载;
目前在市场上,用的png居多,原因是1.现在公司规模也不在乎这点性能。
xml的思想就是vue组件的思想;
xml中没有具体标签，标签全部是自定义的;
把img的src填成这个内容;
```

### 在项目中用过雪碧图么?

```js
答:雪碧图，就是把一个项目中所有的icon图标放到一张图上,通过backgruond定位来展示对应的图片;
缺点:开发时速度较慢,容易样式问题,不利于ui和开发进行维护;
优点:性能很快;
解决方案:目前前端的打包工具中,比如webpack,vite 都自带了，一键生成雪碧图的功能;
举例:
-|assets
	-|images
		icon_search.png
		icon_mine.png
		icon_cart.png
项目在打包后，webpack,vite会自动把三张图片变成一张雪碧图,这样做就大大节省了我们的开发时间;（此项操作需要配置）;		
```

### 在前端项目中,你做过哪些优化？

```html
1. cdn
2. webpack模块配置路由懒加载
3. 图片优化中可以用雪碧图来减少请求服务端次数;
```

### 说一下对rem的理解!

```js
答：rem 就是一个相对单位，基于根元素字体大小的变化而变化;
```

### 在项目中如何给一个元素设置12px一下的字体大小?

```
答:css 中变换中的缩放; scale(.8);就能让字体变得更小;
这个缩放功能在底层实现中是一个错觉,是视距，让他改变一下距离;
on resize原生事件：当屏幕的宽发生变化的时候自动变化;
```

### 阿里移动端适配方案;

```
1.npm i -S smfe-flexible 注意此文件不要下载到项目中;
2.修改amfe-flexible/index.js的 setRemUnit方法;
	var rem = docEL.clientWidth /10
	var rem = docEL.clientWidth /37.5
3.将修改后的文件放到 assets/lib/amfe-flexible.js中;
4.如何使用
	//index.html引入
	
```

### 路由跳转的方式有几种?分别有什么区别？

```html
1. 路由跳转的方式分两种;
2. 一种是history 历史模式，另外一种是hash模式;
3. history模式相当于get请求,参数是以问号(?)拼接 eg:www.xxx.com?taskId=13name=1,
4. hash模式结尾是#(#)拼接，也是vue-cli默认的路由跳转方式.
5. hash模式不是get请求，所以用户在请求时不会每次调用服务端;
```

### 在hash和history模式中遇到过哪些坑?

```html
答:hash模式在打包发版过程中比较简单;
   history在打包发版后，还需要单独配置ngix才可以使用;(比较麻烦)
	注:项目中的路由模式的选择?看业务具体需求.如果你的想目是由很多商户做对接，尽可能选择histrory模式,原因很多商户觉得hash的#十分不美观；
	如果只是追求简单，项目的快速实现，这个会简单很多。
```

### 如何配置和切换hash和history?

```html
答:在router/index.js中配置路由跳转的模式；
	createWebHistory
	history:createWebHashHistory();这个是hash模式;//createWebHistory()这个是历史模式;
```

### 知识点:项目如何上传到git? (只是从零到一)

```js
这个流程十把本地的项目上传到git hub 或者 git lub中
1. 登录github 或者 gitlub;  
2. new创建仓库;
3. 填写仓库名称(respository name)及descrition(描述);
4. 之后点击创建按钮(create respository);
5. 创建成功后会得到一个github/gitlab的项目地址;eg:git@github的地址
6. 复制这个地址 然后本地项目根目录右键选项 git base here;
7. git init
8. git remote add origin 地址
9. git add .
10. git commit -m "commit update"
11. git push --set-upstream origin master
12. git push
```

### 在工作中,你用的代码管理工具是什么?

```js
答; git hub 和 gitlab;
答2:git 和 svn;
```

### 说一下git 和svn的区别?

```js
答: git 是分布式,可以在不同的地方进行多人开发! (在家和在公司都能开发)
	svn是局域网(内网)开发,
    他们在使用上都差不多:svn一般用来记录的是项目中产品的需求文档,   svn使用比较简单,只有拉取代码和提交代码两个按钮。 
```

### 你最近使用的是github还是gitlab?

```
答:最近使用的是github,之前使用的是gitlab;
注:gitlab是目前公司中比较常用的一个git代码管理平台；github也有对应的功能
这两个平台的操作几乎一模一样；  但是gitlab有中文;
市场除了github , gitlab 还有一个gitee(码云),国产的，代码平台的速度会比较快。
```

### 知识点:公司中的gitlab?

```js
1.公司中拉取代码采用git clone拉取代码
2.公司中不需要自己去申请githab 或者 gitlab账号(这个账号是公司内部给你发送的，所以不需要自己配置sshkey);
3.所以不需要配sshkey;
```

### 知识点:git 如何推送项目?

```html
1. git add .
2. git commit -m '增加了什么模块'
3. git pull
4. git push
```

### 在你的项目中如何管理分支?

```
1.开发时在dev分支
2.开发完毕后上传到pre分支
3.项目上线时,用的是master分支;
```

### 项目上线的分支管理?

```js
1. 将本地的dev分支切换到本地的master分支上  git checkout master
2. 将本地dev分支代码合并到本地的master分支 eg:git merge develop
3. 把本地的master分支代码推送到线上master分支 eg:git push 把本地master分支推送到关联的线上分支
```

### 分支的命名?

```js
1.开发时分支命名规则为 Dev_br+项目上线时间 例:Dev_br20220713 指的是这个分支代码是22年7月13日上线的版本
2.
```

### git 相关知识点?

```
1.冷知识 git pull = git fetch + git merge;
2.git fetch 刷新 （下载） 应用场景: 线上新建分支时,本地用git fetch 刷新 重新获取到线上新建分支。
3.git merge 合并
```

### git线上出现bug后如何操作?

```js
1.打开github/gitlab
2.点击切换分支按钮,创建分支:Hot_br20220630 from 'master'
  //基于master分支复制并创建一个Hot_br20220630分支
3.之后我们在Hot分支进行bug修复,修复完以后,=
4.测试进行测试
5.测试完毕代码合并
6.将分支切换到master分支，并将Hot分直的代码合并到master分支
	合并流程:
		git checkout master 切换到master分支
        git merge Hot 将hot的代码合到master分支;
7. 项目打包 npm run build;
8. 布置服务器(在你master分支的代码放在服务器上)
9.切换到dev分支，将master分支代码合并到dev;
3.将线上分支同步到本地 git fetch;刷新获取线上更新的分支；
4.git checkout -b Hot_br20220630 origin/Hot_br2022060 创建一个本地的分支关联线上的分支,

git checkout Hot_br20220630 切换分支
git checkout -b Hot_br2022 origin/Hot_br202创建一个分支并关联到origin/Hot_br2022并切换到到新的分支

origin:虽然叫起源,

```

![image-20220630094258624](C:\Users\20148\AppData\Roaming\Typora\typora-user-images\image-20220630094258624.png)

### 在公司中你们分支的种类?

```
答: 1. dev master 分支?
		1.dev master
		2.origin/dev origin/master origin/xiaoming 			   origin/xiaohei
			
			现在又4个前端
			创建4个分支,
	2. sit or pre dev master
```

### 你们公司中有sit分支吗？ or sit 还是pre 你们的测试环境是sit 还是 dev?

```
答法1:我们公司中没有sit，但是之前公司有
答法2:我们公司规模比较小，只有dev和master没有sit；
这两种答法都可以
```

### 再push代码时候,如何推送到非关联分支?

```
答： git push origin 分支名
```

### 开发中的分支说明

```
开发分支 sit/pre
测试分支 dev
线上  master/prd
注: pre 前 dev开发 prd 生产 production
```

