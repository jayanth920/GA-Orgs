# Modern Javascript

Javascript has evolved quite a bit in the last five years, and React projects
typically make heavy use of the language's newer features and conventions. We
want to make sure you're comfortable writing modern JS before we get into React.

## Background

Many of these new features were introduced in the ECMAScript 2015 language
specification, more commonly known as ES6. ES6 is now used widely in modern web
development, both front-end and back-end. Modern browsers now support nearly
100% of these ES6 features, but it's still common to use a transpiler like Babel
to convert ES6 syntax into older, more universally supported JS syntax. You
don't need to worry about that step for now though. Let's dive right into these
useful new features.

## Roadmap

You'll read about the following ES6 features:

- `const` and `let`
- Arrow functions
- Object literal shorthand
- Template literals
- Imports and modules

## `const` and `let`

`const` and `let` are new keywords for declaring variables. Where before you would have declared:

```javascript
var x = 1;
```

With ES6, you can now declare:

```javascript
const x = 1;
```

or

```javascript
let x = 1;
```

### `const`

`const` is short for "constant". It literally means, "declaring a variable that will be constant." So, a `const` can't be reassigned. If I assign a `const` to a [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) type (e.g. a string, number, or boolean), I can't change its value at all.

```javascript
const hi = 'hello';
hi = 'goodbye'; // this line will throw an error because I attempted to change
// the reference to a const.
```

