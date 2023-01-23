[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Object Inheritance in Ruby

## Prerequisites

- [ga-wdi-boston/ruby-object](https://git.generalassemb.ly/ga-wdi-boston/ruby-object)

## Objectives

By the end of this, developers should be able to:

- Diagram the Ruby method lookup chain
- Write a class which inherits from another class.

## Preparation

1. [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1. Install dependencies with `bundle install`.
1. Create a `training` branch and checkout to it.

## Ruby Inheritance

In Ruby, we have classes instead of prototypes. We attach methods to the class
since Ruby doesn't use prototypes. Ruby will be our first example of linking
different objects together in a hierarchy. This process is called "inheritance"
and the result is what we mean when we say an object "inherits" behavior from
another object.

Some objects can be classified in multiple ways. These multiple classifications
often make sense as a hierarchy. For example, a `Dog` is a kind of `Pet`. It's
also a kind of `Animal`. In Ruby, we can share code (data or behavior) between
two classes using **inheritance**. Let's look at an example of inheritance. Note
that a Ruby class can only inherit from one other class, so whether you name
that class `Pet` or `Animal` will depend on your application.

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

## Concrete classes vs Abstract classes

In Ruby and programming in general, there is a concept of Concrete and Abstract
classes. There is no difference in defining these classes, the distinction
comes from how they are used.

Concrete classes are classes that you plan on making instances of. Where
Abstract classes are more general, and are used to share commonalities to a set
of other sub-classes.

For instance, in the above example we probably won't be creating instances of
the Animal class, it is too broad. We just want to use it to share the eat
method with other sub-classes of Animal.

## Ruby: Super Inheritance

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

`Super` will call the same method defined in the `parent` or `superclass` and
give you the result.

## Demo: Drawing the Method Lookup Chain in Ruby

In Ruby, method lookup occurs through classes. In JavaScript, method lookup
occurs through inspecting the `.prototype` property on constructor functions.

Let's draw the method lookup chain through classes in Ruby.

## Lab: Drawing the Method Lookup Chain in Ruby

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

Create a `Rectangle` in [`lib/rectangle.rb`](lib/rectangle.rb) that inherits
from `Shape`. You will need to override the constructor method inside
`Rectangle` to take two sides of different lengths. Since all rectangles have
four sides, you can set a default value for `@num_sides` inside `Rectangle`'s
constructor.

Test your code with `bundle exec rspec`.

Requirements for `Rectangle`s:

- Rectangles should be instantiated with `Rectangle.new(3, 4)` to create a
  rectangle with a length of 3 and a width of 4.
- Instances of Rectangle should respond to the `#calculate_area` method and
  give the correct result.
- Do not override anything that doesn't need to be overridden.

Next, create a `Square` class in [`lib/square.rb`](lib/square.rb`) that inherits
from `Rectangle`.

Requirements for `Square`s:

- Squares should be instantiated with `Square.new(4)` to create a square with
  all sides equal to 4.
- Instances of Square should respond to the `#calculate_area` method and give
  the correct result.
- Do not override anything that doesn't need to be overridden.

## Additional Resources

- [Useful links to documentation](https://www.ruby-lang.org/en/documentation/)
- [Ruby Classes](http://www.zenruby.info/2016/06/ruby-classes.html)
- [Learn Ruby The Hard Way: Inheritance](https://learnrubythehardway.org/book/ex44.html)
- [Ruby Class Inheritance](https://launchschool.com/books/oo_ruby/read/inheritance)
- [Stack Overflow: Inheritance](http://stackoverflow.com/questions/15754768/when-do-we-use-ruby-module-vs-using-class-composition)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
