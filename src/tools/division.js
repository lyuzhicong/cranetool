import mul from './multiplication';
/**
 * 除法
 */
export default (a, b)=>{
    if (typeof (a) == 'number') a += ''
    if (typeof (b) == 'number') b += ''
    let c, d, e = 0,
        f = 0;
    try {
        e = a.toString().split(".")[1].length;
    } catch (g) {
        e = 0;
    }
    try {
        f = b.toString().split(".")[1].length;
    } catch (g) { 
        f = 0;
    }
    return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), mul(c / d, Math.pow(10, f - e));
};