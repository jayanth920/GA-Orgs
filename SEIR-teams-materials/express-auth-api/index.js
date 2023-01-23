const express = require('express');
const app = express();

app.set('port', process.env.PORT || 8000);

// Parses key value pairs in request
app.use(express.urlencoded({ extended: true }));
// Converts json strings to the an object and attaches it to req.body
app.use(express.json());

// Use cors package to allow connections from all domains
const cors = require('cors');
app.use(cors());

// Redirect any requests to the homepage to books API
app.get('/', (req, res) => {
  res.redirect('/api/books');
});

// Hand off requests on the '/api/bookmarks' route to the bookmarks controller
const booksController = require('./controllers/booksController');
app.use('/api/books/', booksController);

app.listen(app.get('port'), () => {
  console.log(`✅ Listening on port ${app.get('port')}`);
});
