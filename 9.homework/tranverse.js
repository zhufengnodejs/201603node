var fs  = require('fs');
var path  = require('path');
function tranverse(dir){
  console.log(dir);
  var files = fs.readdirSync(dir);
  files.forEach(function(file){
      var pathname = path.join(dir,file);
    var stat = fs.statSync(pathname);
     if(stat.isDirectory()){
         tranverse(pathname);
     }else{
         console.log(pathname);
     }
  });
}

tranverse('a');