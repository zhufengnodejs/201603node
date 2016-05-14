var http = require('http');
var url = require('url');
var server = http.createServer();
//监听客户端的请求，请求到来的时候执行回调函数

//http://user:pass@www.zfpx.cn:80/node/index.html?name=zfpx#top
server.on('request',function(req,res){
  var urlObj = url.parse(req.url);
  console.log(urlObj.pathname);//路径名
  console.log(urlObj.query);//查询字符串对象
  console.log(req.headers);

  res.write('hello');//定入响应
  res.end('world');//写入响应并结束
});
// 端口号是用来在区分在一台服务器上的不同服务的
server.listen(8080);