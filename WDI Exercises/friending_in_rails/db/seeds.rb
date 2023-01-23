# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create([
  {email: "ross@example.com", password: "password"},
  {email: "rachel@example.com", password: "password"},
  {email: "chandler@example.com", password: "password"},
  {email: "joey@example.com", password: "password"},
  {email: "monica@example.com", password: "password"},
  {email: "phoebe@example.com", password: "password"}
])
