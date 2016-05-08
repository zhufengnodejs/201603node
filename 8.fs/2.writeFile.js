var fs = require('fs');
//清空并写入
/*fs.writeFile('./2.txt','我开','utf8',function(err){
    console.log('2写入成功',err);
})
fs.writeFile('./3.txt','我开心','utf8',function(err){
    console.log('4写入成功',err);
})*/
/*


try{
    fs.writeFileSync('./3.txt','珠峰培训','utf8');
}catch(ex){
    console.error(ex);
}
*/

//append表示追加文件内容
//有Sync 就是同步，没有Sync就是异步
fs.appendFileSync('2.txt','你好','utf8');

/**
 * 读取源文件的内容，并写到目标文件里去
 * @param src 源文件
 * @param target 目标文件
 */
function copy(src,target){

}
/**
 * 剪切(移动)文件
 * 把一个文件从一个地方移动到另一个地方
 * @param src
 * @param target
 */
function mv(src,target){

}

copy('1.txt','2.txt');