const http = require('http');

const hostname = 'localhost';
const port = 8000;
const baseUrl = 'http://'+ hostname + ':' + 8000;

function start(){
    function onRequest(req,res){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write('Hello,world!');
        res.end(); 
    }
    
    server = http.createServer(onRequest);
    server.listen(port, hostname);
    console.log('Server is running at' + baseUrl);
}


exports.start = start;