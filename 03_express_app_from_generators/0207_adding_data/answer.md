Add this to the `app.js` file:

```javascript
app.locals.appdata = require('./data.json');
```

`appdata` is now accessible in all the views.

We can add this code to `index.ejs`:

```html
<%= appdata.meeting.date %>, <%= appdata.meeting.time %> at <%= appdata.meeting.where.name %>
```

The appdata variable is available anywhere in our application.

