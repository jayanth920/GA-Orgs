[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Ruby Arrays

## Objectives

By the end of this, developers should be able to:

- Create a Ruby Array using both the literal (`[]`) and `new` constructors.
- Assign an element at a specific index in a Ruby Array.
- Access elements by index in a Ruby Array.
- Add and remove elements from the end of a Ruby Array.
- Add and remove elements from the beginning of a Ruby Array.

## Preparation

1. Fork and clone this repository.
    [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. Install dependencies with `bundle install`.

## Introduction

In Ruby, "Arrays are ordered, integer-indexed collections of any object." From
that, [Ruby Arrays](https://ruby-doc.org/core-2.6.3/Array.html) seem a lot like
JavaScript Arrays.

But there are some important differences.

## Creating a Ruby Array

As with JavaScript, Ruby Arrays can be created using literals (technically, a
constructor method on class Array) and with a constructor.

### Demo

```rb
# literal syntax:
developers = []
# => []

# constructor syntax:
developers = Array.new
# => []
```

With the literal syntax, we can create an array with initial values.

```rb
not_the_same_type = [[], 'one', 2.0, 3]
# => [[], "one", 2.0, 3]

developers = ['Caleb', 'Joel', 'Julia', 'Adam']
# => ["Caleb", "Joel", "Julia", "Adam"]
```

If all of the entries are strings, Ruby provides a (Perl inspired) string
[quoting](https://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Literals#The_.25_Notation)
mechanism to create an Array:

```rb
developers = %w[Caleb Joel Julia Adam]
# => ["Caleb", "Joel", "Julia", "Adam"]
```

### Code Along

Let's browse the documentation for [Array::new](https://ruby-doc.org/core-2.6.3/Array.html#method-c-new).
Then, we will create some arrays in [lib/code_along.rb](lib/code_along.rb).

*Note*: There are three (3) different ways to initialize arrays using
`Array::new`. [Creating
arrays](https://ruby-doc.org/core-2.6.3/Array.html#class-Array-label-Creating+Arrays) with default values has a special syntax.

1. Create an empty array, `literal_array`, using the literal syntax

1. Create an array, `constructor_array`, using the constructor syntax,
  initialized with 5 elements

1. Create an array, `ten_false_array`, initialized with 10 `false` elements

Run this file by typing `ruby lib/code_along.rb`, and take a look at your new
arrays!

How does this compare with
[creating](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
JavaScript Arrays?

## Assigning and accessing elements in a Ruby Array

### Demo

Let's explore accessing elements in an array and assigning elements at a
specific index in an array:

- [`Array#[]`](https://ruby-doc.org/core-2.6.3/Array.html#method-i-5B-5D)
  (Element Reference)
- [`Array#[]=`](https://ruby-doc.org/core-2.6.3/Array.html#method-i-5B-5D-3D)
  (Element Assignment)

```rb
developers[0] # Are we accessing or assigning at index 0?
# => "Caleb"

developers[-1]
# => "Adam"

developers[-4] == developers[0]
# => true

developers[developers.length]
# => nil
# What index are we accessing? Why is it nil?

developers[-5]
# => nil

developers[-3, 3]
# => ["Joel", "Julia", "Adam"]
# *Note* the optional 2nd argument. What do the docs say about this?
# https://ruby-doc.org/core-2.5.0/Array.html#method-i-5B-5D

developers[-2, 2]
# => ["Julia", "Adam"]

developers[-5] = 'Kira'
# IndexError: index -5 too small for array; minimum: -4

developers[developers.length] = 'Kira'
# => "Kira"
# To what index are we assigning?

```

### Lab: Storing and Accessing Array Elements

Working in [lib/lab.rb](lib/lab.rb) (displaying the results to the console):

- Append `20` to the end of the array using the array's length.
- Access the 3rd element from the end of the array.
- Access the 10th element in the array.
- Assign [-12, -49] to the 5th element from the end.
- Access all the elements starting at the 2nd element.

## Adding and Removing Elements from Both ends of an Array

### Code Along: Let's Explore

- [Array#push](https://ruby-doc.org/core-2.6.3/Array.html#method-i-push):  Append (put element at end), also available through the
_alias_, [<<](https://ruby-doc.org/core-2.6.3/Array.html#method-i-3C-3C)
- [Array#pop](https://ruby-doc.org/core-2.6.3/Array.html#method-i-pop): Remove from end of array
- [Array#unshift](https://ruby-doc.org/core-2.6.3/Array.html#method-i-unshift): Prepend (put element at beginning)
- [Array#shift](https://ruby-doc.org/core-2.6.3/Array.html#method-i-shift): Remove from beginning

```rb
developers << 'Kosta'
# => ['Caleb', 'Joel', 'Julia', 'Adam', 'Kira', 'Kosta']

developers.push 'Rick'
# => ['Caleb', 'Joel', 'Julia', 'Adam', 'Kira', 'Kosta', 'Rick']

developers << 'Johnathan' << 'Peter'
# => ['Caleb',
#   'Joel',
#   'Julia',
#   'Adam',
#   'Kira',
#   'Kosta',
#   'Rick',
#   'Johnathan',
#   'Peter']

developers.pop
# 'Peter'

developers.shift 4
# => ['Caleb', 'Joel', 'Julia', 'Adam']

developers
# => ['Kira', 'Kosta', 'Rick', 'Johnathan', 'Peter']

developers.unshift 'Guillermo'
# => ['Guillermo', 'Kira', 'Kosta', 'Rick', 'Johnathan', 'Peter']
```

### Lab: Push and Pop Story

In [lib/story.rb](lib/story.rb), tell a story (of your choice) involving
multiple characters that enter and leave the story. These characters should be
held in an array and should be added to and taken out of the story using the
`push`, `pop`, `shift` and `unshift` methods. Practice using string
concatenation while printing your story by only referring to your characters
from their held array (i.e., no hardcoding of names that exist in the array).
Once these requirements are met, feel free to implement more creative string and
array methods into your story.

For example:

```rb
characters = %w[Lee Adrian Bo]

puts "There once were three friends, #{characters[0]}, #{characters[1]}, and
#{characters[2]}."

characters << 'Taylor'

puts "#{characters[-2]} befriended #{characters[-1]}, #{characters[0]}\'s known
enemy.
      #{characters[0]} could no longer be their friend."

characters.shift

puts "#{characters[0]}, #{characters[1]}, and #{characters[2]} needed to think
of lunch plans."
```

Running `ruby lib/story.rb` should print your story for you in the terminal.

### Bonus: Create Ruby Array Using a Block Initializer

In [lib/lab.rb](lib/lab.rb) use a block initializer with `Array.new` to create a
Ruby Array with ten elements where elements are equal to their index multiplied
by 2. Store the result in a new array.

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
