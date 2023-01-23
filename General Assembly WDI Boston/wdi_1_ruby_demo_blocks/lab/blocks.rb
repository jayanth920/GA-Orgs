# Why?

# Blocks are used frequently in Ruby and in Rails. The most common use
# of blocks are used in iterators, as we'll see
# Blocks are one of the few things in ruby that are not objects!

##########################################
# What does it block look like?
##########################################

# Use curly braces for a one line block
# { |argument| puts argument}

# OR for blocks with > 1 statement

# do |argument|
#   bunch of ruby statements here ...
#   puts argument
# end

# Blocks can be passed multiple arguments
# do |key, value|
#   bunch of ruby statements here ...
#   ....
# end


# Blocks can be passed no arguments
# do
#   bunch of ruby statements here ...
#   ....
# end

# Blocks can be passed 0 or more arguments

##########################################
# Examples of methods that take a block as an argument.
##########################################

##############################
# Block with no arguments
##############################

# Fixnum#times(block)
# Executes the block N times.
7.times { puts "Say Hello"  }

# Define and implement a similiar method
def my_times(number, &block)
  i = 0
  while(i < number)
    block.yield
    i += 1
  end
end
# invoke OR execute the method
my_times(7){ puts "Say Goodby"}

##############################
# Block with one argument
##############################

# Array#each takes a block argument
# and executes that block for each element in the array
# The block is passe one argument
stooges = ['moe', 'larry', 'curly']
stooges.each do |stooge|
  puts "#{stooge} is a stooge"
end

# Define and implement a similiar method
def my_each(array, &block)
  for i in array
    block.yield(i)
  end
end

my_each(stooges) do |stooge|
  puts "#{stooge} is in pain"
end

##############################
# Block with on argument that returns a value
##############################

# Array#map
# executes the block for each entry/item and returns the result of the block
stooges_desc = stooges.map do |stooge|

  case stooge
  when 'moe'
      "#{stooge} is cruel"
  when 'larry'
      "#{stooge} is fine"
  when 'curly'
      "#{stooge} is nuts"
  else
    "#{stooge} is unknown"
  end
end
puts "\nUsing Array#map"
puts stooges_desc.join(', ')

def my_map(array, &block)
  results = []
  for entry in array
   results <<  block.yield(entry)
  end
  results
end

stooges_desc = my_map(stooges) do |stooge|
  case stooge
  when 'moe'
      "#{stooge} is VERY cruel"
  when 'larry'
      "#{stooge} is VERY fine"
  when 'curly'
      "#{stooge} is VERY nuts"
  else
    "#{stooge} is TOTALLY unknown"
  end
end
puts "\nUsing my_map(array, block)"
puts stooges_desc.join(', ')

##############################
# Use block to modify payment
##############################

payments = [34.56, 100.00]
puts "\nNet payments = #{payments.join(', ')}"

def show_money(payments, &block)
  all_gross_payments = []
  for one_payment in payments
    all_gross_payments << yield(one_payment)
  end
  all_gross_payments
end

# Calculate payment after MA state taxes are withdrawn
gross_payments = show_money(payments) do |net_payment|
  tax_paid = net_payment * 0.052
  net_payment - tax_paid
end

puts "Gross payments = #{gross_payments.join(', ')}"

##############################
# Symbol to Proc magic
##############################

students = ['frodo baggins', 'samwise gamgee', 'peregrin took', 'meriadoc brandybuck']

# symbol to proc magic!, does same as above
cap_hobbits = students.map(&:capitalize)
# same as above
cap_hobbits = students.map { |student| student.capitalize}
puts "Capitalized hobbits are #{cap_hobbits}"

# Define a lambda, blocks can not live on their own
# BUT lambdas and Procs may lived on their own.
upcase_lambda = lambda{ |i| i.upcase}

# Pass the lamba into a method that expects a block
cap_hobbits = students.map(&upcase_lambda)
puts "Upcased hobbits, using lambdas, are #{cap_hobbits}"

puts "\nMake classes from each string"
puts %w{ string fixnum array, hash}.map(&:capitalize).join(', ')
puts %w{ string fixnum array, hash}.map(&:capitalize).map(&:size).join(', ')

exit
##############################

puts "\nExamples"
5.upto(10) do
  puts "hello"
end

10.downto(1) { puts "Almost new years" }

#Look up these array methods

#split, select, reject
