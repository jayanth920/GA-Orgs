// logs to the chrome console
console.log('simple logger');

// Define a function.
// simple function to say hello
function sayHi() {
    console.log('sayHi: hello');
}
// Invoke or run the function
// Need the parens.
sayHi();

// functions are just a block of code
// that can be assigned to a variable.
// Functions in javascript are 'first class objects'
// They can:
// - Assigned to a variable
// - Passed to a function
// - Returned from a function

//Assign function to a variable.
var sayHiAgain = function () {
    console.log('sayHiAgain');
}
sayHiAgain();

// They can take arguments
var saySomething = function (msg) {
    console.log(msg);
};
saySomething('hello from tom');

// And variables NOT defined with var are globals
// WATCH OUT FOR THIS!
var x = 22;

var doItGlobal = function () {
    console.log('In doItGlobal: x = ' + x);
};

var doItGlobalAgain = function () {
    x = 33;
    console.log('In doItGlobalAgain: x = ' + x);
};

// See you didn't use the var keyword, bad, bad.
doItGlobal();
doItGlobalAgain();
console.log('Global scope x = ' + x);

// Use the var keyword, ALWAYS
var doItLocal = function(){
   var x = 88;
    console.log('In doItLocal: x = ' + x);
}

doItLocal();
// Didn't change global in function. GOOD!!
console.log('Global scope x = ' + x);


