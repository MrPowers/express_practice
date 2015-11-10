[Video answer](https://www.youtube.com/watch?v=yREQlzQOrGE)

Refactor the `app.js` file as follows:

```javascript
var express = require('express');
var app = express();
var routes = require('./routes');

app.set("view engine", "ejs");

app.get("/", routes.index);
app.get("/about", routes.abut);

app.listen(2500);
```

Create a `routes/index.js` file.

```javascript
exports.index = function(request, response) {
  response.render("default");
}

exports.about = function(request, response) {
  response.send("I like cheese");
}
```
