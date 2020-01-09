import sub from '../tools-ts/subtraction';
test('两个数做减法', () => {
    expect(sub( 2,1)).toEqual(1); 
    expect(sub( '2','1')).toEqual(1); 
});
  