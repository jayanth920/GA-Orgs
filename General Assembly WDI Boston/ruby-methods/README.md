![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Ruby Methods

## Objectives

By the end of this, students should be able to:

- Invoke methods.
- Create a method
- Create a method with default parameters.
- Create a method with a hash parameter.
- Create a method with a splat operator.
- Create a method with keyword arguments.

## Creating Simple Methods

> Create a file method_simple.rb and run it.

```ruby
# keyword 'def' is used to create a method
def say_hello
  # body of method is here
  "Hello World"
end  # must have and end

puts say_hello

# create a method with two params
def add(num1, num2)
  num1 + num2
end

# no need for semicolons, but one can use them.
# semi-colons are not typically used in Ruby.
# can use parens or not!
puts add(33, 9)
puts add 33, 9

# lets leave off a param
add(88)
# Throws an ArgumentError exception
# `add': wrong number of arguments (1 for 2) (ArgumentError)
```
## Method Parameters

> Create a demo/method_params.rb and run it.

```ruby
# lets redine add to take 3 params, last one not required
# and defaults to 0
def add(num1, num2, num3 = 0)
  num1 + num2 + num3
end

puts add(3, 4, 8)
puts add(3, 4) # don't need last argument!

# lets make the last parameter a Hash
# common way to setup default parameters before ruby 1.9
def say_it(str1, options = {})

  # merge will overwrite the hash that is calling it
  # with the hash that is passed as an argument to it.
  opts = {str2: 'People'}.merge(options)

  # start of greeting
  greeting = str1

  if opts[:str2] == 'World'
    greeting << 'My fellow humans'
    # try to avoid callling return in the middle of a 
    # a method body. 
    # Best practice to return at the end of a method body
    # return greeting << 'My fellow humans'
  elsif opts[:str2] == 'Town'
    greeting << 'Towns people'
  else
    greeting << opts[:str2]
  end

  # Best practice is to return the result of a method at 
  # the end of body, (Remember don't need explicit return!)
  greeting
end

# uses default param
puts say_it('Hello ')

# Notice I don't need the curly braces for the Hash arg if
# it's that last argument
puts say_it('Hello ', str2: 'Town')
puts say_it('Hello ', str2: 'Cruel World')

# 2 ways to use the splat, '*', operator.

# 1) To convert array to arguments
# Splat, '*', operator. Will convert array to list of arguments
# passed to a method.
puts add(*[6, 10, 5])

# 2) To covert all the actual parameters send a method 
# into an array
# Splat,'*', to slurp up argments.
def sum_up(*args)
  puts "args.class is #{args.class}"
  puts "args = #{args}"

  args.reduce do |sum, num|
    sum += num
  end
end

result = sum_up(4,9,8, 22,67)
puts "result = #{result}"
```

## Passing a Block to a Method 

The last argument passed to a method can be a block. A block is a bunch of code that gets invoked by the method.

*Blocks are similar to Javascript anonymous functions.* 

* Blocks are passed to methods.

* Blocks can be invoked inside of a method.

* Blocks can be passed arguments from the method it's invoked from.

#### Using blocks

```ruby
# Pass a block argument to the Fixnum#times method
3.times { puts "Say Hello" }

# same as above but pass the block an argument
3.times { |num| puts "#{num} Say Hello" }


# Look up the Fixnum#times method, Oh Fixnum class is a child of Integer class!

# call a Range object, (33..44), each method and pass it a block.
# Look up the Range#each method
(33..44).each { |i| puts "got #{i}" }

```

## Keyword Arguments

Ruby 2.0 added a cleaner way to use arguments. Lets take a look at Keyword Arguments.

Look at this video. [A 6 minute guide to Keyword Arguments](https://www.youtube.com/watch?v=u8Q6Of_mScI)

Read this article. 
## Resources

- [Rubymonk Methods](https://rubymonk.com/learning/books/1-ruby-primer/chapters/19-ruby-methods/lessons/69-new-lesson)
- [Thoughtbot Ruby 2 Keyword Arguments](https://rubymonk.com/learning/books/1-ruby-primer/chapters/19-ruby-methods/lessons/69-new-lesson)
- [Ruby Keyword arguments video](https://www.youtube.com/watch?v=u8Q6Of_mScI)
- [Keyword Arguments](https://www.youtube.com/watch?v=u8Q6Of_mScI)
