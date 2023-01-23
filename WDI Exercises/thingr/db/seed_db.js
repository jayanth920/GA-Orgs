var mongoose    = require("./connection");
var seedData    = require("./seeds");
var Thing       = mongoose.model("Thing");

Thing.remove().then(function(){
  Thing.create(seedData).then(function(){
    process.exit();
  });
});
