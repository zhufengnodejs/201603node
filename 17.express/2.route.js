var express = require('express');
// express是一个函数，调用可以得到app应用
var app = express();
var fs = require('fs');
//开闭原则 对扩展开放，对修改关闭  能添加新功能，不能修改老代码
fs.readdir('./routers',function(err,files){
    if(err){
        return console.error(err);
    }else{
        files.forEach(function(file){
            console.log(file);
            require('./routers/'+file)(app);
        })
    }

})
app.listen(9090);