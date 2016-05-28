module.exports = function(app){
    app.get('/addgoods',function(req,res){
        console.log(req.url);
        res.end('addgoods');
    });
}
