const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
module.exports = {
    mode:"development",
    devServer:{
        port:8000,
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new ModuleFederationPlugin({
            name:"container",
            remotes:{
                barchart:"barchart@http://localhost:8001/remoteEntry.js",
                linechart:"linechart@http://localhost:8002/remoteEntry.js"
            }
        })
    ]
}