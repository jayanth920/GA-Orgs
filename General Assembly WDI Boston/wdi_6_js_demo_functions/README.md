# JavaScript Functions

[Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions), along with objects, are one of the most important core concepts in JavaScript.

## Defining Functions

```js
function sayHi() {
  console.log('Hi!');
}

sayHi();
```

That wasn't so bad. Replace the `function` with a `def` and you'd almost have a Ruby method definition. Note the parentheses are required, not only on the function call, but also on the function definition, even if there are no arguments.

Let's finally find out what the deal is with that. What if we leave off the parens?

```
> function sayHi() { console.log('Hi!'); }
undefined
> sayHi;
[Function: sayHi]
> typeof sayHi;
'function'
```

If we just refer to `sayHi` without the parens, it is not called. And furthermore, the console is telling us that `sayHi` is an object of type "function". We are referring to the function itself &ndash; and in JavaScript, functions are objects, just like everything else.

We can drive this point home by using a different way of defining a function:

```js
var sayHello = function() {
  console.log('Hello!');
};

sayHello();
```

This makes it very clear that a function is just another kind of object like strings, arrays, etc. When we define a function, we're really declaring a variable with that name, and assigning a *function object* to it.

Anything we could do with a string or a number, we can do with a function:

```
> var sayHi = function() { console.log('Hi!'); }
undefined
> var anotherHi = sayHi;
undefined
> anotherHi();
Hi!
```

Having functions as just another type of object, and being able to pass them around using variables, turns out to be the key to writing almost anything worthwhile in JavaScript, since the language is otherwise very minimal.

### Sidebar

There is actually a difference between the two ways of defining a function. The first is called a "function declaration" and is subject to something called "function hoisting". The second is called a "function expression" and is not. Check out `hoisting.js` for a demonstration of this.

#### Super Sidebar

This sort of thing is possible in Ruby too:

```
> def say_hi; puts 'Hi!'; end
 => :say_hi
> hi_method = method(:say_hi)
 => #<Method: Object#say_hi>
> hi_method.call
Hi!
 => nil
```

We have to jump through an extra hoop to get the actual object reference, but in most programs this sort of thing isn't needed: Since we have `send` and `Symbol#to_proc` and other fancy stuff, we can usually just refer to methods using symbols or strings that match up with their names.

## Function Arguments

Suppose we have a function that squares a number:

```js
function square(n) {
  n * n;
}

square(5); // undefined?!
```

Whoops. Let's try that again:

```js
function square(n) {
  return n * n;
}

square(5); // 25
```

In Ruby, the last line executed in a method would become the return value, if we didn't return anything explicitly. JavaScript gives us no such luxury: **You must always explicitly return a value from a function**, or it will return `undefined`!

This might seem like a dumb question, but what happens when we call a function with the wrong number of arguments? As BuzzFeed would say, the results might shock you:

```
> function square(n){ return n * n; }
undefined
> square(5);
25
> square();
NaN
> square(5, 'banana');
25
```

Huh?! Not only can we simply *not* pass an argument and JavaScript won't throw any kind of error, we can even pass extra arguments not defined by the function!

The moral of the story: **In JavaScript, all function arguments are always optional.** Failing to pass a given argument will just assign it the value `undefined`. Want a different default value? Too bad! JavaScript can't do that either. If we want required arguments or default values, we have to do the work ourselves.

Fortunately, every function has access to an auto-defined `arguments` variable, which points to an array-ish object containing all the arguments passed to the function. We can use this to pitch a fit if necessary:

```js
function square(n) {
  if(arguments.length !== 1) {
    throw new Error('wrong number of arguments: ' + arguments.length + ' for 1')
  }
  return n * n;
}
```

However, it's kind of a pain to do this for every single function you write, and most JavaScript developers simply don't bother. Like the potential for passing wrong object types to Ruby methods, it's considered acceptable that the program could fail at runtime in strange ways if you, the developer, aren't careful about how you call your functions.

Let's see how much work we need to implement default values:

```js
function greet(person, greeting) {
  if(greeting === undefined){ greeting = 'Hi'; }
  return greeting + ', ' + person;
}
```

It's clunky, but this sort of thing is used a bit more frequently in real JavaScript programs.

Of course, just like in Ruby, we can also go the "options hash" route, or since this is JavaScript and we don't have hashes, the "options object" route:

```js
function greet(options) {
  options = options || {};
  var person = options.person || 'friend';
  var greeting = options.greeting || 'Hi';
  return greeting + ', ' + person;
}

greet(); // 'Hi, friend'
greet({ person: 'Alex' }); // 'Hi, Alex'
greet({ person: 'Alex', greeting: 'Hello' }); // 'Hello, Alex'
```

This is yet clunkier, but it's also used frequently in real JavaScript programs and your calls become a lot more readable when your functions have more than one optional argument (or even more than one argument, period).

