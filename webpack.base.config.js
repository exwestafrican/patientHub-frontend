const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, "/src/main"),
        vendor: path.resolve(__dirname, "/src/vendor") // put third party apps here
    },
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

    resolve: {
        extensions: [".js", ".jsx"]
    }

};