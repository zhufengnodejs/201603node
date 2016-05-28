var express = require('express');
var path = require('path');
var app = express();
//静态文件中间件
//static 会返回一个中间件函数
//接收一个静态文件存放的绝对目录作为参数
app.use(static(path.join(__dirname,'public')));
app.listen(9090);

function static(dirname){

}