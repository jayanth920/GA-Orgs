const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/passport')

mongoose.Promise = Promise

module.exports = mongoose
