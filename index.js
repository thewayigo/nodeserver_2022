// const http = require('http');

// function onRequest(req,res){
//     res.writeHead(200,{'Content-Type': 'text/html'});
//     res.write('Hello,world!');
//     res.end(); 
// }

// server = http.createServer(onRequest);
// server.listen(8000,'localhost');
// console.log('Server is running at http://localhost:8000');

const myServer = require('./myServer'); // myServer의 export 불러오기
const myRouter = require('./myRouter');
const myHandler = require('./myHandler');

let handle = {}; // handle을 객체로 생성하고 
handle['/'] = myHandler.start;  // 이런 방식으로 맴버를 추가한다
handle['/hello'] = myHandler.hello;
handle['/wait'] = myHandler.wait;


myServer.start(myRouter.route, handle); // 함수 호출 , 서버 스타트