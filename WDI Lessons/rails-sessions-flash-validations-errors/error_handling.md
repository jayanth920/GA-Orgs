# Error Handling

We recommend you start a new branch for this portion.  We're sharing concepts, not, necessarily, best practices.

## Framing (5 minutes)

Let's force the app to break by looking up an artist that doesn't exist. Try going to `localhost:3000/artists/8675309`.

Notice that across the top it says `ActiveRecord::RecordNotFound`.

It is possible that your users will look up an artist that has been deleted, whether that's through user error or clicking on a broken link.

<details>
  <summary><strong>How could you control for users looking up records that don't exist?</strong></summary>

  You could just check to see if an artist with that ID exists, and if it doesn't, then redirect somewhere else.

  ```rb
  # app/controllers/artists_controller.rb

  def show
    @artist = Artist.find(params[:id])
    if @artist
      render :show
    else
      redirect_to artists_path
    end
  end
  ```

  This is fine, but it's not very DRY: if we wanted to protect songs from this error we'd need to copy and paste almost the exact same code.

</details>

<br/>

## `rescue_from` (5 minutes)

Replace the contents of your application controller with this...

```rb
# app/controllers/application_controller.rb
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  rescue_from ActiveRecord::RecordNotFound, with: :couldnt_find_record

  private
  def couldnt_find_record
    redirect_to root_url, notice: "That record doesn't exist!"
  end
end
```

Now try going to `localhost:3000/artists/8675309`.

### What Happened?

We told Rails to "rescue" us from a specific kind of error -- in this case, Active Record's "Not Found" error. We told it to rescue us by running a method called `couldnt_find_record` that we've defined. What that method does is nothing new: it redirects us to some URL and flashes a notice.

## Exception Types (10 minutes)

Every error -- or "exception" -- in Ruby belongs to a class. In this case, `RecordNotFound` is the class coming from the Active Record module (just like `Base`). When a validation fails, you get...

```rb
ActiveRecord::RecordNotFound
```

The exception's class is `RecordNotFound`.

This and most other classes of exceptions inherit from the Ruby class `StandardError`.

### We Do

In your Rails console, type...

```rb
$ ActiveRecord::RecordNotFound.new.class
```

Then, try...

```rb
$ ActiveRecord::RecordNotFound.new.class.superclass
```

Next, add another `.superclass` onto the end of that. Then another `.superclass`. Keep on going until you get `nil`.

Now, try it with...
- `ZeroDivisionError` (What happens when you divide by zero)
- `NoMethodError` (What happens when you try `"batman" - 42`, or `@artist.favorite_food`)

### Rescuing From Types

You'd probably want to handle an error where someone divided by zero differently from an error where they looked up a record that doesn't exist.

Using `rescue_from`, you can make different things happen based on the type of error.

```rb
# app/controllers/application_controller.rb

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  rescue_from ActiveRecord::RecordNotFound, with: :couldnt_find_record
  rescue_from NoMethodError, with: :no_method_error

  private
  def couldnt_find_record
    redirect_to root_url, notice: "That record doesn't exist!"
  end

  def no_method_error
    redirect_to root_url, notice: "The developer working on this didn't cover their butt appropriately. Our bad."
  end
end
```

## `begin`/`rescue` (10 minutes)

What's going on underneath the hood is Rails using Ruby's built-in `begin/rescue` syntax.

Let's step away from Rails for a second. In your `wdi/sandbox` folder, create a new file called `exceptions.rb`.

In it, paste the following...

```rb
3 / 0

puts "done"
```

Run that with `ruby exceptions.rb`. It should throw a "ZeroDivisionError" at you.

Now, replace the file with this...

```rb
begin
  3 / 0
rescue => my_error
  puts my_error
end

puts "done"
```

`begin` tells Ruby to start listening for an exception. Whenever Ruby runs into an error, it stops whatever it's doing and looks for a `rescue` statement. If it finds one, it does whatever the `rescue` says to do and then continues.

Inside `rescue`, using the hashrocket `=>` syntax we can do something with the exception that was generated. When used with `rescue`, the `=>` associates a value with an exception. This is different than hash-mapping, in which `=>` is used to create key-value pairs.

This gives us a way of handling errors. It's where `rescue_from` gets its name.
