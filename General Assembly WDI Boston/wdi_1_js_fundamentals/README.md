![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# JavaScript Fundamentals

## Introduction

Review JavaScript fundamentals and apply them to common techniques in collection processing

## Objectives

By the end of this, students should be able to:

- Create a list (array) of normalized words from a string
- Create a list of unique words from a list of normalized words
- Store information about a list of words in an associative array

## Fundamentals

Fork and clone this repo

### Node REPL

```bash
$ cd wdi_1_js_fundamentals
$ node
>

```

Can we think of other tools we can use a a JavaScript REPL?

### Variables, numbers, expressions

```node
> n1;

```

Remainder: `%`

### Assignment

```node
> n1 = 2;
> n1 + 2;

```

Compare:  `=`, `+=`, `++`

### Strings

```node
> var s1 = "This is a string";

```

What's different about `3 + 5 + "string"` and `"string" + 3 + 5`?

#### Regular expressions

One or more whitespace characters: `/\s+/`

One or more non-word characters: `/\W+/`

### Boolean expressions

What do you think of when you here "truthy" and "falsy"?

```node
> n1 === 1;
> n1 = 1;
> n1 === 1;

```

How would you check if a variable contained an odd number?

Note:  `!truthy === false` and `!falsy === true`

### Conditional and loops

```node
> for (var i = 0; i < 10; i++) { if (i===5) {console.log("five!");} }

```

## Collections

### Arrays

```node
> var a1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
> for (var i = 0; i < a1.length; i++) { console.log("element: " + a1[i] + ", index: " + i);}
>

```

### Associative arrays

```node
> var aa1 = {'given name':'Antony', 'surname':'Donovan','occupation':'WDI Instructor'};
> var aa2 = {};
>

```

### Manipulating text

We'll be using the files in the scripts subdirectory as a starting point to:
 - count words in a string
 - get the unique words from a string
 - count the unique words
 - find the word frequencies (how many times does each unique word appear in the string)

```bash
$ node scripts/count.js

```

## Quiz

Please follow the instructions at https://github.com/ga-wdi-boston/wdi_1_js_fundamentals_quiz


## Additional Resources

- https://en.wikipedia.org/wiki/Associative_array
- https://en.wikipedia.org/wiki/Array_data_type
- http://en.wikipedia.org/wiki/Regular_expression
