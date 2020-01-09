//字符串 去首尾空格
const trimHeadEnd = (str:string = ''):string=>{
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
//字符串 去所有空格
const trimAll = (str:string = ''):string=>{
    return str.replace(/\s*/g,"");
}
const trim = {
    trimHeadEnd,
    trimAll
}
export default trim;