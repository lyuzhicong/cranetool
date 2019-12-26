import div from '../tools/division';
test('两个数做除法',()=>{
    expect(div('2','1')).toEqual(2); 
    expect(div(2,2)).toEqual(1); 
});