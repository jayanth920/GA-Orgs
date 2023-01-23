# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Post.create([
  {body: "eat food", author: "bob"},
  {body: "take a nap", author: "tom"},
  {body: "do homework", author: "tom"},
  {body: "learn backbone", author: "bob"},
  {body: "learn angular", author: "sam"}
  ])
