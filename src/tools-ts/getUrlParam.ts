/**
 * @param name   url参数名
 * @param searchUrlOnly   默认 true,  true:仅在url中查找 false:会在 sessionStorage 先查找
 * 获取当前链接中指定名字的参数
 */
import isNullOrEmpty from './isNullOrEmpty';
export default (name:string, searchUrlOnly:boolean = true):string=>{
    let values:string = sessionStorage.getItem(name);
    if (!searchUrlOnly && values) {
        return values;
    }
    values = decodeURIComponent((location.search.match(RegExp("[?|&|/]" + name + '=([^/\&|?&]+)')) || [, null])[1]);
    if (isNullOrEmpty(values)) {
      values = decodeURIComponent((location.hash.match(RegExp("[?|&|/]" + name + '=([^\&|?&]+)')) || [, null])[1]);
    }
    return isNullOrEmpty(values) || values == "null" ? "" : values;
  }