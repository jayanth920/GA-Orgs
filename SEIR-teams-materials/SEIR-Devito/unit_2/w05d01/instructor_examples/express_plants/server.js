// Dependencies
const express = require('express')
const app = express()
const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];
require('dotenv').config()
const port = process.env.PORT || 3000
// Routes
// routes are like if/else if statements..first one matched wins
// '/' represents the default route
app.get('/', (req, res) => {
  res.send(plants)
  console.log('hit the default route')
})

app.get('/awesome', (req, res) => {
  res.send(`
    <h1>Plants are awesome!</h1>
    <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
  `);
})

app.get('/howdy/:firstName', (req, res) => {
  console.log(req.params)
  console.log(req.query)
  res.send('hello ' + req.query.title + ' ' + req.params.firstName);
})

app.get('/hello/:firstname/:lastname', (req, res) => {
  // res.send(req.params)
  res.send(`hello there ${req.params.firstname} ${req.params.lastname}`)
})

// URL paramater is represented by the :indexOf...
// '/:indexOfPlantsArray' - this will find a specfic plant in the plants array
app.get('/:indexOfPlantsArray', (req,res) => {
  // req.params is an object
  // res.send(req.params)
  if (plants[req.params.indexOfPlantsArray]) {
         res.send(plants[req.params.indexOfPlantsArray]);
   } else {
     res.send('cannot find anything at this index: ' + req.params.indexOfPlantsArray);
   }
})


// listener
// app.listen(3000)
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

// errors
// Cannot set headers after they are sent to the client
// CAUSE: more than 1 res.send in the callback
