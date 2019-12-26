import sub from '../tools/subtraction';
test('两个数做减法', () => {
    expect(sub( 2,1)).toEqual(1); 
    expect(sub( '2','1')).toEqual(1); 
});
  