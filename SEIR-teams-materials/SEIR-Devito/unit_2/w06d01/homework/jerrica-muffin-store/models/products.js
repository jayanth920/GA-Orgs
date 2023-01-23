// ============================
// DEPENDENCIES
// ============================
const mongoose = require('mongoose');

// ============================
// SCHEMA
// ============================
const productSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, 'No one will buy it if it does not have a name']
  },
  description: String,
  img: String,
  price: {
    type: Number,
    min : [0, 'Price can\'t be less than 0.']
  },
  qty: {
    type: Number,
    min : [0, 'Quantity can\'t be less than 0.']
  }
});

// ============================
// MODEL & EXPORT
// ============================
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
