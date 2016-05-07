//这是一个私有变量，只能在本模块内访问，外界不能访问
/**
 * 1.挂在global 下面的属性能直接用
 * 2.
 */
// id 如果当前模块是入口模块的话， . 否则 是此模块的绝对路径
//filename 此模块的绝对路径
//console.log(module);

//function math(exports,require,module,__filename,__dirname){
//    var exports = module.exports;
//--------------------------
    //console.log(exports === module.exports);
    console.log('exec....');
    var add = (a,b) => a+b;
    module.exports = add;
//--------------------------
//    return module.exports;
//}



