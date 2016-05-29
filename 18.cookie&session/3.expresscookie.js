var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
//res.cookie 写入cookie
//req.cookies 读取cookie
app.use(cookieParser());

app.get('/write', function (req, res) {
    var cookie = req.cookies;
    if (cookie) {
        if (cookie.count) {
            var counts = parseInt(cookie.count) + 1;
            res.cookie('count', counts);
            res.end('第' + counts + '访问');
        } else {
            res.cookie('count', 1);
            res.end('第一次访问');
        }
    } else {
        res.cookie('count', 1);
        res.end('第一次访问');
    }
});


app.listen(9090);