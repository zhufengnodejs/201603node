var arr = [1,2,3];
//reduce 用于把一个数组进行收敛
// 最终生成一个值
/**
 * 数组有多少个元素就函数就执行多少次
 * 第一次执行的时候  current=初始化值， next=第一个元素
 * 会返回一个新的结果，这个新的结果会作为下次函数运行时的current ,下次函数执行时的next等于数组的下一个元素
 * @type {*}
 */
var sum = arr.reduce(function(current,next){
   console.log(current,next)
   return current+next;
},0);

console.log(sum);