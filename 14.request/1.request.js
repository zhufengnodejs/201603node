var http = require('http');
var options = {
    hostname: 'www.baidu.com',
    port: 80,
    headers: {name: 'zfpx'},
    path: '/',
    method: 'get'
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
request.write('hello');
request.end();//当调用end方法的时候才会真正向服务器发起请求

