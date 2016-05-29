var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
//存放会话数据 key卡号 value就是卡号对应的数据对象
var sessions = {};
//与客户端约定的会话ID
var KEY = 'key'
//当用户访问根目录的时候 执行对应的回调函数
app.get('*',function(req,res){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    console.log(req.query);
      var k = req.query.key;
      if(k){
          var sessionObj = sessions[k];
          if(sessionObj){
              //扣掉10块钱
              sessionObj.balance = sessionObj.balance -10;
              res.send('欢迎你老顾客，你卡上还剩'+sessionObj.balance);
          }
      }else{
          //由店家生成一个唯一的卡号
          var id = Date.now()+''+Math.random();
          //要在店家的小本上记录一下此卡号对应的余额
          sessions[id] = {balance:100};
          res.redirect(req.url+(req.url.indexOf('?')==-1?'?':'&')+'key='+id);
      }
});

app.listen(9090);
