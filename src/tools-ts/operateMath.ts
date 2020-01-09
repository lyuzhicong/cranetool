//把数四舍五入为最接近的整数
const getRound = (val:number):number=>{
    return Math.round(val);
}
//返回 0 ~ 1 之间的随机数
const getRandom = ():number=>{
    return Math.random()
}
//返回 x 的 y 次幂
const getPow = (x:number,y:number):number=>{
    return Math.pow(x,y);
}
//返回 x 和 y 中的最高值
const getMax = (x:number,y:number):number=>{
    return Math.max(x,y);
}
//返回 x 和 y 中的最低值
const getMin = (x:number,y:number):number=>{
    return Math.min(x,y);
}
const operateMath = {
    getRound,
    getRandom,
    getPow,
    getMax,
    getMin
}
export default operateMath;