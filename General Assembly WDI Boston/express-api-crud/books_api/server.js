// include libraries
const express = require('express')

// require logging requests middleware
const requestLogger = require('./lib/request_logger')

// require routes
const bookRoutes = require('./routes/book_routes')

// instantiate an app
const app = express()

// register middlware to parse incoming JSON requests
// and make the incoming request's data available at `req.body`
app.use(express.json())

// register middleware to log incoming requests
app.use(requestLogger)

// register the book router, so the book router's routes are registered.
app.use(bookRoutes)

// start the app, listening on port 4741
app.listen(4741, () => console.log('Example app listening on port 4741!'))
