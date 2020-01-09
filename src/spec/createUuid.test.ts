import createUuid from '../tools-ts/createUuid';
test('创建一个16位的随机数为uuid',()=>{
  let uuid = createUuid();
  expect(uuid.length).toBe(32);
  //判断返回值是否是16进制的随机数
  let flag = uuid.match('^[A-Fa-f0-9]+$');
  expect(flag).toBeTruthy();
})