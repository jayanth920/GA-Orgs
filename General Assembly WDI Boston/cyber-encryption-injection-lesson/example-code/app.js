var express = require('express');
var http = require('http');
var shell = require('shelljs');

var app = express();


app.get('/date/:format', (request, response) => {
    var format = request.params.format;
    var date = shell.exec('date +"' + format + '"');
    response.send('The current datetime is: ' + date);
});

app.get('/', (request, response) => {
    response.send('The server is up and running!');
});

http.createServer(app).listen(8080, (err) => {
    if (err) {
        return console.log('error', err);
    }
});
