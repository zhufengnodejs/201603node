var http = require('http');
var server = http.createServer();
//监听客户端的请求，请求到来的时候执行回调函数
server.on('request',function(req,res){
  res.end('hello');
});
// 端口号是用来在区分在一台服务器上的不同服务的
server.listen(8080,'localhost');