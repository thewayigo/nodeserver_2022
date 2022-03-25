const fs = require('fs');

function start(res){
    let Body = '<head><meta charset = "UTF-8"/></head>'
    Body += '<body><div>Hello world! <br> I am in the cloud class. </div><br>';
    Body += '<div><a href="/hello">hello 페이지</a> </div>' 
    Body += '<div><a href="/wait">5초 대기 페이지</a> </div>' 
    Body += '<div><a href="/randomWait">무작위 대기 페이지</a> </div>' 
    Body += '<div><a href="/firstHtml">HTML 읽는 페이지</a> </div>' 
    Body += '</body>'

    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write(Body);
    res.end(); 
}

function hello(res){
    let Body = 'This is my first web server';

    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write(Body);
    res.end(); 
}

function wait(res){
    setTimeout(function(){
        let Body = 'Thank you for waiting for 5 seconds.';

        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(Body);
        res.end(); 
    }, 5000);

}

function randomWait(res){
    let waitTime = Math.round(Math.random()*10000.);
    setTimeout(function(){
        let Body = 'Thank you for waiting for'+ waitTime+ 'ms.';

        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(Body);
        res.end(); 
    }, waitTime);

}

function htmlFile(res,file){
    Body = fs.readFileSync(file,'utf-8');
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write(Body);
    res.end(); 
    
}

function firstHtml(res){
    htmlFile(res,'./firstHtml.html');
}

exports.start = start;  // 함수 객체 등록
exports.hello = hello;
exports.wait = wait;
exports.randomWait = randomWait;
exports.firstHtml = firstHtml;
exports.htmlFile = htmlFile;