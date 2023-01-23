
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser') // parses information from POST
const methodOverride = require('method-override') // used to manipulate POST

const candies = [
  {id: 1, name: 'Chewing Gum', color: 'Red'},
  {id: 2, name: 'Pez' , color: 'Green'},
  {id: 3, name: 'Marshmallow', color: 'Pink'},
  {id: 4, name: 'Candy Stick', color: 'Blue'}
]

// http://127.0.0.1:3000/candies
router.route('/')
  // GET all candies
  .get(function (req, res, next) {
    res.json(candies)
  })
  // POST a new candy
  .post(function (req, res) {
    candies.push(req.body)
    res.json(req.body)
  })

// Show a Candy
router.route('/:id')
  // GET one candy by id
  .get(function (req, res) {
    candy = candies.filter(function (element) { return element['id'] == req.params.id })[0]
    res.json(candy)
  })
  // DELETE one candy by id
  .delete(function (req, res) {
    let candy = candies.find((candy) => candy.id == req.params.id)
    candies.splice(candies.indexOf(candy), 1)
    res.json({message: 'deleted' })
  })

//Update a Candy
router.put('/:id/edit', function (req, res) {
  for (i in candies) {
    if (candies[i]['id'] == req.params.id) {
      candies[i] = req.body
    }
  }
  res.format({
    json: function () { res.json(req.body) }
  })
})



module.exports = router
