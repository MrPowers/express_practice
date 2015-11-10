[Using templates](https://youtu.be/Zao1BWC-RWo?t=43m23s)

Add the ejs dependency:

```
npm install ejs --save
```

Update the route in app.js:

```javascript
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('default');
});
```

Add the template (/views/default.ejs):

```html
<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>The HTML5 Herald</title>
  <meta name="description" content="The HTML5 Herald">
  <meta name="author" content="SitePoint">

</head>

<body>

<h1>I like coffee</h1>
<p>This is some text</p>

</body>

</html>
```

