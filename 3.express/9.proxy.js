var express = require('express');
var proxy = require('http-proxy').createProxyServer();
var app = express();
function proxyPass(config){
    return function(req,res,next){
        //把当前请求交由目标应用服务来处理
        proxy.web(req,res,{
            target:config[req.headers['host'].split(':')[0]]
        });
    }
}
app.use(proxyPass({
    'zhaoxin.zfpx.cn':'http://localhost:3000',
    'luoying.zfpx.cn':'http://localhost:4000'
}));

var app3000 = express();
app3000.get('/',function(req,res){
    res.send('zhaoxin');
});
app3000.listen(3000);
var app4000 = express();
app4000.get('/',function(req,res){
    res.send('luoying');
});
app4000.listen(4000);
app.listen(80);