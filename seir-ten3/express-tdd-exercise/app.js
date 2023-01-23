// Dependencies
const express = require('express');
const PORT = process.env.PORT || 3000;
// Create app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Controllers
app.use(require('./controllers'));

app.listen(PORT, () => console.log('Candies API 🍭 listening on Port ' + PORT));

// Export app
module.exports = app;
