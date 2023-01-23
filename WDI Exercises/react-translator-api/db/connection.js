const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/react_translator_db', {useMongoClient: true})

module.exports = mongoose
