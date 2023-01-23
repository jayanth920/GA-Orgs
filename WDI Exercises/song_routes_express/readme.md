# Pair and Share: Write basic CRUD routes for a Song. (15 min)

Following RESTful conventions, write basic CRUD routes for a Song.  Just the route, returning a helpful "tracer bullet" message.

Like this...

``` javascript
var express = require('express');
var app = express();

// songs#index
app.get('/songs', function (req, res) {
  res.send('GET index of Songs');
});
```


## Bonus:  
Add the views for your Song.  Feel free to use any supported templating engine.
