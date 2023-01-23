[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Introduction to JavaScript: Primitive Data Types 

## Learning Objectives

- Work with the primitive data types in JavaScript.
- Learn and use methods for different data types.


# Primitive Data Types in JavaScript

What do we mean when we say data types?

> Think of data types as ways of representing information.

A [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) 
data type is one that represents a single value (as opposed to
multiple values). In JavaScript there are five common primitive types:

1. Strings
2. Numbers
3. Booleans
4. Undefined
5. Null

There is a sixth data type, [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#BigInt_type),
which is relatively new and not commonly used yet.

## Strings

Strings are how JavaScript represents text. They are a series of characters in
single or double quotes. `'Hello World!'`, `"Hello World!"`, `'h'`, and `''` are
all examples of strings in JavaScript.

It doesn't matter whether you use double or single quotes, but if you need to
include either a double or a single quote in your string, wrap it in the other
type.

Example:

```js
"What's the weather like today?"

'This dude is really into "air quotes"'
```

In order to join multiple strings together, you can use **concatenation** or
**interpolation**.

Concatenation is when you add multiple strings together.

```js
let helloWorld = "Hello" + "world"
```

Interpolation is where you reference a variable within a string. Use back ticks
for the entire string, and put a dollar sign with curly brackets around the
variable.

```js
let hello = "Hello"

let helloWorld = `${hello} world`
```

> You can totally use backticks without using interpolation as well, if you
> prefer.

[Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
are a bunch more examples.

### String escape sequences

Sometimes you will need to use special characters or formatting in strings that
can't be entered the same way as you would in a word processor. In these cases,
you use "escape sequences".

- Syntax: backslash + letter (e.g., `"\n"`).

```js
// "\n" = new line
"Hello\nGoodbye"
// returns
// "Hello"
// "Goodbye"

// "\t" = tab
"Once upon\ta time..."
// returns "Once upon    a time..."

// You can also escape quotes
"What's with this dude's \"air quotes\"? He's insane"
// returns "What's with this dude's "air quotes"? He's insane"
```

> You can check out more escape sequence examples
> [here](http://www.javascriptkit.com/jsref/escapesequence.shtml).

### You Do: String exercise

- In your script.js file, console.log 5 strings
  - 1 that has double quotes
  - 1 with single quotes
  - 1 with double quotes and a single quote inside it
  - 1 with single quotes and a double quote inside it
  - 1 with escape characters

  Bonus: use string interpolation to add a variable inside of a string.

## Numbers

Numbers are simply represented by their digits. In JS, `4`, `345092318`, `-3`,
`2.5` and `10e7` all mean just what you would expect. To create a number in JS,
just write it.

> If you write `"645"` is that a number?

In your browser console, type `42` and hit **Enter**.

You can also do math in JavaScript. Type `42 + 3` into the console and see what
happens.

```js
// Addition
10 + 2
// => 12

// Subtraction
10 - 2
// => 8

// Multiplication
10 * 2
// => 20

// Division
10 / 2
// => 5

// Exponents
10 ** 2
```

- You can find a full list of arithmetic operators
  [in the expressions and operators MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators).

### % (Modulus)

The modulus operator - `%` - returns the remainder of a division operation.

```js
12 % 5
// => 2, which is the remainder of 12 / 5
```

Modulus has a pretty handy use case: to check if a number is even. We can do
this by running `NUMBER % 2`. If a number is even, the result should be 0 (i.e.
there should be no remainder).

```js
4 % 2
// => 0, so 4 is even

5 % 2
// => 1, so 5 is odd. When 5 is divided by 2, the remainder is 1.
```

## Booleans

This is the most simple JavaScript data type. They can have the values `true` or
`false`.

> What's the difference between `'true'` and `true` ?

### Comparison Operators

We encounter booleans most often when comparing two values using comparison
operators like...

- `==` - equal (in value)
- `===` - equal (in value and data type)
- `!=` - not equal (in value)
- `!==` - not equal (in value and data type)
- `<` - less than
- `>` - greater than
- `<=` - less than or equal to
- `>=` - greater than or equal to

<details>
  <summary>What is the difference between `==` and `===`?</summary>

- `===` checks for both the data type and value.
- `==` only checks for value.

</details>

Comparison operators return a boolean value.

```js
1 == 1
// Does 1 equal 1? Yes ==> true

1 == 2
// Does 1 equal 2? No ==> false

1 === 1
// Does 1 equal 1 AND are both values numbers? Yes ==> true

1 == "1"
// Does 1 equal 1? Yes ==> true
// In this scenario, "1" is converted to a number then the values are compared.

1 === "1"
// Does 1 equal 1 AND are both values numbers? No ==> false
// This time, Javascript does care about data types because we are using `===`. Because the left side is a Number and the right side is a String, this evaluates to false.
```

#### Logical Operators

Logical operators are used to determine the logic between values or variables.
There are three main logical operators:

- `!`
- `&&`
- `||`

`!` is an operator that means 'not'. For example, `!==` means 'not equal'.

<details>
<summary>Given a variable `a` equals `true`, what does `!a` evaluate to?</summary>
`false`
</details>

<details>
<summary>Given a variable `!a` equals `true`, what does `a` evaluate to?</summary>
`false`
</details>

`&&` operates as 'AND' and `||` operates as 'OR'

```js
let pizza = true
let burgers = false

let happy = pizza && burgers
// => returns false because BOTH values aren't true


let sushi = true
let chipotle = false

let full = sushi || chipotle
// => returns true because at least one value is true

```


## Null + Undefined + NaN (5 minutes / 1:20)

- If we declare a variable without assigning a value to it, it will, by default,
  have a value of `undefined`.

- Null is very similar to `undefined` but we have to explicitly assign it to a
  variable.

In summary, the difference is that `undefined` implies nothing because it never
was anything while `null` implies explicitly set to nothing.

### NaN ("Not a number")

A special number...that's not a number?

```js
typeof NaN
// => Number
```

`NaN` is the return value from operations which have an undefined numerical
result (e.g. dividing 0 by 0, multiplying strings together).

```js
0 / 0
// => NaN
```

You can test whether a value is a valid number using the `isNaN()` function. The
method will return false if the argument passed into it is a valid number.

```js
const myFavoriteNumber = 5
isNaN(myFavoriteNumber)
// => false, because 5 is valid

const myUnrealNumber = 0 / 0
isNaN(myUnrealNumber)
// => true, because 0 divided by 0 is NaN
```


JavaScript will try to make sense of any strange operations you throw at it.

- Examples of "strange": subtracting a number from a string, multiplying `null`
  by 100.
- It does this by converting data types using a process called type coercion.

You might encounter this when dealing with numerical values in string form.

```js
// In some cases JavaScript is helpful and converts strings to numbers in the correct way.
"3" - "2";
// => 1

// ...but sometimes it doesn't. In this example, the + operator acts as if it's concatenating two strings.
"3" + "2";
// => 32

// And this?
"five" * 5;
// => NaN
```

When in doubt, convert data types that should be numbers using `parseInt()`.

```js
parseInt("3");
// => 3
// parseInt converts a string to a number value, if available.

parseInt("burrito");
// => NaN, because "burrito" cannot be converted into a number
```

There are other examples of type coercion, but the point here isn't to remember
them all. Just be aware that sometimes JavaScript will yield weird results with
no explanation - and it may be due to type coercion.


### String Methods

**.substr()**: return a portion of a string. First argument is the
start position; second argument is the length of the section you copy. If you leave out the second argument it will include everything from the start to the end.

```js
let greetings = "Hi there friend!";
let buddy = greetings.substr(9, 6);
console.log(buddy);
// friend
```

**.concat()**: combine two strings together.

```js
let greeting = "Hello";
let place = "Las Vegas";

greeting.concat(" ", place);
// "Hello Las Vegas"
```

**.indexOf()**: Find the position of a string inside of another string

```js
let nooo = "Luke, I am your father";
nooo.indexOf("father");
// 16
```

**.split()**: split a string into an array, determined by the separator you pass
in

```js
let phrase = "Rubber baby buggy bumpers is a hard one";
let result = phrase.split(" "); // split on the space separator
console.log(result);
// ["Rubber", "baby", "buggy", "bumpers", "is", "a", "hard", "one"]
```

> There are way more methods than this. See the
> [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

#### You do: String Methods

Spend a few minutes experimenting with each of the methods.

### Number Methods

There aren't as many of these, but still two useful ones.

**\*.toString()**: Coverts a number to a string.

```js
let makeMeAString = 58320;
let nowImAString = makeMeAString.toString();
console.log(nowImAString);
// "58320"
```

**\*.toFixed()**: Trim a decimal to the specified number of digits.

```js
let makeMeFixed = 58320.73242;
let fixed = makeMeFixed.toFixed(2);
console.log(fixed);
// "58320.73"
```


### Practice with some different methods:

- [String methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [Number methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)


---
## Next: [Objects & Arrays](objects-arrays.md)

### Previous: [Variables](variables.md)