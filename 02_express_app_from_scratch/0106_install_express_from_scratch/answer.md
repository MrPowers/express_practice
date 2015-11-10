[Setting up an Express application](https://youtu.be/Zao1BWC-RWo?t=31m26s)

Create a folder for the node project

mkdir ~/Desktop/some_express_project

Run `npm init` to get the package.json file set up.

The package.json file should look something like this:

```javascript
{
  "name": "some_express_project",
  "version": "0.0.1",
  "description": "Manually building an Express app",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Matthew Powers",
  "license": "ISC"
}
```

Install Express (we already have it installed globally on our machines, but we also need to add it as a dependency of the application).

```
npm install express --save
```

Create an app.js file.  Add the following code.

```javascript
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Express');
});

var server = app.listen(3000, function () {
  console.log('listening on 3000');
});
```

Run the web server: node app.js

An additional route can be added as follows:

```javascript
app.get('/matthew', function (req, res) {
  res.send('My name is Matthew and I love this');
});
```





