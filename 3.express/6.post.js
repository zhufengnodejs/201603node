var express = require('express');
var querystring = require('querystring');
var bodyParser = require('body-parser');
var app = express();
//使用这个中间件之后，此中间件会把请求体转成对象赋给req.body
//它会处理请求头中content-type= application/json请求
app.use(bodyParser.json());
//extended为true时候会用node自带的querystring 把查询字符串转成对象
// false的时候，会用bodyParser自己写的转换函数
//它会处理请求头中content-type=application/x-www-form-urlencoded请求
app.use(bodyParser.urlencoded({extended:true}));
app.post('/reg',function(req,res){
    console.log(req.body);
    res.send(req.body);
});
//表示此路由会接收post方法
/*app.post('/reg',function(req,res){
    //
    req.body = '';//name=zfpx&age=7
    req.on('data',function(data){
        req.body += data;
    });
    req.on('end',function(){
        req.body = querystring.parse(req.body);
        console.log(req.body);
        res.send(req.body);
    });
});*/


app.listen(9090);