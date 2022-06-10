# webpack

```js
// node 自带的一个包，不需要下载，直接引用就行，他是处理各种文件路径的方法；
const path = require('path');

//webpack-dev-server 这个插件可以自动打包；
// npm install --save-dev webpack-dev-server 

//__dirname  就是当前目录，是Nodejs自带的一个变量；
// html-webpack-plugin;
const HtmlWebpackPlugin  = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    //  把./src/index.js打包一下，
    //打包到当前目录中的dist文件夹中，
    //打包的js名称叫index.bundle.js
    entry:{
        index:'./src/index.js',
    },
    output:{
        filename:'index.bandle.js',
        path: path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[  // 用style-loader,和css-loader解决 .css文件；
            {
                test:/\.css$/i,  //.在正则中指的是零个或者多个； $结尾  index.css$
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'src/index.html'
        })
    ],
    devServer:{
        contentBase:'./dist' //映射到代码打包后的目录；
    }
}
```

是电脑权限设置问题，需要用管理员身份运行power shell ，然后输入 set-ExecutionPolicy RemoteSigned      回车后，输入Y 重新打开vscode就可以