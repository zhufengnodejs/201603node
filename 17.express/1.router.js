var express = require('express');
// express是一个函数，调用可以得到app应用
var app = express();

app.get('/',function(req,res){
    res.end('root');//写入响应体
});
//设置路由 当用户访问 /home路径的时候执行回调函数
app.get('/home',function(req,res){
    res.end('home');//写入响应体
});
//设置路由 当用户访问 /user 路径的时候执行回调函数
app.get('/user',function(req,res){
    res.end('user');//写入响应体
});
//当用户通过post方法访问/user的时候，执行回调函数
app.post('/user',function(req,res){
    res.end('post user');//写入响应体
});

//匹配所有的路径
app.all('*',function(req,res){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end('你请求的路径不存在');
});

app.listen(9090);