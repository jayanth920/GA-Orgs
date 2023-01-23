var mongoose    = require("mongoose");

var ThingSchema = {
  name:         String,
  description:  String
}

mongoose.model("Thing", ThingSchema);
mongoose.connect("mongodb://localhost/thingr");

module.exports = mongoose;
