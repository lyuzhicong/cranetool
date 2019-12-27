/**
 * 判断是否是andriod/ios
 */
export default ()=>{
    const ua = window.navigator.userAgent;
    return /iphone|ipad|ipod/i.test(ua);
}