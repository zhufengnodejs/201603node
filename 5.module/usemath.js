//多次require一个模块后会得到同一个模块
//require.cache 放的是模块的缓存
console.log(Object.keys(require.cache));
//得到模块的绝对路径
//console.log(require.resolve('./math.js'));
var add1 = require('./math.js');
//console.log(require.cache);
delete require.cache[require.resolve('./math.js')];
var add2 = require('./math.js');
console.log(Object.keys(require.cache));
console.log(add1 === add2);