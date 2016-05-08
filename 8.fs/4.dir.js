var fs = require('fs');
//创建目录  make directory
//创建目录的时候要求父目录必须是存在的
/*fs.mkdir('a/b/c/d',function(err){
    console.error(err);
})*/
/**
 * 从第一级目录开始判断，
 * 如果目录存在，则跳过，检查下一级目录
 * 如果目录不存在，则创建该目录
 */
/*fs.mkdirp('a/b/c/d',function(err){
    console.error(err);
})*/

//判断一个文件或目录是否存在
fs.exists('a/b',function(exists){
    console.log(exists);
})
//用来处理路径的模块
var path = require('path');
//路径分隔符
console.log(path.sep);

//读取目录下面的文件列表
/*
fs.readdir('a/b',function(err,files){
    console.log(files);
    files.forEach(function(file){
        fs.readFile('a/b/'+file,'utf8',function(err,data){
            console.log(data);
        })
    });
})
*/
// 获取一个文件或目录的状态
// size: 0,
/**
 * atime access time 上次访问时间
 * mtime modifytime  文件的修改时间,只要修改过了，
 * ctime changetime  文件的修改时间，只有当文件内容修改过了才会改变
 * birthtime 文件的创建时间
 */
fs.stat('2.txt',function(err,stat){
    console.log(stat);
    console.log(stat.isDirectory());//是否是一个目录
    console.log(stat.isFile());//是否是一个文件
})












