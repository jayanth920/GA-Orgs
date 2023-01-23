# Intermediate Object-Oriented Programming in Ruby

## Learning Objectives

- Review material from yesterday's material by building a class together.
- Create a Ruby class that inherits from another
- Use helper classes in Ruby


## Framing

[In your last lesson](https://git.generalassemb.ly/ga-wdi-lessons/ruby-oop), you started to learn about object-oriented programming in Ruby and how we can use classes to organize our code into objects.

Today we will focus on two things...
  1. Reviewing what you learned yesterday by building a class together.
  2. Introducing the concept of **inheritance** and how classes can pass attributes and methods to each other.

## We Do: Let's Build A Class (40 minutes, 10:00 - 10:30 / 2:30 - 3:00)

Let's collaboratively create a `Person` class!

--------

<details>
  <summary><strong>What's the difference between a class and an instance?</strong></summary>
  <br/>

  A class is a blueprint. An instance is an object generated from that blueprint.
  * A class' name is capitalized (e.g., `Person`) and is a template for objects of that class.
  * An instance is one specific object created using a class (e.g. `bob = Person.new("Bob", 10)`).

</details>
<br/>
<details>
  <summary><strong>How do we begin defining a <code>Person</code> class?</strong></summary>

  ```rb
  class Person

  end
  ```

</details>

--------

<details>
  <summary><strong>How can we set up our Person class so that it has <code>name</code> and <code>age</code> attributes.</strong></summary>

  ```rb
  class Person
    # This is run every time we call Person.new
    # Think of it as a "constructor method"
    def initialize(initial_name, initial_age)
      @name = initial_name
      @age = initial_age
    end
  end
  ```

</details>
<br/>
<details>
  <summary><strong>Why did we place an <code>@</code> in front of our variables? How else could we have written our variables?</strong></summary>
  <br/>

  **Local:** normal variable name, limited in scope and used for temporary values.

  **Instance:** starts with `@`, used to store attributes for a given instance and can be used in any instance method.

  **Class:** starts with `@@`, shared between all instances.

  > Class variable are not used very often. We'll explain why later...

</details>
<br/>
<details>
  <summary><strong>How can we generate an instance of this <code>Person</code> class?</strong></summary>

  ```rb
  andy = Person.new("Andy", 25)
  ```
</details>

--------

<details>
  <summary><strong>We currently can't access a person's name in the REPL due to the fact that Ruby, by default, does not make instance variables available outside of the scope of the object. How would we go about defining a method that allows us to do that?</strong></summary>

  ```rb
  class Person
    def initialize(initial_name, initial_age)
      @name = initial_name
      @age = initial_age
    end

    def get_name
      @name
    end

  end
  ```

  ```rb
  andy = Person.new("Andy", 25)
  andy.get_name
  # => "Andy"
  ```

</details>
<br/>
<details>
  <summary><strong>What about a method that allows us to redefine a person's name via the REPL?</strong></summary>

  ```rb
  class Person
    def initialize(initial_name, initial_age)
      @name = initial_name
      @age = initial_age
    end

    def get_name
      @name
    end

    def set_name(name)
      @name = name
    end

  end
  ```

  ```rb
  andy = Person.new("Andy", 25)
  andy.set_name("Chad")
  andy.get_name
  # => "Chad"
  ```

</details>
<br/>
<details>
  <summary><strong>What are shortcuts we can use in place of these getter/setter methods? We should be able to read and modify <code>name</code>, but only read <code>age</code>.</strong></summary>

  ```rb
  class Person
    attr_accessor :name
    attr_reader :age

    def initialize(initial_name, initial_age)
      @name = initial_name
      @age = initial_age
    end
  end
  ```
  Note: there is also `attr_writer` that would allow instance variables to be modified, but not accessed. You will rarely need to use it.
</details>

--------

<details>
  <summary><strong>Let's give our <code>Person</code> class a <code>say_name</code> method that `puts` his/her name to the command line.</strong></summary>

  ```rb
  class Person
    attr_accessor :name
    attr_reader :age

    def initialize(initial_name, initial_age)
      @name = initial_name
      @age = initial_age
    end

    def say_name
      puts "Hi, my name is #{@name}."
    end
  end

  andy = Person.new("Andy", 25)
  andy.say_name
  # => "Hi, my name is Andy."
  ```

</details>

<details>
  <summary><strong>What type of method is <code>say_name</code>? What other types of methods are there?</strong></summary>

  `say_name` is an instance method. It is a method that we would call on an instance of `Person`.

  Ruby classes can define two types of methods...
  * **Instance:** called on a single instance of a class.
  * **Class:** called on the class itself and deal with the set of objects instantiated by the class.

  > Instance and Class methods are both common and okay to use. This is unlike class variables, which should be used sparingly.

</details>

--------

<details>
  <summary><strong>Now we want to keep track of how many people have been created using the <code>Person</code> class. What tools can we use to do this? How would we use them?</strong></summary>

  ```rb
  class Person
    attr_accessor :name
    attr_reader :age
    # We create a class variable that is an array containing all existing instances of `Person`
    @@people = []

    def initialize(initial_name, initial_age)
      @name = initial_name
      @age = initial_age
      # Whenever we create a new instance, we push it into the `@@people` array (here `self` refers to an instance of the Person class)
      @@people.push(self)
    end

    def say_name
      puts "Hi, my name is  #{@name}."
    end

    # Here we're creating a method that retrieves the value of `@@people` (here `self` refers to the Person class itself)
    def self.get_people
      @@people
    end
  end

  andy = Person.new("Andy", 25)
  puts andy.get_people
  # => error
  puts Person.get_people
  # => [andy]

  james = Person.new("James", 31)
  puts Person.get_people
  # => [andy, james]
  ```


</details>


### Self

<details>
  <summary><strong>What does `self` mean in Ruby?</strong></summary>

  > If it occurs as part of a class method (like above), it refers to the class. If it occurs **inside** of an instance method, it refers to an instance of that class.

</details>

<details>
  <summary><strong>What is the equivalent of `self` in Javascript?</strong></summary>

  > `this`

</details>

<details>
  <summary><strong>What are two ways we can use `self` in our `Person` class?</strong></summary>

  ```rb
  # In a class method definition. We've already done this...
  def self.get_people
    @@people
  end
  ```

  > When used in a method name, `self` = the class.

  ```rb
  # In an instance method to refer to the instance...
  def say_name
    puts "Hi, my name is " + self.name + "."
  end
  ```

  > When used inside of an instance method, `self` = the instance.

</details>

One benefit of Ruby is that it is much easier to determine what context we are working in. Unlike Javascript, we cannot redefine what context we are working with using methods like `.bind` `.call` or `.apply`.

## You Do: Keep Building `Person` (15 minutes, 10:30 - 10:45 / 3:00 - 3:15)

> 10 minutes exercise. 5 minutes review.

Make the following additions to our `Person` class. It is up to you to determine whether you should use an instance or class method.

* A method that checks to see if a `Person` is old enough to vote.
* A method that returns the number of `Person` instances that have been created.
* A method that counts the number of `Person` instances that have been created.
* A method that compares two people and determines which one is older.

## Break (10 minutes, 10:45 - 10:55 / 3:15 - 3:25)

## Inheritance (25 minutes, 10:55 - 11:20 / 3:25 - 3:50)

Just like we get traits from our parents, we can use a feature called **inheritance** to create classes (children) that *inherit* properties and methods from a parent class.

We've added a `say_age` method to `Person` below to better illustrate how inheritance works in Ruby.

```rb
class Person
  attr_accessor :name
  attr_reader :age
  @@people = []

  def initialize(initial_name, initial_age)
    @name = initial_name
    @age = initial_age
    @@people.push(self)
  end

  def say_name
    puts "Hi, my name is " + @name + "."
  end

  def say_age
    puts "I am #{@age} years old."
  end

  def self.get_people
    @@people
  end
end

# Inheritance is indicated using the `<` symbol after the child class' name.
class LoudPerson < Person
  # LoudPerson's `say_name` overrides that of the `Person` class.
  def say_name
    puts "HEY YOU, MY NAME IS #{@name.upcase}!"
  end
end

jill = Person.new("Jill", 10)
bob = LoudPerson.new("Bob", 20)

# Both `say_age` methods produce the same result because it was not overwritten in the `LoudPerson` class.
jill.say_age
# => "I am 10 years old."
bob.say_age
# => "I am 20 years old."

# The `say_name` methods produce different results because the original was overwritten in the `LoudPerson` class.
jill.say_name
# => "My name is Jill."
bob.say_name
# => "HEY YOU, MY NAME IS BOB!"
```

### Inheritance & Class Variables

Using inheritance in combination with class variables can cause complications if class variables are overused. Let's illustrate a potential issue using `Person` and `LoudPerson`...

```rb
class Person
  attr_accessor :name
  attr_reader :age
  @@people = []
  @@class_name = "Person"

  def initialize(initial_name, initial_age)
    @name = initial_name
    @age = initial_age
    @@people.push(self)
  end

  def get_class_name
    puts @@class_name
  end

  # For clarity, we're hiding the methods we created earlier...
end

class LoudPerson < Person
  @@class_name = "LoudPerson"

  # For clarity, we're hiding the methods we created earlier...
end

jill = Person.new("Jill", 10)
bob = LoudPerson.new("Bob", 20)
```

Note that we have given both `Person` and `LoudPerson` a class variable called `@@class_name`.

Let's see what happens when we try to access those values.

```rb
bob.get_class_name
# => "LoudPerson"

jill.get_class_name
# => "LoudPerson"
```

<details>
  <summary><strong>What's the issue here?</strong></summary>

  > When parent and child classes share a class variable of the same name, the value of the child class variable overrides that of the parent.
  > For this reason, you want to only use class variables to hold data that will stay consistent across all classes and subclasses.

</details>

## You Do: Inheritance (15 minutes, 11:20 - 11:35 / 3:50 - 4:05)

> 10 minutes exercise. 5 minutes review.

* Create a `QuietPerson` class that has their own version of `say_name`.
* Create a `VeryLoudPerson` class that...
  1. Shares the same attributes as `Person` and `LoudPerson`.
  2. Uses the same `say_name` method as `LoudPerson`.
  3. Has their own loud version of the `say_age` method.
* Create a `TwoHeadedPerson` class that shares the same methods as `Person` but also has a second name attribute (for the other head).

<details>
  <summary><strong>Hint</strong></summary>

  ```rb
  class TwoHeadedPerson < Person
    def initialize(name, age, second_name)
      super(name, age)
      @second_name = second_name
    end
  end
  ```

</details>

## Helper Classes (10 minutes, 11:35 - 11:45 / 4:05 - 4:15)

Because of the complications that inheritance can introduce, developers tend to avoid using class variables (e.g. `@@some_variable`).

Instead, a more common practice is to create a **helper class** that introduces the same functionality that a class variable would, but without headaches introduced by inheritance. From [wikipedia](https://en.wikipedia.org/wiki/Helper_class):
> In object-oriented programming, a helper class is used to assist in providing some functionality, which isn't the main goal of the application or class in which it is used

For example, in the case of `Person`, we could have a `Group` class. Each instance of `Group` would have an instance variable `@people` which would contain instances of `Person`.



```rb
class Group
  attr_accessor :people

  def initialize(initial_people = [])
    @people = initial_people
  end

  def add_person(*persons)
    persons.each do |person|
      @people.push(person)
    end
  end
end

class Person
  attr_accessor :name
  attr_reader :age

  def initialize(initial_name, initial_age)
    @name = initial_name
    @age = initial_age
  end

  def say_name
    puts "Hi, my name is #{@name}."
  end
end
```

```rb
# Create instances of Group and Person
instructors = Group.new
ali = Person.new("Ali", 100)
james = Person.new("James", 101)

# Keep track of instructors by adding `ali` (Person) and `james` (Person) to `instructors` (Group)
instructors.add_person(ali, james)

# To check out all the current instructors we can run this...
instructors.people
# => [Ali, James]
```

We could also add other attributes and methods to the `Group` class. It doesn't have to just be a container for instances of the `Person` class.  
For example:
```rb
class Group
  attr_accessor :people

  def initialize(initial_people = [])
    @people = initial_people
  end

  def add_person(*persons)
    persons.each do |person|
      @people.push(person)
    end
  end

  def introduce
    @people.each do |person|
      person.say_name
    end
  end

end
```

### When Might You Use Class Variables?

While the use cases for class variables are few and far between, they do exist. One such use case would be when you want to store application-level configuration data such as the application's name, database, version, and other settings. For example:
```rb
class ApplicationConfiguration
  @@configuration = {}

  def self.set(property_name, value)
    @@configuration[property_name] = value
  end

  def self.get(property_name)
    @@configuration[property_name]
  end  
end

ApplicationConfiguration.set("name", "Demo Application")
ApplicationConfiguration.set("version", "0.1")

ApplicationConfiguration.get("version")
# => "0.1"
```
> Example from [Ruby Monk](https://rubymonk.com/learning/books/4-ruby-primer-ascent/chapters/45-more-classes/lessons/113-class-variables)


## You Do: Codebar (25 minutes, 11:45 - 12:10 / 4:15 - 4:40)

> 20 minutes exercise. 5 minutes review.

Clone down [this repo](https://git.generalassemb.ly/ga-wdi-exercises/codebar) and follow the instructions in the readme.

> If you finish early, get started on the optional Shopping List exercise.

## You Do: Shopping List (Optional)

Clone down [this repo](https://git.generalassemb.ly/ga-wdi-exercises/shopping_list/) and follow the instructions in the readme.


## What's Next? (5 minutes, 12:10 - 12:15 / 4:40 - 4:45)

When we start using Rails, our class definitions are going to be very simple. In fact, they won't contain any content at all! They will, however, inherit from a gem called ActiveRecord. Through this, our classes -- or as we'll come to know them, "models" -- will have access to a wealth of methods that allow us to interact with a database.

[Let's use Tunr as an example.](https://git.generalassemb.ly/ga-wdi-exercises/tunr_rails/tree/solution) Here's what an `Artist` model looks like...

```rb
class Artist < ActiveRecord::Base
  has_many :songs, dependent: :destroy
end
```

> That doesn't mean we won't be putting anything else inside our class/model definitions. Later on we'll find that it's helpful to define helper methods that handle the "business logic" of our Rails applications.

That simple class definition (`ActiveRecord::Base`) allows us to do things like...

```rb
Artist.all
# => Returns all Artist instances in the database

Artist.create(name: "Limp Bizkit")
# => Create an Artist instance in the database.

Artist.where(nationality: "Sweden")
# => Returns all artists in the database with a `nationality` value of "Sweden"
```

> [There are plenty more where these came from...](https://git.generalassemb.lycom/ga-wdi-lessons/activerecord-intro#instance-vs-class-methods)

## Bonus: Modules

Classes are great for packaging up related methods: all my User-related methods are in one place.

But let's say my app involves translating English into other languages: I want a "translate-to-French" method, and one for Spanish, German, and so on.

Putting those into a class doesn't really make semantic sense. A class should be a blueprint for an object. Translator methods don't really "belong" to a specific object: I may want to use them with my Users, or with blog posts, or with product descriptions.

A **module** is a lot like a class. The biggest difference is semantic: **Modules are just bundles of related methods. They're not a blueprint for an object.** You may have heard about **mixins**; in Ruby, **modules** are how **mixins** are implemented.

> The module we've explored most recently is **enumerables**. Out-of-the-box, Ruby comes with a big old `Enumerable` module that has lots of handy methods inside it, like `each`.

### Try out modules

Copy and paste this snippet into your REPL:

```rb
module TranslatorMethods
  def frenchify(input)
    input + " omelette du fromage"
  end

  def spanishify(input)
    input + " donde esta la biblioteca"
  end

  def germanify(input)
    input + " schadenfreude kindergarten"
  end
end

class User

  include TranslatorMethods
  attr_accessor :nationality

  def initialize(nationality)
    @nationality = nationality.downcase
  end

  def greet
    standard = "Hello"
    case @nationality
    when "french"
      puts frenchify(standard)
    when "spanish"
      puts spanishify(standard)
    when "german"
      puts germanify(standard)
    else
      puts standard
    end
  end

end
```

Now, copy and paste these lines one at a time:

```rb
user = User.new("French")
user.greet
user.nationality = "German"
user.greet
```

It's just as if we had copy-and-pasted all those "translator" methods right into the `User` class.

<details>
<summary>What Javascript things have we seen that would make a good Ruby module? (That is: where have we seen big bundles of methods in Javascript?)</summary>
jQuery
</details>

<details>
<summary>Unrelated: Why does it say `@nationality = nationality.downcase`? What's the utility of the `downcase`?</summary>
Ruby is case-sensitive. Without this, if a user entered "FRENCH" or "French", it wouldn't register it as being the same as "french".
</details>



## Closing/Questions (15 minutes, 12:15 - 12:30 / 4:45 - 5:00)

## Sample Questions

* Explain the use of self in Ruby.
* Explain the difference between local, instance and class variables.
* Define and differentiate between class and instance methods.
* What does it mean for a class to inherit from another?
* How do we overwrite methods inherited from a parent class?

## Vocabulary

* **class**: an object blueprint
* **instance**: a constructed class instance
* **sub-class**: a class derived through inheritance.
* **extends**: a class is "extended" into a sub-class.
* **self**: an instance's way of referring to itself.
* **super**: a sub-class' way of referring to its parent class.
* **public**: methods available outside of the class.
* **private**: methods available only within the class.
* **protected**: methods available to only the class and its descendants.

## Resources

* [Getters and Setters](http://andrewsunglaekim.github.io/Get-set-ruby/)
* [Visibility](http://stackoverflow.com/questions/9882754/what-are-the-differences-between-private-public-and-protected-methods)
* [Private/Protected](http://matthodan.com/2010/08/08/ruby-private-methods-vs-protected-methods.html)
