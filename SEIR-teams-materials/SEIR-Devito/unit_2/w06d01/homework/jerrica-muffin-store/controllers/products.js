// ============================
// DEPENDENCIES
// ============================
const express = require('express');
const products = express.Router();

// ============================
// MODELS
// ============================
const Product = require('../models/products');
const seedMuffins = require('../models/seed');

// ============================
// SEED ROUTE
// ============================
// if you don't want to add your own data, use this seed route @ http://localhost:3000/products/seed/newmuffins
products.get('/seed/newmuffins', (req, res) => {
  Product.create(seedMuffins, (err, createdProducts) => {
    res.redirect('/products');
  })
})

// ============================
// GET ROUTES
// ============================
// -- index route
products.get('/', (req, res) => {
  Product.find({}, (err, foundProducts) => {
    res.render('index.ejs', {
      products: foundProducts
    });
  })
})

// -- new route
products.get('/new', (req, res) => {
  res.render('new.ejs');
})

// -- show route
products.get('/:id', (req, res) => {
  Product.findOne({ _id: req.params.id }, (err, foundProduct) => {
    res.render('show.ejs', {
      product: foundProduct
    });
  })
})

// -- edit route
products.get('/edit/:id', (req, res) => {
  Product.findOne({ _id: req.params.id }, (err, foundProduct) => {
    res.render('edit.ejs', {
      product: foundProduct
    });
  })
})

// ============================
// ACTION ROUTES
// ============================
// -- create route
products.post('/', (req, res) => {
  Product.create(req.body, (err, createdProduct) => {
    res.redirect('/products');
  });
})

// -- update route
products.put('/:id', (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, updatedProduct) => {
    res.redirect('/products');
  });
})

// -- delete route
products.delete('/:id', (req, res) => {
  Product.deleteOne({ _id: req.params.id }, (err, data) => {
    res.redirect('/products');
  });
})

// -- buy button route
// using a put route because we're _editing_ a field
// note the url is different from our regular edit route url because it needs to be a _different_ edit route!
products.put('/:id/buy', (req, res) => {
  // find the product that we want to update by id
  // then decrement the qty by 1
  Product.findOneAndUpdate({ _id: req.params.id }, { $inc: { qty: -1 } }, (err, data) => {
    // redirect to the show page using the id
    res.redirect('/products/' + req.params.id);
  });
})

// ============================
// EXPORT
// ============================
module.exports = products;
