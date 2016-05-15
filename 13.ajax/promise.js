function Promise(){
    this._done = this._fail = this._always = function(){};
}
//成功回调
Promise.prototype.done = function(done){
    this._done = done;
    return this;
};
//失败的回调
Promise.prototype.fail = function(fail){
    this._fail = fail;
    return this;
};
//不管成功失败都会调用
Promise.prototype.always = function(always){
    this._always = always;
    return this;
};
var fs = require('fs');
function readFile(filename){
    var promise = new Promise();
    fs.readFile(filename,'utf8',function(err,data){
        if(err){
            promise._fail(err);
            promise._always(err);
        }else{
            promise._done(data);
            promise._always(data);
        }
    });
    return promise;
}

readFile('./1.txt').done(function(data){
    console.log('成功',data);
}).fail(function(err){
    console.log('失败',err);
}).always(function(result){
    console.log('always',result);
});
