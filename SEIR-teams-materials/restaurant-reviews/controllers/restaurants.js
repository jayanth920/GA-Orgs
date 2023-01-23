const express = require('express');

const router = express.Router();

const Restaurant = require('../models/restaurant');

// INDEX
// GET /restaurants
router.get('/', (req, res, next) => {
  Restaurant.find()
    // show the details of the review author
    .populate('reviews.author')
    .then((restaurants) => res.json(restaurants))
    .catch(next);
});

// SHOW
// GET /restaurants/:id
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Restaurant.findById(id)
    // show the details of the review author
    .populate('reviews.author')
    .then((restaurant) => res.json(restaurant))
    .catch(next);
});

// CREATE
// POST /restaurants/
router.post('/', (req, res, next) => {
  const restaurantData = req.body;
  Restaurant.create(restaurantData)
    .then((restaurant) => res.status(201).json(restaurant))
    .catch(next);
});

// UPDATE
// PATCH /restaurants/:id
router.patch('/:id', (req, res, next) => {
  const id = req.params.id;
  const restaurantData = req.body;
  Restaurant.findOneAndUpdate({ _id: id }, restaurantData, { new: true })
    .then((restaurant) => res.json(restaurant))
    .catch(next);
});

// DESTROY
// DELETE /restaurants/:id
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  Restaurant.findOneAndDelete({ _id: id })
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = router;
