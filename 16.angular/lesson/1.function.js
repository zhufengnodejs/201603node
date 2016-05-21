

var a = 1;
/**
 * 从执行上下文对象中
 * 1. 函数内声明的变量
 * 2. 形参
 * 3. 自由变量(不是在本作用域内声明的变量,在上级作用域内)
 * 4. this
 */
function say(c){
    var b = {name:'zfpx'};
    console.log(a,b,c);
}
say(3);
say(3);