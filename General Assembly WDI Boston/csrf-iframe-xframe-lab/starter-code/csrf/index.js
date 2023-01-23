// index.js
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var http = require('http');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

var app = express();
app.use(cookieParser());

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// setup our app to use Handlebars template rendering
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

// add our main route
app.get('/', (request, response) => {
    var ynCookie = request.cookies.yourName;
    
    response.render('index', {
        yourName: ynCookie !== undefined ? ynCookie : ''
    });
});

// add the update route
app.post('/update', urlencodedParser, (request, response) => {
    if (!request.body || !request.body.name) {
        return response.sendStatus(400);
    }
    
    // set the cookie
    response.cookie('yourName', request.body.name, {
        maxAge: 86400,
        httpOnly: true
    });

    response.redirect('/');
});

// create an HTTP service
http.createServer(app).listen(8080, (err) => {
    if (err) {
        return console.log('error', err);
    }
    
    console.log("HTTP server is listening...");
});
