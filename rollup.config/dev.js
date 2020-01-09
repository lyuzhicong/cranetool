const rollup = require("rollup");
const base = require(`./base-${process.env.NODE_ENV}`);
const {eslint} = require("rollup-plugin-eslint");

base.plugins.push(
    eslint({
        //throwOnError和throwOnWarning设置为true时，如果在eslint的检查过程中发现了error或warning，就会抛出异常，阻止打包继续执行
        throwOnError: true,
        throwOnWarning: true,
        include: ["src/**"],
        exclude: ["node_modules/**"]
    })
);
base.output.sourceMap = true;
// 初始化配置文件 可以根据需求扩展config
const watcher = rollup.watch(base);

watcher.on('event', event => {
    // 状态码
    console.log(event.code)
    // logic
});
module.exports = base;
