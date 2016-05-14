var http = require('http');
var url = require('url');
var fs = require('fs');
var mime = require('mime');
mime.lookup('dfsds.css')
var server = http.createServer();
//监听客户端的请求，请求到来的时候执行回调函数

//http://user:pass@www.zfpx.cn:80/node/index.html?name=zfpx#top
server.on('request',function(req,res){
    var urlObj = url.parse(req.url);
    var pathname = urlObj.pathname;
    if(pathname=='/'){
        //设置响应头
        res.setHeader('Content-Type',mime.lookup('index.html'));
        fs.readFile('./index.html',function(err,data){
            res.end(data);
        })
    }else{
        fs.exists('.'+pathname,function(exists){
            if(exists){
                res.setHeader('Content-Type',mime.lookup(pathname));
                fs.readFile('.'+pathname,function(err,data){
                    res.end(data);
                })
            }else{
                res.setHeader('Content-Type','text/plain;charset=utf-8');
                res.end('你要的东西我没有');
            }
        })

    }

});
// 端口号是用来在区分在一台服务器上的不同服务的
server.listen(8080);