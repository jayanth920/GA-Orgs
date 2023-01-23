const mongoose = require("../db/connection");

const RestaurantSchema = new mongoose.Schema({
    name: String,
    owner: String,
    type: String,
    capacity: Number
});

const Restaurant = mongoose.model("restaurant", RestaurantSchema);

module.exports = Restaurant;
