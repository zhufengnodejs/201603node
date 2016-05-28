var http = require('http');
var url = require('url');
var visit={

}
http.createServer(function(req,res){
  var urlObj = url.parse(req.url,true);
    //先得到pathname 路径名
  var pathname = urlObj.pathname;
  if(pathname == '/write'){
     res.setHeader('Set-Cookie','name=zpfx');
     res.end('write');
  }else if(pathname == '/read'){
     res.end(req.headers.cookie);
  }

}).listen(9090);