answer = []
f = File.open('people.csv')
f.each do |line|
	person = {}
	line_data = line.split(', ')
	person[:name] = line_data[0]
	person[:age] = line_data[1].chomp.to_i
	answer << person
end

puts answer
