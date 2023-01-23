# Validations

## Framing (5 minutes, 1:45)

In our Rails apps, we've been entering a lot of bogus data -- artists with blank
names, for instance. That's fine while we're in development, but we don't want
the users of our live app to be able to get away with that.

<details>
  <summary><strong>Based on what we know, how could we prevent users from entering blank
  data into a field?</strong></summary>

  Javascript...but that's easily circumvented with Chrome's Inspector.

</details>

<br/>

<details>
  <summary><strong>How about an approach that involves adding/modifying the code in our controller?</strong></summary>

  ```rb
  # app/controllers/artists_controller.rb

  def create
    if params[:artist][:name] == ""
      flash[:alert] = "Name can't be blank!"
      redirect_to artists_path
    else
      @artist = Artist.create!(artist_params)
      redirect_to @artist
    end
  end
  ```

  ...but putting it in the controller is going to lead to some pretty unwieldy
  controller methods. Besides, we may want there to be several routes that create
  or update an artist, and we'd need to copy and paste that bit of code for each
  one. That's hardly DRY!

</details>

<br/>

<details>
  <summary><strong>How about an approach that involves our database schema and migrations?</strong></summary>

  We could put in database constraints, like `NOT NULL` and `UNIQUE`, by
  going and playing around in SQL.

  But what if we want to implement some constraints in place of / to complement those at the database level?

</details>

<br/>

