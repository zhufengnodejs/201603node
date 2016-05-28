var express = require('express');
// express是一个函数，调用可以得到app应用
var app = express();
var fs = require('fs');
fs.readdir('./routers',function(err,files){
    if(err)
    console.error(err);

    files.forEach(function(file){
        console.log(file);
        require('./routers/'+file)(app);
    })
})
app.listen(9090);