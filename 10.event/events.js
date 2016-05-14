function EventEmitter(){
    this._events = {};
}
//注册监听函数
EventEmitter.prototype.on = EventEmitter.prototype.addListener = function(event,listener){
    //先判断此事件是否有人已经绑定过监听 了
    if(this._events[event]){
        //如果有人绑定过了，就追加此监听到当前事件对应的数组中
        this._events[event].push(listener);
    }else{
        //如果没有人绑定过，就让它等于此监听
        this._events[event] = [listener];
    }

}

EventEmitter.prototype.emit = function(event){
    //var args = Array.from(arguments).slice(1);
    var args = Array.prototype.slice.call(arguments,1);
    //如果已经为此事件绑定过监听
    if(this._events[event]){
        //那么把它们依次取出来执行
        this._events[event].forEach(function(listener){
            listener.apply(null,args);
        });
    }
}


module.exports = EventEmitter;