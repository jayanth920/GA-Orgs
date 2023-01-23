![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# An Introduction to JavaScript Collections

## Introduction

A look at basic techniques in collection processing

## Objectives

By the end of this, students should be able to:

- Create a list of normalized words from a string
- Create a list of unique words from a list of normalized words
- Store information about a list of words in a dictionary

## Instructions

Fork, clone, and npm install.

## Collections

There are two general collection types.  The `list` and the `dictionary` (aka `map`, `hash`, ...).

- Lists store lists of things.
- Dictionaries store uniquely named values.

In JavaScript we use Array and Object respectively to implement these collection types.

### Array (list)

```js
var fibonacci = [0, 1];
for (var i = 2; i < 10; i++) {
  fibonacci[i] = fibonacci[i-1] = fibonacci[i-2];
}
```

### Object (dictionary)

```js
> var Instructor = {'given name':'Antony', 'surname':'Donovan','occupation':'WDI Instructor'};
> var dir = {};
>
```

### Manipulating text

We'll be using the file `lib/collections.js` as a starting point to:
- create a list of normalized words from a paragraph of text.
- count words in a string.
- get the unique words from a string.
- count the unique words.
- find the word frequencies (how many times does each unique word appear in the string).

 We won't get to methods for a few days, but there are three on String we'll need to create a list of normalized words:  `split`, which breaks a String into an Array;  `replace`, which makes substitutions; and `toLowerCase`, which does the obvious.

 We'll also need two **Regular expressions**:

 One or more whitespace characters: `/\s+/`

 One or more non-word or single-quote characters: `/[^\w']+/`

```bash
$ grunt test
```

## Assessment

Please follow the instructions at https://github.com/ga-wdi-boston/js-collections-08-solo-assessment

## Additional Resources

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
- https://en.wikipedia.org/wiki/Associative_array
- https://en.wikipedia.org/wiki/Array_data_type
- http://en.wikipedia.org/wiki/Regular_expression
