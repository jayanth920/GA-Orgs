# JavaScript Data Types and Control Flow

## Learning Objectives

- Use the JavaScript console to run code
- Identify and use the primitive data types in JavaScript
- Use conditional statements
- Identify and use arrays
- Use loops
- Know where to look for more information

## Intro (5 minutes / 10:05)

Today we are going to get started with our first real programming language of the course! We've learned about HTML + CSS in previous classes this week, so we know how to make static webpages where there isn't much user interaction. Today we are going to move towards making our pages interactive and dynamic.  We'll be moving through this material very quickly but there are links included for further review.


## Data Types and Variables

Simply defined, a primitive data type is one that represents a single value. In JavaScript there are five primitive types:

1. Numbers
2. Strings
3. Booleans
4. Undefined
5. Null

### Numbers (5 minutes / 10:15)

Numbers are simply represented by their digits. In JS `4`, `13`, `-3`, `2.5` and `10e3` all mean just what you would expect.
To create a number in JS, just write it.

In your browser console, type `42` and hit **Enter**.

You can also do math in JavaScript. Type `42 + 3` into the console and see what happens.

- You can find a full list of arithmetic operators [in the expressions and operators MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators).


### Variables (10 minutes / 10:25)

**Variables** are containers for information -- we can store any value in them. We can use them to help repeat, change, store, or edit our data.

In order to **declare** a variable in JavaScript we use the keywords `var`, `const`, and `let`. The original declaration keyword was `var`, but in newer versions of JavaScript `const` and `let` were implemented. `const` is used on variables that will not be changed in your JavaScript code. `let` is used for variables that do change. People tend to use either `var` for everything or `const` and `let` consistently.

Here is an example of variable declaration in JavaScript.
```js
let unassigned
console.log(unassigned)
```

Most of the time, we want our variables to immediately store a value. Therefore, we **assign** values to our variables when we declare them. Here are three examples of variable assignment and declaration at the same time.
```js
const myVar = 42
console.log(myVar)

const sum = myVar + 8
console.log(sum)

let doubleSum = 2 * sum
console.log(doubleSum)
```

Once we have a declared variable, we can change its value. Here are some examples of both assigning our original `unassigned` variable

```js
unassigned = 'assigned now'
console.log(assigned)

doubleSum = doubleSum + 1
// or
doubleSum += 1
```

## Null + Undefined (5 minutes / 10:30)

* If we declare a variable without assigning a value to it, it will, by default, have a value of `undefined`.

* Null is very similar to `undefined` but we have to explicitly assign it to a variable.

In summary, the difference is that `undefined` implies nothing because it never was anything while `null` implies explicitly set to nothing.


## Strings (10 minutes / 10:40)

Strings are how JavaScript represents text. They are a series of 0+ characters in single or double quotes. `'Hello World!'`, `"Hello World!"`, `'h'`, and `''` are all examples of strings in JavaScript.

In order to join multiple strings together, you can use **concatenation** or **interpolation**.

Concatenation is when you add multiple strings together.
```js
let hello_world = "Hello" + "world"
```

Interpolation is where you use one string as a variable within another string. You use backticks for the entire string, and the dollar sign with brackets for the variable.
```js
let hello = "Hello"

let hello_world = `${hello} world`
```

There are also a bunch of **methods** you can run on strings.

```js
// .search(): find the starting index of a string value.
// String indexes are 0-based, so the index of a string's first character is 0.
var greetings = "Hi there friend!"
greetings.search("friend")

// .substr(): return and store a portion of a string.
// First argument is the start position, second argument is length of section you copy
var buddy = greetings.substr(9, 6)

// .slice(): returns a copy of a section of a string.
// First argument is the start position, second argument is the end position
var buddy = greetings.slice(9, 14)
```
[Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) are a bunch more examples.

## Booleans (10 minutes / 10:50)
These are the most simple JavaScript data type. They can have the values `true` or `false`

### Comparison Operators

We encounter booleans most often when comparing two values using comparison operators like...
* `==` - equal (in value)
* `===` - equal (in value and data type)
* `!=` - not equal (in value)
* `!==` - not equal (in value and data type)
* `<` - less than
* `>` - greater than
* `<=` - less than or equal to
* `>=` - greater than or equal to

What is the difference between `==` and `===`?
* `===` checks for both the data type and value.
* `==` only checks for value.

