# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create(name: 'Ada Lovelace')
User.create(name: 'Steve Jobs')
User.create(name: 'Bill Gates')
User.create(name: 'Marissa Mayer')
User.create(name: 'Roberta Williams')
User.create(name: 'Jeri Ellsworth')
User.create(name: 'Douglas Hofstadter')

App.create(name: 'Angry Birds', 
	price: '2.99',  
	description: 'Birds v Pigs')
App.create(name: 'Google Maps', 
	price: '0.00',  
	description: 'Stop being lost. Find your way.')
App.create(name: 'Hipmunk', 
	price: '0.00', 
	description: 'Find flights cheap')
App.create(name: 'Minecraft', 
	price: '6.99', 
	description: 'Minecraft is about placing blocks to build things and going on adventures.')
App.create(name: 'Plants vs Zombies', 
	price: '0.99', 
	description: 'The Zombies are coming. Use your plants to save you.')