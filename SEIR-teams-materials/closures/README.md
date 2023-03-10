![](https://i.imgur.com/oY0P1r0.png)

# Walk-thru of JavaScript Closures

## Road Map

- Intro
- What’s a “free” Variable?
- Review of Scope
- “Persisting” Scope Using Inner Functions
- BAM! We have Closure
- Definition of a Closure
- Examples of Closures
- Closing

## Intro

Closures are one of my three **JavaScript Ninja** topics:

1. `prototypal inheritance` and the 	`prototype chain`: **How JS implements object inheritance and property lookup** - however, this is no longer critical to know about since we now have classes in JS.
2. `this`: **A keyword in JS that represents a function’s “context” during its execution** <br>and finally,
3. `closures`: **A feature in the JS programming language that enables a function’s free variables to exist even after its enclosing function has completed execution**  

This discussion on closures is an important one because they are a key feature of languages with first-class functions, i.e., functions are treated like data in that they can be passed to other functions as arguments, returned by functions, etc.  JavaScript and Python both are languages with first-class functions.

More importantly, you will likely be asked about them in technical interviews.

To start, realize that closures are **not** explicitly created - you would never write code like this:

```js
// No such thing!
const c = new Closure();
```

Basically, closures come into and out of existence when JavaScript programs execute.

## What’s a “free” Variable?

Closures are about functions accessing “free” variables.

**Free variables** are the variables accessible by a function up the scope chain - not the ones defined locally.

## Review of Scope

Understanding scope is fundamental to the concept of closures.

:question: **What is scope?**

:question: **How is a new scope created in JavaScript?**

:question: **When is a scope destroyed and marked for garbage collection?**<br>**_unless..._**

## “Persisting” Scope Using Inner Functions

Let’s first look at a very basic function:

```js
function f() {
  let x = 5;
  console.log(x);
}
```

:question: **When we invoke this function, what will the lifetime of the variable `x` be?**

Now let’s refactor this code by including an inner (nested) function inside of function `f()`:

```js
function f() {
  let x = 5;
  
  function inner() {
    console.log(x);
  }
  
  inner();
}
```

:question: **Have we changed the functionality of `f()` by adding the nested function?**

:question: **What scope is the variable `x` in?**

:question: **What are the free variables of the `inner()` function above?**

Now let’s see how we can invoke the function `inner()` from outside of function `f()`:

```js
function f() {
  let x = 5;
  
  function inner() {
    console.log(x);
  }
  
  return inner;
}

const fun = f();  // fun now references the “inner()” function
fun();
```

:question: **Since a function’s scope is destroyed after a function has finished executing, should the scope of `f()` exist by the time we invoke `fun()`?**


## BAM! We have Closure

Why does the `console.log(x)` work as expected if the scope that variable `x` lives in has been destroyed?

Because a **closure** has been created by the fact that the nested function, `inner()`, references a free variable `x`, and `inner()` is still in existence thanks to the external reference to it by the variable `fun`. 

:question: **If the variable `fun` went out of scope, or was reassigned so that it did not reference function `inner()` anymore, what do you think would happen to the closure?**

## Definition of a Closure

So, when you are asked, “What the heck is a closure?”

The description in the intro above is highly accurate, however, here’s a viable answer that’s not too technical:

> **A closure is a way for JavaScript to “persist” scope.**

A follow-up question might be, “When is a closure created?”

> Slightly more technical answer:<br>**When a variable holds a reference to a function and that function references one or more free variable(s).**

Again...

**Closures come into existence when a function continues to reference its free variable(s) after its enclosing function has finished execution.**

Closures have their use cases and are being created and destroyed as JavaScript executes.

## Examples of Closures

Closures typically are more important to the creators of libraries and frameworks, however, let’s take a look at a few examples of how we might create them.

### Example 1 (factory pattern #1)

```js
function adderFactory(fixedOperand) {
  
  return function(secondOperand) {
    return fixedOperand + secondOperand;
  };

}

const add5 = adderFactory(5);
add5(2) // returns 7

const addTwenty = adderFactory(20);
addTwenty(100) // returns 120
```

Note here that `adderFactory()` returns an anonymous function expression, there’s no need that the inner function be a function definition.

### Example 2 (factory pattern #2)

```js
function elapsedTimeFactory() {
  let startTime = Date.now();

  return function() {
    return Date.now() - startTime;
  };
}
```

:question: **How many of these timers could we create?**

:question: **What is the inner function’s free variable(s)?**

### Example 3 (module pattern)

As you know, an object holds information in properties. There are no variables allowed within an object.

Also, as you know, there is no easy way to “hide”, or as developers say, make “private”, an object’s properties.

Now let’s see how closures can be used to implement “private” variables in an object or “module”:

```js
// The IIFE will run and assign the object being returned
const fourLetterWord = (function() {
  let _fourLetterWord = ‘love’;
  
  return {
    // property getter
    get word() {
      return _fourLetterWord;
    },
    // property setter
    set word(newWord) {
      if (newWord.length === 4) _fourLetterWord = newWord;
    },
    version: 1.0
  };
})();

fourLetterWord.version
// 1
fourLetterWord.word
// love
fourLetterWord.word = ‘six’;
fourLetterWord.word
// love
fourLetterWord.word = ‘four’;
fourLetterWord.word
// four
```

Note that the above code is returning an object that has ES5's under utilized [getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) and [setter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set) properties.

Note that there’s no way to access the “private” variable `_fourLetterWord `.

## Summary

Closures are not complicated, however, they are a mystery to many programmers and even those familiar with them have a hard time explaining them (myself included).

Be sure to refresh your memory of their definition and use before a JS-heavy tech interview.