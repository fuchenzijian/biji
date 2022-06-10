const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    entry:{
        "src/home/index":"./src/home/index.js",
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'src/home/index.html'
        })
    ],
    devServer:{
        contentBase:'./dist'
    }
}