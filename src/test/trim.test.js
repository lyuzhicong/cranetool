import trim from '../tools/trim';
describe('字符串去空格',()=>{
    test('去首尾空格',()=>{
        const {trimHeadEnd} = trim;
        trimHeadEnd();
        let str = '  123 134  ';
        let newStr = trimHeadEnd(str);
        expect(newStr.match(/\s/g).length == 1).toBeTruthy();
    });
    test('去所有空格',()=>{
        const {trimAll} = trim;
        trimAll();
        let str = '  123  134  ';
        let newStr = trimAll(str);
        expect(newStr.indexOf(' ')>-1).toBeFalsy();
    });
})