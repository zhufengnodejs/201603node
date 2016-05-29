var str = 'visit=38; age=7';
var querystring = require('querystring');
var obj = querystring.parse(str,'; ');
console.log(obj.visit);