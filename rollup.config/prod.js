const rollup = require('rollup');
//压缩代码 代替rollup-plugin-uglify
const {terser} = require('rollup-plugin-terser');
const base = require('./base');
const version = require('../package.json').version;

// 打压缩包
base.plugins.push(terser())
// 设置头部注释信息
const banner =
    '/*!\n' +
    ` * tools v${version}\n` +
    ` * (c) ${new Date().toLocaleString()}\n` +
    ' */'

// 设置尾部注释信息
const footer =
    `/** ${new Date()} **/`

base.output.banner = banner;
base.output.footer = footer;
base.output.file = 'build/tools.min.js';
module.exports = base;