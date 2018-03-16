const path = require("path")
const webpack = require("webpack")
const merge = require("webpack-merge")
const baseWebpackConfig = require("./webpack.base.conf")

module.exports = merge(baseWebpackConfig, {
    entry: {
        index: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: "dist/",
        filename: "[name].js",
        library: "PlaidLink",
        libraryTarget: "umd"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
})
