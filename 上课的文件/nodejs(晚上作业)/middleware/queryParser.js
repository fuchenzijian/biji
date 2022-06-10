module.exports = function(req,res,next){
    //中间件；
    req.query = {
        username:'xiaoming',
        age:18
    };
    next();
}