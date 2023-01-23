// index.js
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var http = require('http');

var app = express();

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
    response.render('index');
});

// add our special data-fetching resource route
app.get('/fetch', (request, response) => {
    response.json({
        username: 'fake_user',
        password: 'abcd1234',
        last_fetched: (new Date()).toLocaleString()
    });
});

// create an HTTP service
http.createServer(app).listen(3000, (err) => {
    if (err) {
        return console.log('error', err);
    }

    console.log("HTTP server is listening...");
});
