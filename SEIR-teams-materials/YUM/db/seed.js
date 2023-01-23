const Restaurant = require("../models/Restaurant");
const seedData = require("./seeds.json");

Restaurant.deleteMany({})
  .then(() => {
    return Restaurant.insertMany(seedData);
  })
  .then(() => {
    process.exit();
  });
