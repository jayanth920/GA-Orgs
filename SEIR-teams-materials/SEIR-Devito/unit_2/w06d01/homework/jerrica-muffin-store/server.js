// ============================
// DEPENDENCIES
// ============================
// -- packages
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

// -- configuration
const app = express();
const port = process.env.PORT  || 3000;

// -- controllers
const productsController = require('./controllers/products');

// ============================
// DATABASE
// ============================
const mongoURI = process.env.MONGOURI || 'mongodb://localhost:27017/jerrica_mongoose_store';
const db = mongoose.connection;

mongoose.connect(mongoURI, { useNewUrlParser:true });

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

// ============================
// MIDDLEWARE
// ============================
// -- for static files
app.use(express.static('public'));
// -- for method override
app.use(methodOverride('_method'));
// -- for body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ============================
// ROUTES / ROUTERS
// ============================
// -- default index, redirects to /products
app.get('/', (req, res) => {
  res.send('basic server ay')
});
// -- products router
app.use('/products', productsController);

// ============================
// LISTENER
// ============================
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
