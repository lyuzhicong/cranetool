import math from './operateMath';
import ASMD from '../interface/asmd';
/**
 * 乘法
 */
export default (a:number | string, b:number | string):number=>{
    a += '';
    b += '';
    let asmd:ASMD = {c:0};
    let d:string = a.toString();
    let e:string = b.toString();
    try {
      asmd.c += d.split(".")[1].length;
    } catch (error) { 
      asmd.c = 0;
    }
    try {
      asmd.c += e.split(".")[1].length;
    } catch (error) { 
      asmd.c = 0;
    } 
    return Number(d.replace(".", "")) * Number(e.replace(".", "")) / math.getPow(10,  asmd.c);
}