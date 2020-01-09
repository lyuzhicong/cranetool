import mul from '../tools-ts/multiplication';

test('两个数做乘法', () => {
  expect(mul( 0.1,0.2)).toEqual(0.02); 
  expect(mul( '1','2')).toEqual(2); 
});
