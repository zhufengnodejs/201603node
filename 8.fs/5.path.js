var path = require('path');
//可以把多个路径拼成一个路径
console.log(path.join(__dirname,'a','b'));
/**
 * 从当前路径出发，得到一个绝对路径
 * .. 返回上一级目录
 * 字符串 当成下一级目录
 * / 当成根目录
 */
console.log(path.resolve('..','b','c'));
//获取文件名
console.log(path.basename(__filename,'.js'));
//5.path.js
//获取文件扩展名
console.log(path.extname(__filename));
//.js
//路径分隔符
console.log(path.sep);
//环境变量分隔符
console.log(path.delimiter);