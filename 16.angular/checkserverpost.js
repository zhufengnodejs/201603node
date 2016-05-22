var http = require('http');
var fs = require('fs');
var url = require('url');
var usernames = ['zhangsan','lisi'];
http.createServer(function(req,res){
   var urlObj = url.parse(req.url,true);
    var method = req.method;
    //客户端询问服务器端支持的方法
    res.setHeader('Access-Control-Allow-Origin','http://localhost:63342');
    //如果跨域发post请求，有请求体的时候，需要加响应头，表示允许 客户端发送Content-Type请求头
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    if(method == 'OPTIONS'){
        //服务器端告诉 客户端支持POST,PUT,GET
        res.setHeader('Access-Control-Allow-Methods','POST,PUT,GET');
        res.end(JSON.stringify({msg:'success'}));
    }else{
        req.setEncoding('utf8');
        var result = '';
        req.on('data',function(data){
            result+=data;
        });
        req.on('end',function(data){
            console.log(result);
            var username = JSON.parse(result).username;
            if(usernames.indexOf(username)==-1){
                res.end(JSON.stringify({msg:'success'}));
            }else{
                res.end(JSON.stringify({msg:'error'}));
            }
        });

    }


}).listen(9090);