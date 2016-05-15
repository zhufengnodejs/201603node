var max = function(){
    var maxes =[
        function(){
            return 3;
        },
        function(){
            return 5;
        },
        function(){
            return 2;
        },
    ]
    var number = maxes[0]();//默认这是最大的数
    var maxFn= maxes[0];//返回最大数的函数
    for(var i=1;i<maxes.length;i++){
        if(maxes[i]()>number){
            number = maxes[i]();
            maxFn = maxes[i];
        }
    }
    max = maxFn;
    return number;
}
console.log(max());
console.log(max());