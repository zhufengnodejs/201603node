function first(a){
    console.log(a);
    function second(b){
        console.log(b);
    }
    second('b');
}
first('a');