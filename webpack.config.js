var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { optimize } = require("webpack");

module.exports = {

    entry: {
        app:'./src/index.js'
    },

    output: {
        path: path.join(__dirname, "/dist"),
        publicPath: '',
        filename: "main.js"
    },

    mode: "development",

    devServer: {
        contentBase: path.join(__dirname, "/dist"),
        port: 1239,
        writeToDisk: true,
        open: true,
    },


    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                        }
                    }
                ]
            },

            {
                test:/\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    'css-loader', 
                    'sass-loader'
                ]
            },

            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: "images",
                        }
                    }
                ]
            },

            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options:{
                            name: '[name].[ext]',
                            outputPath: "fonts",
                            esModule: false,
                        }
                    }
                ]
            },
            {
                test: require.resolve('jquery'),
                loader: 'expose-loader',
                options: {
                    exposes: ['$', 'jQuery'],
                }
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({ 
            filename: "index.html",
            template: "./src/index.html",
        }),
        new HtmlWebpackPlugin({ 
            filename: "Tourist-tour.html",
            template: "./src/Tourist-tour.html",
        }),
        new HtmlWebpackPlugin({ 
            filename: "Tourist-tour-2.html",
            template: "./src/Tourist-tour-2.html",
        }),
        new HtmlWebpackPlugin({ 
            filename: "create-acc.html",
            template: "./src/create-acc.html",
        }),
        new HtmlWebpackPlugin({ 
            filename: "log-in.html",
            template: "./src/log-in.html",
        }),


        new MiniCssExtractPlugin({filename: "css/style.css"}),

        new OptimizeCSSAssetsPlugin({}),
    
    ],
};