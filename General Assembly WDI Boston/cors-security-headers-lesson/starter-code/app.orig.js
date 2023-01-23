var express = require('express');
var http = require('http');
var app = express();

app.get('/', (request, response) => {
    response.send('hi, :wave: =]');
});

app.get('/about', (request, response) => {
    response.send('This is a sample "about" page!');
});

http.createServer(app).listen(3000, (err) => {
    if (err) {
        return console.log('error', err);
    }
});
