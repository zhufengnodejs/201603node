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
//实体表示的是某个文档
var personEntity = new personModel({
    name:'zfpx',
    age:20,
});
//保存到当前的数据库
personEntity.save();