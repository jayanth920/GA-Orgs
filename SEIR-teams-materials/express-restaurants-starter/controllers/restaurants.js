const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant');

router.get('/', (req, res) => {
	// Your Restaurant route logic goes here
	res.send('Welcome to the Restaurants API');
});

module.exports = router;
