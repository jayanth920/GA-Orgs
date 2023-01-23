const mongoose = require('../db/connection');

// Define a schema that takes an object of key/value pairs
// the key is the name of the field
// the value is the type of data it will be
// https://mongoosejs.com/docs/schematypes.html
const BookSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

// Create a model using the schema, and attaches it to our mongoose instance.
// A model is used to query and change data in the database
const Book = mongoose.model('Book', BookSchema);

// Export the instantiated model for use elsewhere in our app
module.exports = Book;
