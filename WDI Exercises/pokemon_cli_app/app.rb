require 'pg'
require 'active_record'
require 'pry'

require_relative 'db/connection'
require_relative 'models/trainer'
require_relative 'models/pokemon'

def menu
  puts "What would you like to do?"
  puts "1) View All Trainers"
  puts "2) View All Pokemon"
  puts "3) Add a trainer"
  puts "4) To exit"
  print "Please enter a numbered choice: "
end

def display_trainers
  Trainer.all.each do |trainer|
    puts "#{trainer.username} is on the #{trainer.team} team and is level #{trainer.level}"
    puts "They own the following Pokemon: "
    trainer.pokemons.each do |pokemon|
      puts "#{pokemon.name}: CP: #{pokemon.cp}"
    end
    puts "*" * 100
  end
end

def display_pokemons
  Pokemon.all.each do |pokemon|
    puts "#{pokemon.name}: CP: #{pokemon.cp} is owned by #{pokemon.trainer.username}"
  end
end

input = nil
while input != "4"
  menu
  input = gets.chomp
  if input == "1"
    display_trainers
    puts "user entered 1"
  elsif input == "2"
    display_pokemons
    puts "user entered 2"
  elsif input == "3"
    puts "What is the username?"
    username = gets.chomp
    puts "What is the level?"
    level = gets.chomp
    puts "What is the teamname?"
    team = gets.chomp
    created_trainer = Trainer.create(username: username, level: level.to_i, team: team)
    puts "#{created_trainer.username} has been created!"
  elsif input == "4"
    puts "Goodbye!"
  end
end
