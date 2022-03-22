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

let handle = {};
handle['/'] = myHandler.start;
handle['/hello'] = myHandler.hello;

myServer.start(myRouter.route, handle); // 함수 호출