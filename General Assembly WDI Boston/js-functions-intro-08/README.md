![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# An Introduction to JavaScript Functions

## Objectives

By the end of this, students should be able to:

- Create and call functions with argument dependent return values.
- Create and call functions defined in terms of other functions.
- Create and call functions with optional arguments.
- Create and call functions with a variable number of arguments.

## Functions

In mathematics, a function maps one or more inputs to a single output.

JavaScript isn't that strict, allowing zero inputs or no specified output.  

```js
var five = function () {
  return 5;
};

var debugLog = function (msg){
  console.log(msg)
}
```

Strictly speaking, all JavaScript functions evaluate to a value, but that value is `undefined` if we do not provide a return.

What can we do with functions?

Functions provide important parts of the building blocks of programs, abstraction and encapsulation.

It's important to rememeber that console.log prints is argument to the `console` (the terminal using node, the console area of the debug tools using chrome) but does not return a value.

## Parameters and Arguments

When you create a function, you specify the parameters (the formal parameters,  variables local to the function).  When you call a function, you specify the arguments (actual parameters, which are the values that the formal parameters are set to when your function executes).

In JavaScript, functions can be defined as taking zero or more arguments.

```js
var zero = function () {
  return 0;
};

var one = function (arg){
  return arg;
}

var three = function (arg1, arg2, arg3){
  return arg2;
}
```

What happens when we call a function with the wrong number of arguments?

How would you create a function with an optional argument?

JavaScript provides ways to handle arguments not in the function definition:

```js
var sum = function () {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
};
```

Could you do something similar using a single argument?

Also, JavaScript allows us to modify the values of reference types passed as arguments.

## Scope

What do you think of when you hear the word "scope"?

```js

var globalScope = 3;

var scope = function () {
  var functionScope = 5;
  return globalScope + functionScope;
}
```

JavaScript uses function scope.  This means that each new function created creates a new scope.

## Lab

We'll use `lib/lab.js` to build functions to wrap some of the collection processing we've done before.

## Assessment

Please follow the instructions at https://github.com/ga-wdi-boston/js-functions-intro-08-solo-assessment

## Additional Resources

- https://en.wikipedia.org/wiki/Function_(mathematics)
- https://en.wikipedia.org/wiki/Subroutine
- http://en.wikipedia.org/wiki/Variable_shadowing
- https://en.wikipedia.org/wiki/Parameter_(computer_programming)
