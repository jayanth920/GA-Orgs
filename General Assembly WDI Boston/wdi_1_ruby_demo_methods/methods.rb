def cube(num)
	# One way of doing it
	num * num * num

	# Another way, calling return is optional
	return num ** 3

	# This is never called, as the method has already called return
	puts "hi"
end

def prompt_input
	puts "Enter a number to cube"
	return gets.chomp.to_i
end

def yield_output(output)
	puts "The result is: " + output.to_s
end

number = prompt_input
result = cube(number)

# # parens are optional
yield_output result


def print_full_name(first_name, middle_name, last_name, age = 10)
  # String interpolate the result
  # Its better to return a result than print, but that's what we're doing here
	puts "My full name is #{first_name} #{middle_name} #{last_name} and I am #{age.to_s}."
end

print_full_name "David", "Allen", "Fisher", 31


