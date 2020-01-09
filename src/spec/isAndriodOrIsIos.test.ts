import isAndriodOrIsIos from '../tools-ts/isAndriodOrIsIos';
test('验证手机是Andriod/Ios',()=>{
    const flag = isAndriodOrIsIos();
    expect(flag).toBeTruthy();
})