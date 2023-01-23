![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

#JSON

## Objectives

By the end of this, students should be able to:

- Write JSON by hand and validate it using a 3rd-party JSON validator.
- Convert JavaScript objects to JSON, and vice versa.
- Parse JSON, iterate over the resulting object, and use jQuery to append multiple HTML elements.

## Prerequisites

- JavaScript Objects

## JSON :: Overview

[JSON](http://json.org/) (JavaScript Object Notation) is a lightweight text-based data format that's based on JavaScript (specifically, a subset of Standard ECMA-262 3rd Edition - December 1999). Because it's text, and it looks like JavaScript, JSON is simultaneously both easy for humans to read and write AND easy for programs to parse and generate.

> JSON is completely language-independent, but it uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data-interchange language.

We use JSON objects to transfer data between applications and Javascript. To keep everything consistent, all JSON code must follow a number of strict conventions (_stricter even than normal JavaScript!_) in order to be syntactically correct. For instance:

- Property names must be double-quoted strings.
- Trailing commas are forbidden.
- Leading zeroes are prohibited.
- In numbers, a decimal point must be followed by at least one digit.
- Most characters are allowed in strings; however, certain characters (such as `'`, `"`, `\`, and newline/tab) must be 'escaped' with a preceding backslash (`\`) in order to be read as characters (as opposed to JSON control code).
- All strings must be double-quoted.
- No comments!

## Instructions

- Fork and clone this repo. Then, go into `app/app.js` and follow the steps.

## Additional Resources

- [JSONLint][1]
- [JSON on Wikipedia][2]

[1]: http://jsonlint.com/
[2]: http://en.wikipedia.org/wiki/JSON
