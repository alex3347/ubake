const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    /*入口*/
    entry: {
        app: [
            "babel-polyfill",
            path.join(__dirname, 'src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },

    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath : '/'//静态文件的链接定位到静态服务器，相当于绝对路径
    },

    /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
    /*cacheDirectory是用来缓存编译结果，下次编译加速*/
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        },{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },{
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    },
    /*插件配置*/
    plugins: [
        new HtmlWebpackPlugin({//用于加载增加了hash值的js文件到html
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new webpack.optimize.CommonsChunkPlugin({//用于提取react redux等公共组件
            name: 'vendor'
        }),
        new webpack.HashedModuleIdsPlugin(),//用于保证vendor后的hash部分不变化
        new webpack.optimize.CommonsChunkPlugin({//用于保证vendor后的hash部分不变化
            name: 'runtime'
        })
    ],

    /*别名配置*/
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            components: path.join(__dirname, 'src/components'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers')
        }
    }

}