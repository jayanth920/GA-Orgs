// Variable Hoisting
var hoistingVariableFunc = function(arg1){
    console.log('x = ' + x);
    // Declaration of x gets hoisted to top of function.
    // But not the assignment.

    var x = 55;  //comment this out to see what happens
}
hoistingVariableFunc();

// Hoisting functions becomes strange!
// antipatternfor illustration only
function hoistMe() {
  console.log(typeof foo); // "function"
  console.log(typeof bar); // "undefined"
  foo(); // "local foo"
  bar(); // TypeError: bar is not a function

  // function declaration:
  // variable 'foo' and its implementation both get hoisted
  function foo() {
    console.log('local foo'); 
  }
  // function expression:
  // only variable 'bar' gets hoisted // not the implementation
  var bar = function () {
    console.log('local bar'); 
  };
} 
hoistMe();