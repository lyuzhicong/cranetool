/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 * 两个数字的相乘
 */
const mul =  (a, b)=>{
    if (typeof (a) == 'number') a += '';
    if (typeof (b) == 'number') b += '';
    let c = 0;
    let d = a.toString();
    let e = b.toString();
    if(d.indexOf('.')>0){
      c += d.split(".")[1].length;
    }
    if(e.indexOf('.')>0){
      c += e.split(".")[1].length;
    }  
    return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}
export default mul;