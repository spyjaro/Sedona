const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var build = require('webpack-build');

module.exports = {
    entry: [
        path.join(__dirname, '/src/app.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module:{
        rules:[{
            test:/\.scss$/,
            use:[{
                loader:'style-loader'
            },{
                loader:'css-loader'
            },{
                loader:'sass-loader',
                options:{
                    includePaths:['styles/main.scss']
                }
            }]
            },
            {
                test: /\.(gif|png|jpe?g|svg|webp)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader'
                ]
            },
            {
                test: /\.exec\.js$/,
                use: [ 'script-loader' ]
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: "file-loader",
                options: {
                    name: "fonts/[name].[ext]",
                }
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: "index.html",
            inject : "body"
        })
    ]
};