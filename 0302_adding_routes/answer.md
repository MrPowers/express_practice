Update the `app.js` file:

```javascript
router.get('/speakers', function(req, res) {
  var artwork = [];
  appdata.speakers.forEach(function(speaker) {
    artwork = artwork.concat(speaker.artwork);
  });
  res.render('speakers', {
    title: 'Express',
    artwork: artwork
  });
});
```

Create a `views/speakers.ejs` file.

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
    <% include partials/template/head.ejs %>
  <body>
    <% include partials/template/header.ejs %>
    <section class="layout">
      <div class="primary">
        <% include partials/content/speakerslist.ejs %>
      </div>
      <aside class="secondary">
        <% include partials/content/nextmeeting.ejs %>
        <% include partials/content/artworklist.ejs %>
      </aside>
    </section>
    <% include partials/template/footer.ejs %>

    <% include partials/template/jsdefault.ejs %>
  </body>
</html>
```


