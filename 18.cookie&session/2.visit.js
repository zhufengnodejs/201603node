var http = require('http');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(req,res){
  var urlObj = url.parse(req.url,true);
    //先得到pathname 路径名
  var pathname = urlObj.pathname;
    res.setHeader('Content-Type','text/html;charset=utf8');
  if(pathname == '/visit'){
      //获取客户端发送给服务器的cookie值
      var cookie = req.headers.cookie;
      //如果cookie有值，已经访问过，种植过cookie
      if(cookie){
         //取出原来的cookie值并转成对象
          var cookieObj = querystring.parse(cookie);
          //在原来的基础上加1
          var newVisit = parseInt(cookieObj.visit) + 1;
          //重新写回到客户端
          res.setHeader('Set-Cookie','visit='+newVisit);
          res.end('欢迎你第'+newVisit+'次访问');
        res.end(cookie);
      //如果cookie没有值，没有访问过没有种植过
      }else{
        res.setHeader('Set-Cookie','visit=1');
        res.end('欢迎你第一次访问');
      }
  }else{
      res.end('404');
  }

}).listen(9090);