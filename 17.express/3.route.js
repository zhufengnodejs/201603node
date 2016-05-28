var express = require('express');
// express是一个函数，调用可以得到app应用
var app = express();
var fs = require('fs');
//开闭原则 对扩展开放，对修改关闭  能添加新功能，不能修改老代码
// /user/add  /user/delete /user/update
// /goods/add /goods/delete /goods/update
app.get('*',function(req,res){
    var p = req.path;//pathname 路径名 端口号和问号中间的部分
   var parts = p.split('/');
   var model = require('./mvc/'+parts[1]);
    model[parts[2]](req,res);
});
app.listen(9090);