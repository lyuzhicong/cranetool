import getUrlParam from '../tools/getUrlParam';
import 'mock-local-storage';
test('获取链接/sessionStorage中的某个参数',()=>{ 
  getUrlParam();
  sessionStorage.setItem('name','123');
  getUrlParam('name');
  getUrlParam('name',false);
})