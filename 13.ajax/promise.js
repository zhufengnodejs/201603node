function Promise(){
    this._done = this.fail = this.always = function(){};
}
//成功回调
Promise.done = function(done){
    this._done = done;
}
//失败的回调
Promise.fail = function(fail){
    this._fail = fail;
}
//不管成功失败都会调用
Promise.always = function(always){
    this._always = always;
}
var fs = require('fs');
function readFile(filename){
    var promise = new Promise();
    fs.readFile(filename,function(err,data){
        if(err){
            promise.
        }
    })
    return promise;
}
readFile('./1.txt').done(function(data){
    console.log('done',data);
}).fail(function(err){
    console.log('fail',err);
}).always(function(result){
    console.log('always',result);
});