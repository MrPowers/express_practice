var http = require('http');
var myServer = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type" : "text/html"});
  response.write("i like <strong>kung fu</strong> and <strong>DragonBall Z</strong>");
  response.end();
});

myServer.listen(3000);

console.log("Go to http://localhost:3000 on your browser");

