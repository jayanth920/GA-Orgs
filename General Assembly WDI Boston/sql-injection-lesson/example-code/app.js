var express = require('express');
var QRCode = require('qrcode');
var sqlite3 = require('sqlite3');
var http = require('http');

var app = express();


app.get('/confirmation/:confirmation', (request, response) => {
    var db = new sqlite3.Database('./sqlite.db');
    var confirmation_number = request.params.confirmation;

    db.all("SELECT * FROM secrets WHERE confirmation='" + confirmation_number + "';", function(err, rows) {
        console.log(rows);
        if (rows.length != 0){
            data = rows[0];
            QRCode.toDataURL(data['secret'], function (err, url) {
                response.send('<html>' +
                              '<body>' +
                              'Hello ' + data['name'] + '!<br><br>' +
                              'Please present the following barcode at the gate:<br><img src="' + url + '"></img><br><br>' +
                              'We hope you enjoy flying with us,<br><br>' + 
                              'FlyBest Airlines' +
                              '</body>' +
                              '</html>');
            });
        }
        else {
            response.send('Invalid confirmation number.');
        }
    });
    db.close();
});

app.get('/', (request, response) => {
    response.send('The server is up and running!');
});

http.createServer(app).listen(8080, (err) => {
    if (err) {
        return console.log('error', err);
    }
});
