var fs=require('fs');
/*
function copy(src,tar){
    var kedu=fs.createReadStream(src,{
    })
    var kexie=fs.createWriteStream(tar,{
    })
    kedu.on('data',_write)
    kedu.on('end',function(){
        kexie.end('')
    })
    function _write(tata){
        var flag = kexie.write(tata);;
        if(!flag)
         kedu.pause()
    }
    kexie.on('drain',function(){
        kedu.resume()
    });
}
copy('1.txt','4.txt');
*/
var ws = fs.createWriteStream('2.txt');
fs.createReadStream('1.txt').pipe(ws,{end:false});
setTimeout(function(){
    ws.write('hello');
},3000)
