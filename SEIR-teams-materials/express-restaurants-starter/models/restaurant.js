const mongoose = require('../db/connection');

const restaurantSchema = new mongoose.Schema(
	{
		// Your Restaurant schema code goes here
	},
	{ timestamps: true }
);

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
