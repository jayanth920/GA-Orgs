// Closure - functions that a run during execution time
// can always access all scopes, and the variables in
// these scopes, that were built during the compilation
// phase.

function sayHelloGenerator(){
  // prefix variable is in the sayHelloGenerator
  // function scope.
  var prefix = "Hello ";

  // hey is also in the sayHelloGenerator function scope.
  function hey(name){
    // This inner function can ALWAYS
    // access prefix. Because prefix was declared
    // in an outer scope, i.e. sayHelloGenerator scope.
    return prefix + name;
  };

  // return a the hey function
  return hey;
};

// sayHey variable will point to the 'hey' inner
// function defined above.
var sayHey = sayHelloGenerator();

// Invoke this function passing in a name.
var msg = sayHey("Bart");
console.log(msg);
