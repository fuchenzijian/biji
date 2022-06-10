# 1.把模块依赖中的资源变成静态资源

# 2.动态资源:操作服务端的资源叫做，动态资源；

# webpack的安装 :

## 				mkdir <文件夹名称>  创建文件夹      cd <文件夹名> 进入哪个文件夹   

## 				npm init -y 这个是初始化文件夹   (y指的是yes意思是所有选项都选默认的);

## 				npm install webpack webpack-cli --save-dev安装webpack东西

## 				src:全程source源  代码里指源代码;(开发时写的代码都叫源代码)

# npx  webpack 相当于   双击鼠标左键   运行webpack



# 		main.js有关说明，如果不指定文件打包后的名称webpack会默认打包成main.js;

# 什么叫做bundle:捆 被打包的代码叫捆     chunk:块;每个模块就叫块import里面的就是块;    



# 写法一npm install --save-dev        npm install --save									

# 如果下载的模块不需要放在生产环境用就用--save-dev否则就用--save



# 写法二：npm install xxx 默认就是--save	

# webpack相关的模块用--save-dev



# 解决报错的思路:

## 



# babel   转译器:

## //遇到浏览器不兼容的语法，转换成浏览器识别的语法;

### //比如forEach会转换成for



# cli命令行  => gui  可视化

## //在项目中,cli被称之为脚手架       webpack-cli    vue-cli;

```
const path = require('path');

//mode 项目环境有两种  1. production生产环境     2.development开发环境
//生产环境会压缩bundle的代码
module.exports = {
  mode : 'production',/*这个必须要有*/
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
//entry 入口  被打包的文件  output 出口    filename：打包成的名字,  path:放在哪个文件夹下面；
```



# 配置文件:

## //  webpack中有一个默认文件: webpack.config.js  : 通过代码来设置项目 



# //npx webpack 他会默认去找   webpack.config.js这个文件

## 相当于   npx webpack --config webpack.config.js

# //如果想找其他的配置   npx webpack --config vue.config.js

# npm scripts

## 在package.json中,有一个key,这个key是scripts,就向这样:

```
//package.json
//npx webpack == npm run build;
//script :脚本
//运行脚本方式   npm run build;
//npm run serve 
//npm run start == npm start
{
	scripts:{
		"start":"webpack",
		"serve":"webpack",
		"build":"webpack"
	}
}
//npm run <scriptName> 是执行了pack.json文件中的对应的key
```

# 

