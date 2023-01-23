![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Ruby Methods Lab

## Objectives

By the end of this, students should be able to:

- Use Test Driven Development to guide the writing of methods
- Solve problems using methods
- Apply default arguments, keyword arguments with methods
- Explain method scope

## Lesson

# Methods

```ruby
def excited_greeting(first_name, last_name)
  greeting = "Hi, #{first_name} #{last_name} here!"
  greeting = greeting.upcase
  return greeting
end
```

* Explain all the "parts of speech"
* Remove "return", still works
* Move "return" earlier, see what happens
* Pare it down to be more Rubyish

```ruby
def excited_greeting(first_name, last_name)
  "Hi, #{first_name} #{last_name} here!".upcase
end
```
## Scope

```ruby
product = 'WDI'

def excited_greeting(first_name, last_name)
  "Hi, #{first_name} #{last_name} here for #{product}!".upcase
end

puts excited_greeting('Alex', 'Grant') # inside the method, product is not defined!
puts "My first name is #{first_name}" # first_name is not defined!
```

* Explain call stack here when error occurs

```ruby
first_name = 'David'

def excited_greeting(first_name, last_name)
  "Hi, #{first_name} #{last_name} here!".upcase
end

puts excited_greeting('Alex', 'Fisher')
puts "My first name is #{first_name}"
```

## Default and Keyword Arguments

```ruby
def excited_greeting(first_name, last_name, product = 'WDI')
  "Hi, #{first_name} #{last_name} here for #{product}!".upcase
end
```

* We can have more than one default argument
* Multiple defaults tends to get confusing and isn't used as much

```ruby
def greeting(first_name, last_name, product = 'WDI', excited = true)
  greeting = "Hi, #{first_name} #{last_name} here for #{product}!"
  excited ? greeting.upcase : greeting
end
```

* What if we want to not be excited, but keep the default product?
* Same problem occurs if we switch the order around

```ruby
def greeting(first_name, last_name, product: 'WDI', excited: true)
  greeting = "Hi, #{first_name} #{last_name} here for #{product}!"
  excited ? greeting.upcase : greeting
end
```

* Keyword arguments are new to Ruby 2.0
* Highly recommend this approach for methods that take two or more arguments
* In earlier versions we'd have to use hashes and a bunch of boilerplate

```ruby
def greeting(first_name, last_name, options = {})
  product = options.key?(:product) ? options.delete(:product) : 'WDI'
  excited = options.key?(:excited) ? options.delete(:excited) : true
  raise ArgumentError, "unknown keyword: #{options.keys.first}" if !options.empty?

  greeting = "Hi, #{first_name} #{last_name} here for #{product}!"
  excited ? greeting.upcase : greeting
end
```


## Instructions

- Fork and clone this repo.
- Run `bundle` to install gems.
- All of the problems have an RSpec test suite written already, and you can run all of the test by running `rspec spec`, or an individual set of test by running `rspec spec/FILE_NAME_spec.rb`

## Your Turn

### Problem 1: Greeter

Write a method that will return a string that greets that world such as 'Hello, world!'
The method will optionally take a name as an argument, and uses that name instead of 'world',
such as 'Hello, Sam!'

For example:

```ruby
greet() #=> 'Hello, World!'
greet('Kim') #=> 'Hello, Kim!'
```

### Problem 2: Transaction Cost Calculator

Write a method that will return the total cost for a transaction, factoring in tax and shipping charges, given the price of an item.

The default tax is 5%, however this can be passed in optionally as a different tax (perhaps a non-profit needs 0%).

The default shipping fee is 2.99 and isn't taxed additionally, but this may be adjusted when calling the method.

An *discount* should be another optional field, which could be used to adjust the base price of the item in question. By default this is 0.

Since there are a lot of numbers here, and they are hard to keep track of we should use keyword arguments to keep track of which is which.

For example:

```ruby
total_cost(price: 10.00) #=> 13.49, since (10.00 * 1.05) + 2.99 == 13.49
total_cost(price: 10.00, shipping_fee: 5.99)
total_cost(price: 10.00, tax_rate: 5.0)
total_cost(price: 10.00, tax_rate: 5.0, discount: 2.00, shipping_fee: 1.99)
```

### Problem 3: Calculate primes within a range

Given a range of integers such as (20..100) return an array of all valid prime numbers.

Hint: You may want to write a method called `is_prime?`, which you can reuse for each number. We may have seen a method like this yesterday.

### Bonus Problem (optional): Spiral Path

Write a function called "spiral" that takes an NxM (2d) array as input and returns a "spiral" path through the array, starting in the upper-left corner and moving clockwise.  Use the  language of your choice.

For example (in Ruby), if

```ruby
array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
```

then

```ruby
spiral(array) # => [1,2,3,4,5,6,7,8,9]
```

It should work on any NxM array, so don't assume the input is a square array.  However, every row will have the same number of elements.


##### Credit:

Credit and inspiration for the spiral path question goes to [Jesse Farmer](https://gist.github.com/jfarmer/b043eee597d2f4934fb2#file-spiral-md).

## Notes

Make frequent Git commits, especially when you've completed an answer.

## Additional Resources

- [Wolfram Alpha on Primes (very interesting)](http://mathworld.wolfram.com/PrimeNumber.html)
-
