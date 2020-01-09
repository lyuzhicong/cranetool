
import operateMath from '../tools-ts/operateMath';
const {
    getRound,
    getRandom,
    getPow,
    getMax,
    getMin
} = operateMath;

describe('数学操作',()=>{
    test('四舍五入',()=>{
        const val = getRound(1.414);
        expect(val).toBe(1)
    })
    test('返回 0 ~ 1 之间的随机数',()=>{
        const val = getRandom();
        expect(val).toBeGreaterThan(0);
        expect(val).toBeLessThan(1)
    })
    test('返回 x 的 y 次幂',()=>{
        const val = getPow(2,3);
        expect(val).toBe(8)
    })
    test('返回 x 和 y 中的最高值',()=>{
        const val = getMax(2,3);
        expect(val).toBe(3)
    })
    test('返回 x 和 y 中的最低值',()=>{
        const val = getMin(2,3);
        expect(val).toBe(2)
    })
})