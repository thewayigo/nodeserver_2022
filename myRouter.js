function route(pathname, handle, res){
    console.log('Routing request for' + pathname);
    if(typeof handle[pathname] === 'function'){  // handler가 제대로 들어갔다면 function 타입일것. 맞다면 그렇게 호출
        handle[pathname](res);
    }
    else{
        console.log('404 Not Found');
        res.writeHead(404,{'Content-Type': 'text/html'});
        res.write(sBody);
        res.end();

    }
}

exports.route = route;