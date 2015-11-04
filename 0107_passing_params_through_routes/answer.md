[Passing parameters through routes](https://youtu.be/Zao1BWC-RWo?t=39m27s)

Put this code in app.js:

```javascript
app.get('/who/:name?', function (req, res) {
  var name = req.params.name;
  res.send(name + ' is my name');
});
```

