var express = require('express');
var app = express();
//使用中间件
//1. 第一个参数可以不填 ，如果不填的话匹配所有路径
//2. 第二个参数是一个处理函数
// next调用时表示调用下一个中间件
//中央
app.use(function(req,res,ddddd){
 console.log('中央');
 req.money = 100;
    ddddd();
});
//省里
app.use(function(req,res,next){
    console.log('省里');
    req.money = req.money -20;
    next();
});
//市里
app.use(function(req,res,next){
    console.log('市里');
    req.money = req.money -40;
    next();
});
//村里
app.use(function(req,res,next){
    console.log('村里');
    req.money = req.money -40;
    res.end('over');
});
//农民
app.get('/',function(req,res){
    console.log('农民');
    res.end(""+req.money);
});

app.listen(9090);