//var EventEmitter = require('events');
var EventEmitter = require('./events');
var e = new EventEmitter();
e.on('click',function(thing){
    console.log('click.....',thing);
});
e.on('click',function(thing){
    console.log('click.....',thing);
});
//第一个参数是事件的名称，第二个参数是将要传递给监听 函数的参数
e.emit('click','按钮');