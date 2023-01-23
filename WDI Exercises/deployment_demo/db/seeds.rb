# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Animal.create([
	{name: "Bao Bao", 	species: "Panda", 		favorite_food: "Bamboo"},
	{name: "Clinger", 	species: "Red Panda", 	favorite_food: "Bugs"},
	{name: "Slash", 	species: "Red Panda", 	favorite_food: "Fruit"},
	{name: "Shredder", 	species: "Red Panda", 	favorite_food: "Apple Biscuits"},
	{name: "Remi", 		species: "Sloth Bear", favorite_food: "Gerber baby food"}
])