require_relative 'my_array'

a2 = MyArray.new(["one", "three", 44,  "sixty six", ])
sum = a2.my_inject(0) do |sum, el|
  puts "el is #{el}"
  puts "sum is #{sum}"
  sum += 3
end
puts "my_sum is: #{my_sum}"
