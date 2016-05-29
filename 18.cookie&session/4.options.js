var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
//提供一个密钥
app.use(cookieParser('zfpx'));
app.use(function(req,res,next){
    res.setHeader('Content-Type','text/html;charset=utf8');
    next();
});
app.get('/write',function(req,res){
    //1.普通设置
    //res.cookie('name','zfpx',{domain:'b.zfpx.cn'});

    //res.cookie('name','zfpx',{path:'/read'});

    //res.cookie('name','zfpx',{expires:new Date(Date.now()+20*1000)});
   //的20秒之后过期
    //res.cookie('isAdmin','no',{maxAge:20*1000});
    //设置cookie不能通过浏览器的JS访问
    //res.cookie('isAdmin','no',{httpOnly:true});
  //要对cookie进行加密
    res.cookie('isAdmin','no',{signed:true});
    res.end('ok');
});
app.get('/read',function(req,res){
    //console.log(req.cookies);
    var isAdmin = req.cookies.isAdmin;
    res.end(isAdmin=='yes'?'管理员':'普通用户');
});
app.get('/read1',function(req,res){
    console.log(req.cookies);//未加密的话有值
    console.log(req.signedCookies);//加密的话有值
    res.end('ok');
});


app.listen(9090);