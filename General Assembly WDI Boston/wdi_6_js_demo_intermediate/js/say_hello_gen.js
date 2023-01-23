
// create a function that returns a function
function sayHelloGenerator(){
  var prefix = "Hello ";

  // create an inner function
  function hey(name){
    return prefix + name;
  }
  // return the inner function, 'hey'
  return hey;
}

// Now doIt varialbe's value is ptr to the hey inner function
var doIt = sayHelloGenerator();
/*
 doIt     | ptr to f1
 ...      | ...
 hey      | ptr to f1
 ...      | ...
  f1      | (the code for the inner function)
 ...      | ...
*/

// invoke the function that doIt points to
// pass it "tom"
// set it's return value to msg
var msg = doIt("tom");

// output msg
console.log(msg);
