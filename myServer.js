const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = 8000;  
const baseUrl = 'http://'+ hostname + ':' + port;



function start(route, handle){    // 자바에서는 function(객체or함수)를 하나의 class로 보면 된다. 그 객체 안에 다른 함수들도 들어갈 수 있다. 
    function onRequest(req,res){
        let sBody = 'Hello world! <br> I am in the cloud class.';
        
        console.log('Request receive');
        pathname = new url.URL(req.url, baseUrl).pathname   // 위에 url로 모듈을 하나 생성하고  URL 클레스를 새로운 객체 생성한다.
        let postData = ''
        req.setEncoding('utf-8');
        req.addListner('data',function(chunk){
            postData += chunk;
            console.log('chunk:'+ chunk);
        });
        req.addListner('end',function(){
            route(pathname, handle, res,postData); 
        }) 
        route(pathname, handle, res);  // param으로 받은 route 는 myRouter에 선언된 func 'route'다. 해당 함수는 pathname을 인자로 받는다.


        // res.writeHead(200,{'Content-Type': 'text/html'});
        // res.write(sBody);
        // res.end(); 
    }
    //1. start 함수가 시작 부분 
    server = http.createServer(onRequest);  // 위에 선언된 onRequest 호출 = requestListner 
    server.listen(port, hostname);
    console.log('Server is running at '  + baseUrl);
}


exports.start = start; //  start(우)라는 객체를 모듈 아래 맴버인 start(좌)에 집어넣은 것. 