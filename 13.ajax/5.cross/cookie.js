var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
// key 就是随机字符串
// value是一个数字
var visit = {

}
var count = 0;
http.createServer(function(req,res){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin','http://localhost:63342');
    res.setHeader('Access-Control-Allow-Credentials','true');

    if(req.url == '/ajax'){
        var cookie = req.headers.cookie;
        var cookieObj = querystring.parse(cookie);
        // {name:11222}
        if(cookieObj && cookieObj.name){
            visit[cookieObj.name] = visit[cookieObj.name]+1;
            res.end('你是'+visit[cookieObj.name]+'次访问');
        }else{
            var ts = count++;
            res.setHeader('Set-Cookie',"name="+ts);
            visit[ts] = 1;
            res.end('你是1次访问');
        }

    }
}).listen(9090);