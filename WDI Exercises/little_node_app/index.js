var express = require("express");
var app = express();
var mongoose = require("mongoose");

mongoose.connect("mongodb://" + (process.env.MONGODB_URL || "localhost/little_node"));

var Log = mongoose.model("Log", new mongoose.Schema({
  ip: String,
  time: String
}));

app.get("/", function(req, res){
  var log = new Log({
    ip: req.connection.remoteAddress,
    time: new Date().toString()
  });
  log.save(function(){
    Log.find({}, function(err, all){
      res.json(all.reverse());
    });
  });
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Listening!");
});
