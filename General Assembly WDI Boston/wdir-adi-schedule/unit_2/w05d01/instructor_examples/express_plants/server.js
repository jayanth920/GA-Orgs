// Dependencies
const express = require('express');

// Configuration
const app = express();
const port = 3000;

// 'database'
const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];

// listen for a request at localhost:3000/
app.get('/', (req, res) => {
  // if request is made here, send this message
  res.send("Welcome to The Plant Express");
});


// must be above `:indexOfPlantsArray` route
app.get('/awesome', (req, res) => {
  res.send(`
    <h1>Plants are awesome!</h1>
    <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
  `);
});

// dynamic route, should be a number, access a plant in the array
app.get('/:indexOfPlantsArray', (req, res) => {

  // plants is the array
  // req.params.indexOfPlantsArray is the array position
  console.log(plants[req.params.indexOfPlantsArray]);

  if(plants[req.params.indexOfPlantsArray]){
      res.send(plants[req.params.indexOfPlantsArray])
  } else {
    res.send('cannot find anything at this index: ' + req.params.indexOfPlantsArray)
  }
});


app.get('/hello/:firstname' , (req, res) => {
  console.log('these are request params:' , req.params);
  console.log('these is request query:' ,req.query);
  res.send('hello ' + req.query.title + ' ' + req.params.firstname)
});

app.get('/hello/:firstname/:lastname', (req, res) => {
//   console.log('=========================================');
// console.log('This is the entire Request Object sent from the browser to the server: ');
// console.log(req);
// console.log('========================================');
  console.log(req.params);
  res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
});




// listen for requests at this port
app.listen(port, () => {
  console.log('listening on port', port);
});
