# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Post.create([
  {body: "test body1", title: "test title 1"},
  {body: "test body2", title: "test title 2"},
  {body: "test body3", title: "test title 3"},
  {body: "test body4", title: "test title 4"},
  ])
