/**
 * 1、递归创建文件夹
 */

var fs = require('fs');
var path = require('path');
fs.mkdirp = function(dir){
 //先把路径转成数组
 var args = dir.split(path.sep);
 //循环数组
 for(var i=0;i<args.length;i++){
     //得到当前的路径
     var pathname = args.slice(0,i+1).join(path.sep);
     //判断当前路径是否存在
     var exists = fs.existsSync(pathname);
     //如果存在的话则继续下一次循环
     if(exists){
         var stat = fs.statSync(pathname);
         if(stat.isDirectory()){
             continue;
         }else{
            throw Error('父目录不能是文件!');
         }
     }else{
         //如果当前目录不存在的话则创建当前目录
         fs.mkdirSync(pathname);
     }
 }
}

fs.mkdirp(path.join('a','b','c'))