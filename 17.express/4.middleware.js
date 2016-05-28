var express = require('express');
var app = express();
//使用一个中间件
/**
 * req 请求对象
 * res 响应对象
 * next 是一个函数，如果调用表示继续执行下一个中间件或路由，如果不调用表示到此结束
 */
/**
 * 1.修改后的请求和响应可以继续往下传递
 * 2. 用来进行一些公用的设置和添加一些公用的方法
 * 3.每个中间件都 有权力选择继续执行还是就此终止
 */
app.use(function(req,res,next){
    res.setHeader('Content-Type','text/html;charset=utf-8');
   // res.end('oveer');
// 中间件有权限选择是否继续执行
    next();
});
app.get('/',function(req,res){
    console.log(res.getHeader('Content-Type'));
    res.end('欢迎来到首页');
});
app.get('/user',function(req,res){
    res.end('欢迎来到用户界面');
});

app.listen(9090);