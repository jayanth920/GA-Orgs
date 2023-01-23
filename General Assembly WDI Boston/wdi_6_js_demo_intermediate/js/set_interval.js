// Function in Global Scope
function doIt(){
  console.log("Bing Bong");
};

// call doIt function every 2 seconds.
setInterval(doIt, 2000);

// Hey, I really like the function name doIt
// I want to use it a lot.

// IIFE Pattern
(function(){
  // declare msg variable in an anonymous function
  var msg = "Ding Dong";

  // declare a doIt function, that does NOT conflict
  // with the function of the same name in the global
  // scope.
  function doIt(){
    console.log(msg);
  };

  setInterval(doIt, 1000);

})();
