var express = require('express');
var path = require('path');
var app = express();
//指定模板引擎
app.set('view engine','ejs');
//设置模板的存放目录 绝对路径
app.set('views',path.join(__dirname,'views'));

app.get('/',function(req,res){
    //渲染模板
    /**
     * 1. 找到正确的模板，读取模板的内容
     * 2. 把模板里的变量替换掉
     */
   res.render('index',{
       title:'zfpx',
       count:3,
       word:'<h1>hello</h1>'
   });
});




app.listen(9090);