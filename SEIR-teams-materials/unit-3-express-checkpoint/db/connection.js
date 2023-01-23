require('dotenv').config();
const mongoose = require('mongoose');
const mongoURI = process.env.DATABASE_URL;
mongoose.connect(mongoURI);

module.exports = mongoose;
