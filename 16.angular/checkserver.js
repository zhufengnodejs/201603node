var http = require('http');
var fs = require('fs');
var url = require('url');
var usernames = ['zhangsan','lisi'];
http.createServer(function(req,res){
   var urlObj = url.parse(req.url,true);
   var username = urlObj.query.username;
    //如果跨域的话需要加这样一个响应头
    res.setHeader('Access-Control-Allow-Origin','*');
   if(usernames.indexOf(username)==-1){
       res.end(JSON.stringify({msg:'success'}));
   }else{
       res.end(JSON.stringify({msg:'error'}));
   }

}).listen(9090);