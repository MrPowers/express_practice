Make appdata available in the `routes/index.js` file:

```javascript
var appdata = require('../data.json');

router.get('/', function(req, res, next) {
  var artwork = [];
  appdata.speakers.forEach(function(speaker) {
    artwork = artwork.concat(speaker.artwork);
  });
  res.render('index', {
    title: 'Express',
    artwork: artwork
  });
});
```

Update `views/partials/content/artworklist.ejs`:

```html
<article class="artworklist">
  <h1>Artwork on display</h1>
  <div class="pixgrid">
    <ul>
      <% artwork.forEach(function(art) { %>
        <li><%= art %></li>
      <% }); %>
    </ul>
  </div>
</article>
```

