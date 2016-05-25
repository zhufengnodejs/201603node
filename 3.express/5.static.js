var express = require('express');
var fs = require('fs');
var app = express();
app.use(function(req,res,next){
    var path = req.path=='/'?'/index.html':req.path;
  //req.path /next.js
    fs.createReadStream('.'+path).pipe(res);
});
//把当前目录作为静态文件根目录
//app.use(express.static(__dirname));
/*app.get('/index.html',function(req,res){
  fs.createReadStream('./index.html').pipe(res);
});*/

app.listen(9090);