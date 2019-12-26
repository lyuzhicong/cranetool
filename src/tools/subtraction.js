import mul from './multiplication';
/**
 * 减法
 */
export default (a, b)=>{
    if (typeof (a) == 'number') a += ''
    if (typeof (b) == 'number') b += ''
    let c, d, e;
    try {
        c = a.toString().split(".")[1].length;
    } catch (f) {
        c = 0;
    }
    try {
        d = b.toString().split(".")[1].length;
    } catch (f) {
        d = 0;
    }
    return e = Math.pow(10, Math.max(c, d)), (mul(a, e) - mul(b, e)) / e;
};
  