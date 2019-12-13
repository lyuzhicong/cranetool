const webpack = require('webpack');
const {smart} = require('webpack-merge');
const path = require('path');
const base = require('./webpack.base');
module.exports = smart(base,{
    mode:'production',
    output:{
        filename:'tools.js',
        path:path.resolve('dist')
    }
});