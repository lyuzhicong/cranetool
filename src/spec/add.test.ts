import add from '../tools-ts/add';

test('两个数做加法', () => {
  expect(add('1','2')).toEqual(3); 
  expect(add(1,1)).toEqual(2); 
});
