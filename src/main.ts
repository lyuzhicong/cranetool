import isNullOrEmpty from './tools-ts/isNullOrEmpty';
import add from './tools-ts/add';
import sub from './tools-ts/subtraction';
import mul from './tools-ts/multiplication';
import div from './tools-ts/division';
import getUrlParam from './tools-ts/getUrlParam';
import isAndriodOrIsIos from './tools-ts/isAndriodOrIsIos';
import operateCookie from './tools-ts/operateCookie';
import createUuid from './tools-ts/createUuid';
import trim from './tools-ts/trim';
import debounce from './tools-ts/debounce';
import operateMath from './tools-ts/operateMath';
import base64Encode from './tools-ts/base64Encode';
export {
    isNullOrEmpty, //数据是否为空
    add, //加
    sub, //减
    mul, //乘
    div, //除
    getUrlParam, //获取链接/sessionStorage中的某个参数
    isAndriodOrIsIos, //判断是否是andriod/ios
    operateCookie, //设置/获取/删除cookie
    createUuid, //创建一个16进制的随机数为uuid
    trim, //字符串 去空格
    debounce, //函数防抖
    operateMath, //执行数学任务
    base64Encode, //base64转换
}