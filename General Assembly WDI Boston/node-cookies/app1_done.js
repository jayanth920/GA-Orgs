"use strict";
var http = require('http');
var url = require('url');
var util = require('util');

// Create a HTTP Server with a handler method.
var server = http.createServer(requestHandler);

function requestHandler(request, response){
  var cookies = util.inspect(request.headers['cookie']),
      pathname = url.parse(request.url, true).pathname,
      content = "<html><head></head><body>";

  // Ouput data should be returned as strings.
  request.setEncoding('utf8');
  console.log('Cookies are ', cookies);

  // set the cookie if /loggedin
  if(pathname === '/just_logged_in'){
    console.log("Setting the cookie");
    content += "<h3>Just created a cookie with Set-Cookie.</h3><br/>";

    // Set the Cookie in the HTTP Response Header
    response.writeHead(200, {'Set-Cookie': 'email=joe@example.com'});
  }else{
    content += "<a href='/just_logged_in'>Simulate the Login. Will set cookie</a><br/>";
  }

  content += "<p>The Browser send this cookie in the HTTP Request<p>";
  content += cookies;

  content += "</body></html>";
  response.end(content);
};


// Start a server on port 4000
server.listen(4000, function() {
  console.log("Movie Server is up and listening on port:", 4000);
});
