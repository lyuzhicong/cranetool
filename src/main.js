import isNullOrEmpty from 't/isNullOrEmpty';
import add from 't/add';
import sub from 't/subtraction';
import mul from 't/multiplication';
import div from 't/division';
import getUrlParam from 't/getUrlParam';
import isAndriodOrIsIos from 't/isAndriodOrIsIos';
import operateCookie from 't/operateCookie';
import createUuid from 't/createUuid';
import trim from 't/trim';
import debounce from 't/debounce';
import operateMath from 't/operateMath';
import base64Encode from 't/base64Encode';
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