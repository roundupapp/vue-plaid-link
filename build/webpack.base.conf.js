const webpack = require("webpack")
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["env", "stage-0"]
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            }
        ]
    },
    performance: {
        hints: false
    },
    resolve: {
        extensions: [".webpack.js", ".js", ".vue", ".ts"]
    },
    plugins: [new webpack.optimize.ModuleConcatenationPlugin(), new VueLoaderPlugin()]
}
