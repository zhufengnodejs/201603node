function Person(){

}
var proto = {
    name:'1'
};
Person.prototype = proto;
Object.create = function(obj){
    var Temp = function(){

    }
    Temp.prototype = obj;
    return new Temp();
}
Person.prototype = Object.create(proto);
var p = new Person();
//console.log(p.__proto__ == );
p.__proto__.name = '2';
console.log(p.name);
console.log(proto.name);