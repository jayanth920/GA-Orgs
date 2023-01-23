// Function that returns a function.
function addNum(num1){
  // num1 in scope
  function addIt(num2){
    return num1 + num2;
  };

  return addIt;
};

var addEleven = addNum(11);
console.log("addEleven(15) is " + addEleven(15));
console.log("addEleven(28) is " + addEleven(28));

var addTwentyThree = addNum(23);
console.log("addTwentyThree(7) is " + addTwentyThree(7));
console.log("addTwentyThree(13) is " + addTwentyThree(13));

console.log("addEleven(5) is " + addEleven(5));
console.log("addTwentyThree(8) is " + addTwentyThree(8));


// Every time we invoke addNum we create a new Closure.
// When we call addNum(11) we create a closure where num1 variable is set to 11
// When we call addNum(23) we create a different closure where
// num1 variable is set to 23

// When we return the function addIt it can access these closures.

// Calling addNum(11) creates <closure1> where num1 variable is set to the number
// 11.
// Calling addNum(23) creates <closure2> where num1 variable is set to the number
// 23.

// Calling addEleven function will invoke the code inside addIt function.
// This function has access to <closure1>.

// Calling addTwentyThree function will invoke the code inside addIt function.
// This function has access to <closure2>.
