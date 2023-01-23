[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Ruby Object Model

## Prerequisites

- [ga-wdi-boston/ruby-object](https://git.generalassemb.ly/ga-wdi-boston/ruby-object)

## Objectives

By the end of this, developers should be able to:

- Diagram the Ruby method lookup chain.
- Write a class which inherits from another class.
- Write a Module and mix it into a class.
- Describe the difference between Inheritance, Composition, and Mixins (Modules).

## Preparation

1. Fork and clone this repository.
 [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. Install dependencies with `bundle install`.

## Classical Inheritance

In Ruby we have classes instead of constructors, which is why we refer to it as
_Classical Inheritance_ or _Class Based Inheritance_. We define methods in the
class since Ruby doesn't bother with prototypes. This will be our first example
of linking different objects together in a hierarchy. This process is what we
mean when we say an object inherits behavior from another object.

Some objects can be classified in multiple ways. These multiple classifications
often make sense as a hierarchy. For example, a `Dog` is a kind of `Pet`, it's
also a kind of `Animal`. In Ruby we can share code (data or behavior) between
two classes using _Inheritance_. Let's look at an example.

> Note: A class can only directly inherit from one other class, so whether you
> name that class `Pet` or `Animal` will depend on your application.

```ruby
class Animal
  def eat
    puts "Nom nom nom"
  end
end

class Dog < Animal
end

dog = Dog.new
dog.eat #=> "Nom nom nom"

class Dog < Animal
  def speak
    puts "WOOF"
  end

  def eat
    puts "Slop slop slop"
  end
end

dog.speak #=> "WOOF"
dog.eat #=> "Slop slop slop"

animal = Animal.new
animal.eat #=> "Nom nom nom"
animal.speak #=> NoMethodError
```

## Classes: Concrete vs Abstract

Concrete classes are classes that you plan on making instances of. Where
Abstract classes are more general, and are used to share commonalities to a set
of other sub-classes.

For instance, in the example above we wouldn't be creating instances of the
`Animal` class, it is too broad. We just want to use it to share the `eat`
method with other sub-classes of `Animal`.

## Super Inheritance

```ruby
class Animal
  def move
    "I can move"
  end
end

class Bird < Animal
  def move
    super + " by flying"
  end
end

puts Animal.new.move
puts Bird.new.move
```

This will print out:

```bash
I can move
I can move by flying
```

`super` will call the same method defined in the `parent` or `superclass` and
give you the result.

## Demo: Drawing Ruby's Method Lookup Chain

In Ruby, method lookup occurs through classes. In JavaScript, method lookup
occurs through inspecting the `.prototype` property on constructor functions.

Let's draw the method lookup chain through classes in Ruby.

## Lab: Drawing Ruby's Method Lookup Chain

Please diagram the method lookup chain using the following requirements:

- The class `FamilyFeud` has an instance method called `fast_money`.
- `FamilyFeud` inherits from the class `TVShow`.
- The class `TVShow` has an instance method called `roll_credits`.
- Diagram creating a new instance of the `FamilyFeud`: `steve_harvey_family_feud =
    FamilyFeud.new`.
- Diagram how Ruby finds and executes the methods called on `steve_harvey_family_feud`:
    `steve_harvey_family_feud.fast_money` and `steve_harvey_family_feud.roll_credits`.

## Lab: Model Shapes Using Classes

In a [previous
lab](https://git.generalassemb.ly/ga-wdi-boston/ruby-object#lab-creating-a-shape-class),
you were asked to create and use a `Shape` class.

A `Rectangle` is a `Shape`, and a `Square` is a `Rectangle`.

Create a `Rectangle` class in [`lib/rectangle.rb`](lib/rectangle.rb) that
inherits from the `Shape` class. You will need to define an `initialize` method
inside `Rectangle` to take two sides of different lengths. Since all rectangles
have four sides, you can set a default value for `@num_sides` inside
`Rectangle`'s `initialize`.

Test your code with `bundle exec rspec`.

Requirements for `Rectangle`s:

- Rectangles should be instantiated with `Rectangle.new(3, 4)` to create a
  rectangle with a length of 3 and a width of 4.
- Instances of `Rectangle` should respond to the `#calculate_area` method and
  give the correct result.

Next, create a `Square` class in [`lib/square.rb`](lib/square.rb) that inherits
from the `Rectangle` class.

Requirements for `Square`s:

- Squares should be instantiated with `Square.new(4)` to create a square with
  all sides equal to 4.
- Instances of `Square` should respond to the `#calculate_area` method and give
  the correct result.
- Do not override anything that doesn't need to be overridden.

## Object Inheritance vs Composition vs Modules

In a large application, it's common for different areas of the app to require
similiar functionality. To save time and mental bandwidth, we try to reuse the
same code in multiple places whenever possible. How should we achieve that?

We don't want to copy and paste, because it's error prone and goes against the
idea of keeping our code DRY. In object-oriented languages like Ruby, we have a
few choices -- we can use inheritance, composition, or mixins. Let's look at how
these concepts differ and we when we might prefer one over another.

| Inheritance   | Composition   | Module |
|:-------------:|:-------------:|:-----:|
| Car `is-a` Vehicle | Car `has-a` Driver | Car `behaves-as` Motorized |

### Inheritance

Let's discuss the code below:

```ruby
# define Class Car
class Car
  attr_reader :engine
  def initialize
    @engine = 1200
  end
end

# define Class Ford
class Ford < Car
end

focus = Ford.new
puts focus.engine
```

Whenever I create a new instance of a `Ford`, Ruby looks for a method called
`initialize`. In this case, it doesn't find that method on the `Ford` class, so
it finds the method on it's parent `Car`. `focus` is an instance of the `Car`
class, so *it inherits all of the methods defined in the `Car` class.*

### Composition

```ruby
# A class of albums
class Album
  attr_reader :tracks

  def initialize
    @tracks = []
  end
end

# A class of songs
class Song
  def initialize(title)
    @title = title
  end
end

lemonade = Album.new
lemonade.tracks << Song.new('Formation')
```

Sometimes, we want to build a more complex object by using specific instances of
other objects. We can use composition to achieve this. In this case, we will add
instances of the `Song` class to the tracks of our album.

### Modules

We want to make chunks of code that are reusable across multiple classes.
These "chunks" are called Modules. Take a look at the code below:

```ruby
# define module Sleeper
module Sleepable
  def go_to_sleep
    # code here
  end
end

# define Class Person
class Person
  include Sleepable
end

# define Class Computer
class Computer
  include Sleepable
end
```

In the code above, we defined a `module` called Sleepable. We also define a
`Person` class and a `Computer` class. By using the keyword `include` followed
by the name of the module (in this case `Sleepable`) we have access to the
methods we defined in our module.  This is great because it allows us to keep
our code *D-R-Y*, not to mention it allows us to be lazy developers (the good
kind of lazy).

## What Should I Use

- `is-a`: A Ford *is a* car.
  - Inheritance creates a *subclass* - a class that has access to all of the
    methods of it's parent class. You should use it if your class is a *type*
    of it's parent class, like Ford is a type of car. A Ford  is a more
    specialized, less abstract version of the Car class.

- `has-a`: An Album *has a* song on it.
  - We use composition when class instances contain instances of other classes.

- `behaves-as`: Mixins are used when a *behavior* is shared between various
  classes.
  - People and computers both share the sleep behavior in the example above.
    People and computers are very different - it wouldn't make sense for them
    to inherit from the `Sleepable` class.

### Class or Module

When deciding whether to write a class or module, ask yourself if what you're
writing will need an `initialize` method. If it does, you should be writing a
class. Modules are typically only for used for mixing behavior into classes,
you can not create instances of a module.

## Lab: Write a Module

Open the file `lib/equine.rb`.

- Create a class `Equine` with a method `eat_grass`.
- Create three classes `Horse`, `Zebra`, and `Mule` that inherit from `Equine`.
- Create a module `Rideable` with a method `ride`.
- Include that method in the `Horse` and `Mule` classes by "mixing in" the
  `Rideable` module.

Use `rspec spec` to test your code. It will run all of the tests in the spec
folder. If you'd like to run only one of the test files you can do that with
`rspec spec/equine_spec.rb` or replace 'equine_spec.rb' with the name of the
spec file you want to run.

## Additional Resources

- [Inheritance vs Composition](https://learnrubythehardway.org/book/ex44.html)
- [Inheritance vs Modules](https://launchschool.com/books/oo_ruby/read/inheritance)
- [Modules vs Composition](http://stackoverflow.com/questions/15754768/when-do-we-use-ruby-module-vs-using-class-composition)
- [Re-use in OO: Inheritance, Composition, and Mixins](http://naildrivin5.com/blog/2012/12/19/re-use-in-oo-inheritance.html)
- [What is the difference between include and require in Ruby?](https://stackoverflow.com/questions/318144/what-is-the-difference-between-include-and-require-in-ruby)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