## Lab 1

Working in pairs, complete the first three parts of the [Alice Analysis](https://github.com/ga-wdi-boston/wdi_1_ruby_hw_word_methods) homework we did in Ruby. For your convenience, the sample text and specifications are included in `analysis.js`.

## Functions as Arguments

You may remember this method of iterating over an array:

```js
var colors = ['red', 'green', 'blue'];

colors.forEach(function(color){
  console.log(color);
});
```

We glossed over the syntax last time, but now that you know functions are just another kind of object, you should be able to see exactly what we're doing. We are calling the function `forEach` on the `colors` array, passing it a single argument: A function that we want called for each element in the array, passing the element as an argument.

Note that here we've actually defined a function without giving it a name! This is called an *anonymous function* &ndash; you can think of it almost like a Ruby block. Of course this means we can't use the function anywhere afterwards.

There's no reason we have to use an anonymous function, though:

```js
var printColor = function(color) {
  console.log(color);
};

colors.forEach(printColor);
```

We could even remove the function definition and shorten this to `colors.forEach(console.log);`, since `console.log` is a function like any other, but that doesn't quite work due to `forEach` passing more arguments than we want.

Passing functions to other functions as arguments allows us to write a "generic" version of a process and have the specific details be filled in by someone else. This is like writing methods that accept a block in Ruby &ndash; we never needed to do this very much, but in JavaScript it's a more frequently-seen and important concept.

For instance, I can write a function that filters the letters in a string based on certain criteria. Which criteria, exactly? That's for the person calling the function to define!

```js
function filterLetters(string, filterFunc) {
  var filteredString = '';
  for(var i = 0; i < string.length; i++) {
    if(filterFunc(string[i])) {
      filteredString += string[i];
    }
  }
  return filteredString;
}

var testString = 'This is a tEst string that containS boTh uppEr and lowercaseD characters';

// Using an anonymous function
filterLetters(testString, function(letter){
  letter = letter.toLowerCase();
  return letter === 'a' || letter === 'e';
});

// Defining a named function
function isUpperCase(letter){
  return letter >= 'A' && letter <= 'Z';
}

filterLetters(testString, isUpperCase);
```

## Function Scope

We've touched previously on the requirement that variable declarations be prefixed with `var` on first use. Yet it doesn't technically seem to be a requirement:

```js
function greet(options) {
  options = options || {};
  person = options.person || 'friend';
  greeting = options.greeting || 'Hi';
  return greeting + ', ' + person;
}
```

Here I've removed the `var`s from the previous version of this function, and it still seems to work fine... but you'll find that after you call the function once, `person` and `greeting` have become defined and accessible outside the function!

```
> person;
ReferenceError: person is not defined
> greet();
'Hi, friend'
> person;
'friend'
```

Oops. **We accidentally created a global variable!** If you don't use `var` to declare variables, they are actually defined as "global properties" accessible from anywhere. This is *very* different from Ruby, where we have to go out of our way to create global variables. In JavaScript it's easy to do it by accident.

The good news is that as long as we always use `var`, everything pretty much works in a sane fashion. Variables are only accessible in the function where they're declared, and are discarded as soon as the function call finishes. ...usually.

### Closures

Let's define a function that returns a function. A function factory, if you will.

```js
function generateGreeter() {
  return function(person) {
    return 'Hi, ' + person;
  };
}

greeter = generateGreeter();
greeter('Dan'); // 'Hi, Dan'
```

This is sort of interesting, but since it always generates the same greeter function every time, the extra complexity is quite pointless.

But let's say we want to be able to specify when we call `generateGreeter` what greeting the generated function should use, instead of "Hi".

```js
function generateGreeter(greeting) {
  greeting = greeting || 'Hi';
  return function(person) {
    return greeting + ', ' + person;
  };
}

defaultGreeter = generateGreeter();
defaultGreeter('Dan'); // 'Hi, Dan'

customGreeter = generateGreeter('Ahoy');
customGreeter('Dan'); // 'Ahoy, Dan'
```

Whoah. Despite your intuition that the local variable `greeting` should disappear once the call to `generateGreeter` is over, the inner function defined inside it "remembered" where and when it was defined, and still has access to any variables that were present in the outer scope at that moment. This is called a "closure" &ndash; we say that we are "closing over" the `greeting` variable.

Closures are not peculiar to JavaScript &ndash; they are an extremely important and universal concept in computer science. We have not covered the use of closures in Ruby because A) the design of the language is such that they are rarely needed, and B) it would have been too big a concept for the first few weeks. But they do exist in Ruby, mostly when using lambdas, and also in many other languages.

## Lab 2

See the separate [Rated J for JavaScript](https://github.com/ga-wdi-boston/wdi_6_js_lab_functions) lab repository.
