![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# An Introduction to JavaScript Functions

## Objectives

By the end of this, students should be able to:

- Define and call functions with argument dependent return values
- Define and call functions defined in terms of other functions
- Define and call functions with optional arguments
- Define and call functions with a variable number of arguments

## Functions

In mathematics, a function maps one or more arguments to a single value.
JavaScript isn't that strict.

```javascript
function five() {
  return 5;
};

function debugLog(msg){
  console.log(msg)
}

```

What can we do with functions?

Functions provide parts of the building blocks of programs, abstraction and encapsulation.

## Arguments

In JavaScript, functions can be defined as taking zero or more arguments.

```javascript
function zero() {
  return 0;
};

function one(arg){
  return arg;
}

function three(arg1, arg2, arg3){
  return arg2;
}

```

What happens when we call a function with the wrong number of arguments?

How would you create a function with an optional argument?

JavaScript provides ways to handle arguments not in the function definition:

```javascript
function sum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
};
```

Could you do something similar using a single argument?

## Scope

What do you think of when you hear the word "scope"?

```javascript

var i = 3;

function foo() {
  var i = 0;
  var n = i;
  return n;
}
```

JavaScript uses function scope.

## Lab

```javascript
// 1. Write a function that splits a string into an array of normalized words,
//    (lowercase without punctuation).
function getWords(/* your arguments go here */){
  /* your code goes here */
}

// 2. Write a function that takes a string and returns an array of it's unique
//    normalized words.
function getUniqueWords(/* your arguments go here */){
  /* your code goes here */
}

// 3. Write a function that counts how many words are in a string, providing
//    the *option* to count unique words instead of total words.
function wordCount(/* your arguments go here */){
  /* your code goes here */
}

// Don't forget to reuse functions wherever possible!

```

## Quiz

Please follow the instructions at https://github.com/ga-wdi-boston/wdi_1_js_functions_intro_quiz

## Additional Resources

- https://en.wikipedia.org/wiki/Function_(mathematics)
- https://en.wikipedia.org/wiki/Subroutine
- http://en.wikipedia.org/wiki/Variable_shadowing

