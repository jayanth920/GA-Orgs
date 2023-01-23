const express = require("express");
const parser = require("body-parser");
const methodOverride = require("method-override");

const app = express();

app.use(methodOverride("_method"));
app.set("view engine", "hbs");
app.use(parser.urlencoded({ extended: true }));

const restaurantController = require("./controllers/restaurants");
app.use("/", restaurantController);

app.listen(3000, () => console.log("Running on port 3000!"));
