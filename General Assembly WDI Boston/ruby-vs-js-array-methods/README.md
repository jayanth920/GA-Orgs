[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Ruby Array Methods (versus JavaScript)

We'll contrast Ruby's [Array](http://ruby-doc.org/core-2.3.0/Array.html) methods
with
[JavaScript's](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

## Prerequisites

-   [ga-wdi-boston/js-array-methods](https://github.com/ga-wdi-boston/js-array-methods)
-   [ga-wdi-boston/ruby-vs-js-arrays](https://github.com/ga-wdi-boston/ruby-vs-js-arrays)

## Objectives

By the end of this, developers should be able to:

-   Contrast enumerable methods on Ruby’s `Array` with iteration methods on
    JavaScript’s `Array.prototype`.
-   Pass inline code as blocks or reference them as symbols in Ruby and contrast
    with passing inline code as anonymous or named functions in JavaScript.

## Preparation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Make a new branch, `training`.
1.  Install dependencies with `npm install` and `bundle install`.

## Array Methods

Both JavaScript and Ruby have types that represent lists. In both languages,
these types are called "arrays". In Ruby, `Array` is a class that holds methods
for arrays, and in JavaScript, `Array.prototype` is an object that holds methods
for arrays.

Let's compare the list of methods for Array in each language. Here is some
documentation for reference:

-   [Array.prototype - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype)
-   [Class: Array (Ruby 2.3.0)](http://ruby-doc.org/core-2.3.0/Array.html)

## Demo: `map`

Ruby and JavaScript Arrays both have a `map` and a `reduce` method. Let's
explore using them to see the similarities and differences.

```ruby
# in irb or pry
fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

```js
// in node
let fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
```

How can we use map to multiply each member of `fibs` by two in both Ruby and
JavaScript?

```ruby
# fibs.map { |fib| ... } for single-line, or

fibs.map do |fib|
  # something here
end
```

```js
fibs.map((fib) => {
  // something here
});
```

## Code Along: `reduce`

Let's use `reduce` to calculate the sum of elements in `fibs` in both Ruby and
JavaScript.

> In JavaScript, we use a function to control the behavior of Array methods.
> In Ruby, we use a block ( `{ |p| ... }` for one line blocks, `do ... end` for
> multi-line blocks).

## Lab: Fibonacci Calculations

Alternating between Ruby and JavaScript, write
 scripts, in `bin/fibonacci.rb` and `bin/fibonacci.js`, that:

-   calculates the product of elements of `fibs` (excluding zero).
-   calculates the sum of the odd elements of `fibs`
-   calculates the product of the even elements of `fibs`(excluding zero).

## Code-Along: People

Let's use the scripts `bin/people-array.js` and `bin/people_array.rb` to explore
Array methods in both Ruby and JavaScript. The data in the objects we'll be
processing comes from the comma separated values (CSV) file `data/people.csv`

The Person objects we'll test against have properties/methods that align with
the headers in `data/people.csv` plus the method `age`

## Lab: People

Use the `bin/people<-|_>array.*` scripts to

-   Count all the people who are older than you (or just pick an age).
-   Count all the people who are younger than you (or just pick an age).
-   Count all the people whose first name and last name start with the same
    letter.
-   Calculate the average age of all the people.

## Lab: Compare and Contrast Methods

Build a table mapping Ruby Array methods to direct or modified invocations of
JavaScript Array methods. Show the invocation, on an array variable named `a`,
with an example block or function. For the JavaScript equivalent of Ruby Array's
`+`, use an array variable named `b`.

| Ruby       | JavaScript |
|:-----------|:-----------|
| `<method>` | `every`    |
| `<method>` | `filter`   |
| `<method>` | `find`     |
| `map`      | `map`      |
| `reduce`   | `reduce`   |
| `<method>` | `some`     |
| `+`        | `<method>` |

What do you notice?

## Code-Along: Set Operations

The results of the Ruby Array methods `-`, `&`, `|`, and `flatten` aren't easily
reproducible in JavaScript.

-   [`-`](http://ruby-doc.org/core-2.3.0/Array.html#method-i-2D) is an Array
    Difference
-   [`&`](http://ruby-doc.org/core-2.3.0/Array.html#method-i-26) is a [Set Intersection](https://goo.gl/XmIIcX)
-   [`|`](http://ruby-doc.org/core-2.3.0/Array.html#method-i-7C) is a [Set Union](https://goo.gl/ePuzW2)
-   [`flatten`](http://ruby-doc.org/core-2.3.0/Array.html#method-i-flatten)
    reduces dimension

We'll explore these methods using `bin/sets_etc.rb`.

## Bonus Challenge: Return of the Word Count

Remember our [text analysis
exercise](https://github.com/ga-wdi-boston/js-reference-types#code-along-analyze-text)
from way-back?

Let's implement `normalize_words`, `unique_words`, `word_count`, and
`word_frequencies` in `lib/string.rb`

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
