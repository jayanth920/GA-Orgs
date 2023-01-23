![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# JavaScript: Scope

## Objectives

By the end of this, students should be able to:

- Describe the difference between global and local scope in JavaScript.
- Recall which part(s) of JavaScript create new scope.
- Give an example of which part(s) of JavaScript do not create new scope.
- Draw a diagram representing variable scope.

## Global and Local Scope

Suppose we add the following as the first line to a new file called `cookies.js`:

```js
var favoriteCookie = 'Snickerdoodle';
```

The `favoriteCookie` variable is created in "global" scope. Global scope is simply the default scope, or top-most scope, we work within in JavaScript.

Local scope, on the other hand, is scope that is limited to a new function. For example:

```js
// global scope
var favoriteCookie = 'Snickerdoodle';

var takeFromJar = function takeFromJar () {
    var who = 'Adam took the cookie from the cookie jar!'; // `who` is defined in the local scope (the function scope)
    console.log('Who took the cookie from the cookie jar?', who);
};

who; //=> undefined
```

The rule for scope in JavaScript is simple: only functions create new scope. Nothing else in the language creates a scope: not loops, not conditionals. All function scopes are said to be *nested* within the global scope, since they are defined within the global scope.

**Hint:** Following indentation style guidelines can help you follow scope when you're reading or writing nested functions.

Now that we know a bit more about how scope is created in JavaScript, we begin to see the importance of the `var` keyword. If you assign something to a variable in JavaScript *without* using `var`, that variable floats up to global scope. This is a Bad Idea™.

```javascript
var oreo = 'DoubleStuf';

var bestOreo = function bestOreo () {
    oreo = 'Mint';
    console.log(oreo);
};

console.log(bestOreo()); //=> 'Mint'
console.log(oreo); //=> 'Mint' overwrote 'DoubleStuf'
```

If we don't use the `var` keyword, we have to always be aware of what is in global scope. That's hard to do, it makes understanding scope more complex. Our advice is to always use `var` when assigning something to a variable.

Inner scopes can always see outer scopes, but the reverse is not true. It is like a one-way mirror: inner function scopes can look out to other function scopes and the global scope, but they cannot see in. To the global scope or an outer function, inner functions look like "black boxes" that just take input and produce output: all other details are hidden.

## Exercise: Diagramming Scope

```javascript
var firstName = 'John'; // 1
var lastName = 'Dowd'; // 2
var age = 19; // 3

function displayPerson(fname, lname){ //4, 4.i
  var prefix = 'Mr'; // 4.ii
  var fullName = null; // 4.ii

  function getFullName(){ // 4.iii
    var suffix = 'Esq.';  // 4.iii.a; Everybody's a lawyer, eh.
    fullName = prefix + ' ' + fname + ' ' + lname + ' ' + suffix;
    return fullName;
  } // 4.iii.b

  return getFullName();
} // 4.iv

function removeYears(){ // 5
  var minusYears = 10, age = 49; // 5.i
  return age - minusYears;
} // 5.ii

console.log(displayPerson(firstName, lastName));
console.log(removeYears());
```

How the interpreter processes this code:

1. Found `var firstName` variable declaration. Put `firstName` variable in Global Scope.
1. Found `var lastName` variable declaration. Put `lastName` in Global Scope.
1. Found `var age` variable declaration. Put `age` in Global Scope.
1. Found `var displayPerson` declaration. Put age in `displayPerson` in Global Scope. **Notice that `displayPerson`'s value is a function.** So, create a inner scope and process this function.
    1. Found the `fname` and `lname` declarations. **Note: functions arguments behave just like local variables.** Put them in the `displayPerson` function scope.
    1. Found `prefix`, `fullName` variable declarations. Put them in the `displayPerson` function scope.
    1. Found `getFullName` declaration. Put `getFullName` in the `displayPerson` function scope. **Notice that `getFullName` is a function.** So, create an inner scope and  process this function.
        1. Found the `suffix` declaration. Put it in `getFullName` function scope.
        1. **All done with `getFullName` function, no more variable declarations.**
    1. **All done with `displayPerson` function, no more variable declarations.**

    You may wish to preview our [diagram so far](dist/scope.md).

1. Found `removeYears` variable declaration. Put `removeYears` in Global scope. **Notice that `removeYears` value is a function.** So, create a inner scope and process this function.
    1. Found `age` and `minusYears` variable declarations. Put these in `removeYears` function scope.
    1. **All done with `removeYears` function, no more variable declarations.**

    Modify your diagram to represent this last step, and then [check your solution](dist/scope2.md).


## Lab: Diagramming Scope

Diagram scope for the following code. Work in pairs. When you're done, compare your work to another pair's. Discuss any differences and correct any mistakes. Then, answer the following questions together.

```javascript
var autoMake = 'Ford';
var autoModel = 'LTD';

function showAuto(year){
  function autoInfo(){
    var price = 124;
    console.log('Auto is a ' + year + ' ' + autoMake + ' ' + autoModel + ', it\'s price is ' + price + '$');
  }

  autoInfo();
}

showAuto(1969);
```

1. Name any and all scopes from which `autoModel` is available. ("Available" is another word for "defined".)
1. Is `autoInfo` available from the global scope? Can you execute `autoInfo()` from there?
1. Is `price` visible from within `showAuto`?
1. Name any and all scopes from which `year` is available.

## Additional Resources

- [Functions - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
- [What You Need To Know About JavaScript Scope - Smashing Magazine](http://www.smashingmagazine.com/2009/08/01/what-you-need-to-know-about-javascript-scope/)

