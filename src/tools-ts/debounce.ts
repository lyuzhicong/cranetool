/**
 * 函数去抖
 * @param {function} fn 回调函数
 * @param {number} delay  延迟时间
 */
export default (fn:Function, delay:number=1000):Function=>{
    let timer:NodeJS.Timer | null  = null;
    return (...args:any)=>{
      if (timer) {
        clearTimeout(timer);
        timer = setTimeout(function () {
          fn.apply(this, args);
        }, delay);
      } else {
        timer = setTimeout(function () {
          fn.apply(this, args);
        }, delay);
      }
    }
}