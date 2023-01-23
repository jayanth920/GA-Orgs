const requestLogger = function (req, res, next) {
  console.log('\n===== Incoming Request =====\n')
  // log the current date and time
  console.log(`${new Date()}`)
  // log the request's method and url
  console.log(`${req.method} ${req.url}`)
  // log the request's incoming data (req.body), convert it to json first
  console.log(`body: ${JSON.stringify(req.body)}`)
  console.log('\n============================\n')

  // call the next middleware
  next()
}

module.exports = requestLogger
