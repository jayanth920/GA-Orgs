[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JS-Scope

### Best Practices & Coupling

One best practice when coding is to only allow a piece of code to access the things it needs to access, and nothing more. To reduce interdependency and lower [coupling](https://en.wikipedia.org/wiki/Coupling_%28computer_programming%29), we can separate code into groups, called blocks, and create different containers to hold our variables, called scope.

Why might software developers want to keep certain objects and data separate from other parts of an application?

### Blocks

A Block statement is used to group code together. To create a block, we use a pair of curly braces:
<!-- start code block file="snippets/block.js" -->
```js
{
  // Statements
}
```
<!-- end code block -->


Optionally, a block can be labeled as a visual identifier or as a target for [break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break).

Blocks are also used with functions, conditionals and loops:

<!-- start code block file="snippets/block-examples.js" -->
```js
if ( /* true || false */ ) { /* within the block, body of conditional */  }
for ( /* let i = 0; ...*/ ) { /* within the block, body of loop */ }
while ( /* i < num ... */ ) { /* within the block, body of loop */ }
function ( /* arg1, arg2 */ ) { /* within the block, body of function */ }

```
<!-- end code block -->

In addition to grouping code together, blocks create a new scope for the variables defined within the block.

### Scope

When we use blocks, we create a new scope for the variables defined within the block. Within a block, if we are using the ES6 `let` and `const` variables (which you should), these variables have _block scope_, meaning the variables defined within the block are limited in scope to the block in which it is defined:

### Creating block scope

<!-- start code block file="snippets/block-scope.js" -->
```js
const name = 'Danny'
{
  const name = 'Caleb'
}
console.log(name) // prints 'Danny'

// name = 'Caleb' is limited in scope to the block in which it is defined
```
<!-- end code block -->

You can think of scope as a collection of nested boxes. Each scope acts as a container in which variables and functions can be declared. while JavaScript is executing code within a scope, it only has access to identifiers declared in the current scope and higher scopes, the parent and global scopes.

Scopes in JavaScript come in two flavors: block scope and function scope. When you create a function, you isolate the scope within that function. Within the function, you can access the local scope and the parent scopes, but outside the function, you cannot see or access the scope within the function. The function's contents are private and are accessible only within that function.

_**Caution if using `var`**:_

If we are using `var`, the variable will *not* have block scope. Those variables are scoped to the containing (parent) function or script, and the value of those variables defined with *var* persist beyond the block itself. For this reason, we always use `let` and `const` so that we do not get any unexpected behavior with our variables.

**We can create scope by using functions and blocks:**
<!-- start code block file="snippets/scope-creation.js" -->

```js

{ /* creates block scope */ }

if { /* creates block scope */ }
for ( /* ... */ ) { /* creates block scope */ }
while ( /* ... */ ) { /* creates block scope */ }
function ( /* ... */ ) { /* creates a function scope */ }

```

<!-- end code block -->

### Global and Local scope

Let's see some more code examples of scopes.

Remember that block scope means our different scopes are separated by blocks `{ }`.

<!-- start code block file="snippets/block-scope2.js" -->
```js
// I am not inside a block
if (true) {
  // i am inside a block
}
// I am not inside a block
```
<!-- end code block -->

*NOT* objects but blocks.

<!-- start code block file="snippets/block-not-object.js" -->
```js
if (true) {
  // i am inside a block
}

const obj = {
  prop1: 'I am not inside a block',
  prop2: 'This is an object silly'
}
```
<!-- end code block -->

The outer most scope is the _global scope_ and all inner scopes are considered
_local scopes_:

<!-- start code block file="snippets/global-local-scope.js" -->
```js
// global scope
if (true) {
  // local scope
}
// global scope
```
<!-- end code block -->

Variables are accessible within the scope they are declared:

<!-- start code block file="snippets/global-local-scope-vars.js" -->

```js
// global scope
if (true) {
  // local scope
  const x = 1  // what would happen if `var` were used instead?
  console.log(x)  // 1
  // When should we use `console` functions?
}
// global scope
console.log(x)  // ReferenceError: x is not defined
```
<!-- end code block -->

Variables are accessible to any inner scopes (child scopes):

<!-- start code block file="snippets/child-scope-vars.js" -->
```js
// global scope
let x = 1

if (true) {
  // local scope
  x = 2
  console.log(x)  // 2
}
// global scope
console.log(x)  // 2
```
<!-- end code block -->

But not to the scopes above them (parent scopes):

<!-- start code block file="snippets/parent-scope-vars.js" -->
```js
// global scope
const x = 1

if (true) {
  // local scope
  const y = x
  console.log(y)  // 1
}
// global scope
console.log(x)  // 1
console.log(y)  // ReferenceError: y is not defined
```
<!-- end code block -->

Variables are not accessible from sibling scopes:

<!-- start code block file="snippets/sibling-scope.js" -->
```js
if (true) {
  // local scope of 1st sibling
  const a = 1
  console.log(a) // 1
}

if (true) {
  // local scope of 2nd sibling
  console.log(a) // ReferenceError: a is not defined
}
```
<!-- end code block -->

Different scopes can have variables that are declared with the same name and
they do not conflict or know about each other.

<!-- start code block file="snippets/different-scope-vars.js" -->
```js
// global scope
const x = 1
console.log(x)  // 1

if (true) {
  // local scope
  const x = 2
  console.log(x)  // 2
}
// global scope
console.log(x)  // 1
```
<!-- end code block -->

So that means a variable declared in the global scope is accessible by all of
the scopes we create and a variable declared in a local scope is only
accessible to itself and its child scopes.

### Functions and Their Scope

Conditions are just 1 example of block scope.
Loops are another example of block scope.
Functions are yet another example of block scope.

```js
const anyFunction = function () {
  const a = 1
  console.log(a) // 1
}
console.log(a) // ReferenceError: a is not defined

// The scope of our parameters are within the function block as well
const print = function (a) {
  console.log(a)
}
print(1) // run the function. What gets console logged?

// But when we try to access the parameter outside of the function...
console.log(a)
// What sort of error will we get?
```

As we have seen, utilizing scope provides great utility. We get more control over who can access and manipulate our data. We can use scope to declare a variable without polluting the global namespace. Scoping provides a way to __encapsulate__ data and prevent other parts of our applciation from accessing variables declared within a certain scope.

When you are not familiar with the rules of scope, it will be a common source of bugs and frustration. By being aware of how scope is created, and by using scope effectively, you will write code that is more efficient, organized and less error prone.

### Summary

In JavaScript, we use scope to encapsulate data and hide it from other parts of our application. The most common way to create a new scope is with a function. We can also create scope using a block. By using scope, we can keep our code organized, manageable, avoid variable name collision, and keep the global namespace clean.

### Best Practices:
- Don't declare or depend on global state
- Apply the [Principle of Least Privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege): Allow code to access the information and resources that are necessary for it to run, and nothing more.
  - Encapsulate code as much as possible in scope using functions and blocks
- Never use `var` (prefer `const` over `let`, but never use `var`)
- Never depend on scope state
- Always pass in state as an argument when it is needed

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
