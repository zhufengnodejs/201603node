var Controller = function(){
    this.name = "hello";
}
var c1 = new Controller();
var c2 = new Controller();
console.log(c1.name == c2.name);