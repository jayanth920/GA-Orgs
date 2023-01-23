const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const config = require('./')

const env = process.env.NODE_ENV || 'development'

module.exports = function expressConfig (app) {
  // set up cors (https://github.com/expressjs/cors)
  app.use(cors({
    origin: ['http://localhost:3000', '*'], // * (wildcard) permits any origin
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: true // pass the Access-Control-Allow-Credentials CORS header
  }))

  // Static files middleware
  app.use(express.static(config.root + '/public'))
  app.use(express.static(config.root + '/node_modules'))

  // Logging middleware (https://github.com/expressjs/morgan)
  // Don't log during tests
  if (env !== 'test') app.use(morgan('dev'))

  app.use(bodyParser.json())
}
