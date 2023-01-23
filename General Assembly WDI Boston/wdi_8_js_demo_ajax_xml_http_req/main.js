$(document).ready(function() {
  //Happens onload of the DOM
  // I can call this $.ajax in another function, which could be bound
  // to an event
  $.ajax({
    url: "http://xkcd-unofficial-api.herokuapp.com/xkcd",
    type: 'GET',
    dataType: 'json',
    data: {year: 2007} // Data to send in the HEADER of the request
  })
  .done(function(data) { // READYSTATE 4
    // I CAN CALL ANY FUNCTION HERE.
    // I CAN DO ANY DOM MANIPULATION HERE
    console.log(data);
  })
  .fail(function() { // SOME ERROR
    console.log("error");
  })
  .always(function() { // ALWAYS DO THIS. OPTIONAL
    console.log("complete");
  });

  console.log("BEFORE OR AFTER?");
})

// PURE JS
// var request = new XMLHttpRequest();
// console.log(request.readyState);
// request.open("GET", "http://xkcd-unofficial-api.herokuapp.com/xkcd?year=2007");
// console.log(request.readyState);
// request.send();
// console.log(request.readyState);

// if (request.readyState === 4) {
//   var xkcd = JSON.parse(request.response);
//   console.log(xkcd);
// }
