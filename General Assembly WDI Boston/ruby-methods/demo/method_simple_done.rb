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
