/**
 * 数据是否为空
 */
export default(obj) =>{
    return (obj == null || obj == undefined || obj == "" || obj == "null" || obj == "undefined" || typeof obj == "undefined") && (obj != 0 || obj != "0");
};