var express = require('express');
var app = express();
// 当用户通过GET方法，访问 /路径的时候，执行回调函数
app.get('/',function(req,res){
    res.end('hello');
});
//匹配 /world路径
app.get('/world',function(req,res){
    res.end('world');
});
//匹配所有的路径
app.get('*',function(req,res){
    res.end('404');
});
//启动http服务器
app.listen(9090);