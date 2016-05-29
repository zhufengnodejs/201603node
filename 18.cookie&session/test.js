var document = {};
Object.defineProperty(document,'cookies',{
    value:[],

})
Object.defineProperty(document,'cookie',{
    //设置访问器 设置器
    set: function(cookie){
        this.cookies.push(cookie);
    },
    //获取器
    get:function(){
        return this.cookies.join('; ');
    }
})
/*document.cookies.push('dd');
console.log(document.cookies);*/
//设置值的时候走的是set方法
document.cookie = 'name=zfpx';
console.log(document.cookie);

