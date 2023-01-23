'use strict';

var trace = function(){
  for(var i = 0; i < arguments.length; i++){
    console.log(arguments[i]);
  }
};


// JSON is a subset of the object literal notation of JavaScript.
// We use them to transfer objects between applications and JavaScript.
// Property names must be double-quoted strings; trailing commas are forbidden.
// Leading zeroes are prohibited; a decimal point must be followed by at least one digit.
// Most characters are allowed in strings, except certain control characters.
// Strings must be double quoted.
// More on JSON here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON

// The following line is valid JSON, which is saved as the variable grungeAlbumsJSON

var grungeAlbumsJSON = {
  "albums":
  [
    {
        "name": "Bleach",
        "artist": "Nirvana",
        "unitsSold": 1700000
    },
    {
        "name": "Nevermind",
        "artist": "Nirvana",
        "unitsSold": 30000000
    },
    {
        "name": "In Utero",
        "artist": "Nirvana",
        "unitsSold": 15000000
    },
    {
        "name": "Ten",
        "artist": "Pearl Jam",
        "unitsSold": 10000000
    },
    {
        "name": "Vs",
        "artist": "Pearl Jam",
        "unitsSold": 6100000
    },
    {
        "name": "Vitalogy",
        "artist": "Pearl Jam",
        "unitsSold": 4770000
    }
  ]
};

// Use JSONLint to determine if something is valid JSON.
// http://jsonlint.com/
// Lab 1) Validate the above JSON with JSONLint

// The follow line is valid JavaScript, but not valid JSON
// Lab 2) Use JSONLint to validate it, and then edit the line to make it valid JSON
var eddie = {name:"Eddie Vedder", age:49};

// Lab 3) modify the 'grungeAlbumsJSON' JSON to have 3 more albums from the early 90's

// We frequently want to turn a JSON object into a JavaScript object.
// To do this we use the JSON.parse() method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

var instrumentsJSON = '{"instruments": ["guitar", "bass", "drums"]}';
var instruments = JSON.parse(instrumentsJSON);
// trace(instruments);

// Lab 4) use JSON.parse to turn the grungeAlbumsJSON into a JavaScript object
// Then use jQuery to list all of the albums in the 'albums' div in the DOM.


// Sometimes we need to go from a JavaScript object to JSON so that another program can use it
// For this we use JSON.stringify();
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

var instructor = {firstName: "David", lastName: "Fisher"};
var instructorJSON = JSON.stringify(instructor);
// trace(instructorJSON);

// Lab 5) Create a basic JavaScript object with a few properties.
// Use JSON.stringify(); to turn the object into a JSON string.
