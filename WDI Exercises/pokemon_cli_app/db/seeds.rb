require 'pg'
require 'active_record'
require 'pry'

require_relative 'connection'
require_relative '../models/trainer'
require_relative '../models/pokemon'

Trainer.destroy_all
Pokemon.destroy_all
# Trainers created here
trainer1 = Trainer.create(username: "Ash", level: -1, team: "red")
trainer2 = Trainer.create(username: "Misty", level: 6, team: "pink")
trainer3 = Trainer.create(username: "Rasheeda", level: 30, team: "baller")

trainer1.pokemons.create(name: "Winston", cp: 1, fighting_type: "monstrous")
trainer1.pokemons.create(name: "Pickachu", cp: 5, fighting_type: "electric")
sam = trainer1.pokemons.build(name: "Sammy", cp: 52, fighting_type: "chicken")
sam.save

trainer2.pokemons.create(name: "Togapi", cp: 150, fighting_type: "pam")
trainer2.pokemons.create(name: "staryu", cp: 55, fighting_type: "star")

trainer3.pokemons.create(name: "ohsnap", cp: 50, fighting_type: "fighting")
trainer3.pokemons.create(name: "staryu5", cp: 65, fighting_type: "staryu")
