const http = require('http');

const server = http.createServer(function setup(request, response) {
    response.end("Hello, world!");   
});

server.listen(3000, function serverLog() {
    console.log("Server up at 3000");
});