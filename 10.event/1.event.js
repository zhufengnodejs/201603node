//var EventEmitter = require('events');
var EventEmitter = require('./events');
var e = new EventEmitter();
//执行一次回调就取消此监听的绑定
e.setMaxListeners(1);
e.on('click',function(thing){
    console.log('click.....',thing);
});
e.on('click',function(thing){
    console.log('click.....',thing);
});
e.on('mouseover',function(thing){
    console.log('click.....',thing);
});

//第一个参数是事件的名称，第二个参数是将要传递给监听 函数的参数
e.emit('click','按钮');
e.emit('click','按钮');