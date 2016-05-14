var url = require('url');
var str = 'http://user:pass@www.zfpx.cn:80/node/index.html?name=zfpx&age=8#top';
var urlObj = url.parse(str,true);
console.log(url.format(urlObj));