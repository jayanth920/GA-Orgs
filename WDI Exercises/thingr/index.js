var express   = require("express");
var hbs       = require("express-handlebars");
var parser    = require("body-parser");
var mongoose  = require("./db/connection");
var app       = express();

var Thing     = mongoose.model("Thing");

app.use(parser.urlencoded({extended: true}));
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));

app.get("/", function(req, res){
  Thing.find().then(function(response){
    res.render("things-index", {
      things: response
    });
  });
});

app.get("/:name", function(req, res){
  Thing.findOne(req.params).then(function(response){
    res.render("things-show", {
      thing: response
    });
  });
});

app.post("/:name", function(req, res){
  Thing.findOneAndUpdate(req.params, req.body.thing, {new: true}).then(function(response){
    res.redirect("/" + response.name);
  });
});

app.listen(3002, function(){
  console.log("The server is alive! :)");
});
