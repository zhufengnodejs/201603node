var express = require('express');
var app = express();
app.use(function(req,res,next){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    next();
});
app.use('/user/:age',function(req,res,next){
  var age = parseInt(req.params.age);
  if(age>=18){
      next();
  }else{
      res.end('你少于18岁.');
  }
});
/*
  写一个程序
  1.可以接受路径参数
  2. 判断路径参数的age属性是否大于18，如果大于18则继续执行，小于等于18则返回太小了
 */
//路由配置 :age是路径参数 小括号里面是对参数的正则描述
app.get('/user/:age(\\d{1,3})',function(req,res){
    //当配置了路径参数之后，req上会多一个params的属性，它的key是冒号后面的字符串，值就是真正请求的时候传过来的字符串
  console.log(req.params);
  res.end('你已经成年了');
});
//路径也可以写成正则表达式，正则中还可以有分组
//分组可以通过req.params得到,它是一个数组
app.get(/\/goods\/(\d+)\/(\w+)/,function(req,res){
    //当配置了路径参数之后，req上会多一个params的属性，它的key是冒号后面的字符串，值就是真正请求的时候传过来的字符串
    console.log(req.params);
    console.log(req.params[0],req.params[1]);
    res.end('你已经成年了');
});


app.listen(9090);