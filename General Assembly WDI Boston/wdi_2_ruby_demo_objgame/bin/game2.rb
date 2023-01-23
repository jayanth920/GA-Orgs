require 'pry'
require_relative '../lib/knight'
require_relative '../lib/wizard'

puts "Starting the game!!!!"

puts  "Total # of wizards = #{GAGame::Wizard.total_wizards}"

jane_knight = GAGame::Knight.new("Jane", "Night")
alex = GAGame::Wizard.new("Alex", "Grant")
alex.say_spell(jane_knight)

3.times do |i| 
  GAGame::Knight.new("Knight_#{i}", "Night")
end

2.times do |i| 
  GAGame::Wizard.new("Merlin_#{i}", "Wizard")
end
# 3 wizard
puts  "Total # of wizards = #{GAGame::Wizard.total_wizards}"

#  4 Knights
# 7 Players
puts  "Total # of player = #{GAGame::Player.total_players}"

GAGame::Wizard.new("Jack", "Sprat")
GAGame::Knight.new("Jack", "Sparrow")

all_jacks = GAGame::Player.find_by_first_name('Jack')
puts "All jacks are #{all_jacks}"









