var zfpxMod = {
    name:function(){
        console.log(1);
    }
}
var mod1 = {
    name:function(){
        console.log(2);
    }
}
var mod2 = {
    name:function(){
        console.log(3);
    }
}
var mod3 = {
    age:8
}
//合并属性，把第二个开始的所有对象上的属性全部合并到第一个对象上去。如果同名的话就覆盖
Object.assign(target,mod1,mod2,mod3);
console.log(target);