Rails provides [some
helpers](http://edgeguides.rubyonrails.org/active_record_migrations.html#column-modifiers)
for managing database constraints.

Wouldn't it be nice if, before an artist record was saved, we could validate
that the data entered into its fields is correct?

## Validations

### Exercise: Exploring Validations (20 minutes / 2:05)

> 15 minutes exercise. 5 minutes review.

Spend 5-10 minutes skimming the
[Rails Guide on Validations](http://guides.rubyonrails.org/active_record_validations.html).

Add three things that you learned in the issue posted.

Then, try adding a validation for your `Artist` model. A suggestion would be that an artist must have a name.

Use the Rails console to play with your `Artist` model after adding validations.

Some suggested methods to try...

```rb
# Assuming you have a validation for name must be present on artist...

bob = Artist.new(name: "Bob", nationality: "USA")
bob.errors
bob.errors.full_messages
bob.save
bob.save!
bob.valid?

anon = Artist.new(nationality: "USA")
anon.errors
anon.save
anon.save!
anon.errors.full_messages
anon.valid?

result = Artist.create(nationality: "USA")
Artist.last # Was it created?
puts result

Artist.create!(nationality: "USA")
Artist.last # Was it created?
```

<!-- AM: Add review questions. -->

## How Validations Work (10 minutes, 2:15)

### Declare Validations on your Model(s)

Common validations...

- `presence`
- `uniqueness`
- `numericality`
- `length`

An example...

```ruby
class Song < ActiveRecord::Base
  validates :title, presence: true, length: { maximum: 100 }
end
```

These will now ensure your models pass these validations before an instance is created or modified.

### Validations are 'Triggered' during `save`, `create`, `valid?`, `update`

If you only write these...

```rb
my_artist = Artist.new(name: "bob")
my_artist.errors.full_messages
```

...you'll get a blank array. That's because `.new` doesn't actually make the
validations happen. The only methods that do are...

```rb
.valid?
.save
.save!
.create
.create!
.update
.update!
```

<details>
  <summary><strong>What's the difference between <code>.create</code> and <code>.create!</code>?</strong></summary>

  Adding in a bang makes the app throw a fatal error -- that is, "break" --
  if a validation fails. Without the bang, it fails "silently".

  You can add a bang to both `.create` and `.save`.

</details>

<br/>

How is this useful? First, go back to our example earlier where we played with
validations in the console...

<details>
  <summary><strong>What was returned from <code>save</code> if the object was valid? What about when it was invalid?</strong></summary>

  `save` returns the object (truthy) if it passes, and `false` if it fails.

</details>

<br/>

How could we use this in our controllers? We'll come back to this, but we can look at the result of the `save` method to decide what to show the user.

### The Resulting Instance is Either Valid or Invalid (has `errors`)

Once you've run a method that triggers validations, then you can look at the
`errors` method to examine errors on the object.

<details>
  <summary><strong>How might this be useful?</strong></summary>

  We could display these to the user.

</details>

<br/>

## Putting it All Together

The discussion on validations has so far shown you about 18 different ways a
user can "break" your app.

Truth be told, however, we don't usually use `.create` or `.create!` in Rails
apps. Instead, we use `.new` and `.save`.

<details>
  <summary><strong>What's the difference between <code>.create</code> and <code>.new / .save</code>?</strong></summary>

  `.create` is the same thing as `.new` and `.save` run right after each other.

</details>

<br/>

This gives us a way of making sure the user doesn't see a broken app...

```rb
# app/controllers/artists_controller.rb

def create
  @artist = Artist.new(artist_params)
  if @artist.save
    flash[:notice] = "Artist was successfully created."
    redirect_to @artist
  else
    render :new
  end
end
```

...and in the form view...

```html
<!-- app/views/artists/_form.html.erb -->

<% @artist.errors.full_messages.each do |message| %>
  <p><%= message %></p>
<% end %>
```

This way, if the create was successful, then we show the user the artist they just
created, along with a message informing them it worked.

If it failed, then we re-display the form along with any error messages.

## You Do: Add Validations to Tunr (15 minutes, 2:30)

Create validations that ensure the below conditions. Make sure you update the controllers to display errors after creating or updating data.

#### Artists

- Must have a `name`, `photo_url` and `nationality`
- No two artists can share the same name

### Songs

- Must have a `title`, `album` and `preview_url`

#### Bonus

Create validations that ensure the following...
- An artist's name must be no longer than 19 characters
- An artist's `photo_url` or song's `preview_url` must begin with `"http"`

Once you have implemented the above two bonuses, re-write them so they use custom validations. You can start reading the next section of the lesson plan for information on those.

-----------

## Bonus

## Custom Validations

You can also easily create your own custom validations. For instance, the following code will
make Tunr reject any artist named Billy Ray Cyrus...

```rb
# app/models/artist.rb

class Artist < ActiveRecord::Base
  validate :break_billy_rays_achy_breaky_heart

  def break_billy_rays_achy_breaky_heart
    if self.name == "Billy Ray Cyrus"
      errors.add(:name, "cannot be Billy Ray Cyrus, because he doesn't qualify as an artist.")
    end
  end
end
```

Test it out by using the form to create a new artist named "Billy Ray Cyrus"...

<details>
  <summary><strong>What does <code>errors.add</code> do?</strong></summary>

  Defines and generates the error associated with this custom validation.

</details>

<details>
  <summary><strong>This validation won't be triggered if the user writes "billy ray cyrus" in
  all-lowercase. How could you fix that?</strong></summary>

  ```rb
  if self.name.downcase == "billy ray cyrus"
  ```

</details>

## Bang Methods

In the Rails console, try using `.create` instead of `.new`...

```rb
billy = Artist.create(name: "Billy Ray Cyrus")
```

### Rollback

You should see something like:

```
2.2.1 :024 > billy = Artist.create(name: "Billy Ray Cyrus")
   (0.2ms)  BEGIN
   (0.6ms)  ROLLBACK
 => #<Artist id: nil, name: "Billy Ray Cyrus", photo_url: nil, nationality: nil, created_at: nil, updated_at: nil>
```

That `ROLLBACK` indicates that ActiveRecord tried running a SQL command, but it
was unsuccessful, so it's undoing -- or "rolling back" -- any changes that it
made.

### With a Bang

Now try the same command, but put a bang `!` at the end of `.create`...

```rb
billy = Artist.create!(name: "Billy Ray Cyrus")
```

### Debugging Tip

Add `<%= debug(@artist) %>` to "app/views/artists/new.html.erb" to see information
contained in `@artist`. Then try submitting invalid information for a new Artist.


## SimpleForm

Ensure your Gemfile contains...

```rb
gem 'simple_form'
```

Then `bundle install` and restart the server.

Change your `artists/_form.html.erb` form to use `simple_form_for`...

```html
<!-- app/views/artists/_form.html.erb -->

<%= simple_form_for @artist do |f| %>
  <%= f.input :name %>
  <%= f.input :nationality %>
  <%= f.input :photo_url %>
  <%= f.submit %>
<% end %>
```

Finally, make sure your Artist model has a validation in it.

Try creating a new Artist, making sure you fail that validation.

Pretty cool, huh?
