// 用的都是commonjs模范

const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");


module.exports = {
    // 入口
    // 相对路径
    entry: "./src/main.js",

    // 输出
    output: {
        // __dirname, nodejs变量，代表当前文件的文件目录
        // path: path.resolve(__dirname, "dist"),
        // 开发模式没有输出
        path: undefined,
        // 入口文件的输出目录
        // filename: "static/js/main.js",
        // 自动清空上次打包结果
        // clean: true,
    },

    // 加载模块
    module: {
        rules: [
            // loaders的配置
            {
                test: /\.css$/, // 只检测.css结尾文件
                use: [MiniCssExtractPlugin.loader, "css-loader"] // 从右到左
            },
            {
                test: /\.less$/i,
                use: [
                  // compiles Less to CSS
                  "style-loader",
                  "css-loader",
                  "less-loader",
                ],
            },
            {
                test: /\.(png|jpg|gif|wbbp|svg)$/,
                type: "asset/resource",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024,
                    },
                },
                generator: {
                    // outputPath: "static/images",
                    filename: 'static/images/[hash:10][ext]'
                }
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                //   options: {
                //     presets: ['@babel/preset-env']
                //   }
                }
            }
        ],
    },

    // 插件
    // plugins的配置
    plugins: [
        new ESLintPlugin({
            context: path.resolve(__dirname, "../src"),
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: './static/css/main.css',
        })
    ],

    devServer: {
        host: "localhost",
        port: "3000",
        open: true,
    },

    // 模式
    mode: "development",
}