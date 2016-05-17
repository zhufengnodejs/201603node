var http = require('http');
var fs = require('fs');
var url = require('url');
var books = [{id:1,name:'javascript'},{id:2,name:'node.js'}];
http.createServer(function(req,res){
   var urlObj = url.parse(req.url,true);
   var pathname = urlObj.pathname;
   if(pathname == '/jsonp'){
      // res.setHeader('Access-Control-Allow-Origin','http://localhost:63342');
      /* res.statusCode = 404;
       res.end();*/
       var method = urlObj.query.xxx;
       res.end(method+'('+JSON.stringify(books)+')');
   }else{
       res.end('404');
   }
}).listen(9090);
