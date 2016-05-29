var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/zfpx');
db.connection.on('error', function () {
    console.log('连接失败');
});

db.connection.on('open', function () {
    console.log('连接成功');
});
/**
 * Schem定义的是字段和类型
 */
var PersonSchema = new mongoose.Schema({
    name:{type:String},
    age:{type:Number,default:18},
    time:{type:Date,default:new Date()},
});
//根据 schema 生成一个model,它拥有操作数据库的能力
var personModel = db.model('person',PersonSchema);
/*
//实体表示的是某个文档
var personEntity = new personModel({
    name:'zfpx',
    age:20,
});
//保存到当前的数据库
personEntity.save(function(err,doc){
    if(err){
        console.log(err);
    }else{
        //保存成功之后的文档
        console.log(doc);
    }
});*/
//批量插入文档
/*for(var i=1;i<=10;i++){
    // create可用于新建一个文档
    personModel.create({name:'name'+i});
}*/

/*personModel.find({name:'name2'},function(err,docs){
    if(err){
        console.log(err);
    }else{
        console.log(docs);
    }
});*/
/*personModel.find({_id:'574ab7d79ff82808117acbf7'},function(err,docs){
    if(err){
        console.log(err);
    }else{
        console.log(docs);
    }
});*/

/*
personModel.update({name:'name3'},{$set:{age:100}},function(err,result){
    if(err){
        console.error(err);
    }else{
        console.log(result);
    }
});*/
/*
personModel.remove({
    age:{$lt:18}
},function(err,result){
    if(err){
        console.error(err);
    }else{
        console.log(result.result);
    }
});*/
/*

personModel.create([
    { name:"zfpx1", age:1 },
    { name:"zfpx2", age:2 },
    { name:"zfpx3", age:3 },
    { name:"zfpx4", age:4 },
    { name:"zfpx5", age:5 },
    { name:"zfpx6", age:6},
    { name:"zfpx7", age:7 },
    { name:"zfpx8", age:8 },
    { name:"zfpx9", age:9},
    { name:"zfpx10",age:10 }
], function(error,docs) {
    if(error) {
        console.log(error);
    } else {
        console.log('save ok');
    }
});*/
//根据ID进行查询
/*
personModel.findById('574abd9248dfd5f006a63ee5',function(err,doc){
    console.log(doc);
});

personModel.find({age:{$in:[4,5,6]}},function(err,doc){
    console.log(doc);
});*/

/*
personModel.find({},null,{skip:5,limit:2,sort:{
    age:-1
}},function(err,docs){
    console.log(docs);
});
*/

personModel.find({}).sort({age:-1}).skip(5).limit(2).exec(function(err,docs){
    console.log(docs);
});