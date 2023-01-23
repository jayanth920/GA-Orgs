// Dependencies
const express = require('express');
const app = express();

// Routes..aka pathway to a resource
app.get('/', (request, response) => {
  // request is the incoming request
  // response is our response
  response.send('Hello World')
})

// app is our express server
// .get is the method..we want to GET somedata
// ('/somedata') is the route or path to resource
// ('/somedata', (req,res) => {}) req,res is the request, response cycle..both are objects
app.get('/somedata', (req, res) => {
  res.send('<h1>installed nodemon</h1>')
  // res.json()
  // res.render()
  // console.log('this is req: ', req)
  // console.log('this is res: ', res)
})

// Port our server is listening on
app.listen(3000)
// ctr + c will stop your server
// ctr + z will not stop your server..it only frees up the terminal
// ERRORS
// Error: listen EADDRINUSE :::3000
// CAUSE: another server is listening on that port

// Cannot GET /somedata
// CAUSE: the route /somedata does not exist
