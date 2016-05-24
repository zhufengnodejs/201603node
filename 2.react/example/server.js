var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    fs.readFile('./index.html','utf8',function(err,data){
        data .replace('<div id="app"></div>','<div id="app">hello</div>');
        res.end(data);
    })
}).listen(9090);