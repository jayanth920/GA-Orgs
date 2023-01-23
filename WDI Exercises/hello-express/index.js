var express = require("express");
var app = express();

// sets view engine to hbs
app.set("view engine", "hbs");

// request and response
app.get("/", function(req, res){
  res.send("Hello World");
});

app.get("/:name",function (req,res){
  res.render("hello", {
    name: req.params.name
  });
});

// which port number to listen for
app.listen(3500, function(){
  console.log("app listening at http://localhost:3500/");
});
