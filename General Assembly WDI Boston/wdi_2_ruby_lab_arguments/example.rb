# Method with single required argument
def square(x)
	x ** 2
end

# Correct, no errors. Returns 4
puts square 2

# wrong number of arguments (0 for 1)
# square

# wrong number of arguments (2 for 1)
# square 2, 2

# Two arguments. Nothing special
def add(a, b)
	a + b
end

add(1, 2) # Returns 3

# Any number of arguments, becomes a local array called 'numbers'
# Using a "splat"
def sum(*numbers)
	# Special way of putting a `+` between numbers
	numbers.inject(:+)
end

puts sum
puts sum 1, 2, 3
puts sum 1
puts sum 1, 2, 3, 4

# Default argument, which can be optionally assigned.
def greet(greeting="Hello")
	greeting
end

puts greet
puts greet "Hi"

# SPLAT
# This method has a splat for people
# You can invoke it with:
# greet_people("Hello", "Alice", "Adam", "Chris")
def greet_people(greeting, *people)
	people.each {|person| puts "#{greeting} #{person}"}
end
greet_people("Howdy", "Chris", "Anne", "Tom")
greet_people("Hi", "Brian", "Kelly", "Kim", "Ryan")

# Must use a hash at the end
def arguments_and_options(*args, options_hash)
	puts "arguments: #{args}, options: #{options_hash}"
end

arguments_and_options 1, 2, 3, name: "David", age: 31

# Passing in a hash as the last option to make a super flexible method
def maths(*numbers, options)
	numbers.inject(options[:operation].to_sym)
end
puts maths(1, 2, 3, operation: "+")
puts maths(1, 2, 3, 4, operation: "*")
puts maths(1, 2, 3, 4, operation: "-")

people = ["Walker", "Sarah", "Rod"]

# This passes through the array properly
greet_people "Hi", *people

# This does not
greet_people "Hi", people

# This splits out the numbers into the arguments for adding
adding_numbers = [1, 2]
puts add *adding_numbers


## PARALLEL ASSIGNMENMT
a, b = 1, 2
a, b, c = 1, 2 # C is nil

first, *list = [1, 2, 3, 4] # first = 1, list = [2, 3, 4]
*list, last = [1, 2, 3, 4] # list = [1, 2, 3], last = 4
first, *center, last = [1, 2, 3, 4] # first = 1, center = [2, 3], last = 4

# Array cohersion
a = *"Hello" # ["Hello"]
# "Hello".to_a # NoMethodError
a = *(1..10) # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
a = *[1, 2, 3] # [1, 2, 3]. Just returns an array, but a new object


























