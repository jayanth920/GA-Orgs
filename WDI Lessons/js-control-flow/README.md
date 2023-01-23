# Control Flow

## Lesson Objectives

  - Describe the role of control flow
  - Identify elements of control flow
  - Utilize control flow elements to direct the execution of a program with conditional logic

## Conditionals (a.k.a. Control Flow) (15 min / 2:45)

### What is Control Flow?

Control flow is simply applying conditional logic to how your code is run. You may want to run certain blocks of code but not others, or you might want to run certain code blocks over and over again. We probably wouldn't want to show a user account page to a user who isn't logged in, since there would be no data to display!

A common feature of programming languages is conditional blocks. We can execute different pieces of code depending on whether a condition(s) is met.

```js
if (condition) {
  // this code runs if the condition evaluates to true
}
```

*Example*:
```js
let hungry = true

if (hungry) {
  console.log('You should eat food!')
}
```

We can also run other code if the condition is not met with `else`.

```js
if (condition) {
  // this code runs if the condition evaluates to true
} else {
  // this code runs if the condition evaluates to false
}
```

*Example*:
```js
let hungry = true

if (hungry) {
  console.log('You should eat food!')
} else {
  console.log('You should not eat food!')
}
```

We can also have multiple conditions to check for using `else if`

```js
if (condition) {
  // this code runs if the condition evaluates to true
}
else if (anotherCondition) {
  // this code runs if the condition evaluates to false and anotherCondition evaluates to true
}
else {
  // this code runs if the condition and anotherCondition evaluate to false
  // this code does not run if the condition or anotherCondition evaluates to true
}
```
You must have the initial `if` statement, and you can only have one final `else` statement, but you can have *any number* of `else if` statements in the middle.

*Example*:
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

### You Do (10 min / 2:55)

In [Repl.it](https://repl.it/) or VS Code, write a conditional statement that acts like a bouncer at a bar. If the age variable is below 21, the program should output that the person cannot enter because they are too young, if they are over 21 they can enter, and if age is not a number it outputs an error.

**Bonus**: if age is 18 or older, but under 21, output that the person can enter the bar but cannot drink!

[Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) is more documentation.

## while loop (10 min / 3:05)

A `while` loop is like an `if` statement but it will execute the content of its block repeatedly until the condition becomes false.

```js
num = 0
while (num <= 100) {
  console.log(num)
  num += 1 // short-hand for num = num + 1
}
```
[Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) is some more information on while loops.

The `while` loop is especially useful when you have to have a loop run for an unknown number of times.  Make sure you write in a way for your condition to eventually become false or else you can get cause in an infinite loop!

```js
let passwordGuess = ''
while (passwordGuess !== 'password') {
  passwordGuess = prompt('You have been imprisoned in the code-block of a while loop! What is the magic word to exit?')
}
alert('Argh! You have escaped! I am so lonely, no one ever wants to stay.')
``` 

## for loop (10 minutes / 3:15)

```js
for (let i = 0; i < 10; i++) {
  console.log(i)
}
```

The `for` loop contains 3 parts separated by `;`
  1. Instantiates the iteratee (in this example, `i`). `i` begins at 0 and can be accessed within the loop.
  2. The comparison expression. The loop will continue to execute until this expression evaluates to false.
  3. How much the iteratee is incremented after each execution of the loop. In this example, `i` will increase by 1 after each iteration of the loop.

The actual content of the loop is located within the trailing curly brackets. In this example, `console.log(i)` will be executed ten times.

### Iterating over Arrays

`for` loops are especially useful for going an array, item by item, and doing something with each item, one at a time. We could also do something with a particular item if it meets certain conditions. The block of the `for` loop, designated by curly braces, is where we would do something with each item. Take a look at this example...

```js
let instructors = ["meg", "zakk", "perry", "james", "ali", "max", "mike"]

for (let i = 0; i < instructors.length; i++) {
  console.log(instructors[i])
}
```

> This loop will run 7 times because the length of the array is 7. Each iteration of the loop will print out whichever name exists at index `i` within the array.

We can also combine loops with `if-else` statements for even more control.  

```js
let instructors = ["meg", "zakk", "perry", "james", "ali", "max", "mike"]
let currentInstructor = prompt('Who is currently teaching?')

for (let i = 0; i < instructors.length; i++) {
  if (instructors[i] === currentInstructor) {
    console.log(instructors[i] + ' is currently teaching!')
  } else {
    console.log(instructors[i])
  }
}
```

### `for in` loop (5 minutes / 3:20)

The `for in` loop functions similar to the `for` loop, but it is only used when iterating through a collection.

```js
let instructors = ["meg", "zakk", "perry", "james", "ali", "max", "mike"]

for (let i in instructors) {
  console.log(instructors[i])
}
```

* Also begins with the keyword `for`
* The parentheses contain the iteratee (the variable representing the index), followed by the keyword `in`, followed by the complex data type you would like to iterate over (either `array` or `object`)

## Break (10 min / 3:30)

### You Do (10 min / 3:40)
> 5 min exercise, 5 min review

With the person next to you, use the concepts from this lesson to write the [99 Bottles of Beer song](http://www.99-bottles-of-beer.net/lyrics.html). Each line of the can be printed out in rapid succession, and does not require user input.

> Bonus: do this once using a for loop and once using a while loop.


## Googling for Documentation (5 min / 3:45)

For in depth information on any of these types, the best place to start is google.

Be sure to specify JavaScript (or at least js) and the type you would like information about.

For example: search `javascript number power`

Especially good resources include:
- [W3 Schools](https://www.w3schools.com/) has great reference and tutorials though sometimes does not have the depth you are looking for.
- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/) is very similar to W3 in that it has both reference and tutorial but MDN is much more detailed (this can be a good or bad thing).
- [Wikipedia](https://www.wikipedia.org/) is great as a primer for high level ideas that may not be language specific.
- Blog posts, Stack Overflow questions, and Gists have lots of valuable information
  - While these can be great resources, they are not as curated as a the above sites so be wary and check publish dates

*Quiz!*
- How can I see what string methods are available to me?
- How do i generate a random number? 
- What's a good better looking yellow I can use on my page?
- How can I add something to an array?
- Is container an html element?

## You Do: Fizz Buzz (15 min / 4:00)

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

## Break (10 min / 4:10)

## You Do: Pair Programming Bot (40 min / 4:50)

[Pair Programming Exercises](https://git.generalassemb.ly/ga-wdi-exercises/js-pair-programming-bot-lite)

# Review Questions (10 min / 5:00)

  1. How does control flow affect our code?
  2. What are two types of loops we can use in javascript?
  3. What is the syntax of a `for loop`?
  4. How many `if else` statements can I have in an `if` statement?
  5. How can I tell how many items are in an array?
  6. What happens if the conditional for a `while loop` is never met?
  7. Where can I find more information about `(insert topic of your choice)`?

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
