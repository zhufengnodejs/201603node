var express = require('express');
var querystring = require('querystring');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
//extended=true会用querystring 模块把请求体转成对象
//extended=false 会用bodyParser自己编写方法把请求体转成对象
app.use(bodyParser.urlencoded({extended:true}));
/*app.use(function(req,res,next){
    var str = '';//先得到空字符串
    req.setEncoding('utf8');//设置请求流中的编码
    req.on('data',function(data){//当监听 到data数据之后
        str+=data;//累加数据
    });
    req.on('end',function(){//当接收完毕的时候
        //得到内容类型
        var contentType = req.headers['content-type'];
        //如果是请求体的类型是urlencoded的话querystring来转成对象
        if(contentType == 'application/x-www-form-urlencoded'){
            req.body = querystring.parse(str);
            //如果是json的话由JSON来转成对象
        }else if(contentType == 'application/json') {
            req.body = JSON.parse(str);
        }
        next();
    });
});*/
app.post('/reg',function(req,res){
    console.log(req.body);
        res.send(req.body);//在路由中输出请求体
});


app.listen(9090);