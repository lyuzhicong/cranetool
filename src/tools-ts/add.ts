import mul from './multiplication';
import math from './operateMath';
import ASMD from '../interface/asmd';
/**
 * 加法
 */
export default (a:number | string, b:number | string):number=> {
    a += '';
    b += '';
    let asmd:ASMD = {c:0,d:0,e:0};
    try {   
      asmd.c = a.toString().split(".")[1].length;
    } catch (error) {
      asmd.c = 0;
    }
    try {
      asmd.d = b.toString().split(".")[1].length;
    } catch (error) {
      asmd.d = 0;
    }
    return asmd.e = math.getPow(10, math.getMax(asmd.c, asmd.d)), (mul(a, asmd.e) + mul(b, asmd.e)) / asmd.e;
  }