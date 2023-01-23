## Validations

### Why Validations?

Remember when Tom talked about how precious the data in our databases is?

Validations let you make sure that only valid data is saved to your database.

#### What does invalid data look like?

Let's create some! Right now, this rails app has a user model with many attributes and ZERO validations.

Let's go into our rails console and type:

```ruby
User.create()
```
Now let's look at the user in our console.

```ruby
User.first
```

Ugly right?! Not only does this type of data make your heart hurt, but it could also cripple your api.

#### Invalid data running amok

Example One:

Let's go back to the 90's for a second. 'backstreetboys4lyfe' is the most in demand username. We forget our validations and allowed shenanigans to befall our app. Run these two lines in your rails console:

```ruby
User.create!(username: 'backstreetboys4lyfe', first_name: 'josh')
User.create!(username: 'backstreetboys4lyfe', first_name: 'chad')
```

Then start you server and point your browser at `http://localhost:3000/users/backstreetboys4lyfe`. How would I see Chad's page?

The Fix:

Rails provides us with a smorgasbord of validations through [Active Record](http://guides.rubyonrails.org/active_record_validations.html).

The one that concerns us here is:

```ruby
validates :username, uniqueness: true
```
Drop your database, add this line of code to your user model, the run through the rake tasks until you get to seed. When you seed, what happens?

Example Two:

In our rails api, users have many purchases. Our venture capitalist overlords want a method that sums up all of the purchases that a user has made.

Let's go ahead and seed a new user and some purchases. Notice how one of the purchases does not have a price:

```ruby

User.destroy_all
chad = User.create!(username: 'chadisalyfestyle', first_name: 'chad')
chad.purchases.create!(name: 'eggs', price: 1.99)
chad.purchases.create!(name: 'sausage')
chad.purchases.create!(name: 'bacon', price: 1.99)
chad.purchases.create!(name: 'toast ', price: 1.99)
```

I have included a method for users which sums up the price of all of the user's purchases. Let's go to rails console and try to run it.

```ruby
User.last.total_purchases
```
What happens? One bad egg (a purchase where price is nil) ruined the method.

The Fix:

Let's go back to the [Active Record](http://guides.rubyonrails.org/active_record_validations.html) documentation.

Does anyone see validations that would prevent this issue?

In this instance, we want to validate that price both exists AND is a number. Let's add this:

```ruby
validates :price, numericality: true
```

validation to our purchase model. Now let's try it out!



