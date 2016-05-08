Buffer.concat = function (ary, length) {
  if(ary.length ==1){
      return arr[0];
  }
  if(!length){
      length = 0;
      ary.forEach(function(buf){
          length += buf.length;
      })
  }
  var result = new Buffer(length);
  var pos = 0;
  ary.forEach(function(buf){
       buf.copy(result,pos,0,buf.length);
       pos+=buf.length;
       if(pos >= length){
           return result;
       }
  })
  return result;
};
var sp1 = new Buffer([1, 2, 3]);
var sp2 = new Buffer([4, 5, 6]);
console.log(Buffer.concat([sp1, sp2], 3));
// GBK 国标扩
String.prototype.length;
console.log('中国'.length);//2
console.log(Buffer.byteLength('a国'));
//在unicode中，一个字符固定用4个字节表示
console.log(Math.pow(2,32)-1);
// utf8 utf16 utf32
// utf32 4个字节 32位来表示一个字符
// utf8 可变长度 用1-4个字节表示字符
