var arr = [1,2,3];
arr.forEach(function(item,i,array){
    console.log(this.name);
},{name:'zfpx'});
/*

function each(arr,func,thisObj){
    for(var i=0;i<arr.length;i++){
        func.call(thisObj,arr[i],i,arr);
    }
}
each(arr,function(item,i,array){
    console.log(this.name,item,i);
},{name:'zfpx'});*/
