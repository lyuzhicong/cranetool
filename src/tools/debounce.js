/**
 * 函数去抖
 * @param {function} fn 回调函数
 * @param {number} delay  延迟时间
 */
export default (fn, delay=1000)=>{
    if(!fn || typeof fn != 'function'){
        return false;
    }
    let timer = null;
    return (...args)=>{
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