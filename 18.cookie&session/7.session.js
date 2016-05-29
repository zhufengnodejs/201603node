var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
app.use(cookieParser());
//当使用session中间件之后，req.session
app.use(session({
    secret:'zfpx3',//加密cookie的
    resave:true,//每次请求结束的时候重新保存session
    saveUninitialized:true//如果session只创建没有赋值话也进行保存
}));
app.get('/write',function(req,res){
   req.session.username = 'zfpx';
    res.send(req.session.username);
});

app.get('/read',function(req,res){
    res.send(req.session.username);
});


app.listen(9090);