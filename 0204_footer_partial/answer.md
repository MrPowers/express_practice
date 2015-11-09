[View partials](https://youtu.be/Zao1BWC-RWo?t=55m)

Create the `views/partials/page/footers.ejs` file and add this content:

```html
<footer class="footer">
  I am a scary footer
</footer>
```

Update the `views/defaults.ejs` file to include the `footers.ejs` partial:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap 101 Template</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">

  </head>
  <body>
    <div class="container">
      <h1>Hello, world!</h1>

      <ul>
        <% for (var i = 0, l = users.length; i < l; i ++) { %>
          <li><%= users[i] %></li>
        <% } %>
      </ul>

      <% include partials/page/footer.ejs %>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>

  </body>
</html>
```

