// backend
// require mongoose (the orm)
var mongoose = require("mongoose");
// connect to mongo
mongoose.connect("mongodb://localhost/students")
// define model
var Student = mongoose.model("Student",{
  name: String
});
// seed data
var s1 = new Student({name:"Teddy"});
s1.save();
var s2 = new Student({name:"Britton"});
s2.save(function(){
  console.log("at least s2 saved");
});

// require express / app
var express = require("express");
var app = express();
var hbs = require("hbs")
app.set('view engine','hbs');
// listen on localhost
app.listen(3000, function(){
  console.log("http://localhost:3000/")
});
// a single route
app.get("/", function(req,res){
  res.render("index.hbs");
});

app.get("/students.json", function(req,res){
  Student.find({}, function(err,students){
    res.json(students);
  })
})


