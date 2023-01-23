const express = require("express");
const router = express.Router();

const Restaurant = require("../models/Restaurant");

router.get("/", (req, res) => {
  Restaurant.find({}).then(restaurants => res.render("index", { restaurants }));
});

router.get("/new", (req, res) => {
  res.render("new");
});

router.get("/:id", (req, res) => {
  Restaurant.findById(req.params.id).then(restaurant => {
    res.render("show", restaurant);
  });
});

router.post("/", (req, res) => {
  Restaurant.create(req.body).then(restaurant => {
    res.redirect("/");
  });
});

router.get("/edit/:id", (req, res) => {
  Restaurant.findById(req.params.id).then(restaurant => {
    res.render("edit", restaurant);
  });
});

router.put("/:id", (req, res) => {
  Restaurant.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  }).then(restaurant => {
    res.redirect(`/${restaurant.id}`);
  });
});

router.delete("/:id", (req, res) => {
  Restaurant.findByIdAndRemove(req.params.id).then(() => {
    res.redirect("/");
  });
});

module.exports = router;
