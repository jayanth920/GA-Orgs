# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Todo.destroy_all
Todo.create([
  {body: "finish WDI", author: "author1", completed: false},
  {body: "Get a job", author: "author2", completed: false},
  {body: "learn rails", author: "author3", completed: true},
  {body: "learn jQuery", author: "author4", completed: true}
  ])
