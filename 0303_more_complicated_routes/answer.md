```javascript
router.get('/speakers/:speakerid', function(req, res) {
  var artwork = [];
  appdata.speakers.forEach(function(item) {
    if (item.shortname == req.params.speakerid) {
      artwork = artwork.concat(item.artwork);
    }
  });
  res.render('speakers', {
    title: 'Express',
    artwork: artwork
  });
});
```
