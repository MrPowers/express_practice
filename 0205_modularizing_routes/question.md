Refactor the following `app.js` file into routes.

```javascript
var express = require('express');
var app = express();

app.set("view engine", "ejs");

app.get('/', function(request, response) {
  response.render("default");
});

app.get('/about', function(request, response) {
  response.send("I like cheese");
});

app.listen(2500);
```

