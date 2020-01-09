import debounce from '../tools-ts/debounce';
//模拟定时器函数
jest.useFakeTimers();

describe('函数防抖',()=>{

  test('函数防抖',()=>{
    //回调函数
    const callback = jest.fn();
    const fun = debounce(callback);
    fun('zhangdan');
    //函数未被调用
    expect(callback).not.toBeCalled();
    // “快进”时间，使得所有定时器回调都被执行
    jest.advanceTimersByTime(1000);
    //函数被调用
    expect(callback).toBeCalled();
    fun('lisi');
    jest.advanceTimersByTime(1000);
    expect(callback).toBeCalled();
  })
})