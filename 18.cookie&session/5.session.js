var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
//存放会话数据 key卡号 value就是卡号对应的数据对象
var sessions = {};
//与客户端约定的会话ID
var SESSION_KEY = 'session.id'
//当用户访问根目录的时候 执行对应的回调函数
app.get('/',function(req,res){
    res.setHeader('Content-Type','text/html;charset=utf-8');
   // 1. 先取出cookie中的sessionId
    var sessionId = req.cookies[SESSION_KEY];
    // 如果有卡号的，也就是有ID的话 老顾客
    if(sessionId){
        //取出此卡号对应的信息，余额
        var sessionObj = sessions[sessionId];
        if(sessionObj){
            //扣掉10块钱
            sessionObj.balance = sessionObj.balance -10;
            res.send('欢迎你老顾客，你卡上还剩'+sessionObj.balance);
        }else{
            genId(res);
        }
    //如果没有的话就是新顾客
    }else{
        genId(res);
    }
    function genId(res){
        //由店家生成一个唯一的卡号
        var id = Date.now()+''+Math.random();
        //要在店家的小本上记录一下此卡号对应的余额
        sessions[id] = {balance:100};
        //把这个卡发给顾客带回家
        res.cookie(SESSION_KEY,id);
        //告诉 用户送他一张卡
        res.send('欢迎你新顾客，送你一张价值100元的剪发卡');
    }
});

app.listen(9090);
