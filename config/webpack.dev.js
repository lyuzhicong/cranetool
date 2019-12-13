const webpack = require('webpack');
const {smart} = require('webpack-merge');
const path = require('path');
const HtmlWbpackPlugin =  require('html-webpack-plugin');
const base = require('./webpack.base');
module.exports = smart(base,{
    mode:'development',
    plugins:[
        new HtmlWbpackPlugin({
            template:path.resolve(__dirname,'./../src/index.html'),
            filename:'index.html',
        }),
    ]
});