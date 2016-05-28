module.exports = function(app){
    app.get('/reg',function(req,res){
        console.log(req.url);
        res.end('reg');
    });
}
