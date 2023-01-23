csv_text = File.read('./film.csv')

csv_text = csv_text.gsub(/\r\n?/, "\n")

p csv_text.split("\n").length

filtered = csv_text.split("\n").reject do |line|
  /[^\p{ASCII}]/ =~ line
end


p filtered.length

File.open('./film_cleaned.csv', 'w') { |file| file.write(filtered.join("\n")) }
