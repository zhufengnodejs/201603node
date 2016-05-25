var express = require('express');
var app = express();
function checkLanguage(languages){
   //返回一个中间件函数
    //得到客户端期望的语言 和 服务器端能够 提供的语言进行协商
  return function(req,res,next){
      //en,zh-CN;q=0.8,zh;q=0.6
     var acceptLanguages = req.headers['accept-language'];
      //对这些语言进行排序
      var lan = acceptLanguages.split(',').map(function(language){
          //分割出语言名称和权重
          var parts = language.split(';q=');
          return {name:parts[0].toLowerCase(),q:parts[1]||1}
          //再过滤掉服务器端不能提供的语言
      }).filter(function(language){
        return languages.indexOf(language.name) !=-1
       //再按照权重进行倒排序
      }).sort(function(a,b){
          return b.q-a.q;
       //转成语言数组
      }).map(function(language){
          return language.name;
      })[0];//最后得到一个倒序的，服务器一定有的，语言名称组成的数组
      res.acceptLanguage = lan||languages[0];
      next();
  }
}

//使用中间件 传入服务器端能够提供的语言类型
app.use(checkLanguage(['en','zh']));

app.get('/',function(req,res){
   //1.服务器和客户端确定最终的语言类型
    res.setHeader('Content-Language',res.acceptLanguage);
   //2.返回对应的语言的页面
    res.sendFile(require('path').join(__dirname,res.acceptLanguage,'index.html'));
});


app.listen(9090);