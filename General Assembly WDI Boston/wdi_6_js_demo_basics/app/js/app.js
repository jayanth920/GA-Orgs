'use strict';

/* NUMBERS
———————————————————————————————————————————————————
Unlike in Ruby there is no special distinction between numbers with and
without decimal points. They are all just "numbers".  */


/* STRINGS
———————————————————————————————————————————————————
Unlike in Ruby there is no difference between single quotes and double
quotes... since JavaScript has no string interpolation. Strings are also
"immutable", meaning we can't modify them in-place (no shoveling!)  */


/*  BOOLEANS
———————————————————————————————————————————————————
Like in Ruby, we have the booleans true and false. */


/* UNDEFINED
———————————————————————————————————————————————————
Unlike in Ruby, we have an extra nil-like value called "undefined". It's
what you'll get if you access a variable that's not assigned yet, or call
a function that doesn't return anything.*/



/*  NULL
———————————————————————————————————————————————————
We also have nil, but in JS it's called "null". A value that carries no value.
Like undefined, but defined (not automatically assigned).
It is falsy.  */



/*  Control Flow in Javascript
———————————————————————————————————————————————————
Important differences from Ruby:
  - Conditions must be enclosed in parentheses.
  - Code blocks are always enclosed in braces. There is no `end` in JavaScript.
  - The "else-if" syntax is two separate words, `else if`, rather than `elsif`.
  - There is no `unless` in JavaScript. Use the "not" operator (`!`) instead.   */



/*  Switch/Case statements
———————————————————————————————————————————————————
Note that `case` blocks are *not* enclosed in braces,
and each one also needs a `break` statement at the end &ndash;
otherwise code execution will "fall through" to the next
block and keep on going! Thankfully `switch` uses the
threequals for comparison, but due to its quirks and
inflexibility, you don't see it that often in real-world programs.
*/



/*  Arrays
———————————————————————————————————————————————————
Like all objects, arrays can have *functions* (or methods)
defined on them, like `.sort()`, that we can call. Functions
must always be called with parentheses, even if we're not
passing any arguments. Note `length` is not a function &ndash;
instead it is a *property* that is accessed directly, and we
cannot use parentheses to call it. The MDN reference will
tell you whether something is a property or a function. */



/*  Iterating through arrays
———————————————————————————————————————————————————
In Ruby we avoid `for` loops in favor of methods like
`each` or `map`, but in JavaScript they are seen frequently
for simple iteration.
*/

/*
The three semicolon-separated components of a `for` loop are:
- A statement that will be executed once before the first iteration
- An expression evaluated at the start of each iteration &ndash; if `false`, the loop is terminated
- A statement that will be executed at the start of each iteration

Since `for` loops are awkward and error-prone, it's usually
preferable to use the `forEach` function instead. This requires
defining an anonymous function, which we'll get into later.
`forEach` can also receive the index and the array iterating upon as params
There are also `map` and `reduce` functions that do the same thing
as their Ruby equivalents.
*/


/*  JS Objects
———————————————————————————————————————————————————
Objects in JavaScript can have *properties*.
In this example, `name`, `age`, and so on are not
"keys" but *property names*. Each property has a
value, like the keys in a Ruby hash have values.  */


/*  Operating on Objects
———————————————————————————————————————————————————
Plain objects in JavaScript are extremely minimal and
have virtually no functions defined on them (unlike Ruby
hashes, which have dozens!). We can at least iterate
over the properties of any object using a `for...in` loop:
*/



























