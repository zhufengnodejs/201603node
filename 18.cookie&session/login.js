var express = require('express');
var cookieParser = require('cookie-parser');
var path = require('path');
var app = express();
app.use(cookieParser());
function checkLogin(req,res,next){
    if(req.cookies.username){
        next();
    }else{
        res.redirect('/');
    }
}
function log(req,res,next){
  console.log(req.url);
    next();
}
/**
 * 1.先进入首页 / 进行登陆
 * 2. 如果未登陆会进入 登陆页 /login
 * 3. 登陆后会跳转到个人主页 /user
 */
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
});
app.get('/login',function(req,res){
    var username = req.query.username;
    //res.cookie 是express提供的方法
    res.cookie('username',username);
    res.redirect('/user');
})
app.get('/user',checkLogin,log,function(req,res){
    //req.cookies 是由cookie-parser中间件
    res.send(req.cookies.username);
});

app.listen(9090);
