module.exports = function(app){
    app.get('/add',function(req,res){
        console.log(req.url);
        res.end('add article');
    });
}
