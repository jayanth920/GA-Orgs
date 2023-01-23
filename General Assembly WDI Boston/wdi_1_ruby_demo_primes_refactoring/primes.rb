require 'pry'

# test if a number is prime or not

# a number is prime if it's not divisible by any number other than itself

# so you can start dividing by 2...

def prime_v1?(number)
  # if a number is divisible by 2, then it's DEFINITELY not prime
  if number % 2 == 0
    false
  else
    true
  end
end

divisors = [2,3]

def prime_v2?(number, divisors)
  # .each, .map, and .map! already have pre-specified returns
  # .each does a calculation but returns the original array
  # .map does a calculation and returns a new array, but leaves the original array unchanged
  # .map! does a calculation, mutates the original array, and returns the new array
  # result = '' # if you want to have result available later, you have to initialize it outside of the do-end block

  divisors.map! do |divisor|
    if number % divisor == 0
      # this means the number is divisible by some number, so it's not prime
      false
    else
      true
    end
  end

  if divisors.include?(false)
    result = false
  else
    result = true
  end

  # binding.pry
  "the result is: " + result.to_s
  # divisors
  # binding.pry
end

# puts prime_v2?(4, divisors)

# now what i really want is to divide each number by all numbers from 2 to n-1

def prime_v3?(number)
  divisor = 2 # starting from 2 and going up to number-1

  while divisor < number do
    if number % divisor == 0
      # this means the number is divisible by some number, so it's not prime
      return result = 'false' # this exits out of the entire method first time
    else
      # increment divisor by one
      divisor = divisor + 1
    end
  end

  # if we've gone through all the numbers and still not found any divisors
  if result == nil
    result = 'true'
  end

  return result
end


def prime_v4?(number)
  divisor = 2 # starting from 2 and going up to number-1

  while divisor < number do
    if divisor == number - 1
      # we've gone through all the numbers, no divisors found, so it's prime
      return true
    elsif number % divisor == 0
      # here the number is divisible by some number, so it's not prime
      return false # this exits out of the entire method first time
    else
      # if neither of previous conditions are met, increment divisor by one
      divisor = divisor + 1
    end
  end

end

puts prime_v3?(19)









# types of bugs i've had while writing this code

# forgot to require pry
# had a array.map method with an if-else-end block inside that creates a result variable, but the result variable is not accessible outside the .map code block
# tried to have the .map function return a custom value, like the result variable, but it can only return an array
# tried to concatenate the boolean value true with another string, but the boolean true needs a to.s conversion
# switched the true and false values from where they should be (meaning if a number was divisible by 2 then my method said it was prime, which isn't accurate)
# i was dividing the number by itself (as well as other numbers), which is always true, and because all numbers are divisible by themselves, my method said there are no prime numbers which isn't accurate
# a while loop does not have a return value by default, so you need to specify one if you want to output anything
# forgot to save file
# forgot to increment the divisor by 1 so got stuck in an infinite loop where it wasn't outputting anything, just assigning result = 'false' over and over
