'use strict';

const loadCities = require('../lib/cities.js');

loadCities().then((cities) => {
  let count = cities.reduce((m /*, c */) => m + 1, 0);
  console.log(`count: ${count}, length: ${cities.length}`);
}).catch((error) => console.log(error));
