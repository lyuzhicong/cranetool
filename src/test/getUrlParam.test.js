import getUrlParam from '../tools/getUrlParam';
import 'mock-local-storage';
describe('获取链接/sessionStorage中的某个参数',()=>{
  test('测试name为空的情况',()=>{ 
    const param = getUrlParam();
    expect(param).toBeNull();
  })
  test('获取sessionStorage中的某个参数',()=>{ 
    sessionStorage.setItem('name','123');
    const param = getUrlParam('name',false);
    expect(param).toBe('123');
  })
  test('测试链接中无该参数',()=>{ 
    const param = getUrlParam('name');
    expect(param).toBe('');
  })
  test('测试获取链接中的某个参数',()=>{ 
    jsdom.reconfigure({
      url: "https://www.example.com?message_code=1"
    });
    const param = getUrlParam('message_code');
    expect(param).toBe('1');
  })
});
