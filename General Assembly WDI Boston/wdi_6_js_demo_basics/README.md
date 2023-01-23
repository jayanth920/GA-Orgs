![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# JavaScript Basics

[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) is a high-level programming language like Ruby, but with a very different syntax and different ways of dealing with objects. It is also the only language understood by web browsers, so JavaScript is crucial in writing web applications that respond immediately to user actions, without having to wait for a server to send back a whole new HTML page.

## Objectives

By the end of this lesson, students should be able to:

- List the Javascript datatypes
- Manipulate JavaScript datatypes
- Write conditionals to manage control flow in javascript
- Describe the difference between loose and strict equality
- Read and write javascript arrays
- Read and write javascript objects

## Instructions

* Fork, clone your fork
* `cd` into your local copy
* run `npm install`
* run `bower install`
* run `grunt test`
* Follow along with the README and make the tests pass.

## Running JavaScript

When developing in Ruby, we'd run code files by typing `ruby some_file.rb`. We *can* do something similar with JavaScript by typing `node some_file.js`. This runs the file through [NodeJS](http://nodejs.org/), a framework that can run JavaScript outside of a web browser. This is useful when developing JavaScript applications that run on a server &ndash; but since we'll mostly be using JavaScript in the browser, we'll rarely use this method.

* **Try it:** Examine the contents of `app/js/testrun.js`. Then type `node testrun.js` in your terminal and you should see "It works!"

Browsers run JavaScript when they see a `<script>` tag in a web page that points to the URL of a JavaScript file. The browser will make a separate request to download the file, run it, then proceed with parsing the rest of the page.

There is no "terminal" in the browser, but there is something called the **console** that shows output and errors from JavaScript programs. It also lets us type in and run JavaScript code one line at a time, like Ruby's `pry`.

* **Try it:** Examine the contents of `app/testrun.html`. Then open this file in your browser. Press `Cmd+Opt+I` (Mac) or `Ctrl+Shift+I` (Linux) to open the console (depending on which browser you're using), and you should see "It works!"

*Note:* If you type `node` in your terminal without specifying a filename, it will let you enter and run JavaScript one line at a time just like the browser console.

## Data Types

In Javascript there are no classes, *at least until ES6*. But, there are ways to create structures that look and behave like classes. We'll look at this later. 

In Javascript there are [data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures). There are two kinds of data types, primitive types and reference types.


## Primitive Types.
There are five Primitives, one more coming in ES6. *Note: many languages, like Java, have primitives*.  
  
* number  
* string  
* boolean  
* undefined  
* null  
* symbol (new in ECMAScript 6)  

Some common properties of primitives are:

* The are immutable, they can't be changed.
* You can't add properties to primitives. 
* They are [passed by value](app/js/pass_by_ref.js).


## Reference Types.
There are a number of Reference Types in javascript. Some of these are: 

* Object. All other reference types inherit from this type.  
* Array 
* Date
* Regex
* Math
* Function. 
* Primitive Wrapper Types (Number, String and Boolean)

Some common properties of reference type are:

* The are mutable, they CAN be changed.
* You CAN add properties to them.
* They are [passed by reference](app/js/pass_by_ref.js).

### Primitive Wrapper Types
There are three [primitive wrapper types](http://adripofjavascript.com/blog/drips/javascripts-primitive-wrapper-objects.html), Number String and Boolean. Any time you attempt to access a property on a primitive, JavaScript will implicitly create a temporary wrapper object.

### Function Types.
All functions are actually instances of a Function type. So, in Javascript Functions can have properties and methods. *This makes javascript functions very powerful*.


## Dynamic Typing

JavaScript is a loosely typed or a dynamic language. That means you don't have to declare the type of a variable ahead of time. The type will get determined automatically while the program is being processed. That also means that you can have the same variable as different types:

```javascript
var foo = 42;    // foo is a Number now
var foo = "bar"; // foo is a String now
var foo = true;  // foo is a Boolean now
```

## Numbers

**In `app/js/app.js` follow along and write this code.**

```javascript
'use strict';

/* NUMBERS
———————————————————————————————————————————————————
Unlike in Ruby there is no special distinction between numbers with and
without decimal points. They are all just "numbers".  */

var currentLevel = 17;
var price = 1499.99;
var fiveMinutes = 60 * 5; // all the basic math operations work
var threeHalves = 3 / 2; // this results in 1.5 -- no weird "integer division"
price = 1299.99; // only the first assignment needs a `var`
price += 100; // this kind of shortcut still works

/*  There is only 1 integer that has two representations: 0 is represented
as -0 and +0. ("0" is an alias for +0).

*/

var infinity = 42 / +0;
var negativeInfinity = 42 / -0;
```
**Run `grunt test`. If there are any failing tests go back and fix your code.**

## Strings

**In `app/js/app.js` add this code.**

```javascript
/* STRINGS
———————————————————————————————————————————————————
Unlike in Ruby there is no difference between single quotes and double
quotes... since JavaScript has no string interpolation. Strings are also
"immutable", meaning we can't modify them in-place (no shoveling!)  */

var greeting = 'Hello there!';
var firstName = "Jason";
var lastName = "Wharff";
var myName = firstName + ' ' + lastName; // clunky, but it's the only way
```
**Run `grunt test`. If there are any failing tests go back and fix your code.**

## Booleans

**In `app/js/app.js` add this code.**

```javascript
/*  BOOLEANS
———————————————————————————————————————————————————
Like in Ruby, we have the booleans true and false. */

var excited = true;
var testMode = false;

var excitedlyTesting = excited && testMode; // boolean && and || are here
var calm = !excited; // boolean "not" is also here
```
**Run `grunt test`. If there are any failing tests go back and fix your code.**

## Undefined

**In `app/js/app.js` add this code.**

```javascript
// Unlike in Ruby, we have an extra nil-like value called "undefined". It's
// what you'll get if you access a variable that's not assigned yet, or call
// a function that doesn't return anything.
var mystery = undefined;
var spooky; // This does the same thing as above! The value is "undefined"
```

**Run `grunt test`. If there are any failing tests go back and fix your code.**

## Null


**In `app/js/app.js` add this code.**

```javascript
/*  NULL
———————————————————————————————————————————————————
The value null is a JavaScript literal representing null or an "empty" value, 
i.e. no object value is present. It is one of JavaScript's primitive values.
We also have nil, but in JS it's called "null". A value that carries no value.
Like undefined, but defined (not automatically assigned).
It is falsy.  */
var result = null; // the variable `result` is defined, but it's value is null.
console.log(typeof undefined);

```

**Run `grunt test`. If there are any failing tests go back and fix your code.**


We already have some notable syntax differences from Ruby:

* Variable and function names use `lowerCamelCase` rather than `snake_case`. This is a much weaker convention in JavaScript than snake case in Ruby &ndash; although it's the style used by the language itself, many JavaScript developers use snake case anyway.
* Lines of code usually end in a semicolon. We *can* leave these out, but JavaScript will be left to guess where they should be inserted, and sometimes it guesses wrong. The rules for when to use a semicolon are hard to remember, but your JSHint plugin for Sublime Text will steer you right.
* The first time we assign a variable (and *only* the first time), we must prefix the assignment with `var`. This is known as "declaring" the variable. As with semicolons, if you don't do this your program will still work *sometimes*, but not always. We'll get into why this is when we talk about functions.

A common theme in JavaScript is "things you can easily get wrong and have your program usually still work, but sometimes not". **Attention to detail is your ally when writing JavaScript.**


## Control Flow

**In `app/js/app.js` add this code.**

```javascript
/*  Control Flow in Javascript
———————————————————————————————————————————————————
Important differences from Ruby:
  - Conditions must be enclosed in parentheses.
  - Code blocks are always enclosed in braces. There is no `end` in JavaScript.
  - The "else-if" syntax is two separate words, `else if`, rather than `elsif`.
  - There is no `unless` in JavaScript. Use the "not" operator (`!`) instead.   */

var holyNumber = function(holyNumber){
  if(holyNumber > 3) {
    return 'Four shalt thou not count. Five is right out.';
  } else if(holyNumber < 3) {
    return 'Count neither one nor two, excepting that thou then proceedest to three.';
  } else if(holyNumber === 3) {
    return 'Throw the holy hand grenade!';
  } else {
    return 'World ends';
  }
};

holyNumber('4'); // 'Four shalt thou not count. Five is right out.'
holyNumber(4); // 'Four shalt thou not count. Five is right out.'
holyNumber('2'); // 'Count neither one nor two, excepting that thou then proceedest to three.'
holyNumber(2); // 'Count neither one nor two, excepting that thou then proceedest to three.'
holyNumber('3'); // 'World ends'
holyNumber(3); // 'Throw the holy hand grenade!'

```

**Run `grunt test`. Then look at the tests on lines 106–119. Note the difference in datatypes passed into the function call. Some are strings, some are numbers, but Javascript converts the datatypes when the ">" or "<" are used.**


### Less-Used Flow Control

JavaScript also has `while` loops (but no `until` loops).

**There are no tests for while loops. If you're interested in testing this code, run `grunt serve` in the root of your repo, then uncomment this code in index.html**

```javascript
var input = '';
while(input !== 'stop') {
  input = prompt('Enter "stop" to cut it out');
}
```

Instead of `case`/`when`, JavaScript has `switch`/`case` (just to trip you up).

**In `app/js/app.js` add this code.**

```javascript
/*  Switch/Case statements
———————————————————————————————————————————————————
Note that `case` blocks are *not* enclosed in braces,
and each one also needs a `break` statement at the end &ndash;
otherwise code execution will "fall through" to the next
block and keep on going! Thankfully `switch` uses the
threequals for comparison, but due to its quirks and
inflexibility, you don't see it that often in real-world programs.
*/

var yearbook = function(year){
  switch(year) {
    case 'freshman':
      return 'cannon fodder';
      break;
    case 'sophomore':
      return 'mildly respectable';
      break;
    case 'junior':
      return 'some influence';
      break;
    case 'senior':
      return 'phenomenal cosmic power';
      break;
    default:
      return 'mysterious stranger'
      break;
  }
};
```

**Run `grunt test`. If there are any failing tests go back and fix your code.**


## Loose vs. Strict equality operators

Notice above that even though `holyNumber` is a string, we can use the `>` and `<` operators to compare it with numbers. This is because most JavaScript [comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators), **including `==`**, are "loose" &ndash; meaning JavaScript will try to convert both sides of the operator to the same data type before evaluating. This has some counter-intuitive consequences.

**In `app/js/app.js` add this code.**

```js
// All of these are true
3 == '3'
0 == false
1 == true
2 != true
2 != false
0 == ''
0 == []
'' == []
'wat' == ['wat']
null == undefined
```

Fortunately, JavaScript also has the `===` operator, known as the "strict" equality operator or the "threequals", which does not attempt to convert data types and works much closer to Ruby's notion of equality. ***Always use this operator to check equality!***

There is also a "strict" not-equal operator, `!==`. Unfortunately, there are no strict greater-than or less-than operators, so we kind of have to live with the data type conversion when using those.

```js
// Never use these operators
3 == '3' // true
1 != '1' // false

// Always use these operators
3 === '3' // false
1 !== '1' // true
```
**Run `grunt test`. If there are any failing tests go back and fix your code.**



## Arrays

[JavaScript arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) work mostly the same as Ruby arrays.

**In `app/js/app.js` add this code.**

```javascript
/*  Arrays
———————————————————————————————————————————————————
Like all objects, arrays can have *functions* (or methods) 
defined on them, like `.sort()`, that we can call. Functions 
must always be called with parentheses, even if we're not 
passing any arguments. Note `length` is not a function &ndash; 
instead it is a *property* that is accessed directly, and we 
cannot use parentheses to call it. The MDN reference will 
tell you whether something is a property or a function. */

var colors = ['red', 'green', 'blue'];
var green = colors[1];
var colorsCount = colors.length;
var indexOfBlue = colors.indexOf('blue');
var lastColor = colors[colors.length - 1]; // we can't use negative indexes

colors.push('purple');
var purple = colors.pop();

colors.sort(); // now they're in alphabetical order

// These should be familiar from Ruby
var newColors = 'blue, orange, yellow'.split(', ');
var joinedColors = newColors.join(' and '); // 'blue and orange and yellow'
```

**Run `grunt test`. If there are any failing tests go back and fix your code.**

### Iterating through an array

**In `app/js/app.js` add this code.**

```javascript
/*  Iterating through arrays
———————————————————————————————————————————————————
In Ruby we avoid `for` loops in favor of methods like
`each` or `map`, but in JavaScript they are seen frequently
for simple iteration.
*/
var colors = ['red', 'green', 'blue'];
var tmpColors = [];
for(var i = 0; i < colors.length; i++) {
  tmpColors.push(colors[i] + ' is one of my favorite colors');
}

/*  The three semicolon-separated components of a `for` loop are:
- A statement that will be executed once before the first iteration
- An expression evaluated at the start of each iteration &ndash; if `false`, the loop is terminated
- A statement that will be executed at the start of each iteration

Since `for` loops are awkward and error-prone, it's usually
preferable to use the `forEach` function instead. This requires
defining an anonymous function, which we'll get into later.
`forEach` can also receive the index and the array iterating upon as params
There are also `map` and `reduce` functions that do the same thing
as their Ruby equivalents.  */

var tempColors = [];
colors.forEach(function(color, index, array){
  tempColors.push(color + ' is favorite color number ' + index);
});

```
The three semicolon-separated components of a `for` loop are:

* A statement that will be executed once before the first iteration
* An expression evaluated at the start of each iteration &ndash; if `false`, the loop is terminated
* A statement that will be executed at the start of each iteration

Since `for` loops are awkward and error-prone, it's usually preferable to use the `forEach` function instead. This requires defining an anonymous function, which we'll get into later.

There are also `map` and `reduce` functions that do the same thing as their Ruby equivalents.


**Run `grunt test`. If there are any failing tests go back and fix your code.**

## JS Objects

**In `app/js/app.js` add this code.**

**There is no such thing as a hash in JavaScript.** That said, consider the following:

```js
var friend = {
  name: 'Dan',
  age: 26,
  colors: ['purple', 'blue', 'teal'],
  pets: [
    { name: 'Fattykins', species: 'cat', age: 6 },
    { name: 'Reginald', species: 'hamster', age: 2 }
  ]
};

```
<!-- var secondColor = friend['colors'][1];
var firstPetAge = friend['pets'][0]['age'];
friend['colors'].push('indigo'); -->
Looks like a hash, right? Nope! [It's actually a plain object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects). As we mentioned above, objects in JavaScript can have *properties*. In this example, `name`, `age`, and so on are not "keys" but *property names*. Each property has a value, like the keys in a Ruby hash have values.

Some important differences to note:

* Though the property names look like Ruby symbols, they're actually an alternate syntax for strings.
* This is the *only* syntax to define object properties &ndash; there is no "hash rocket".
* Bracket notation is not the only way we can access object properties. Take a look:

```js
var secondColor = friend.colors[1];
var firstPetAge = friend.pets[0].age;
friend.colors.push('indigo');
```

This style is preferred over the bracket style where possible. It should also look familiar: We used the same syntax to get the `.length` of an array, which we mentioned was a property.

### Operations on Objects

**In `app/js/app.js` add this code.**

```javascript

/*  Operating on Objects
———————————————————————————————————————————————————
Plain objects in JavaScript are extremely minimal and
have virtually no functions defined on them (unlike Ruby
hashes, which have dozens!). We can at least iterate
over the properties of any object using a `for...in` loop:
*/
var propArray = []
for(var prop in friend) {
  propArray.push("My friend's " + prop + " is " + friend[prop]);
}
```

And we can remove properties of any object using the `delete` operator:

```javascript
console.log(friend.age); // 26
delete friend.age;
console.log(friend.age); // undefined
```

Since these are plain objects and not hashes, two objects are only considered equal if they are actually the same object (even if we compare with `==`):

```js
var friend1 = { name: 'Dan', age: 26 };
var friend2 = { name: 'Dan', age: 26 };

console.log(friend1 === friend2); // false
friend2 = friend1;
console.log(friend1 === friend2); // true
```
<!-- 

# Removing I/O in favor of TDD

## Basic Input/Output

Since we won't be interacting with web pages for a little while, we can use `console.log` or `alert` as the JavaScript equivalents of `puts`. There is also a JavaScript equivalent to `gets`, which is `prompt`. As in Ruby, these are mostly used for temporary debugging purposes and you'd never see them on a production web site.

```js
console.log('Here I am');

var name = prompt('What is your name?');
alert('Hello there, ' + name);
```

`console.log`, `alert`, and `prompt` are all built-in **functions**, the JavaScript term for methods. We'll learn more about them soon, but note that *the parentheses are required* when calling a function &ndash; even if you don't pass any parameters!

# LABS

## Lab 1

Working in pairs, write a JavaScript version of the [Guess the Number](https://github.com/ga-wdi-boston/wdi_1_ruby_hw_number_guess) assignment. We might not have time to get all the specifications done, but you should at least have a prompt that asks the user for a single guess and tells them whether it was correct, low, or high. It's not cheating to look at your Ruby code, though at this point you may want to disown it!

## Lab 2

Working in pairs, revisit [this Ruby array lab](https://github.com/ga-wdi-boston/wdi_1_ruby_lab_arrays/blob/master/lab1-days.md) in JavaScript. You'll definitely need to make use of both the MDN documentation and your Google-fu!

## Lab 3

Working in pairs, follow the prompts in `alice.js`. [This may look familiar](https://github.com/ga-wdi-boston/wdi_1_ruby_demo_hashes/blob/master/employment_lab.rb). As with the previous lab, you'll need to do some research outside of what we covered!

 -->