[Passing multiple parameters through routes](https://youtu.be/Zao1BWC-RWo?t=40m51s)

```javascript
app.get('/weird/:name/:title', function (req, res) {
  var name = req.params.name;
  var title = req.params.title;
  res.send('My name is ' + name + ' and my title is ' + title);
});
```

This is an example route: http://localhost:3000/weird/frank/mister
