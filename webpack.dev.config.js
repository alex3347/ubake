const merge = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.common.config.js');

const devConfig = {
    /*开启source-map*/
    devtool: 'inline-source-map',

    entry: {
        app: [
            'babel-polyfill',
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ]
    },

    output: {
        filename: '[name].[hash].js',
    },

    /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
    /*cacheDirectory是用来缓存编译结果，下次编译加速*/
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                { loader: 'style-loader' },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,//启用sourceMap
                        modules: true,//开启css-modules模式
                        localIdentName: '[name]-[local]-[hash:base64:5]',//设置css-modules模式下local类名的命名
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
        }]
    },

    devServer: {
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true, //不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        host: '0.0.0.0',//用手机通过IP访问
    }
};

module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);