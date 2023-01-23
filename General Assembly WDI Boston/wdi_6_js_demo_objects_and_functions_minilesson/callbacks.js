function makeRequest(callback) {
  // here is where you put code to make the request to the server
  // code goes here
  // then when you're done, call the callback function!
  callback('this is fun');
}

makeRequest(function(message) {
  console.log(message);
});
