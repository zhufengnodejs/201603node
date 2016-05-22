var http = require('http');
var url = require('url');
//已经注册的用户
var usernames = ['zhangsan','lisi'];
http.createServer(function(req,res){
    //转成url对象
   var urlObj = url.parse(req.url,true);
    //请求的方法
    var method = req.method;
    //客户端询问服务器端支持的方法
    res.setHeader('Access-Control-Allow-Origin','http://localhost:63342');
    //如果跨域发post请求，有请求体的时候，需要加响应头，表示允许 客户端发送Content-Type请求头
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    //当复杂请求POST请求的时候，会先发OPTIONS请求，询问服务器接收的方法
    if(method == 'OPTIONS'){
        //服务器端告诉 客户端支持POST,PUT,GET
        res.setHeader('Access-Control-Allow-Methods','POST,PUT,GET');
        res.end(JSON.stringify({msg:'success'}));
    }else{//先设置编码
        req.setEncoding('utf8');
        var result = '';//设置空的结果
        req.on('data',function(data){//服务器端每接收一次数据会触发data事件，然后把得到的数据类加起来
            result+=data;
        });
        //当服务器接收完毕的时候 会触发 end事件
        req.on('end',function(){
            console.log(result);
            //把json字符串转成JSON对象
            var username = JSON.parse(result).username;
            if(usernames.indexOf(username)==-1){
                res.end(JSON.stringify({msg:'success'}));
            }else{
                res.end(JSON.stringify({msg:'error'}));
            }
        });

    }


}).listen(9090);