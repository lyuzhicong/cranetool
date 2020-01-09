const GetCookieDomain =()=>{
    const host = location.hostname;
    const ip = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
    if(ip.test(host) === true || host === 'localhost'){
      return host;
    }
    return location.host.replace(/\w*./, '');
}
// 设置cookie，Days如果不设置默认为3000
const setCookie = (name, value, Days = 3000)=>{   
    const upcurrentDomian = GetCookieDomain();
    let exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + encodeURIComponent(value) + ";domain=" + upcurrentDomian + ";expires=" + exp.toGMTString() + ";path=/";
}
  
// 获得cookie
const getCookie = (name)=>{
    if (name) {
        const reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        const arr = document.cookie.match(reg);
        if (arr){
            return (decodeURIComponent(arr[2]));
        }else{
            return null;
        }  
    }
    return null;
};
  
// 删除cookie
const delCookie = (name)=>{
    setCookie(name, '', -1);
};
const operateCookie = {
    setCookie,
    getCookie,
    delCookie
}
export default operateCookie;