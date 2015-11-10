Import the data into your application if you haven't done so already, by updating `app.js`:

```javascript
app.locals.appdata = require('./data.json');
```

Update the `socialmedia.ejs` file as follows:

```html
<ul class="group">
  <% appdata.social.forEach(function(item) { %>
    <li>
      <a href="<%= item.url %>"><img class="icon" src="<%= item.img %>" alt="icon for <%= item.shortname %>" /></a>
    </li>
  <% }); %>
</ul>
```

