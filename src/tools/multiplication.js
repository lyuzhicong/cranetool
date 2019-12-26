/**
 * 乘法
 */
export default (a, b)=>{
    if (typeof (a) == 'number') a += '';
    if (typeof (b) == 'number') b += '';
    let c = 0;
    let d = a.toString();
    let e = b.toString();
    try {
      c += d.split(".")[1].length;
    } catch (f) { 
      c = 0;
    }
    try {
      c += e.split(".")[1].length;
    } catch (f) { 
      c = 0;
    } 
    return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}