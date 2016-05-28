var express = require('express');
var url = require('url');
var app = express();

app.use(function(req,res,next){
    //res.setHeader('','');
    //res.getHeader('');//获得的是服务器端通过setHeader写进去的响应头
    //取出请求头中的地址
    var host = req.headers.host;
    //获取主机名
    req.hostname = host.split(':')[0];
    //获取端口号
    req.port = host.split(':')[1]||80;
    var urlObj = url.parse(req.url,true);
    //获取路径
    req.path = urlObj.pathname;
    //获取查询字符串
    req.query = urlObj.query;
    next();
})
app.get('*',function(req,res){
    console.log(req.hostname);//主机名
    console.log(req.port);//端口号
    console.log(req.query);//查询字符串转成的对象
    console.log(req.path);//请求路径
    res.end('over');
});
app.listen(9090);