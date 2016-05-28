var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
//静态文件中间件
//static 会返回一个中间件函数
//接收一个静态文件存放的绝对目录作为参数
app.use(static(path.join(__dirname, 'public')));
app.get('/hello',function(req,res){
    res.end('hello');
});
app.listen(9090);

function static(dirname) {
    /*
     1.得到要请求的文件绝对路径
     2.把文件内容读出来返回给客户端
     */
    return function (req, res, next) {
        // 得到文件的绝对路径
        // 返回文件 给客户端
        //得到此文件的绝对路径=静态文件绝对目录+文件路径
        var fileName = path.join(dirname, req.path);
        //判断文件是否存在
        fs.exists(fileName,function(exists){
            //如果有这样的一个文件
            if(exists){
                //把文件把硬盘上读出来
                fs.readFile(fileName,function(err,data){
                    res.send(data);//写给客户端 写到响应中去
                })
            }else{
                //如果不是一个存在的文件，调用next交由下面的中间件或路由处理
                next();
            }
        })
    }

}