const GetCookieDomain =():string=>{
    const host:string = location.hostname;
    const ip:RegExp = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
    if(ip.test(host) === true || host === 'localhost'){
      return host;
    }
    return location.host.replace(/\w*./, '');
}
// 设置cookie，Days如果不设置默认为3000
const setCookie = (name:string, value:any, Days:number = 3000):void=>{   
    const upcurrentDomian = GetCookieDomain();
    let exp:Date = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + encodeURIComponent(value) + ";domain=" + upcurrentDomian + ";expires=" + exp.toUTCString() + ";path=/";
}
  
// 获得cookie
const getCookie = (name:string):string=>{
    const reg:RegExp = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    const arr:Array<string> = document.cookie.match(reg);
    if (arr){
        return (decodeURIComponent(arr[2]));
    }else{
        return null;
    }
};
  
// 删除cookie
const delCookie = (name:string):void=>{
    setCookie(name, '', -1);
};
const operateCookie = {
    setCookie,
    getCookie,
    delCookie
}
export default operateCookie;