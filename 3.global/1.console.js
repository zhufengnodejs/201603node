/*
console.warn('warn');
console.error('error');

console.log('log');
console.info('info');

//当前文件所在的绝对路径
console.log(__filename);
//当前文件所在目录的绝对路径
console.log('dir');
console.log(__dirname);
*/
/*
console.log('a');
//把当前事件挺到下个事件队列中执行
setImmediate(function(){
  console.log('setImmediate');
})
console.log('c');
*/

var person = {
    food:'',
    cook:function(){
        console.log('做饭');
        this.food = '红烧排骨';
        return this;
    },
    eat:function(){
        setImmediate(()=>{
            console.log('吃',this.food);
        })
        return this;
    }
}

person.cook().eat();