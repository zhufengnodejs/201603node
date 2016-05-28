var express = require('express');
// express是一个函数，调用可以得到app应用
var app = express();
var fs = require('fs');
//开闭原则 对扩展开放，对修改关闭  能添加新功能，不能修改老代码
// /user/add  /user/delete /user/update
// /goods/add /goods/delete /goods/update
app.all('*',function(req,res){
    //先找到模块，然后加载，然后执行对应的动作函数
    var p = req.path;//pathname 路径名 端口号和问号中间的部分
    if(p == '/favicon.ico'){
        return res.end('404');
    }
    console.log(p);
    //把路径进行分隔 得到空字符串 模块名 方法名
   var parts = p.split('/'); //['','user','add']
    console.log(parts);
    //取出并加载模块
    var moduleName = parts[1];// user
   var model = require('./mvc/'+moduleName);
    console.log(model);//{add:function,delete:function,update:function}
    //调用模块中对应的方法进行处理
    var method = parts[2]; // add
    model[method](req,res);
});
app.listen(9090);