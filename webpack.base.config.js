const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
require("babel-core/register");
require("babel-polyfill");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src/main"),
        vendor: path.resolve(__dirname, "src/vendor") // put third party apps here
    },
    entry: ["regenerator-runtime/runtime.js", path.resolve(__dirname, "src/main")],
    output: {
        filename: 'main.[contenthash].js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: "automatic" }]]
                    }
                }
            },

        ]


    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    })
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        historyApiFallback: true,
    },

    resolve: {
        extensions: [".js", ".jsx"]
    }

};