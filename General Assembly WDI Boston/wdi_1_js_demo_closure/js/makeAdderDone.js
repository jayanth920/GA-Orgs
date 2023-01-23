// Return a function that will add x and y
function makeAdder(x){

  return function(y){
    return x + y;
  };
};

// Create a function that will take 1 argument
// and add 5 to it.
var add5 = makeAdder(5);

// add 5 to 7 and output it.
console.log(add5(7));