```js
1 == 1
// Does 1 equal 1? Yes ==> true

1 == 2
// Does 1 equal 2? No ==> false

1 === 1
// Does 1 equal 1 AND are both values numbers? Yes ==> true

1 == "1"
// Does 1 equal 1? Yes ==> true
// In this scenario, the numerical value inside "1" is evaluated. Javascript doesn't care that the right side is a string because we are using `==`

1 === "1"
// Does 1 equal 1 AND are both values numbers? No ==> false
// This time, Javascript does care about data types because we are using `===`. Because the left side is a Number and the right side is a String, this evaluates to false.
```

# Type Conversion (5 minutes / 10:55)

With the person next to you, spend three minutes on the following activity. First, predict what the line of code will do, next run the code in your REPL and see what it actually does.

```js
typeof(15)
// Prediction:
// Actual:

typeof(5.5)
// Prediction:
// Actual:

typeof(NaN)
// Prediction:
// Actual:

typeof("hello")
// Prediction:
// Actual:

typeof(true)
// Prediction:
// Actual:

typeof(1 != 2)
// Prediction:
// Actual:


"hamburger" + "s"
// Prediction:
// Actual:

"hamburgers" - "s"
// Prediction:
// Actual:

"1" + "3"
// Prediction:
// Actual:

"1" - "3"
// Prediction:
// Actual:

"johnny" + 5
// Prediction:
// Actual:

"johnny" - 5
// Prediction:
// Actual:

99 * "luftbaloons"
// Prediction:
// Actual:
```

------
Break (10 mins / 11:05)
------

# Conditionals (a.k.a. Control Flow) (10 minutes / 11:15)
A common feature of programming languages is conditional blocks. We can execute different pieces of code depending on whether a condition(s) is met.

```js
if (condition) {
  // this code runs if the condition evaluates to true
}
```

Example:
```js
let hungry = true

if (hungry) {
    console.log("eat food")
}
```

We can also run other code if the condition is not met.

```js
if (condition) {
  // this code runs if the condition evaluates to true
}
else if (another_condition) {
  // this code runs if the condition evaluates to false and another_condition evaluates to true
}
else {
  // this code runs if the condition and another_condition evaluate to false
  // this code does not run if the condition or another_condition evaluates to true
}
```
You must have the initial `if` statement, and you can only have one final `else` statement, but you can have 0+ `else if`'s in the middle.

```js
let assignments_completed = 0

if (assignments_completed === 0) {
    console.log("Work on your homework!")
} else if (assignments_completed === 1) {
    console.log("Good work, still more to go")
} else if (assignments_completed === 2) {
    console.log("Almost there!")
} else {
    console.log("You are done!")
}
```

### You Do
Write a conditional statement that acts like a bouncer at a bar. If the age variable is below 21, the program should output that the person cannot enter because they are too young, if they are over 21 they can enter, and if age is not a number it outputs an error.

[Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) is more documentation.

## While Loops (5 minutes / 11:20)
A `while` loop is like an `if` statement but it will execute the content of its block repeatedly until the condition becomes false.

```js
num = 0
while (num <= 100) {
  console.log(num)
  num += 1 // short-hand for num = num + 1
}
```
[Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) is some more information on while loops.


## Arrays (10 minutes / 11:30)
In addition to the primitive data types we have seen so far in class, JavaScript also has the ability to store collections of data. The most simple type of collection is an array. Arrays are lists of other data, accessed by their position in the list. Array indexes start at 0 and move up from there.

Arrays can contain any type of data, even mixed data types!
```js
// we can declare an array
let myArr = [4, 5, 6, 7]
console.log(myArr)

// we can access one item
console.log(myArr[1])

// we can change a value
myArr[1] = 8
console.log(myArr)

// we can add an item to the end
myArr.push(9)
console.log(myArr)

// we can remove an item from the end
console.log(myArr.pop())
console.log(myArr)
```

[Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) is more documentation on arrays.

## `for` loop (10 minutes / 11:40)

```js
for (var i = 0; i < 10; i++) {
  console.log(i)
}
```

The loop is indicated with the keyword `for` followed parentheses that contain 3 parts separate by `;`...
  1. Instantiates the iteratee (in this example, `i`). `i` begins at 0 and will increase throughout the loops execution. `i` can be accessed within the loop.
  2. The comparison expression. The loop will continue to execute until this expression evaluates to false.
  3. How much the iteratee is incremented after each execution of the loop. In this example, `i` will increase by 1 after each iteration of the loop.

The actual content of the loop is located within the trailing curly brackets. In this example, `console.log(i)` will be executed ten times.

