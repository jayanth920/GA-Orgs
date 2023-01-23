// index.js
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var http = require('http');
// var https = require('https');
var fs = require('fs');

// global Content-Security-Policy
//var csp = require('helmet-csp');

var app = express();

/**
 * Global Content-Security-Policy
 * From here, we can turn off framing and frame execution
 */
// app.use(csp({
//     directives: {
//         // don't allow this website to be framed
//         frameSrc: ["'none'"],
        
//         // automatically sandbox embedded frames
//         sandbox: ['allow-forms', 'allow-scripts'],
//     },
    
//     // don't set all Security headers for this exercise
//     setAllHeaders: false
// }));

// HTTPS config
// var options = {
//   key: fs.readFileSync('privkey_cert.key'),
//   cert: fs.readFileSync('privkey_cert.crt')
// };

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

// setup our trusted routes
app.get('/iframe-sandbox', (request, response) => {
    // !!! hack !!!
    // because this sample code is an all-in-one website (i.e. it's all on the same domain),
    // we need to override the CSP header here to allow this page to be framed by *this* domain
//     response.setHeader('Content-Security-Policy', "frame-src 'self'; sandbox allow-forms allow-scripts");
    
    response.render('trusted-iframe-sandbox');
});

app.get('/trusted-click-to-win', (request, response) => {
    // [example] inline X-Frame-Options Header
    // response.setHeader('X-Frame-Options', 'DENY');
    
    // [example] inline Content-Security-Policy Header
    // response.setHeader('Content-Security-Policy', "frame-src 'none'");
    
    response.render('trusted-click-to-win');
});

// setup our "malicious" routes (in a real-world scenario, these would be on a different domain...)
app.get('/malicious-3rd-party', (request, response) => {
    response.render('malicious-3rd-party');
});
app.get('/malicious-click-stealer', (request, response) => {
    response.render('malicious-click-stealer');
});

// create an HTTP service
http.createServer(app).listen(8080, (err) => {
    if (err) {
        return console.log('error', err);
    }
    
    console.log("HTTP server is listening...");
});

// create an HTTPS service
// https.createServer(options, app).listen(443, (err) => {
//     if (err) {
//         return console.log('error', err);
//     }
    
//     console.log("HTTPS server is listening...");
// });
