//一个字节表示的范围是0-255之间
var sum =0;
for(var i=0;i<8;i++){
    sum += Math.pow(2,i);
}
console.log(sum);
console.log(Math.pow(2,8)-1);