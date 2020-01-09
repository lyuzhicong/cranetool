import mul from './multiplication';
import math from './operateMath';
import ASMD from '../interface/asmd';
/**
 * 除法
 */
export default (a:number | string, b:number | string):number=>{
    a += '';
    b += '';
    let asmd:ASMD = {c:0,d:0,e:0,f:0};
    try {
        asmd.e = a.toString().split(".")[1].length;
    } catch (error) {
        asmd.e = 0;
    }
    try {
        asmd.f = b.toString().split(".")[1].length;
    } catch (error) { 
        asmd.f = 0;
    }
    return asmd.c = Number(a.toString().replace(".", "")), asmd.d = Number(b.toString().replace(".", "")), mul(asmd.c / asmd.d, math.getPow(10, asmd.f - asmd.e));
};