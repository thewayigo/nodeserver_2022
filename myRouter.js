const fs = require('fs');
const path = require('path');
const myHandler = require('./myHandler');

function route(pathname, handle, res,postData){
    console.log('Routing request for' + pathname);
    if(typeof handle[pathname] === 'function'){  // hadle이 넘어왔을때 pathname을 넣어서 함수이면 핸들을 처리 = index.js의 handle 객체의 해당함수 호출
        handle[pathname](res,postData);
    }
    else{
        pathFile = '.'+ pathname + '.html'; 
        if(fs.existsSync(pathFile)){
            console.log(pathFile + 'is found');
            myHandler.htmlFile(res,pathFile);
        }
        console.log('No handler for' + pathname);
        let Body = '404 Not Found';
        res.writeHead(404,{'Content-Type': 'text/html'});
        res.write(Body);
        res.end();

    }
}

exports.route = route;    //모듈.맴버 / 함수객체