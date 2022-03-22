const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = 8000;
const baseUrl = 'http://'+ hostname + ':' + port;

function start(route, handle){
    function onRequest(req,res){
        let sBody = 'Hello world! <br> I am in the cloud class.';
        
        console.log('Request receive');
        pathname = new url.URL(req.url, baseUrl).pathname   // 위에 url로 모듈을 하나 생성하고  URL 클레스를 새로운 객체 생성한다.
        route(pathname, handle, res);  // param으로 받은 route 는 myRouter에 선언된 func 'route'다. 해당 함수는 pathname을 인자로 받는다.


        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(sBody);
        res.end(); 
    }
    
    server = http.createServer(onRequest);
    server.listen(port, hostname);
    console.log('Server is running at' + baseUrl);
}


exports.start = start;