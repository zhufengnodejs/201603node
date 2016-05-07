var util = require('util');
var obj = {
    name:'zfpx',
    age:6,
    address:{
        street:{
            name:'科星西路'
        }
    }
}
//给对象定义一个属性
Object.defineProperty(obj,'home',{
    value:'beijing',
    configurable:false, //是否可以配置 如果为true,表示可以删除这个属性  delete
    enumerable:false,// 是否可枚举 for in Object.keys能迭代出来
    writable:false //是否可修改它的值
})
obj.home = '南京';
delete obj.home;
//获取 一个对象所有的可枚举的属性
/*console.log(Object.keys(obj));
console.log(obj);*/
/**
 * showHidden 显示隐藏属性
 * depth 深度
 * colors 颜色
 */
console.log(util.inspect(obj,{
    showHidden:true, // configurable:false 为隐藏属性
    depth:2, //递归二级调用 对象转字符串描述
    colors:true
}))

console.log(util.isArray([]));
console.log(util.isRegExp(/a/));
console.log(util.isPrimitive(new Number(1)));
//当你对一个值类型调用方法的时候，js会自动帮你进行封装，转成对象类型
// new Number(123.556)
console.log(123.556.toFixed(2));
console.log(Number.prototype.toFixed.call(123.556,2));