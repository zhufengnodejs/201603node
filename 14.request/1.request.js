var http = require('http');
var options = {
    hostname: 'localhost',//主机名
    port: 9090,//端口号
    headers: {name: 'zfpx'},//请求头
    path: '/node/index.html',//请求路径
    method: 'get'//方法名
}
//request 是一个可写流
var request = http.request(options, function (response) {
  // response 可读流
    var str = '';
    response.on('data',function(data){
        str+=data;
    });
    response.on('end',function(){
       console.log(str);
    });
});
request.write('hello');//写请求体
request.end();//当调用end方法的时候才会真正向服务器发起请求

