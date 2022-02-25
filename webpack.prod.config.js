const base = require("./webpack.base.config");
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(base, {
    mode: "production",
    module: {
        rules: [

            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },

        ]
    },
    plugins: [new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
    })
    ],

});



