## Functions

**What’s a Function?**

* Fundamental component of Javascript.
* A reusable block of Javascript code.
* Simply put, a function is a block of code that takes an input, processes that input and then produces an output.

---

**Why do we use functions?**
Benefits of functions:
* Reusability.
* DRYness.
* Naming convention (describes intent).

---

### Recognize the parts (10 / 20)

**What are the components of a function?**

---

#### Function Container

```js
function multiply(){

}
```

#### Input ("Arguments" or "Parameters")

```js
function multiply( num1, num2 ){

}
```

#### Output and Side Effects

```js
function multiply( num1, num2 ){
  console.log( num1 * num2 );
  return num1 * num2;
}
```
* Output: return value.
* Side Effects: e.g., print statements.

**Q**. Does a function need an input, output and/or side effects to work?

> A. Short answer. No. Note: if you don't specify an output, it will be undefined.

#### Calling and Referencing a Function

We've defined a function. Now we need to call it...

**Q. Now we that we have stored that function in memory, how to do we use it?**

```js
// Call the multiply function.
multiply( 2, 5 );

// What happens if we reference the function without parentheses?
multiply;
```

### You do - Create a function (5 minutes)!
It would be really nice if there was a function that did exponents for us. Create a `square` function, it should:

- Take an argument that is a number
- The function's output should return the number squared

It should look something like this:

```js
square(4)
=> 16
```

#### Bonus- Create an exponents function
- it should take 2 arguments
  - the first should be the base number
  - the second should be the power you'd like to raise the base number to.

It should look something like this:

```js
raisePower(4, 3)
=> 64
```

### Function Declarations and Expressions (10 / 30)

There are two ways to define or declare a function...

#### Declaration

``` javascript
function multiply( num1, num2 ) {
  return num1 * num2;
}
```

#### Expression

``` javascript
var multiply = function ( num1, num2 ) {
  return num1 * num2;
}
```

#### Declarations vs. Expressions

Both do the same thing and run the same chunk of code. But they are different.

**Q. What differences do you notice?**

---

**Function declarations** define functions without assigning them to variables.

**Function expressions** save anonymous functions to variables.

While we call/reference functions defined through declarations and expressions the same way, they do have a subtle but important difference...

> **Note**: Declarations are processed before any code is executed, meaning you can call functions before they are declared. This behavior is known as **hoisting**.

### Hoisting (10 / 40)

What do you think will happen when we run the below code...
```js
multiply( 3, 5 );
var multiply = function( num1, num2 ){           // NOTE: This is a function expression
  return num1 * num2;
}
```

Surely the same thing will happen when we run the below code...

```js
multiply( 3, 5 );
function multiply( num1, num2 ) {               // NOTE: This is a function declaration
  return num1 * num2;
}
```
> We can successfully call the multiply function before declaring it. When our script file loads, it (the browser) essentially processes all function declarations first, and then runs the rest of our Javascript from top to bottom.

Knowing this, what will happen each time we call `express` and `declare` in the below example?

```js
express();        // What happens when we run this function at this point in the code?

var express = function() {
    console.log('Function expression called.');
};
```

What changes when we run?

```js
var express = function() {
    console.log('Function expression called.');
};

declare();        // ???
express();        // ???

function declare() {
    console.log('Function declaration called.');
}
```

**Q. This is a neat feature, but can you think of a potential pitfall of "hoisting" too often?**

* Code organization and readability.

> You could argue that Function Declarations are forgiving – if you try to use a function before it is declared, hoisting fixes the order and the function gets called without mishap. But that kind of forgiveness does not encourage tight coding and in the long run is probably more likely to promote surprises than prevent them. After all, programmers arrange their statements in a particular sequence for a reason.

### ES6 Syntax (10 / 40)

Let's get a glimpse of writing a function using ES6 syntax.
```js
var multiply = function( num1, num2 ){  // NOTE: This is a function expression
  return num1 * num2;
}

multiply( 3, 5 );
```

What does this look like in ES6?
```js
const multiply = (num1, num2) => {
  return num1 * num2;
}
```

Or, to simplify it further..

```js
const multiply = (num1, num2) => num1 * num2;

```

## Exercise: Fun with Functions Quiz (5 / 45)

What is alerted in each case? Write down your answer before running the code.

1.
```js
function foo(){
  function bar() {
      return 3;
  }
  return bar();
  function bar() {
      return 8;
  }
}
alert(foo());
```
2.
```js
function foo(){
  var bar = function() {
      return 3;
  };
  return bar();
  var bar = function() {
      return 8;
  };
}
alert(foo());
```

3.
```js
function foo(){
  return bar();
  var bar = function() {
      return 3;
  };
  var bar = function() {
      return 8;
  };
}
alert(foo());
```

**Hungry for More?**

> Grab a Snickers || Try implementing [fizzBuzz](https://github.com/ga-wdi-exercises/fizzBuzz_redux) with Functions!
