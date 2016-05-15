/**
 * 建一个HTTP服务器
 * 当用户请求的时候，会实时抓取百度百家的文章列表并渲染模板并返回给客户端
 */
    //<a href="http://yiqipaidianying.baijia.baidu.com/article/453114" target="_blank" mon="col=13&amp;pn=10">谁说青春片不行了?中国市场一年需要20部青春片！</a>
var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
  var request = http.request({
      host:'baijia.baidu.com',
      path:'/',
      method:'get'
  },function(response){
      var str = '';
    response.on('data',function(data){
      str += data;
    });
    response.on('end',function(){
        var reg = /<a href=".+" target="_blank" mon="col=\d+&pn=\d+">.+<\/a>/g;
        var result = str.match(reg);
        var content = '<ul>';
        for(var i=0;i<result.length;i++){
            content+= '<li>'+result[i]+'</li>';
        }
        content += '</ul>';
        var html = fs.readFileSync('./index.html','utf8');
        html = html.replace('{{news}}',content);
        res.end(html);
    });

  })
    request.end();//直接发送请求
}).listen(9090);
