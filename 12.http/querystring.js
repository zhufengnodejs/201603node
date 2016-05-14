var querystring = require('querystring');
var str  = 'name==zfpx@age==6';
var obj = querystring.parse(str,'@','==');
console.log(obj);
console.log(querystring.stringify(obj,'@','=='));