const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {DefinePlugin} = require('webpack');

module.exports = {
    mode: 'development',
    // 入口
    entry: './src/index.js',
    // 输出
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true
    },
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
                    // 占位符 [name] 指向原来的图片名称
                    // 占位符 [ext] 扩展名
                    filename: 'static/[hash][ext][query]'
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024 // 4kb
                    }
                }
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            }
        ],
    },
    // 插件
    plugins: [
        // 其它插件...
        new DefinePlugin({
            BASE_URL: '"./"',
        }),
        new HtmlWebpackPlugin({
            title: "京东商城",
            template: './public/index.html',
            favicon: path.resolve(__dirname, '../public/favicon.ico'),
        }),
    ],
    // 解析
    resolve: {
        extensions: ['.js', '.json', '.wasm', ".vue", ".jsx", ".ts", ".tsx"],
        alias: {
            '@': path.resolve(__dirname, '../src'),
            '@assets': path.resolve(__dirname, '../src/assets'),
            '@components': path.resolve(__dirname, '../src/components'),
            '@views': path.resolve(__dirname, '../src/views'),
            '@router': path.resolve(__dirname, '../src/router'),
            '@store': path.resolve(__dirname, '../src/store'),
            '@utils': path.resolve(__dirname, '../src/utils'),
            '@api': path.resolve(__dirname, '../src/api'),
            '@config': path.resolve(__dirname, '../src/config'),
        },
        mainFiles: ['index']
    },
    devServer: {
        hot: true,
        host: "0.0.0.0",
        // port: 8899,
        open: true,
        compress: true,
    }
};