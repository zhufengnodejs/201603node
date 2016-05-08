console.log(module.paths);
/**
 * 1. 如果加载的不是一个路径的话，那么它或者是一个
 * 核心模块，或者是一个第三方模块
 * 2. 先取出module.paths中的第一个路径 ，跟当前模块同级的node_modules文件夹
 * 3. 尝试把它作为模块直接加载
 * 4. 找不到会尝试添加后缀 js json 去查找
 * 5. 会把person当成一个包来处理
 * 6. 先把package.json中的main对应的模块进行加载
 * 7.如果没有package.json或者没有main配置项尝试把index.js index.json文件进行加载。
 *
 *
 *
 * @type {exports|module.exports}
 */
var person = require('person');
console.log(person);