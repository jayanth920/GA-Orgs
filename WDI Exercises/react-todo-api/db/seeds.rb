# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Todo.destroy_all
Todo.create([
  {body: "Todo1", completed: true},
  {body: "Todo2", completed: false},
  {body: "Todo4", completed: false},
  {body: "Todo5", completed: true},
  {body: "Todo6", completed: true}
  ])
