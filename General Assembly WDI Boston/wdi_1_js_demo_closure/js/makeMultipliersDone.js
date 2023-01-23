// Return a function that will add x and y
function multiplierFactory(x){

  return function(y){
    return x * y;
  };
};

// Create a function that will take 1 argument
// and multiply 5 by it.
var mult6 = multiplierFactory(6);
// Create a function that will take 1 argument
// and multiply 13 by it.
var mult13 = multiplierFactory(13);

var result1 = mult6(3);
console.log("6 x 3 = " + result1);

var result2 = mult13(7);
console.log("13 x 7 = " + result2);
