var express = require('express');
var url = require('url');
var util = require('util');
var app = express();

/*app.use(function(req,res,next){
  var urlObj = url.parse(req.url);
  req.path1 = urlObj.pathname;
  req.query1 = urlObj.query;
  var host = req.headers['host'].split(':');
  req.hostname1 = host[0];
  req.port1 = host[1];
    next();
});*/
//获取 请求中的参数
app.get('/',function(req,res){
   console.log(req.method);//请求的方法
   console.log(req.path);//请求的路径
   console.log(req.hostname);//请求主机名
    console.log(req.port);//请求端口号
    console.log(req.query);//请求的查询字符转成的对象
    res.end('hello');
});
//路径参数
app.get('/users/:id/:name',function(req,res){
    //req.params = {id:undefined,name:undefined}
    console.log(req.params.id,req.params.name);
    res.end(req.params.id+req.params.name);
});
/*app.use(function(req,res,next){
    res.send = function(body){
       var type = typeof body;
        if(type == 'object'){
            res.setHeader('Content-Type','text/html');
            res.end(util.inspect(body));
        }else if (type == 'number'){
            res.end(""+body);
        }
    }
});*/
app.get('/date',function(req,res){
    res.send(new Date());
    //res.send([{id:1},{id:2}]);
    //res.send({"id":2});
    //res.send(200);
    //res.sendStatus(200);//如果返回响应码的时候必须用
});
app.listen(9090);