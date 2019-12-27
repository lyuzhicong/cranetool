import operateCookie from '../tools/operateCookie';
describe('cookie的操作',()=>{
    test('cookie存储-ip',()=>{
        let {setCookie} = operateCookie;
        jsdom.reconfigure({
            url: "https://127.0.0.1:8080"
        });
        setCookie('name','zhangsan');
    })
    test('cookie存储-localhost',()=>{
        let {setCookie} = operateCookie;
        jsdom.reconfigure({
            url: "https://localhost:8080"
        });
        setCookie('name','zhangsan');
    })
    test('cookie存储-www',()=>{
        let {setCookie} = operateCookie;
        jsdom.reconfigure({
            url: "https://www.example.com"
        });
        setCookie('name','zhangsan');
    })
    test('获取cookie',()=>{
        let {getCookie} = operateCookie;
        getCookie();
        getCookie('key');
        getCookie('name');
    })
    test('删除cookie',()=>{
        let {delCookie} = operateCookie;
        delCookie('name');
    })
})