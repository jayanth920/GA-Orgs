fruit = File.open('fruit.txt')
fruit_array = []

fruit.each do |line|
	fruit_array << line.strip
end

# Closes up the file
fruit.close

puts fruit_array
