require 'pry'
require_relative '../lib/knight'
require_relative '../lib/wizard'

puts "Starting the game!!!!"

jack = GAGame::Person.new('Jack', 'Sparrow')

# puts "Created #{jack.full_name}"

game_man = GAGame::Player.new("Matt", "Brendzel")
# puts "game man's health is #{game_man.health}"

#puts "Game man is " + (game_man.alive? ? "Alive" : "Dead")

#game_man.take_damage(30)
# puts "Game man health is #{game_man.health} "
#puts "Game man is " + (game_man.alive? ? "Alive" : "Dead")


code_man = GAGame::Player.new("Tom", "Dyer")
while( game_man.alive?)
 # puts "code man attacks game man"
  # ATTACK GAME MAN, HE BAD, ME GOOD
  code_man.attack(game_man)
#   puts "Game man health is #{game_man.health} "
#  puts "Game man is " + (game_man.alive? ? "Alive" : "Dead")
end

# puts "Game Man has been vanquished"

knight_woman = GAGame::Knight.new("K", "Night")
# puts "Knight's #{knight_woman.full_name}'s health is #{knight_woman.health}"

# puts "Code man health is #{code_man.health} "
knight_woman.attack(code_man)
#puts "Code man health is #{code_man.health} "

jane_knight = GAGame::Knight.new("Jane", "Night")
# puts "Knight's #{jane_knight.full_name}'s health is #{jane_knight.health}"

# puts "Jane Knight health is #{jane_knight.health} "
knight_woman.attack(jane_knight)
# puts "Jane Knight health is #{jane_knight.health} "

# puts "Knight Woman health is #{knight_woman.health} "

# puts "Code man health is #{code_man.health} "
game_man.attack(code_man)
# puts "Code man health is #{code_man.health} "

alex = GAGame::Wizard.new("Alex", "Grant")
# puts "Code man health is #{code_man.health} "
alex.attack(code_man)
# puts "Code man health is #{code_man.health} "

alex.talk("Demands a commit now")







