const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry:path.resolve(__dirname,'./../src/index.js'),
    resolve:{
        alias:{
            "@":path.resolve(__dirname,'./../src/tools')
        }
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/
            }
        ]
    }
}