filename = "fruit.txt"
# Opens the file as writable
file = File.open(filename, 'a')

puts "What did you eat?"
ate = gets.chomp
file.puts ate
file.close
