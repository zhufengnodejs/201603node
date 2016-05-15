var http = require('http');
var options = {
    host: 'localhost',//主机名
    port: 9090,//端口号
    headers: {'Content-Type': 'application/json'},//请求头
    path: '/node/index.html',//请求路径
    method: 'post'//方法名
}
//request 是一个可写流
var req = http.request(options, function (response) {
    //设置编码
    //response.setEncoding('utf8');
    //response 可读流
    var str = '';
    response.on('data',function(data){
        str+=data;
    });
    response.on('end',function(){
       console.log(str);
    });
});
req.write(JSON.stringify({name:'zfpx'}));//写请求体
req.end();//当调用end方法的时候才会真正向服务器发起请求

