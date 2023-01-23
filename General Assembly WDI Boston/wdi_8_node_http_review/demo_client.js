var http = require('http');

var method = process.argv[2], // node demo_client.js GET
    path = process.argv[3];

if (method === "GET") {
  http.get("http://localhost:9999" + path, function(response){
    var responseData = "";
    response.setEncoding('utf8');
    response.on('data', function(chunk){ responseData += chunk; });
    response.on('end', function(){
      var results = JSON.parse(responseData);
      console.log(results);
    });
  }).on('error', function(e) {console.error(e);});
} else if (method === "POST") {
  // var postData = JSON.stringify({name: "Merlin", universe: "Camelot"});
  // Ignore this stuff - just crap for the demo.
  var postData = "";
  if (path === "/wizards") {
    postData = JSON.stringify({name: "Merlin", universe: "Camelot"});
  } else if (path === "/statues") {
    postData = JSON.stringify({name: "Paul Revere", location: "Boston, MA, USA"});
  } else if (path === "/pigs") {
    postData = JSON.stringify({name: "Porky"});
  }

  http.request({
    hostname: 'localhost',
    port: 9999,
    path: path,
    method: 'POST',
    headers : {
      'Content-Type' : 'text/JSON'
    }
  }, function(response){
    var responseData = "";
    response.setEncoding('utf8');
    response.on('data', function(chunk){ responseData += chunk; });
    response.on('end', function(){
      console.log(responseData);
    });
  }).on('error', function(e) {
    console.error(e);
  }).end(postData);
}
