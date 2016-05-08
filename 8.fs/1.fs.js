var fs = require('fs');
//异步读取文件内容
fs.readFile('./1.txt',{encoding:'utf8'},function(err,data){
    if(err){
        console.error(err);
    }
    console.log(data);
})
//同步方法
var content = fs.readFileSync('./1.txt','utf8');
console.log(content);