var fs = require('fs');
var ws = fs.createWriteStream('2.txt',{
    encoding:'utf8', //设置编码是utf8
    highWaterMark:3 //设置缓冲区大小是3个字节
});
var count = 9;
function _write(){
    do{
        //当flag=true表示缓存区未满,可以继续写入,当flag=false表示缓存区已满，不可再写入了
        var flag = ws.write(''+count--);
        //当flag=true的时候并且count大于等0的时候可以继续写入
    }while(flag && count>=0);
}
//当缓存区里的数据都写入文件之后会触发drain事件
ws.on('drain',function(){
    console.log('drain');
    _write();//继续写入
});
_write();
