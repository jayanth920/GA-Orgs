const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


let candies = [
  {id: 1, name: "Chewing Gum" , color: "Red"},
  {id: 2, name: "Pez"         , color: "Green"},
  {id: 3, name: "Marshmallow" , color: "Pink"},
  {id: 4, name: "Candy Stick" , color: "Blue"}
]


// http://127.0.0.1:3000/candies
router.route('/')
  //GET all candies
  .get(function(req, res, next) {
    res.json(candies);
  })
  //POST a new candy
  .post(function(req, res) {
    candies.push(req.body);
    res.send(candies);
  });

// Show a Candy
router.route('/:id')
  .get(function(req,res) {
    candy = candies.filter(function(element) { return element["id"] == req.params.id })[0];
    if (candy) {
      res.send(candy);
    } else {
      res.status(404).send();
    }
  })
  .delete(function(req, res) {
    for(i in candies) {
      if(candies[i]["id"] == req.params.id) {
        let candy = candies[i]["id"] - 1;
        candies.splice(candy, 1);
      }
      else if (!candies[i]["id"]) {
        return res.status(404).send();
      }
    }
    res.send({
      message : 'deleted'
    });
  })
  .put(function(req, res) {
    for(i in candies) {
      if(candies[i]["id"] == req.params.id) {
        candies[i] = req.body;
      }
      else if (!candies[i]["id"]) {
        return res.status(404).send();
      }
    }
    res.send(candies);
  });

module.exports = router;
