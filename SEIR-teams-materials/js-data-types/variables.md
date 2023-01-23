[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Introduction to JavaScript: Variables

**Variables** are containers for information -- we can store any value in them.

Think of a variable like a box. You can put lots of things into the box, like a
doll, rug, or cat. The box still contains something.

We use variables to help repeat, change, store, or edit our data.

In order to **declare** a variable in JavaScript we use the keywords `var`,
`const`, or `let`. The original declaration keyword was `var`, but in newer
versions of JavaScript `const` and `let` were implemented. `const` is used on
variables that will not be changed in your JavaScript code. `let` is used for
variables that do change.

Most of the time, we want our variables to immediately store a value (like a box
with a cat in it). Therefore, we **assign** values to our variables when we
declare them.

We can create a variable without assigning it a value, if we want. This would be
like having an empty box.

```js
let noValue
console.log(noValue)
// => undefined
```

Here are three examples of variable assignment and declaration at the same time.

```js
const myVar = 42
console.log(myVar)

const sum = myVar + 8
console.log(sum)

let doubleSum = 2 * sum
console.log(doubleSum)
```

When we declare a variable using `let` or with the old keyword `var` we
can update our variables:

```js
let noValue
console.log(noValue)
// => undefined

noValue = "assigned now"
console.log(noValue)
// => 'assigned now'


var num = 0
console.log(num)
// => 0

num = 1
console.log(num)
// => 1

```

But you can NOT reassign a variable declared with `const`

```js
const mobilePhone = 'iPhone'

mobilePhone = 'samsung'
console.log(mobilePhone)
// => Uncaught TypeError: Assignment to constant variable.
```

JavaScript is a "dynamically-typed" language, meaning a variable can switch
between data types. The following change is valid.

```js
var myFavoriteNumber = 5

console.log(myFavoriteNumber)
// => 5

myFavoriteNumber = "five"

console.log(myFavoriteNumber)
// => "five"
```

## Variable Syntax (5 minutes / 1:25)

### Semicolons

- Semicolons can be put at the end of each line.
- We recommend using them consistently throughout this course!
- References:
  - [JavaScript Semicolon Insertion](http://inimino.org/~inimino/blog/javascript_semicolons)
  - [Are Semicolons Necessary in JavaScript](https://www.youtube.com/watch?v=gsfbh17Ax9I)
  - [An Open Letter to JavaScript Leaders Regarding Semicolons](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding)
  - [Hacking Semicolons (by Evan You who wrote Vue.js)](http://slides.com/evanyou/semicolons#/)

### camelCase

JavaScript variables and function names are case sensitive. You can write them however you want, but they're conventionally written using camel
case syntax.

- First letter of first word lowercase
- First letter of remaining words uppercase
- No spaces or punctuation between words

#### Examples

```js
const pizzaTopping = "pepperoni";
const isThisVariableCamelCase = true;
const hasURLChanged = false;
```

Because Javascript is case sensitive, it helps to be consistent in your naming conventions.

```js
const pizzaTopping = "pepperoni";
console.log(pizzatopping);
// Uncaught ReferenceError: pizzatopping is not defined
```

> Note: Other types: kebab-case, which separates words with dashes, and snake
> case, which uses underscores.

Use kebab case for CSS classes. CSS is essentially case-sensitive, so
this-class-name is much easier to read (and type!) than thisClassName.

snake_case is used in programming languages like Python.

> You don't have to follow camelCase standards, you could just UPPERCASE
> EVERYTHING. But it's a good idea to be consistent everywhere, especially
> when working with other developers.

### Comments

Comments are an extremely important part of writing code. They help us make
sense of our code, especially for other people reading our code, or when we have
walked away from some code and have completely forgotten what certain sections
of it do. This happens much more quickly than you may imagine.

If you are working on a team, your documentation and commenting practices often
translate to how easy you are to work with!

```js
// Single line comment

/*
  Multiple
  line
  comments
*/
```

There is a short cut for commenting something out. To comment out a single line,
click anywhere on the desired line and hold `command` and press `/`. The same is goes
for commenting a line back in.

This short cut also works for multiline comments. Simply highlight all the lines you'd
like to comment out and do the same: `command` + `/`.


------


## Next: [Primitive Data Types](primitive-data-types.md)

### Previous: [Intro to JS](https://git.generalassemb.ly/SEIR-201/js-data-types)