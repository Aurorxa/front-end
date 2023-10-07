const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    // 入口
    entry: './src/index.js',
    // 输出
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    /*
        webpack 只能理解 JavaScript 和 JSON 文件，这是 webpack 开箱可用的自带能力。
        loader 让 webpack 能够去处理其他类型的文件，并将它们转换为有效模块，以供应用程序使用，以及被添加到依赖图中。
    */
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        // options: {
                        //     postcssOptions: {
                        //         plugins: [
                        //             [
                        //                 'autoprefixer',
                        //             ],
                        //         ],
                        //     },
                        // },
                    }
                ],
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        // options: {
                        //     postcssOptions: {
                        //         plugins: [
                        //             [
                        //                 'autoprefixer',
                        //             ],
                        //         ],
                        //     },
                        // },
                    },
                    {
                        loader: 'less-loader'
                    }
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)/,
                type: 'asset',
                generator: {
                    filename: 'static/[hash][ext][query]'
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024 // 4kb
                    }
                }
            },
        ],
    },
    // 插件
    plugins: [
        // 清理插件
        new CleanWebpackPlugin(),
        // 其它插件...
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ],
};