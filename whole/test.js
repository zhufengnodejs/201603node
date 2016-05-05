/*
var obj = {name:'zfpx',age:6};
//$scope
// 执行上下文件环境
with(obj){
    console.log(name,age);
}*/

var reg = /^(?!\d+$)(?![a-zA-Z]+$)[a-zA-Z0-9]{8,15}$/;
console.log(reg.test('1aaaaaaaaaa1'));


// ?=  符合预查
// ?! 不符合预查
var reg = /^(?!\d$)/;
console.log(reg.test('@'));


var items = [1,2,3];
items.forEach(function(item){
    console.log(item);
})


var obj = {num:1};
obj.num--;
console.log(obj.num);