[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Ruby Array Methods

We'll explore Ruby's [Array](https://ruby-doc.org/core-2.5.0/Array.html) type
and some of its methods. We'll also have a look at a few ways in which Ruby
makes list processing (iterating through arrays) a bit more fun for the
developer.

List processing is at the core of most web development tasks, so practicing it
in Ruby (and later, comparing it to JavaScript), will illuminate the logical
features of list processing tasks in addition to implementation specifics.

## Prerequisites

- [JavaScript Array Methods](https://git.generalassemb.ly/ga-wdi-boston/js-array-iteration-methods)
- [Ruby Array](https://git.generalassemb.ly/ga-wdi-boston/ruby-array)

## Objectives

By the end of this, developers should be able to:

- Iterate through arrays by using Ruby array methods.
- Pass inline code as blocks to Array instance methods.
- Pass method names as symbols to Array instance methods.

## Preparation

1. [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1. Make a new branch, `training`.
1. Install dependencies with `bundle install`.

## Array Methods

Both JavaScript and Ruby have types that represent lists. In both languages,
these types are called "arrays". In Ruby, `Array` is a class that holds methods
for arrays, and in JavaScript, `Array.prototype` is an object that holds
methods for arrays.

Let's compare the list of methods for Array in each language. Here is some
documentation for reference:

- [Array.prototype - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype)
- [Class: Array (Ruby 2.5.0)](https://ruby-doc.org/core-2.5.0/Array.html)

## Demo: `map`

Let's explore Ruby's `map` method.

```ruby
# in pry
fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

How can we use map to multiply each member of `fibs` by two in Ruby?

```ruby
# fibs.map { |fib| ... } for single-line, or

fibs.map do |fib|
  # something here
end
```

## Code Along: `reduce`

Let's use [reduce](https://ruby-doc.org/core-2.5.0/Enumerable.html#method-i-reduce) to calculate the sum of elements in `fibs`.

> In JavaScript, we used a function to control the behavior of Array methods.
> In Ruby, we use a block ( `{ |p| ... }` for one line blocks, `do ... end` for
> multi-line blocks).

## Lab: Fibonacci Calculations

Complete the `lib/fibonacci.rb` script to use the `reduce` method to calculate
the following:

Using the `reduce` method:

- calculate the product of elements of `fibs` (excluding zero).
- calculate the sum of the odd elements of `fibs`
- calculate the product of the even elements of `fibs`(excluding zero).

(Where is the `reduce` method defined? How do instances of the `Array` class
get access to the `reduce` method?)

## Code-Along: People

Let's use the script `lib/people.rb` to explore Array methods in Ruby.
The data in the objects we'll be processing comes from the comma separated
values (CSV) file `data/people.csv`.

The Person objects we'll test against have properties/methods that align with
the headers in `data/people.csv` plus the method `age`.

## Lab: People

Use the `lib/people.rb` script to do the following:

- Count all the people who are older than you (or just pick an age).
- Count all the people who are younger than you (or just pick an age).
- Count all the people whose first name and last name start with the same
  letter.
- Calculate the average age of all the people.

## Code-Along: Set Operations

The results of the Ruby Array methods `-`, `&`, `|`, and `flatten` aren't
easily reproducible in JavaScript.

- [`-`](https://ruby-doc.org/core-2.5.0/Array.html#method-i-2D) is an Array
  Difference
- [`&`](https://ruby-doc.org/core-2.5.0/Array.html#method-i-26) is a [Set Intersection](https://en.wikipedia.org/wiki/Intersection_%28set_theory%29)
- [`|`](https://ruby-doc.org/core-2.5.0/Array.html#method-i-7C) is a [Set Union](https://en.wikipedia.org/wiki/Union_%28set_theory%29)
- [`flatten`](https://ruby-doc.org/core-2.5.0/Array.html#method-i-flatten)
  reduces dimension

We'll explore these methods using `lib/sets_etc.rb`.

## Bonus Challenge: Return of the Word Count

Remember our [text analysis exercise](https://git.generalassemb.ly/ga-wdi-boston/js-reference-types#code-along-collections) from way-back?

Let's implement `normalize_words`, `unique_words`, `word_count`, and
`word_frequencies` in `lib/string.rb`

Test your code by running the included specs: `bin/rspec spec/string_spec.rb`,
or run all specs with `bin/rspec spec`.

## Looking Ahead

As you may have noticed when looking at the [reduce documentation](https://ruby-doc.org/core-2.5.0/Enumerable.html#method-i-reduce), not
all of the methods available to use on arrays are defined on Ruby's
`Array Class`. More methods are defined on the `Enumerable` module that is
included in `Array`, which will be covered in a future training.

## Additional Resources

- [How Does Symbol#to_proc Work?](http://benjamintan.io/blog/2015/03/16/how-does-symbol-to_proc-work/)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
