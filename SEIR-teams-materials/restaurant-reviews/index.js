const express = require('express');

const app = express();

app.use(express.json());

const restaurantControllers = require('./controllers/restaurants');
app.use('/api/restaurants', restaurantControllers);

const reviewControllers = require('./controllers/reviews');
app.use('/api/reviews', reviewControllers);

const userControllers = require('./controllers/users');
app.use('/api/users', userControllers);

// Create a variable for our port
const port = process.env.PORT || 8001;

// Run our server!
app.listen(port, () => {
  console.log(`Restaurant-Reviews app is running on port ${port}`);
});
