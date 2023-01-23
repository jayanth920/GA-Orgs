# Title: Blocks, Procs and Lambdas

###Time Required:
- 30 minutes+

###Prereqs
- Loops
- Arrays
- Exceptions

###Objectives:
- Practice using methods that use blocks.
- Create methods that use blocks as parameters.

### What are Blocks
- Everything in ruby is an object, except blocks
- How are blocks typically used in Ruby
- Explain why you would use a block
- How would you create a method that uses a block

###Activity:
You will create two methods in the MyArray class
- Create a sequence method on the MyArray class
MyArray#sequence(n, m, c), will generate a sequence of n numbers
  (m*i + c) and pass them to a block. (i is each Fixnum element in the
array)

- Look up the Hash#fetch method in the Ruby docs and implement a
  method named Hash#my_fetch on the Hash method that will perform
  just like the Hash#fetch method
