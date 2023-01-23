# Data Structures

(rewrite this)

The basic idea of a data structure is to store data in a way that meets the needs of your particular application. You might be inclined to store a particular kind data in one giant array, but it would be rather time consuming to locate a specific value if you had a significant number and depth of items. So you need to look to other options.

- What is a data structure?

- Why bother having many different search algorithms?
- What is breadth-first-search (BFS)?
- What is depth-first-search (DFS)?
- What situations would you want to use BFS?
- What situations would you want to use DFS instead?
- When would BFS be impractical?

## Set

### What is it?

A store of values with no particular order, with no repeated values. It is a representation of a *finite set* from mathematics.

### What can you represent with it?

Generally, instead of retrieving an item from the set, you search the set to see if a value is present in the set.

A *mutable set* or *dynamic set* allows for insertion and deletion from the set.

### How is it different from a pure array or hash?

There are 'keys' but no values, unlike a hash. There is no specific order (or index) unlike an array.

### What's it good for?

Storing sets of unique values, such as a set of colors, set of words.

### What's it not so good for?

Storing complex values.

### How do we implement it?

In Ruby, there is a built in [`Set` class](http://www.ruby-doc.org/stdlib-2.1.5/libdoc/set/rdoc/Set.html). [JavaScript has a built in `Set` global object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).

In both Ruby and C, they are mutable sets.

-- How to add an item?
-- How to find an item?

```ruby
my_set = Set.new [:red, :green, :blue]
my_set.add(:purple)
my_set.include(:yellow) #=> falsequic
```

## Dynamic array

- What is it?
- What can you represent with it?
- What other structures does it depend on internally?
- How is it different from a pure array or hash?
- What's it good for?
- What's it not so good for?
- How do we implement it?
-- How to add an item?
-- How to find an item?

## Stack

- What is it?
- What can you represent with it?
- What other structures does it depend on internally?
- How is it different from a pure array or hash?
- What's it good for?
- What's it not so good for?
- How do we implement it?
-- How to add an item?
-- How to find an item?

## Queue

- What is it?
- What can you represent with it?
- What other structures does it depend on internally?
- How is it different from a pure array or hash?
- What's it good for?
- What's it not so good for?
- How do we implement it?
-- How to add an item?
-- How to find an item?


## Singly-linked list

- What is it?
- What can you represent with it?
- What other structures does it depend on internally?
- How is it different from a pure array or hash?
- What's it good for?
- What's it not so good for?
- How do we implement it?
-- How to add an item?
-- How to find an item?

## Doubly-linked list

- What is it?
- What can you represent with it?
- What other structures does it depend on internally?
- How is it different from a pure array or hash?
- What's it good for?
- What's it not so good for?
- How do we implement it?
-- How to add an item?
-- How to find an item?

## Hash table

- What is it?
- What can you represent with it?
- What other structures does it depend on internally?
- How is it different from a pure array or hash?
- What's it good for?
- What's it not so good for?
- How do we implement it?
-- How to add an item?
-- How to find an item?

## Binary Search Tree

- What is it?
- What can you represent with it?
- What other structures does it depend on internally?
- How is it different from a pure array or hash?
- What's it good for?
- What's it not so good for?
- How do we implement it?
-- How to add an item?
-- How to find an item?

## B-Tree

- What is it?
- What can you represent with it?
- What other structures does it depend on internally?
- How is it different from a pure array or hash?
- What's it good for?
- What's it not so good for?
- How do we implement it?
-- How to add an item?
-- How to find an item?

## Trie

- What is it?
- What can you represent with it?
- What other structures does it depend on internally?
- How is it different from a pure array or hash?
- What's it good for?
- What's it not so good for?
- How do we implement it?
-- How to add an item?
-- How to find an item?

Also known as a prefix tree

## Heap

- What is it?
- What can you represent with it?
- What other structures does it depend on internally?
- How is it different from a pure array or hash?
- What's it good for?
- What's it not so good for?
- How do we implement it?
-- How to add an item?
-- How to find an item?

## Priority Queue

- What is it?
- What can you represent with it?
- What other structures does it depend on internally?
- How is it different from a pure array or hash?
- What's it good for?
- What's it not so good for?
- How do we implement it?
-- How to add an item?
-- How to find an item?
Ruby uses a Fibonacci heap internally, which means constant time lookup and inserts, and O(log n) removal

## Bloom Filter

- What is it?
- What can you represent with it?
- What other structures does it depend on internally?
- How is it different from a pure array or hash?
- What's it good for?
- What's it not so good for?
- How do we implement it?
-- How to add an item?
-- How to find an item?
