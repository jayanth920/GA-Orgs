def cube(num)
  return num ** 3
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
yield_output result


def full_name(first_name, middle_name, last_name, age = 10)
  return "My full name is #{first_name} #{middle_name} #{last_name} and I am #{age.to_s}."
end

yield_output print_full_name "David", "Allen", "Fisher", 31


