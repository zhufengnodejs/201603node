var fs=require('fs');

function copy(src, target) {
    var rs=fs.createReadStream('./'+src);
    var ws=fs.createWriteStream('./'+target);
    rs.on('data',function (data) {
        var flag=ws.write(data);
        if(flag){
            rs.resume();
        }else{
            rs.pause();
            setTimeout(function () {
                rs.resume();
            },1000)
        }
    });
}
copy('1.txt','2.txt');
