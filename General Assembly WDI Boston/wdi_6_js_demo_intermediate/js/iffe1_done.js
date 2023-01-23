// declare doIt function in Global scope
function doIt(){
  console.log("Bing Bong");
};

// Run doIt every two seconds.
setInterval(doIt, 2000);

// Create a IFFE to prevent 
// name collisions between doIt functions.
(function(){
  // declare msg in IFFE scope
  var msg = "Ding Dong";

  // declare doIt function in IFFE scope
  function doIt(){
    console.log(msg);
  };

  // run this function every 1 second
  setInterval(doIt, 1000);

})();
