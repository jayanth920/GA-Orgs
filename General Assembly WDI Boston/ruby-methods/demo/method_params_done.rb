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
