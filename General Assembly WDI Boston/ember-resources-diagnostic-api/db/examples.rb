# This file should contain all the record creation needed to experiment with
# your app during development.
#
# The data can then be loaded with the rake db:examples (or created alongside
# the db with db:nuke_pave).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# %w(antony jeff matt jason).each do |name|
#   email = "#{name}@#{name}.com"
#   next if User.exists? email: email
#   User.create!(email: email,
#                password: 'abc123',
#                password_confirmation: nil)
# end
blogposts = Blogpost.create([
  {
    title: 'First Post',
    body: 'Welcome to my brand new blog!',
    mood: 'excited'
  },
  {
    title: 'Second Post',
    body: 'post post post',
    mood: 'amused'
  },
  {
    title: 'Third Post',
    body: 'Oh shoot, this is saving?',
    mood: 'confused'
  }
])
blogposts.first.comments.create([
  {
    subject: 'Congratulations, Bob',
    body: 'Good luck with the new blog.'
  },
  {
    subject: 'Hey Bob...',
    body: 'This blog has a funny name'
  }
])
blogposts.second.comments.create([
  {
    subject: 'What are you posting about?',
    body: 'You do realize we can see what you are typing, right?'
  }
])
blogposts.third.comments.create([
  {
    subject: "Don't Worry, Bob",
    body: "You'll get the hang of this eventually."
  }
])
