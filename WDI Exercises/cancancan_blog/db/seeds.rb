User.destroy_all
Article.destroy_all

admin = User.create!(
  email: 'admin@gmail.com',
  password: 'password',
  password_confirmation: 'password',
  admin: true
)

user1 = User.create!(
  email: 'user1@gmail.com',
  password: 'password',
  password_confirmation: 'password',
  admin: false
)

user2 = User.create!(
  email: 'user2@gmail.com',
  password: 'password',
  password_confirmation: 'password',
  admin: false
)

user3 = User.create!(
  email: 'user3@gmail.com',
  password: 'password',
  password_confirmation: 'password',
  admin: false
)

Article.create!(
  title: 'First post',
  content: 'Hey guys. This is going to be quite awesome, do you not you think?',
  user: user1
)

Article.create!(
  title: 'Second post',
  content: 'OMG there are now two posts on the page!!',
  user: user2
)

Article.create!(
  title: 'Third post',
  content: 'I am writing this post to render the previous post invalid. Boom.',
  user: user3
)
