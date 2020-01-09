import operateCookie from '../tools-ts/operateCookie';
describe('cookie的操作',()=>{
    test('cookie存储-ip',()=>{
        let {setCookie,getCookie} = operateCookie;
        jsdom.reconfigure({
            url: "https://127.0.0.1:8080"
        });
        setCookie('name','zhangsan');
        const getName = getCookie('name');
        expect(getName).toBe('zhangsan');
    })
    test('cookie存储-www',()=>{
        let {setCookie,getCookie} = operateCookie;
        jsdom.reconfigure({
            url: "https://www.example.com"
        });
        setCookie('name','zhangsan');
        const getName = getCookie('name');
        expect(getName).toBe('zhangsan');
    })
    test('获取cookie',()=>{
        let {getCookie} = operateCookie;
        const val2 = getCookie('key');
        const val3 = getCookie('name');
        expect(val2).toBeNull();
        expect(val3).toBe('zhangsan');
    })
    test('删除cookie',()=>{
        let {delCookie,getCookie} = operateCookie;
        delCookie('name');
        const getName = getCookie('name');
        expect(getName).toBeNull();
    })
})