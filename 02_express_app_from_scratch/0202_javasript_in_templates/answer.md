app.js

```javascript
app.get('/', function (req, res) {
  res.render('default', {
    petName: "scooby",
    users: ['li li', 'phung', 'ralph', 'dan']
  });
});
```

views/default.ejs

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
<p>My dog is named <%= petName %> </p>
<ul>
  <% for (var i = 0, l = users.length; i < l; i ++) { %>
    <li><%= users[i] %></li>
  <% } %>
</ul>

</body>

</html>
```