> [This CodePen](https://codepen.io/SuperTernary/pen/owQGmy?editors=001) illustrates this. Click the little red exclamation point to see the error.

Try to use `const` whenever possible to maintain predictability.

##### But!

Just to make it a little trickier, this does _not_ mean that a `const` is immutable. JavaScript assigns by reference. This means that a variable can't be reassigned entirely, but we *can* change a property of an object or add an item to an array. If I assign an object literal as a `const` variable like this:

```javascript
const anObject = {
  hi: 'hello',
  animal: `muffin`
};
```

I can then change the values of the keys in it, like this:

```javascript
anObject.animal = 'puppy';
```

The new value of `anObject` is now:

```javascript
{
  hi: 'hello',
  animal: 'puppy'
}
```

This is valid, because `anObject`'s reference doesn't change. I just can't wipe the whole variable.


### `let`


So, that's `const`. The other replacement for `var` is `let`.

`let` has the same normal assignment rules as `var`. The value and reference of a `let` variable can change, so this will run with no errors:

```javascript
let hi = 'hello';
hi = 'goodbye';
console.log(hi); // 'goodbye'
```

Open the console in [This CodePen](https://codepen.io/SuperTernary/pen/owQGmy?editors=001) and you'll see that the JavaScript runs, and "goodbye" is logged to the console *(to view the console, click the 'console' tab at the bottom of the Codepen window)*.

When declaring variables using ES6 syntax, if you need to declare a variable whose value will _not_ change, declare it as a `const`. If the variable's value _will_ or _might_ change, declare it as a `let`.

`let`, like `var`, can be reassigned as much as you like. Why use `let` at all, then, when you could just use `var`?

##### `let` is actually about scoping
Variables in JavaScript are **scoped** - or track values - either globally or within an entire function. Since `var` in JavaScript is scoped to the nearest parent function, it can be pretty unpredictable, right?

```javascript
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // Prints 2
  }
  console.log(x);  // This is going to print 2!
}
varTest();
```

Despite declaring `var x` in two different places, it's the same variable, leading to some unwanted and unexpected behavior. Scoping is something that always needs to be tracked in JavaScript for precisely reasons like this.

ES6 introduced `let` to fix this scoping issue. Using `let` is more predictable and straightforward than using `var`. `let` is a **block scoped** variable, so its value is scoped to the nearest curly braces `{}`, rather than the whole function. Thus, within a loop, `let` will create a new instance for each iteration instead of changing the original variable.

```js
function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // curly braces = different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

You can see this in action in [This CodePen](https://codepen.io/SuperTernary/pen/vZQewv?editors=001) - open the console to see the difference.

Here's another example. Using regular `var`, this always prints 5.

```js
var array = [];
for(var i=0; i<5; i++) {
    array.push({onclick: function() { console.log('array: ', i); }});
}

array[0].onclick(); // array: 5
array[1].onclick(); // array: 5
```

It prints `5`
because `var` extends the scope of `i` outside the scope of the for loop curly
braces. In this example, there is just one variable called `i` whose value gets
overwritten many times.

However, if we use `let`, we can give each variable in that `for` loop its own scope.
`let` makes the scope of `i` appear only inside the curly braces of the `for` loop; `let` actually creates a new `i` variable each time the `for` loop goes through. Each `i` variable has a value that never changes.

```js
let array = [];
for(let i=0;i<5;i++) {
    array.push({onclick: function() { console.log('array: ', i); }});
}

array[0].onclick(); // array: 0
array[1].onclick(); // array: 1
```

With more predictable scope, `let` variables are easier to keep track of
visually than `var`s, and less likely to introduce bugs to your code.

## Arrow Functions

"function", "function", "function"... Are you tired of writing that word? So are we. The arrow function `=>` is a more concise syntax for declaring functions. It looks like a little rocket arrow, in fact, and something that cool isn't usually in JavaScript. Arrow functions are not _only_ different in syntax, however - their scope is also different from a regular `function` declaration.

### Basic Syntax

Using the function keyword, to create a function that adds two to an argument, you'd write:

```javascript
function addTwo(num) {
  return num + 2;
}
```

> Here, we are naming our function `addTwo` and it takes in one parameter, `num`.

Using arrow syntax, you'd write:

```javascript
var addTwo = num => {
  return num + 2;
}
```

> Here, we declare our function as a variable: `var AddTwo`. To pass in the variable, we put it after an equal sign: `var addTwo = num`. Then we have the arrow function and the actual function definition.

If there are multiple parameters passed into an arrow function, you put them in parentheses, just like a traditional function. Before, using the function keyword, you would write:

```javascript
function multiply(x, y) {
  return x * y;
}
```

With the arrow syntax, it's:
```javascript
var multiply = (x, y) => {
  return x * y;
}
```

#### Do you remember `const`?
Anything that was a `var` in ES6 is better practice to write as a `let` or a `const`.
You can write functions using `const` or `let` as well. This can be helpful to know that the function's assignment later cannot change (in the case of `const`) or explicitly declared as can (in the case of `let`). Using `let` or `const` with a function is not necessary, but in some cases it's good practice (more on that later).

So now with the arrow syntax, we had:
```javascript
var addTwo = num => {
  return num + 2;
}
```
And we can simply change the `var` to a `const`.
```javascript
const addTwo = num => {
  return num + 2;
}
```
Another thing to note is that if the function does nothing except a return, we can simplify it even further. All of these function declarations are valid:

```javascript
// traditional
function addTwo(num) {
  return num + 2;
}

// arrow syntax
const addTwo = num => {
  return num + 2;
}

// now even further simplified
const addTwo = num => num + 2;
```
> note that we dropped the curly braces and `return` keyword

You can play with arrow functions in [this CodePen](https://codepen.io/SuperTernary/pen/qjQPzY). Remember, you can also use ES6 syntax in the Chrome dev-tools console, and your Create React App projects are transpiled with Babel, so you can use ES6 there too.


### Implicit return

Continuing a thought, the last thing we noted is that if the function does nothing except a return, we can simplify it even further:

```javascript
const addTwo = num => num + 2;
```
> We dropped the curly braces and `return` keyword.

If there is no block following the arguments of an arrow function (meaning nothing in `{ }` curly braces), whatever follows is the return value of the function. The `addTwo` example above simply returns the value of `num + 2`. This is called an **implicit return**.
```js
const addTwo = num => num + 2;
```
**Importantly**, we can only use implicit return for functions which only contain a `return` statement.

Consider these two functions.

- `addTwo` can be simplified to one line, as it's just a `return` statement.
- `mutateNumbers` contains more than just a return statement, so we still need the curly braces.

```javascript
const addTwo = num => {
  return num + 2;
}

// The same with implicit return
const addTwo = num => num + 2;

// Cannot have implicit return
const mutateNumbers = num => {
  newNum = 6;
  alert(newNum);
  return num + newNum;
}
```

Using implicit returns can shorten our syntax and make our code more readable. The following function `lowercaseListOfWords` takes one argument- an array of strings- and returns a new array of lowercase strings.

Written with functions, this would look something like:

```javascript
function lowercaseListOfWords(arrayToModify) {
  return arrayToModify.map(function(word) {
    return word.toLocaleLowerCase();
  });
}
```

However, using ES6, the arrow function, and implicit returns, we can make that one (albeit long!) line:

```javascript
const lowercaseListOfWords = arrayToModify => arrayToModify.map(word => word.toLocaleLowerCase());
```

**Importantly**, one gotcha to be aware of with implicit returns is that object literals must be wrapped in parentheses, so the interpreter (browser, compiler, etc.) can distinguish them from blocks. An example:

```javascript
const isItActive = isActive => ({ active: isActive });
```

> This function only returns one thing, but because it implicitly returns an object literal, it must be wrapped in parentheses.

Play around with implicit returns from arrow functions [in this CodePen](https://codepen.io/SuperTernary/pen/ZymXgK?editors=001).

### This binding - and the lack thereof

So - now that we've learned all the fun syntax of the arrow function, let's talk about the benefits of actually using it.

In non-arrow functions, every function defines its own `this`. There are tons of hacks to preserve the context, like `var that = this` and using `.bind(this)`. This might look familiar:

```javascript
function eatBreakfast(pancakes) {
  var that = this;
  that.food = 'Knife please?';
  Waiter.bringCutlery(function (silverware) {
    that.food = silverware;
  });
}
```

Another popular variant is `var self = this`. Whatever hack you've been using, you don't need to do it anymore!

Arrow functions don't change the definition of `this`. So, if `this` is already defined in the scope, and you call an arrow function, you can access `this` directly.

```javascript
// Original function
function eatBreakfast(pancakes) {
  var that = this;
  that.food = 'Knife please?';
  Waiter.bringCutlery(function (silverware) {
    that.food = silverware;
  });
}

// Equivalent arrow function
const eatBreakfast = pancakes => {
  this.food = 'Knife please?';
  Waiter.bringCutlery((silverware) => this.food = silverware);
}
```
> Check it out - the arrow function can be anywhere you declare a function!

## Object literal shorthand

Object literal shorthand is a simple but useful bit of syntactic sugar. If you want to assign a variable as the value of the key of the same name, you don't have to write it twice. _What?_

If we declare a variable, `price`, and set it equal to 100: `const price = 100;`

We then have an object called `item`. Now, `item` also has a variable of how much that item costs, which happens to also be `price`. They are different variables (one is global, and the other is specific to the `item` object); they just happen to share the same name. So our `item` object might be:
```javascript
const item = {
  price: 15,
};
```
Now, let's say that when we initialize `item`, instead of hard-coding a number into the initialization, we want to set `price` to be whatever the global price is. This global price is also stored in a variable called `price`, right?

It looks like this:

```javascript
const price = 100;

const item = {
  price: price
};
```

It's weird looking, but it works.

Well, it turns out that having two different variables with the same name and setting them equal to each other is a pretty common thing to do. ES6 decided to just simplify this by dropping the duplicate and having it mean the same thing. So now we can do:

```javascript
const price = 100;

const item = {
  price
};
```

Less to write, and less to read when you come back to it. A win-win!


## Template literals

Template literals bring us string interpolation in JavaScript. This means we can create dynamic strings with more readable syntax.

Before ES6, we had:

```javascript
const name = 'Mike';
const greeting = 'Hi, ' + name + '.';
```

Now, using template literals, we can make this easier:

```javascript
const name = 'Mike';
const greeting = `Hi, ${name}.`;
```
> Note that now, we can directly refer to the variable using ${} syntax within our string.

In fact, combining an arrow function with a template literal, we can do this:

```javascript
const greeting = name => `Hi, ${name}.`;
```

[Check it out in CodePen!](https://codepen.io/SuperTernary/pen/eRQeOR?editors=001)

## ES6 Class Syntax

You're probably that aware that unlike traditional object-oriented
programming languages, Javascript uses prototypal inheritance. If you need a
refresher, on one that means, have a glance at [this](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance).

Basically, it means that we can create something similar to a class by creating
a constructor function. We can add methods by modifying that function's
`prototype` property. If we wanted to create `Food` class, we could do this:

```js
const Food = function (name, flavor) {
  this.name = name
  this.flavor = flavor
}
```
To instantiate our `Food` class, we call that constructor function with the
`new` keyword, like so:

```js
const burrito = new Food('burrito', 'savory and delicious')
```

If we wanted to give it a method, we'd do that by adding it to the constructor's
`prototype` property:

```js
Food.prototype.eat = function () {
  console.log(`Mmmm... that tasted ${this.flavor}`)
}
```

That's a bit verbose and very different from classes in OOP languages like Ruby.
But wait, enter ES6! Javascript now has a class syntax built in which still uses
prototypal inheritance under the hood, but provides a much nicer and more
familiar syntax to create classes. We can re-write all the above code like
this:

```js
class Food {
  constructor(name, flavor) {
    this.name = name
    this.flavor = flavor
  }

  eat () {
    console.log(`Mmmm... that tasted ${this.flavor}`)
  }
}
```

Skim through [this page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
to get a sense of how to use this new `class` syntax.

## Lastly! Imports and modules

In ES6, you can import modules directly without declaring them as global variables. This makes namespacing your app a non-issue. Before module imports, namespace was often a primary concern in JavaScript.

So, if you want export my `addTwo` function as a module, you can create a file called "addTwo.js":

```javascript
const addTwo = num => num + 2;

export default addTwo;
```

And in another file, say "app.js", i can import it:

```javascript
import addTwo from './addTwo';

addTwo(3); // 5
```

You can also export multiple modules from a file, like so:

```javascript
// in arithmetic.js
export const addTwo = num => num + 2;

export const addThree = num => num + 3;
```

And somewhere else:

```javascript
import { addTwo, addThree } from './arithmetic';
```
