'use strict'

// instantiate mongodb and mongoose
const mongoose = require('mongoose')
// connect mongoose to your mongo database, the one we're using today is called mongose-crud
mongoose.connect('mongodb://localhost/mongoose-crud', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
// save connection to the database in the variable 'db', for easy reference later.
const db = mongoose.connection

// require Person model

// open connection to db
db.once('open', function () {
  // accept data from the terminal input

  // create a Person

  // close connection to db
  db.close()
})
