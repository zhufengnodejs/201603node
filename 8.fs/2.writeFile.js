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


function copy(src,target){

}

copy('1.txt','2.txt');