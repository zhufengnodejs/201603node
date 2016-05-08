/**
 * Buffer的长度需要提高确定，不能修改
 * Buffer类似于数组，因为它由元素组成，有长度。
 * 它里面只能放字节
 */
var length = 5;
var buf1 = new Buffer(length);
//赋值  开始和结束索引包前不包后
buf1.fill(11,0,2);//10进制
buf1[2] = 0xff; // 16进制
buf1[3] = 17; // 0x 11 10进制
//buf1[4] = 011; // 9 八进制
//buf1[4] = 514; // 514%256
console.log(buf1);

//通过数组来创建 = 指定大小 并自动赋值
var buf2 = new Buffer([1,2,3,4,5]);
console.log(buf2);

//node 默认的编码是utf8
//utf8编码里一个汉字占3个字节
var buf3 = new Buffer('珠峰培训','utf8');
console.log(buf3);
//buffer转字符串
console.log(buf3.toString('utf8',0,6));

var sp1 = new Buffer([0xe7,0x8f,0xa0]);
var sp2 = new Buffer([0xe5,0xb3,0xb0]);
// 要合并的buffer数组 合并后的buffer最大长度
var result = Buffer.concat([sp1,sp2],6);
console.log(result.toString('utf8')); //珠

var src = new Buffer([4,5,6]);
var target = new Buffer(6);
target.fill(1,0,1);
target.fill(2,1,2);
target.fill(3,2,3);
src.copy(target,3,0,3);
console.log(target);