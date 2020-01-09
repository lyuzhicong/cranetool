//rollup虽然支持了解析import和export两种语法，但是却不会将其他的ES6代码转化成ES5代码，因此我们在编写ES6代码的时候，需要引入插件来支持ES6代码的解析
const babel = require("rollup-plugin-babel");
//rollup无法直接解析npm模块，因此需要引入插件rollup-plugin-node-resolve并配合之前的commonjs插件来解析这些第三方模块
const resolve = require("rollup-plugin-node-resolve")
//解析commonjs需要引入一个rollup插件——rollup-plugin-commonjs
const commonjs = require("rollup-plugin-commonjs");
//别名
const alias = require("rollup-plugin-alias");

const typescript = require('rollup-plugin-typescript2');


module.exports = {
    // 打包入口
    input: "src/main.ts",
    // 插件
    plugins: [
        resolve({
            extensions: [".ts"]
        }),
        commonjs(),
        babel({
            exclude: "node_modules/**",
            plugins: ["@babel/external-helpers"],
            // externalHelpers: true,
            runtimeHelpers: true,
        }),
        typescript(),
        alias({
            resolve: ['.ts'],
            entries:[
                {find:'ts',replacement:'./tools-ts'},
            ]
        })
    ],
    // 输出配置
    output: {
        file: "build/tools.ts.js",
        /**
        1. amd -- 异步模块定义，用于像RequestJS这样的模块加载器。
        2. cjs -- CommonJS, 适用于Node或Browserify/webpack
        3. es -- 将软件包保存为ES模块文件。
        4. iife -- 一个自动执行的功能，适合作为 <script>标签这样的。
        5. umd -- 通用模块定义，以amd, cjs, 和 iife 为一体。
         */
        format: "umd",
        name: "tools.ts"
    }
}