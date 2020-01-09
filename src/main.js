import isNullOrEmpty from 'js/isNullOrEmpty';
import add from 'js/add';
import sub from 'js/subtraction';
import mul from 'js/multiplication';
import div from 'js/division';
import getUrlParam from 'js/getUrlParam';
import isAndriodOrIsIos from 'js/isAndriodOrIsIos';
import operateCookie from 'js/operateCookie';
import createUuid from 'js/createUuid';
import trim from 'js/trim';
import debounce from 'js/debounce';
import operateMath from 'js/operateMath';
import base64Encode from 'js/base64Encode';
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