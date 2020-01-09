/**
 * 判断是否是andriod/ios
 */
export default ():boolean=>{
    const ua:string = window.navigator.userAgent;
    return /iphone|ipad|ipod/i.test(ua);
}