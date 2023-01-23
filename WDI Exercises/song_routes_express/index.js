var express = require('express');
var app = express();

app.listen(4000, function(){
  console.log("app listening on port 4000");
});

// songs#index
app.get('/songs', function (req, res) {
  res.send('GET index of Songs');
});
