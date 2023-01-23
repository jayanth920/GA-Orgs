require_relative '../lib/song.rb'

let_it_be = Song.new("Let it Be", "Good song", 185, 1.99)
puts "#{let_it_be.title} costs #{let_it_be.price }"
# Ctl-k kill/cut line
# Ctl-y yank line (paste line)
# Ctl-d delete character
# Ctl-e end of line


boh_rap = Song.new("Bohemian Rhapsody", "Head Banging song", 305, 4.99)
puts "#{boh_rap.title} costs #{boh_rap.price }"
