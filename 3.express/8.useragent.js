var express = require('express');
var parseUserAgent = require('user-agent-parser');
var counter = {
    mobile:0,
    nonMobile:0
}
var app = express();
app.use(function(req,res,next){
  req.userAgent = parseUserAgent(req.headers['user-agent']);
    next();
});
app.get('/',function(req,res){
    console.log(req.userAgent);
    //如果设备中的类型的是mobile的话那么就是移动端
    if(req.userAgent.device.type=='mobile'){
        counter.mobile = counter.mobile +1;
    }else{
        //否则就是非移动端
        counter.nonMobile = counter.nonMobile +1;
    }
        res.send(counter);
});


app.listen(9090);
