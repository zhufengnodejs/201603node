var util = require('util');
function Person(name) {
    this.name = 'zfpx';
}
Person.prototype.eat = function () {
    console.log(this.name, '吃');
}
function Teacher(name) {
}

//原型继承, 只继承 prototype上的方法，不继承私有属性
util.inherits(Teacher, Person);

var t = new Teacher();
t.eat();


