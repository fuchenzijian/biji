const http = require('http');
const Middleware = require('./middleware')

class Express {
    constructor() {
        this.app = this.createServer();
        this.middleware = new Middleware();
    }

    createServer() {
        return http.createServer((req, res) => {
            this.run(req,res);
            console.log(req.query)  //{username:xiaoming,age:18}
            res.end('hello world')
        })
    }

    use(middleware){
        this.middleware.addSub(middleware)
    }

    run(req,res) {
        let arr = this.middleware.subs.slice();
        let next = () => {
            let middleware = arr.shift();
            if (middleware) {
                middleware(req,res,next);
            }
        }
        next();
    }

    listen(port, callback) {
        this.app.listen(port, callback);
    }
}

function express() {
    return new Express();
}

module.exports = express;