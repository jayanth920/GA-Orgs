// we're importing mongoose from node_modules
const mongoose = require('mongoose');

// set the uri for connecting to our local mongodb
// const mongoURI = "mongodb://localhost/book-e";
const mongoURI =
  process.env.NODE_ENV === 'production'
    ? process.env.DB_URL
    : 'mongodb://localhost/book-e';

// connect to the database, with the imported mongoose instance
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((instance) =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch((error) => console.log('Connection failed!', error));

// now, our mongoose instance has a configured connection to our local db, in addition
// to its model configuration
module.exports = mongoose;
