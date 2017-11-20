const merge = require('webpack-merge');

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const commonConfig = require('./webpack.common.config.js');

const publicConfig = {
    /*开启source-map*/
    devtool: 'cheap-module-source-map',

    /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
    /*cacheDirectory是用来缓存编译结果，下次编译加速*/
    module: {
        rules: [{
            test: /\.scss$/,
            use:ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,//启用sourceMap
                            modules: true,//开启css-modules模式
                            localIdentName: '[name]-[local]-[hash:base64:5]',//设置css-modules模式下local类名的命名
                            camelCase: true//导出以驼峰化命名的类名
                        }
                    },
                    {
                        loader: 'px2rem-loader',
                        options: {
                            remUnit:75//设置rem基准
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: 'postcss.config.js'  // 在项目根目录创建此文件
                            }
                        }
                    },
                    {
                        loader: 'sass-loader', options: { sourceMap: true }
                    }
                ]
            })
        }]
    },
    /*插件配置*/
    plugins: [
        new UglifyJSPlugin(),//开启压缩
        new webpack.DefinePlugin({// library 与 process.env.NODE_ENV 环境变量关联
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new CleanWebpackPlugin(['dist']),//清理dist文件夹
        new ExtractTextPlugin({//将css从js中分离
            filename: '[name].[contenthash:5].css',
            allChunks: true
        })
    ]
}

module.exports = merge(commonConfig, publicConfig);