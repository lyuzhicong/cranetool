import isNullOrEmpty from '../tools-ts/isNullOrEmpty';

test('数据是否为空', () => {
  const arr1 = [null,undefined,'','null','undefined'];
  const arr2 = [0,'0'];
  arr1.forEach((item)=>{
    expect(isNullOrEmpty(item)).toEqual(true);
  });  
  arr2.forEach((item)=>{
    expect(isNullOrEmpty(item)).not.toEqual(true);
  });  
});
