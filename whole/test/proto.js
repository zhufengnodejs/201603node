var Teacher = function(){
    this.age = 7;
}
Teacher.prototype = {
    name:'zfpx'
}

var t = new Teacher();
console.log(t.name);
t.name = 'zfpx2';
console.log(t.name);