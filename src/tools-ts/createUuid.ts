import math from './operateMath';
/**
 * 创建一个16进制的随机数为uuid
 */
export default ():string=>{
    return 'xxxxxxxxxxxxxxxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, (c:string)=>{
      let r:number = math.getRandom() * 16 | 0;
      let v:number = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}