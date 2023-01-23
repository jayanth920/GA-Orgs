var express = require('express');
var http = require('http');
var csp = require('helmet-csp');
var app = express();

app.use(function(request, response, next) {
    var middleware;

    // define our default CSP directives
    var directives = {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "https://apis.google.com"],
        frameSrc: ["'none'"]
    };

    // override the `frameSrc` on the `/about` page
    if (request.url == '/about') {
        directives.frameSrc = ["'self'"];
    }

    // set our options
    middleware = csp({
        directives
    });

    middleware(request, response, next);
});

/*
// Removed in favor of helmet-csp
app.use(function(request, response, next) {
    response.setHeader('X-Frame-Options', 'DENY');
    response.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' https://apis.google.com; frame-src 'none'");
    next();
});
*/

app.get('/', (request, response) => {
    response.send('hi, :wave: =]');
});

app.get('/about', (request, response) => {
    /*
    // Removed in favor of helmet-csp
    response.setHeader('X-Frame-Options', 'SAMEORIGIN');
    response.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' https://apis.google.com; frame-src 'self'");
    */
    response.send('This is a sample "about" page!');
});

http.createServer(app).listen(3000, (err) => {
    if (err) {
        return console.log('error', err);
    }
});
