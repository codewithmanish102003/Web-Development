//creating a server with http module
const http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{"content-Type":"text/html"})
    res.end("<h1>Hello World!</h1>")
}).listen(8080)