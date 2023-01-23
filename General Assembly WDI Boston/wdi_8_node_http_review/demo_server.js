var http = require('http'),
    url = require('url'),
    queryString = require('querystring');

var port = 9999;

//Pig-Wizard-Statue
var mock_db = {
  statues: [
    {name: "David", location: "Florence, Italy"},
    {name: "Liberty", location: "New Jersey, USA"},
    {name: "Redeemer", location: "Rio De Janeiro, Brazil"}
  ],
  wizards: [
    {name: "Gandalf", universe: "Lord of the Rings"},
    {name: "Dumbledore", universe: "Harry Potter"},
    {name: "Oz the Great and Terrible", universe: "The Wizard of Oz"}
  ],
  pigs : [
    {name: "Wilbur"},
    {name: "Babe"},
    {name: "Miss Piggy"}
  ]
}

var server = http.createServer(function(request, response){
  // console.log(request.url)
  var parsedURL = url.parse(request.url, true);
    // console.log(parsedURL.host);
    // console.log(parsedURL.pathname);
    // console.log(parsedURL.search);
    // console.log(request.method);

  if (parsedURL.pathname === "/" && request.method === "GET") {
    console.log("GET at /");
    response.writeHead(400);
    response.end();
  } else if (parsedURL.pathname.toLowerCase() === "/statues" && request.method === "GET") {
    console.log("GET at /statues");
    response.writeHead(200, {'Content-Type' : 'text/JSON'});
    response.end(JSON.stringify(mock_db.statues));
  } else if (parsedURL.pathname.toLowerCase() === "/statues" && request.method === "POST") {
    console.log("POST at /statues");
    // Collect the data from the POST request
    var postDataString = ""
    request.setEncoding('utf8'); // Read as text.
    request.on('data', function(dataChunk){postDataString += dataChunk;});
    request.on('end', function(){
      //Do something to the data.
      var postData = JSON.parse(postDataString);
      // Validations ???
      var isValid = true;
      // Add to our (fake) database
      if (isValid) {
        mock_db.statues.push(postData);
        response.writeHead(200, {'Content-Type' : 'text/json'});
        response.end(JSON.stringify("Successfully added statue : " + postData.name));
      } else {
        response.writeHead(400);
        response.end();
      }
    });
  } else if (parsedURL.pathname.toLowerCase() === "/wizards" && request.method === "GET") {
    console.log("GET at /wizards");
    response.writeHead(200, {'Content-Type' : 'text/JSON'});
    response.end(JSON.stringify(mock_db.wizards));
  } else if (parsedURL.pathname.toLowerCase() === "/wizards" && request.method === "POST") {
    console.log("POST at /wizards");
    var postDataString = "";
    request.setEncoding('utf8'); // Interpret whatever we get as text.
    request.on('data', function(chunk) {postDataString += chunk;});
    request.on('end', function() {
      var postData = JSON.parse(postDataString);
      // Validations???
      var isValid = true;
      // Add to our (fake) database!
      if (isValid) {
        mock_db.wizards.push(postData);
        response.writeHead(200, {'Content-Type' : 'text/json'});
        response.end(JSON.stringify("Successfully added wizard : " + postData.name));  //.end -> .send
      } else {
        response.writeHead(400);
        response.end();
      }
    });
  } else if (parsedURL.pathname.toLowerCase() === "/pigs" && request.method === "GET") {
    console.log("GET at /pigs");
    response.writeHead(200, {'Content-Type' : 'text/JSON'});
    response.end(JSON.stringify(mock_db.pigs));
  } else if (parsedURL.pathname.toLowerCase() === "/pigs" && request.method === "POST") {
    console.log("POST at /pigs");
    // Collect the data
    var postDataString = '';
    request.setEncoding('utf8');
    request.on('data', function(chunk){
      postDataString += chunk;
    })
    request.on('end', function() { // Handle the collected data
      var postData = JSON.parse(postDataString);
      // console.log(postData);
      // not a real validation (setting it to true all the time defeats the purpose)
      var isValid = true;
      // Add to our (fake) database and send a response.
      if(isValid){
        mock_db.pigs.push(postData);
        response.writeHead(200, {'Content-Type': 'text/JSON' });
        response.end(JSON.stringify('Successfully added ' + postData.name));
      } else {
        response.writeHead(400);
        response.end();
      }
    });
  } else {
    console.log("Page Not Found")
    response.writeHead(404);
    response.end();
  }
});

server.listen(port);

//Trollconners
/*
var Trollconner = function(resource){
  if (mock_db.hasOwnProperty(resource)) {
    return {
      index : function() {
        console.log("GET at /" + resource);
        response.writeHead(200, {'Content-Type' : 'text/json'});
        response.end(JSON.stringify(mock_db[resource]));
      },
      create : function() {
        console.log("POST at /" + resource);
        var postDataString = ""
        request.setEncoding('utf8'); // Read as text.
        request.on('data', function(dataChunk){postDataString += dataChunk;});
        request.on('end', function(){
          //Do something to the data.
          var postData = JSON.parse(postDataString);
          // Validations ???
          var isValid = true;
          // Add to our (fake) database
          if (isValid) {
            mock_db[resource].push(postData);
            response.writeHead(200, {'Content-Type' : 'text/json'});
            response.end(JSON.stringify("Successfully added " + resource));
          } else {
            response.writeHead(400);
            response.end();
          }
        });
      }
    };
  }
  return null;
};

var statuesController = new Trollconner('statues'),
    wizardsController = new Trollconner('wizards'),
    pigsController = new Trollconner('pigs');

var serverWithTrollConners = http.createServer(function(request, response){
  var parsedURL = url.parse(request.url, true);

  if (parsedURL.pathname === "/" && request.method === "GET") {
    console.log("GET at /");
    response.writeHead(400);
    response.end();
  }
  else if (parsedURL.pathname === "/statues" && request.method === "GET") {statuesController.index();}
  else if (parsedURL.pathname === "/statues" && request.method === "POST") {statuesController.create();}
  else if (parsedURL.pathname === "/wizards" && request.method === "GET") {wizardsController.index();}
  else if (parsedURL.pathname === "/wizards" && request.method === "POST") {wizardsController.create();}
  else if (parsedURL.pathname === "/pigs" && request.method === "GET") {pigsController.index();}
  else if (parsedURL.pathname === "/pigs" && request.method === "POST") {pigsController.create();}
  else {
    console.log("Page Not Found")
    response.writeHead(404);
    response.end();
  }
});
*/
