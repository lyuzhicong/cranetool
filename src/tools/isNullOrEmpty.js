/**
 * @param obj
 * 判断数据是否为空
 */
let isNullOrEmpty =  (obj) =>{
    return (obj == null || obj == undefined || obj == "" || obj == "null" || obj == "undefined" || typeof obj == "undefined") && (obj != 0 || obj != "0");
};

export default isNullOrEmpty;