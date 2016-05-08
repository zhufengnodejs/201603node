//多次require一个模块后会得到同一个模块
//require.cache 放的是模块的缓存
//console.log(Object.keys(require.cache));
//得到模块的绝对路径
//resolve的时候并不会真正执行或加载 这个模块，只是分析路径页矣
console.log(require.resolve('./math.js'));
console.log('loading');
var add1 = require('./math.js');
console.log(typeof add1);
//console.log(require.cache);
//delete require.cache[require.resolve('./math.js')];
var add2 = require('../5.module/math.js');
//console.log(Object.keys(require.cache));
console.log(add1 === add2);