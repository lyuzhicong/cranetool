import isNullOrEmpty from 't/isNullOrEmpty';
import add from 't/add';
import sub from 't/subtraction';
import mul from 't/multiplication';
import div from 't/division';
import getUrlParam from 't/getUrlParam';
// sessionStorage.setItem('name','123');
    getUrlParam('name');
export {
    isNullOrEmpty, //数据是否为空
    add, //加
    sub, //减
    mul, //乘
    div, //除
    getUrlParam, //获取链接/sessionStorage中的某个参数
}