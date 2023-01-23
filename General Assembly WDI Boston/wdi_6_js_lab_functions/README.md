# Rated J for JavaScript

We're going to develop a suite of functions that will help us publish and censor internet comments. (Like you do.)

Define the following functions:

* `regularPrint(content)` &ndash; accepts a string `content` and prints it to the console

* `loudPrint(content)` &ndash; accepts a string `content` and prints an upcased version of it surrounded by stars (e.g. `***THIS VIDEO SUCKS***`)

* `omissionCensor(content, badWords)` &ndash; accepts a string `content` and an array of strings `badWords`, and returns a version of `content` with all instances of the strings in `badWords` removed

* `substitutionCensor(content, badWords)` &ndash; accepts a string `content` and an array of strings `badWords`, and returns a version of `content` with all instances of the strings in `badWords` replaced with a random element from an array of "substitute" strings (internally defined in the function)

* `publishComment(comment, badWords, censorFunction, printFunction)` &ndash; accepts a string `comment`, an array of strings `badWords`, a function to censor the comment `censorFunction`, and a function to print the comment `printFunction`

**Note:** Don't worry about handling punctuation gracefully. For now, just use simple strings with no punctuation.

Once you write these functions, call `publishComment` with a string of your choosing 4 times, once with each combination of `censorFunction` and `printFunction`. For example:

```js
publishComment("what the hell is going on", ["damn", "hell"], omissionCensor, loudPrint);
```

Once you are done with all of the above, design and implement another censor function and another print function. They can operate however you like (go nuts!). Demonstrate the use of these new functions by calling `publishComment` with them.

## Extra Challenge

Define a function `generateCommentPublisher(badWords, censorFunction, printFunction)` This function should return a new function which only takes one string argument, and "publishes" it using the `badWords`, `censorFunction`, and `printFunction` that were specified when it was generated.

Example usage:

```js
var loudOmissionAntiSwearingPublisher = generateCommentPublisher(["shit", "crap"], omissionCensor, loudPrint);
var regularSubstitutionRubyHaterPublisher = generateCommentPublisher(["ruby", "rails", "Matz"], substitutionCensor, regularPrint);

loudOmissionAntiSwearingPublisher("javascript is the shit");
// Prints: "***JAVASCRIPT IS THE***"

regularSubstitutionRubyHaterPublisher("I think that Hari and Matz and ruby on rails are the best");
// Prints something like: "I think that Hari and pandas and noodles on bandsaw are the best"
```

## Further Reading

If you want to read more on these concepts, and feel somewhat comfortable with the exercise, you may want to have a look at the [Functional Programming chapter](http://eloquentjavascript.net/chapter6.html) from the book Eloquent JavaScript. The rest of the book is worth a look as well.
