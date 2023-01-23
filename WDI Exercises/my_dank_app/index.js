var Express = require("express");
var app = Express();

var Sequelize = require("sequelize");
var db_connection = new Sequelize("postgres:///dank_db");

var List = db_connection.define("list", {
  title: Sequelize.STRING
});

var Task = db_connection.define("task", {
  content: Sequelize.STRING
});

db_connection.sync({force: true});

// Index
app.get("/lists", function(req, res){
  res.send("Hey, here are all the lists")
});

// Show
app.get("/lists/:id", function(req, res){
  res.send("Hey, here's list number " + req.params.id);
});

// Create
app.post("/lists", function(req, res){

});

// Update
app.put("/lists/:id", function(req, res){

});

// Delete
app.delete("/lists/:id", function(req, res){

});

app.listen(3000, function(){
  console.log("Hot dang, this is working.")
});
