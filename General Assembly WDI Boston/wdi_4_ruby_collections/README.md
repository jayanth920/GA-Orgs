![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# An Introduction to Ruby collections

## Prerequisites

- **[Programming Fundamentals in Ruby (versus JavaSript)](https://github.com/ga-wdi-boston/wdi_4_ruby_fundamentals)**

## Introduction

Collections are data structures used to store and retrieve 'things'.  The two most common collections are lists and maps (or dictionaries).  Ruby implements robust versions of each of these as the types Array and Hash.

## Objectives

By the end of this, students should be able to:

- Choose what to store in an array or hash
- Create arrays and hashes
- Add, lookup, and remove elements from arrays and hashes
- Use arrays and hashes to

## Instructions

Fork and clone this repository, then

```bash
$ cd wdi_4_ruby_collections
$ subl .
$ pry
```

```ruby
[1] pry(main)>
```

## Ruby Array

Ruby arrays are used to store and manipulate generalized lists

There are multiple ways to create a new array.

```ruby
[1] pry(main)> friends = []
=> []
[2] pry(main)> friends = Array.new
=> []
[3] pry(main)> friends = Array.new(3)
=> [nil, nil, nil]
[4] pry(main)> friends = Array.new(3, "")
=> ["", "", ""]
[5] pry(main)> friends.clear
=> []
[6] pry(main)> friends
=> []
```

And multiple ways to add entries.

```ruby
[7] pry(main)> friends << "Amy"
=> ["Amy"]
[8] pry(main)> friends[friends.length] = "Bob"
=> "Bob"
[9] pry(main)> friends.push "Chris"
=> ["Amy", "Bob", "Chris"]
[10] pry(main)> coworkers = "Amy, Chris, Daryl".split /\W+/
=> ["Amy", "Chris", "Daryl"]
```

And powerful operations expressed simply

```ruby
[11] pry(main)> friends - coworkers
=> ["Bob"]
[12] pry(main)> friends + coworkers
=> ["Amy", "Bob", "Chris", "Amy", "Chris", "Daryl"]
[13] pry(main)> (friends + coworkers).sort.uniq
=> ["Amy", "Bob", "Chris", "Daryl"]
[14] pry(main)> friends | coworkers
=> ["Amy", "Bob", "Chris", "Daryl"]
[15] pry(main)>
```

And other ways to create arrays that we'll talk about later.

```ruby
[1] pry(main)> (1..10).map(&:itself)
=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### Brainstorm

What are some types of lists?

What are some things we'd put on those lists (let's stick to strings for now)?

###  Pair and share

Create a file called lists.rb and using a list or lists from the brainstorm, can you figure out, and write code to:

- Delete a specific item from the list?
- Delete an item at a specific position in the list?
- Remove and add an item from the front of the list?
- Find the intersection of two lists (items that are on both)?

If possible, keep track of what you tried that didn't work to share with the class.  Use `pry -r ./lists.rb` to load the file at the start of a pry session.

## Iterating over the elements in an list

```ruby
[1] pry(main)> scores = [3, 5, 4, 2, 4, 5]
=> [3, 5, 4, 2, 4, 5]
[3] pry(main)> average = scores.reduce(:+)/scores.length
=> 3
[4] pry(main)> average = scores.reduce(:+)/scores.length.to_f
=> 3.8333333333333335
[5] pry(main)> scores.map {|e| e * 2 }
=> [6, 10, 8, 4, 8, 10]
[6] pry(main)> scores.map{|e| e * 2 }.reduce(:+)/scores.length
=> 7
[7] pry(main)> scores.map{|e| e * 2 }.reduce(:+)/scores.length.to_f
=> 7.666666666666667
[8] pry(main)>
```

Method chaining is a Ruby idiom.

## Pry lab (arrays)

### We're stuck in loops! (again)

- Run the script `pry/lab.rb` in your terminal  `$ ruby pry/array.rb`
- At each binding.pry you'll be kicked into pry.
- Change the value of the arrays to break out of the loop.  Be clever and prepared to share with the class!
- Type `exit` to resume program execution.
- Try typing `exit` without changing anything to see what happens.
- When you get to the bottom of the lab, you're done.

## Ruby Hash

In Ruby, a Hash is a mapping from one object, the key, to another object, the value.

### Why symbols?

Any object may be used as a key in a Hash.  Symbols are unique objects throughout your program.  Strings are not.  Comparing by object id

```ruby
[1] pry(main)> "cvv".object_id == "cvv".object_id
=> false
[2] pry(main)> :cvv.object_id == :cvv.object_id
=> true
[3] pry(main)> :cvv.equal? :cvv
=> true
[4] pry(main)>
```

### Hash literal syntax

```ruby
[4] pry(main)> cc = {:number => '01123581321', :ccv => '321', :name => "Joe Isuzu"}
=> {:number=>"01123581321", :ccv=>"321", :name=>"Joe Isuzu"}
[5] pry(main)> cc = {number: '01123853121', ccv: '231', name: "Bob Isuzu"}
=> {:number=>"01123853121", :ccv=>"231", :name=>"Bob Isuzu"}
[6] pry(main)>
```
We have to use the former syntax if a key isn't a symbol.

### Hash constructor syntax

```ruby
[1] pry(main)> counters = Hash.new(0)
=> {}
[2] pry(main)> scores = Hash.new(0)
=> {}
[3] pry(main)> scores[:boston]
=> 0
[4] pry(main)> scores[:boston] += 1
=> 1
[5] pry(main)> scores[:yankees]
=> 0
[6] pry(main)>
```

### Brainstorm

What could we store in a hash?

What would we use to store hashes?

###  Pair and share

Create a file called hashes.rb.  Create a few hashes using examples from the brainstorm.  Read/update/delete values in those hashes.  What happens

## Pry lab (hashes)

### We're stuck in loops! (yet again)

- Run the script `pry/lab.rb` in your terminal  `$ ruby pry/hash.rb`
- At each binding.pry you'll be kicked into pry.
- Change the value of the arrays to break out of the loop.  Be clever and prepared to share with the class!
- Type `exit` to resume program execution.
- Try typing `exit` without changing anything to see what happens.
- When you get to the bottom of the lab, you're done.


## Enumerable

TBD
