const base = require("./webpack.base.config");
const { merge } = require('webpack-merge');


module.exports = merge(base, {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ]
    },
    devtool: false,

});