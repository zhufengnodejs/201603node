var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();
//指定模板引擎
app.set('view engine','ejs');
//设置模板的存放目录 绝对路径
app.set('views',path.join(__dirname,'views'));
app.use(function(req,res,next){
    res.render = function(filename,data){
        if(filename.indexOf('.')==-1){//没写后缀
            filename = filename+'.'+app.get('view engine');
        }
        console.log(filename);
        var views = app.get('views');//得到模板的存放目录
        var file = path.join(views,filename);//得到模板的路径
        console.log(file);
        //异步的方式读取文件的内容
        fs.readFile(file,'utf8',function(err,content){
            content = content.replace(/<%=(\w+)%>/g, function (matched, group1) {
                // return data['title'];
               return data[group1];
            });
            console.log(content);
            res.send(content);
        });
    }
    next();
});
app.get('/',function(req,res){
    //渲染模板
    /**
     * 1. 找到正确的模板，读取模板的内容
     * 2. 把模板里的变量替换掉
     *
     * 1. = 表示把变量转义后输出
     * 2. - 表示把变量渲染成真实HTML内容
     */
   res.render('index',{
       title:'zfpx',
       count:3,
       word:'<h1>hello</h1>',
       books:['node.js','javascript','js']
   });
});




app.listen(9090);