var fs = require('fs');
/*function readOneAndTwo(callback){
  fs.readFile('1.txt',function(err,one){
      fs.readFile('2.txt',function(err,two){
          callback(one,two);
      })
  })
}*/
/*
function readOneAndTwo(callback){
    var count = 0;//哨兵变量
    var _one;
    var _two;
    fs.readFile('1.txt','utf8',function(err,one){
        _one = one;
        if(count++ == 1){
            callback(_one,_two);
        }
    })
    fs.readFile('2.txt','utf8',function(err,two){
        _two= two;
        if(count++ == 1){
            callback(_one,_two);
        }
    })
}*/
/*
var EventEmitter = new require('events');
var event = new EventEmitter();
function readOneAndTwo(callback) {
    var obj = {};
    event.on('one',function(one){
        obj.one = one;
       /!* if(Object.keys(obj).length == 2){
            callback(obj.one,obj.two);
        }*!/
        if(obj.two){
            callback(obj.one,obj.two);
        }
    })
    event.on('two',function(two){
        obj.two = two;
       /!* if(Object.keys(obj).length == 2){
            callback(obj.one,obj.two);
        }*!/
        if(obj.one){
            callback(obj.one,obj.two);
        }
    })
    fs.readFile('1.txt', 'utf8', function (err, one) {
        event.emit('one', one);
    })
    fs.readFile('2.txt', 'utf8', function (err, two) {
        event.emit('two', two);
    })
}*/

/*
readOneAndTwo(function(one,two){
    console.log(one,two);
});*/
var Promise = require('bluebird');
function readFile(filename){
    return new Promise(function(resolve,reject){
        fs.readFile(filename,'utf8',function(err,data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    });
}
/*
readFile('1.txt').then(function(one){
    console.log(one);
    return readFile('2.txt');
}).then(function(two){
    console.log(two);
});*/
/*
function time1(){
    return new Promise(function(resolve,reject){
       setTimeout(function(){
           resolve('1');
       },3000)
    });
}
function time2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('2');
        },1000)
    });
}
Promise.all([time1(),time2()]).then(function(data) {
    console.log(data);
});*/


