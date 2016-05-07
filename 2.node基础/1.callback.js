/**
 * 异步编程基本的方法，需要异步处理的时候一般采用后续传递的方式。
 * 将后续逻辑函数作为起始函数的参数。
 */
//点餐
function pick(eat){
    console.log('点餐')
    setTimeout(eat,5000);
}
//吃饭
function eat(){
    console.log('吃饭')
}
pick(eat);

eat();