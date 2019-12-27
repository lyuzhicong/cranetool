import getUrlParam from '../tools/getUrlParam';
import 'mock-local-storage';
describe('获取链接/sessionStorage中的某个参数',()=>{
  test('测试name为空的情况',()=>{ 
    getUrlParam();
  })
  test('获取sessionStorage中的某个参数',()=>{ 
    sessionStorage.setItem('name','123');
    getUrlParam('name',false);
  })
  test('测试链接中无该参数',()=>{ 
    getUrlParam('name');
  })
  test('测试获取链接中的某个参数',()=>{ 
    jsdom.reconfigure({
      url: "https://www.example.com?message_code=1"
    });
    getUrlParam('message_code');
  })
});
