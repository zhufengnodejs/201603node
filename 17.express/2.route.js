var express = require('express');
// express是一个函数，调用可以得到app应用
var app = express();
require('./routers/user.js')(app);
require('./routers/articles.js')(app);
app.listen(9090);