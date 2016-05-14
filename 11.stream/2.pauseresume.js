var fs = require('fs');
//创建一个可读流
var rs = fs.createReadStream('./1.txt',{
    start:3, //读取的起始字节数
    end:5,   //读取的结束字节数
  /*  encoding:'utf8',//如果指定了编码，就可以直接得到字符串*/
    highWaterMark:1 //最高水位线，也就是一次读取的最大字节数
});
//设置编码
rs.setEncoding('utf8');
console.time('cost');
//读到一次数据，会触发一次data事件
rs.on('data',function(data){
    console.log(data);
    rs.pause();//暂时停止触发data事件
    setTimeout(function(){
        rs.resume();
    },3000);
});
//读取完成后会触发end事件
rs.on('end',function(){
    console.log('end');
    console.timeEnd('cost');
});
//当读取文件流出错的时候会发射error事件
rs.on('error',function(err){
    console.error(err);
});