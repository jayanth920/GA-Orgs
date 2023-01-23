// include libraries
const express = require('express')
const mongoose = require('mongoose')

// middleware logging requests
const requestLogger = require('./lib/request_logger')
const errorHandler = require('./lib/error_handler')

// require user router
const userRoutes = require('./routes/user_routes')

// connect to mongodb
mongoose.connect('mongodb://localhost/restaurants_api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// instantiate an app
const app = express()

// middleware requests
app.use(express.json())
app.use(requestLogger)

// mount the routes from the user router
app.use(userRoutes)

// error handler
app.use(errorHandler)

// start app
app.listen(4741, () => console.log('Example app listening on port 4741!'))