Oftentimes we will use a `for` loop to iterate through an array. That means we will want the loop to execute as many times as there are items in that array. Take a look at this example...

```js
var names = ["tyler", "nayana", "andy", "adrian", "nick", "jesse", "james"]

for (var i = 0; i < names.length; i++) {
  console.log(names[i])
}
```

> This loop will run 7 times because the length of the array is 7. Each iteration of the loop will print out whichever name exists at index `i` within the array.

### `for in` loop (10 minutes / 11:50)

The `for in` loop functions similar to the `for` loop, but it is only used when iterating through a collection.

```js
var names = ["tyler", "nayana", "andy", "adrian", "nick", "jesse", "james"]

for (i in names) {
  console.log(names[i])
}
```

* Also begins with the keyword `for`
* The parentheses contain the iteratee (the variable representing the index), followed by the keyword `in`, followed by the complex data type you would like to iterate over (either array or object)

### You Do (5 minutes / 12:00)
With the people at your table use the content from this lesson to write the [99 Bottles of Beer song](http://www.99-bottles-of-beer.net/lyrics.html). Bonus: do this once using a for loop and once using a while loop.

## Googling for Documentation (5 minutes / 12:05)

For in depth information on any of these types, the best place to start is google.

Be sure to specify JavaScript (or at least js) and the type you would like information about.

For example: search `javascript number power`

Especially good resources include:
- [W3 Schools](https://www.w3schools.com/) has great reference and tutorials though sometimes does not have the depth you are looking for.
- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/) is very similar to W3 in that it has both reference and tutorial but MDN is much more detailed (this can be a good or bad thing).
- [Wikipedia](https://www.wikipedia.org/) is great as a primer for high level ideas that may not be language specific.
- Blog posts, Stack Overflow questions, and Gists have lots of valuable information
  - While these can be great resources, they are not as curated as a the above sites so be wary and check publish dates

# Exercise: Fizz Buzz (15 minutes / 12:20)

Fizz-Buzz is a classic coding exercise that you can create using your knowledge of conditionals and loops. Implement code that does the following...
* Counts from 1 to 100 and prints out something for each number.
* If the number is divisible by 3, print `"Fizz"`.
* If the number is divisible by 5, print `"Buzz"`.
* If the number is divisible by both 3 and 5, print `"FizzBuzz"`.
* If the number does not meet any of the above conditions, just print the number.

Your output should look something like this...

```text
1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...
```

# Review Questions (5 minutes / 12:30)
1. What role does Javascript play on a website?
2. What is the difference between undefined and null?
3. What are the five primitive data types?
4. What is an example of type coercion?


# Homework
* [Choose Your Own Adventure](https://git.generalassemb.ly/ga-wdi-exercises/choose_your_own_adventure_js)

-------

# Additional Notes

## Syntax

### Semicolons
- Wouldn't recommend using them, but if you do be consistent!

### camelCase

Javascript variables and function names are written using camel case syntax. That works
- First letter of first word lowercase
- First letter of remaining words uppercase
- No spaces or punctuation between words

#### Examples

```js
var pizzaTopping = "pepperoni"
var isThisVarCamelCase = true

// Function expression
var helloWorld = function(){
  console.log("Hello World!")
}

// Function declaration
function helloWorld(){
  console.log("Hello World!")
}
```

### Comments

Comments are an extremely important part of writing code. They help us make sense of our code, especially for other people reading our code, or when we have walked away from some code and have completely forgotten what certain sections of it do. This happens much more quickly than you may imagine.

If you are working on a team, your documentation and commenting practices often translate to how easy you are to work with!

```js
// Single line comment

/*
  Multiple
  line
  comments
*/
```

## More Practice

### Practice with Conditionals and Loops
- [Conditionals Readme](https://git.generalassemb.ly/ga-wdi-lessons/js-intro/blob/master/booleans-and-conditionals.md) and [Loops Readme](https://git.generalassemb.ly/ga-wdi-lessons/js-intro/blob/master/loops.md)

### Practice with Data Types
- [Data Types
and Collections Readme](https://git.generalassemb.ly/ga-wdi-lessons/js-intro/blob/master/data-types-and-collections.md)

## Resources

- [Khan Academy Intro to Programming JS](https://www.khanacademy.org/computing/computer-programming/programming#intro-to-programming)
- [You Don't Know JS: Up & Going](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/README.md#you-dont-know-js-up--going)
- [Eloquent JavaScript](http://eloquentjavascript.net/)
