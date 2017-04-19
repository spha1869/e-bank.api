var http = require('http');
http.Createsrever(function(req, res){
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('hello world\n');
}).listen(8000,'0.0.0.0');

console.log('Serving http on 0.0.0.0 port 8000 (http://0.0.0.0:8000/)')