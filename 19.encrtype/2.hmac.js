var crypto = require('crypto');
/**
 * hmac 基本于密钥的摘要算法
 * 提供一个哈希算法和密钥
 **/
var s = crypto.createHmac('sha256','secret')
.update('123456').digest('hex');
console.log(s);

// s:no.jn9xUFHHG5Cxfx26vN3teE9ob4tegMGgNJzX2gTIjm0

var sign = function(val,secret){
    return 's:'+val+'.'+
        crypto.createHmac('sha256',secret)
    .update(val).digest('base64').replace(/\=+$/,'');
}
console.log(sign('no','zfpx'));
//从客户端传过来的进行解密，如果未被，返回值，如果被 篡改了，那么返回undefined
var unsign = function(val,secret){
  var str = val.slice(2,val.indexOf('.'));
  var mac =   sign(str,secret);
  return mac == val?   str:undefined;
}
var client = 's:no.jn9xUFHHG5Cxfx26vN3teE9ob4tegMGgNJzX2gTIjm0';
console.log(unsign(client,'zfpx'));
