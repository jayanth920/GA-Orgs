const express = require('express')
const app = express()
const flash = require('connect-flash')
const hbs = require('hbs')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const usersController = require('./controllers/users')

app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser())

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' }))
app.use(flash())

app.use('/', usersController)

app.set('port', process.env.PORT || 7777)

app.listen(app.get('port'), () => console.log(`locked and loaded on ${app.get('port')}`))
