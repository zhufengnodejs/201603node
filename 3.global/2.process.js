/**
 * process
 * 当前工作目录
 *  当前程序是在哪个目录下面启动的
 *  current working directory
 *
 */
console.log(process.cwd());
console.log(__dirname);
//返回上级目录
process.chdir('..');
console.log(process.cwd());
process.chdir('/');
console.log(process.cwd());
/**
 * {
 *   rss: 17285120,
 *   heapTotal: 7524096, 申请到的堆内存总数量
 *   heapUsed: 4009688   使用的堆内存总数量
 * }
 */
/*console.log(process.memoryUsage());
function filter(obj){
    for(var attr in obj){
        obj[attr] = (obj[attr]/1024/1024)+'M';
    }
    return obj;
}

for(var i=0;i<1000000000;i++){
    +function(){
        var arr = [];
        arr.push(""+i);
        console.log(filter(process.memoryUsage()));
    }()

}*/
