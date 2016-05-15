var http = require('http');
var fs = require('fs');
var url = require('url');
var util = require('util');
http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    if(req.url == '/'){
        fs.createReadStream('./index.html').pipe(res);
    }else if(urlObj.pathname == '/su'){
       // 读取回调函数的方法名
       var cb = urlObj.query.cb;
       //读取关键字
       var wd = urlObj.query.wd;
       //构建参数对象
       var obj = {q:wd,p:false,s:[wd+1,wd+2,wd+3]};
        console.log(cb+'('+util.inspect(obj)+')');
       //拼最终返回的方法调用形式的字符串
       res.end(cb+'('+util.inspect(obj)+')');
    }
}).listen(9090);