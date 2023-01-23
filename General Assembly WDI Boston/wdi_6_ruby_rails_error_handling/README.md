![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

## Objectives
- Explain why error-handling code is used.
- Write a simple Ruby program that implements a `begin...rescue` pattern to handle an exception.
- Write a Ruby program that can both throw and catch an error.
- Explain how errors tie in to validations in Rails.

## Prerequisites
- Ruby and Rails fundamentals
- Rails validations

##Instructions
Please _don't_ fork and clone this repo! I'm having issues with my Ruby install right now, and couldn't set up my Rails app in time. Instead, build new Rails apps on your own machines when we get to that part of the lesson.

## Errors

At this point in your programming careers, you've encountered your fair share of errors. Here are some of the common Ruby errors:

- **ZeroDivisionError** : Raised when you try to divide by zero.

  ```ruby
    3/0
      # => ZeroDivisionError: divided by 0
  ```

- **TypeError** : Raised when you're expecting one type of data, but get another, and Ruby isn't able to compensate.

  ```ruby
    "two" + 3
      # => TypeError: no implicit conversion of Fixnum into String
  ```

- **RegexpError** : Raised when an invalid regular expression appears.

  ```ruby
    "test".match('?')
      # => RegexpError: target of repeat operator is not specified: /?/
  ```

- **NameError** : Raised when trying to access a variable that hasn't been defined.

  ```ruby
    puts y
      # => NameError: undefined local variable or method 'y' for main:Object
  ```

- **NoMethodError** : Sub-type of 'NameError', raised when trying to call a method that hasn't been defined.

  ```ruby
    undefined_method()
      # => NoMethodError: undefined method 'undefined_method' for main:Object
  ```

- **ArgumentError** : Raised when you try to call a method with the wrong number of arguments.

  ```ruby
    def print_sum(a,b)
      puts "RUNNING THE METHOD: #{a} + #{b} = #{a+b}"
    end
    print_sum
      # => ArgumentError: wrong number of arguments (0 for 2)
  ```

- **SystemCallError** : The error for handling low-level, platform-related errors.

  ```ruby
    File.open('path/to/non-existent/file')
      # => Errno::ENOENT: No such file or directory - path/to/non-existent/file
  ```

- **SystemStackError** : Raised in the case of a 'stack overflow', which is what happens when you try to nest your method calls too deep.

  ```ruby
    def infinitely_recursive_method
      infinitely_recursive_method
    end

    infinitely_recursive_method
      # => SystemStackError: stack level too deep
  ```

- **RuntimeError** : A generic error type. Raised in response to a wide variety of different errors.

  ```ruby
    a = [1,2,3]
    a.freeze
    a << 4
      # => RuntimeError: can't modify frozen array
  ```

In Ruby, errors are represented by a special type of object called an `Exception`; each of the errors above is a descendent of the `Exception` class.

In general, hitting an error causes your entire program to grind to a halt. In a development context, this isn't a huge deal - you can just go in, fix the problem (using the content of the error message as a guide), and restart the program. But in a production context, you usually don't want the entire program to shut down just because it hits an error; instead, you want it to take the error in stride - acknowledge it, figure out what to do, and _move along_.

### Code Along :: Handling Errors in Ruby

Let's open up the file `errors_in_ruby/program.rb` in Sublime - we're going to look at an example of an operation that might give us an error.

Enter the following into `program.rb`.

```ruby
  def divide(a,b)
    a/b
  end

  puts divide(10,2)
  puts divide(2,0)
  puts divide(3,5)

  puts "Run some more code"
```

Try running this code from the command line. What happens?

Oh no! It looks like we were only able to get through the first `puts` line before the program broke.

Fortunately, Ruby gives us a system for 'sandboxing' processes that might cause errors; by keeping them at arm's length, we can give our programs an appropriate response - one which doesn't bring our entire program to a screeching halt.

```ruby
  def divide(a,b)
    a/b
  end

  begin
    puts divide(10,2)
    puts divide(2,0)
    puts divide(3,5)
  rescue
    puts "Hit an error"
  end

  puts "Run some more code"
```

Although our `begin` block stopped when we hit the divide-by-zero error, it didn't kill the rest of the program. Instead, as soon as we hit an error in the `begin` block, we immediately jumped to the `rescue` block (our 'error-handler', much like how we specified event handlers in JavaScript), and then continued running through the rest of the program.

If we think that some code has the potential produce multiple different errors, we can specify different handlers to respond to different types of errors.

```ruby
  def divide(a,b)
    a/b
  end

  begin
    puts divide(10,2)
    puts divide(2,0)
    puts divide(3)
  rescue ZeroDivisionError
    puts "Dividing by zero is not permitted."
  rescue ArgumentError
    puts "Wrong number of arguments."
  end

  puts "Run some more code"
```

If we change that second `divide` method call so that it no longer divides by zero, what happens now?

Of course, listing out every possible type of error would be tedious, so just putting `rescue` acts as a catch-all for the [standard errors](http://ruby-doc.org/core-2.1.5/StandardError.html). We can also use `else` and `ensure` to get further control over how errors get handled, as follows:

```ruby
  def divide(a,b)
    a/b
  end

  begin
    puts divide(10,2)
    puts divide(2,0)
    puts divide(3)
  rescue ZeroDivisionError
    puts "Dividing by zero is not permitted."
  rescue ArgumentError
    puts "Wrong number of arguments."
  rescue
    puts "Some other error"
  else
    puts "No errors hit."
  ensure
    puts "Whether we hit errors or we didn't this code will always run."
  end

  puts "Run some more code"
```

### Lab :: Handling Errors in Ruby

Write a program that calls a mystery method named (fittingly but not helpfully) `mystery_method`, and stores its result in a variable. According to its documentation, `mystery_method` might hit an Argument Error, a Name Error, or a NoMethodError. It's possible, however, that it might hit others. If no errors are hit, take the result of `mystery_method` and double it.

## Raising Exceptions
In addition to stopping our code our code hits one of the standard errors, we can trigger errors deliberately using the `raise` keyword. One possibility that this opens up is using errors and error handling for rudimentary data validation.

Let's look at another program as an example.

```ruby
  class AlliterativePerson
    attr_reader :name

    def initialize(first, last)

      @name = first + " " + last

      # We could also use string interpolation to do this:
      # @name = @name = "#{first} #{last}"
    end

  end

  ll = AlliterativePerson.new("Lois","Lane")
```

What if we wanted to ensure that we only created new AlliterativePerson objects with alliterative names? We could write a test to validate whether or not `first` and `last` start with the same letter; if the test fails, raise an error.

Here's how that might look.

```ruby
  class AlliterativePerson
    attr_reader :name

    def initialize(first, last)
      if first[0] != last[0]
        raise ArgumentError.new("First and last names must start with the same letter.")
      end

      # Could also have been written like this:
      # raise ArgumentError.new("First and last namea must start with the same letter.") unless first[0] == last[0]
      # `unless` is kind of an 'anti-`if`'

      @name = first + " " + last
    end

  end

  ll = AlliterativePerson.new("Lois","Lane")
  jj = AlliterativePerson.new("James","Joyce")
  ck = AlliterativePerson.new("Charlie","Kaufman")
    # => ArgumentError: First name and last name must start with the same letter.
```

### Lab :: Raising Exceptions

Create a class called `User` which has the following properties:
- **username** : at least eight characters long, only letters and numbers
- **date_of_birth** : date of birth is on or before June 2, 1997.
- **created_by** : date is after January 1, 2014.

If you like feel, free to create your own class(es) of error (class MyCustomError < StandardError) and raise those instead of the standard ones.

## Errors in the Context of Rails
In an ordinary Ruby program, it makes a lot of sense to use validation to determine whether or not to create an object. However, in Rails, we have a more permanent place to store our data: the database. As a result, it's less important that we not create invalid Ruby objects; instead, we only have to worry about not saving invalid data to the database.

By default, ActiveRecord objects have a property called `errors.messages` - a hash of any errors that might have been raised during the creation of that instance. `valid?` and `invalid?` work by iterating through `errors.messages` and returning `true` or `false` depending on whether or not the array is empty.

```ruby
  class Pet < ActiveRecord::Base
    validates :name, presence: true
    validates :species, presence: true, length: { minimum: 3 }
  end

  spot = Pet.new(name: "Spot")
  spot.valid?
    # => false
  spot.errors.messages
    # => {species: ["can't be blank"]}`
  spot.save
    # => false

```

Since this `errors.messages` returns a hash, we can access the array of errors for each property simply by passing the property name in as a key.

```ruby
  spot.errors.messages[:name]
    # => []
  spot.errors.messages[:species]
    # => ["can't be blank"]
```

The validation helpers you use (e.g. `presence`/`absence`, `inclusion`/`exclusion`, `length`, `uniqueness`) determine the content of the error messages that show up. However, these messages can be customized.

```ruby
  class BlogPost < ActiveRecord::Base
    validates :content, presence: true, length: {
        minimum: 5,
        maximum: 1000,
      }
  end
```

Much like you could `raise` errors in the context of a normal Ruby program, errors can be added to (or removed from) our ActiveRecord object.

```ruby
  p1 = BlogPost.new()
  p1.errors.messages
    # => {content: ["is too short (minimum is 5 characters)"]}

  # Adding an error to an attribute
  p1.errors.add(:name, "can't be blank")

  # Adding an attribute to the object itself, independent of any of its attributes
  p1.errors.add(:base, "Post is invalid because...")

  # Wiping out all errors
  p1.errors.clear
  p1.error.messages.empty?
    # => true

  # Note: Although `errors.clear` wiped out all the errors, running `.valid?` re-runs all validations, filling up `errors.messages` once again.
  p1.valid?
    # => false
  p1.save
    # => false

```

### Lab :: Errors in the Context of Rails

Build a Rails app with two models: `User` and `Card`. These models have the following attributes

  - **Person**
    - _name_ : Can't be empty
    - _date_of_birth_ : Must be before June 1, 1997.
    - _cards_
  - **Card**
    - _type_ : Must be either 'Visa', 'Mastercard', 'Discover', or 'American Express'
    - _number_ : Must be all numeric, and must be either 15 or 16 digits long, based on the type of card
    - _security_code_ : Must be either 3 or 4 digits long, based on the type of card
    - _expiry_ : Must be before today


## Further Reading

Ruby Errors and Error Handling
* [Ruby Docs : `Exception` Class)](http://ruby-doc.org/core-2.2.0/Exception.html)
* [Ruby Docs : `Standard Error` Class](http://ruby-doc.org/core-2.2.0/StandardError.html)

Working with Validations and Errors in Rails
* [Rails Guides : Validation Errors](http://guides.rubyonrails.org/active_record_validations.html#working-with-validation-errors)

