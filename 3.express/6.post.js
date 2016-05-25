var express = require('express');
var querystring = require('querystring');
var bodyParser = require('body-parser');
var app = express();
//使用这个中间件之后，此中间件会把请求体转成对象赋给req.body
app.use(bodyParser.json());
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
app.post('/reg',function(req,res){
    console.log(req.body);
    res.send(req.body);
});

app.listen(9090);