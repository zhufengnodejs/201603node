//定义一个函数
var zfpxCtrl = function($timeout,$inteval){
    $timeout(function(){
         console.log('timeout');
    },2000);
    $inteval(function(){
        console.log('$inteval');
    },2000);
}
//对象工厂
var register = {
    $timeout:function(cb,time){
        setTimeout(cb,time);
    },
    $inteval:function(cb,time){
        setInterval(cb,time)
    }
}
//自动注入此函数对应的参数，并且让此函数得以执行
var inject = function(fn){
    //分析 fn需要的参数 $timeout
    var result =  fn.toString()
        .match(/function\s\((.+)\)/)[1];
    console.log(result);
    // 需要从工厂中找到此参数对应的实例
    var args = result.split(',');
    var arr = [];
    for(var i=0;i<args.length;i++){
        arr.push(register[args[i]]);
    }
    //把此实例作为实参传入参数执行
    fn.apply(null,arr);
}
inject(zfpxCtrl);


