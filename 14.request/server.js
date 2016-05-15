var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    console.log(req.headers.host);
    console.log(req.headers);
    console.log(req.url);
    console.log(req.method);
    var str = '';
    req.on('data',function(data){
        str+= data;
    });
    req.on('end',function(data){
        console.log('end');
        res.end(str);
    });
    //res.end(str);
}).listen(9090);