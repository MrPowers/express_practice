[Creating a web server with node](https://youtu.be/Zao1BWC-RWo?t=7m24s)

```javascript
var http = require('http');
var myServer = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type" : "text/plain"});
  response.write("i like programming and stuff");
  response.end();
});

myServer.listen(3000);
```
