# Secure Users 'r' Us

SUrUs is the internet's most frequented username/password security/listing site. Many users have come to depend on our services and as we develop new features and attract new users, we need a way to ensure that nothing that we add breaks the existing functionality which our current users trust.

Your job is to define the RSpec examples which describe the behavior of names of User.

To get started clone, this repo. Before you can write tests, you'll need to set up a database called rspec_user_db and run the schema.rb and seeds.rb files.

In terminal, in the root directory of this project, run `rspec` (or `rspec -f d` to see with a more detailed presentation) and you'll see ten examples of the behavior of names. If you look in the user_spec.rb file, you will see the same descriptions with additional key words.

Back in the terminal, at the bottom of the rspec output the bottom line says 10 examples, 0 failures, 10 pending. This is because when you can declare an example before defining it. When you run the test with the undefined example it won't count as a failure or a pass but rspec will note the number of pending example you have yet to implement.

In user_spec.rb, insert `do...end` block at the end of line seven.
```ruby
it "#name returns name when set" do
  # setup
  # spec
end
it "#name returns username when no name is set"
```
Here you define your example. In the block you write the ruby necessary to produce the behavior you want to define followed by your specs. The '#' in '#name' denotes a method of the class you are describing (User). To define this behavior, you need an instance of User to call name on. So you say `bob = User.new(name: "Bob", username: "bdylan" )`. Now you use the expect method and give it the result of calling name on bob. You then say you expect the result of that to be "Bob" by using the matcher eq("Bob"). All together, our first test looks like:
```ruby
it "#name returns name when set" do
  bob = User.new(name: "Bob", username: "bdylan" ) # setup
  expect(bob.name).to eq("Bob") # spec
end
it "#name returns username when no name is set"
```
Rerun `rspec` again in the terminal. With `-f d`, the difference is more apparent but we wrote our first spec and it was met. Now we only have 9 pending examples. Use this example, the lesson plan, the links below, google, your classmates and as an ultimate measure the solution branch to complete the definitions for the last 9 examples.

- [Good rspec guide](http://betterspecs.org/)

- [More on matchers](https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers)

- [Let](https://www.relishapp.com/rspec/rspec-core/v/2-5/docs/helper-methods/let-and-let)

- [Hooks (before and after)](https://www.relishapp.com/rspec/rspec-core/v/2-2/docs/hooks/before-and-after-hooks)
