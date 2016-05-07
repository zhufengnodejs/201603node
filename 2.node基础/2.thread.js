var a = 1;
var b = function(){
    while(true){}
    console.log('b');
}
var c = function(){
    console.log('c');
}
console.log(a);
b();
c();