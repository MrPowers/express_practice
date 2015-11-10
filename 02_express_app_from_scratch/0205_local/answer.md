[Video answer](https://www.youtube.com/watch?v=8UKkotzKcOY)

Update the `app.js` file as follows:

```javascript
var express = require('express');
var app = express();

app.set("view engine", "ejs");

app.locals.favoritePokemon = "jigglypuff";

app.get('/', function(request, response) {
  response.render("default");
});

app.listen(2500);
```

Update the `default.ejs` file:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Express Tutorial App</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">

  </head>
  <body>
    <div class="container">
      <h1>I like Express</h1>
      <p>But studying is annoying and tedious</p>
      <p>My favorite pokemon is <%= favoritePokemon %></p>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
  </body>
</html>
```

