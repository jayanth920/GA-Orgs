// dependencies
const express = require('express');
const app = express();

// config
const port = 3000;

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// db
const products = require('./models/products');

// index route
app.get('/products', (req, res) => {
  res.send(products);
});

// show route
app.get('/products/:id', (req, res) => {
  res.send(products[req.params.id]);
});

// listen
app.listen(port, () => console.log("App is running on port: ", port));
