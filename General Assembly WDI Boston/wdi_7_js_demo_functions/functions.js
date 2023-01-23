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

// multiple params are OK.
var multiParamsFunc = function (x, y, z) {
    var result = "x = " + x + ", y = " + y + ', z = ' + z;
    console.log("multParamsFunct: " + result);
};

// Multiple paramaters
var result = multiParamsFunc('hey', 'foo', 'bar');
console.log('Oops didnt return anything: result =  ' +  result);
// Fixit

// lets pass only two of three args
var result = multiParamsFunc('hey', 'foo');
console.log('Only two args passed: result =  ' + result);

// Can get all of the functions arguments.
// Kind of like splat in Ruby?
var funcArgs = function(arg1) {
    for(var i = 0; i < arguments.length; i++){
       console.log('argument[' + i + ']= ' +  arguments[i] );
    }

}
// Cool can get all the args
funcArgs(77, 'hello', 'goodbye');

// Variable Hoisting
var hoistingFunc = function(arg1){
    console.log('x = ' + x);
    // Declaration of x gets hoisted to top of function.
    // But not the assignment.

    //var x = 55;  // uncomment this
}
hoistingFunc();

// multiple params are OK.
var multiParamsFunc = function (x, y, z) {
    var result = "x = " + x + ", y = " + y + ', z = ' + z;
    console.log("multParamsFunct: " + result);
};

var result = multiParamsFunc('hey', 'foo', 'bar');
console.log('Oops didnt return anything: result =  ' +  result);
// Fixit

// lets pass only two of three args
var result = multiParamsFunc('hey', 'foo');
console.log('Only two args passed: result =  ' + result);

// Can get all of the functions arguments.
// Kind of like splat in Ruby?
var funcArgs = function(arg1) {
    for(var i = 0; i < arguments.length; i++){
       console.log('argument[' + i + ']= ' +  arguments[i] );
    }

}
// Cool can get all the args
funcArgs(77, 'hello', 'goodbye');

// Recursion
function recursiveFunc(val){
    var newVal = val - 1;
    if(val < 1) {
        return;
    }
    console.log('val is ' + val);
    console.log('newVal is ' + newVal);
    recursiveFunc(newVal);
}
recursiveFunc(4);

// Ye ole fibonacci sequence with recursion
function fib(n){
    if (n < 2){
        return n;
    } else{
        return n * fib(n-1);
    }
}
var fibResult = fib(6);
console.log('fibResult is ' + fibResult);


// Pass a function to a function
// Little bit like using a block in Ruby
// But, this is more powerful.
var doItWithFunc = function(cmd){
   var x = 5, cmdResult =  cmd(x);
    return cmdResult;
};

function square(n){
    return n * n;
};

function cube(n){
    return n * n * n;
};

console.log('doItWithFunc square = ' + doItWithFunc(square));

console.log('doItWithFunc cube = ' + doItWithFunc(cube));
