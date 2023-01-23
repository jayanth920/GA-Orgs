![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)

# Ruby: Modeling with Classes

## Objectives

By the end of this, students should be able to:

- Write basic classes to solve problems.
- Recall the benefits of inheritance.
- Write classes that inherit from other classes.

## `class`ifying Objects

Objects, or things, can be classified. For example:

- Pearl Jam's 'Jeremy'. Is "classified" as a __Song__.
- My Spotify playlist. Is a __Playlist__.
- Tesla Roadster. Is a __Car__.
- David Fisher. Is a __Person__.
- 'Stranger in a Strange Land'. Is a __Book__.
- 42. Is an Integer, aka __Fixnum__ in Ruby.
- $100 bill is __Money__

In Ruby, (almost) everything is an *object*. For example, *instances* of the following are objects:

- Strings
- Fixnums
- Floats
- Array
- Hash

*Objects* are simply *instances* of *classes*. The `String` class is not a string, but rather it is a blueprint for how strings are made.

|                                  | Object | Class |
|----------------------------------|--------|-------|
| Blueprint for making objects     |        | ✓     |
| Created with the `class` keyword |        | ✓     |
| Can inherit from other classes   |        | ✓     |
| An instance of a Class           | ✓      |       |
| Multiple instances can exist     | ✓      |       |
| Created with ClassName.new       | ✓      |       |
| Instance methods invoked on      | ✓      |       |
| Instance methods are defined in  |        | ✓     |
| stored in a variable             | ✓      |       |
| Defined in *CamelCase*           |        | ✓     |

## Demo: Modeling Familiar Concepts

We define a class with the `class` keyword, and then the name of the class you'd like to create in CamelCase. We finish with an `end` keyword to denote that we're done defining the class.

Let's consider making a Rectangle class:

```ruby
class Rectangle
end
```

We can create an instance of this class then by calling the `new` method on it, and storing the value in a local variable:

```ruby
a_rectangle = Rectangle.new
another_rectangle = Rectangle.new
```

Before we go on, we should consider what our class should do. A rectangle has a length, and a width. It would be nice if we could set the value of those when we create an instance of a class. To do this, we need an `initialize` method, which is a special method that is called when `new` is invoked.

```ruby
class Rectangle
  def initialize(length, width)
    @length = length
    @width = width
  end
end
```

Now when I make an instance of a Rectangle I *must* call `new` with two arguments. Below I make two totally separate instances (objects) of the Rectangle class.

```ruby
a_rectangle = Rectangle.new(10, 20)
another_rectangle = Rectangle.new(20, 30)
```

Let's revisit that class definition and look at that `initialize` method a bit more:

```ruby
class Rectangle
  def initialize(length, width)
    @length = length
    @width = width
  end
end
```

`initialize` is a method that takes two arguments. Inside we have two assignments of the *values* of the local variables (which come from the method signature), to be the new values of *instance variables*.

Instance variables are denoted with a special @ sign at the beginning of their name, for example `@length`. Local variables have no symbols at the beginning of their name, like `length`.

When the method is done, the *local* variables go away, but the *instance* variable values stay with the instance of the object itself! So if we didn't say `@length = length`, then the rectangle wouldn't remember its length later on.

These *instance variables* can be accessed in other *instance methods* of that class. Right now, I have no way to find out the values of `@length` and `@width` later on, so let's write some methods to make that happen:

```ruby
class Rectangle
  def initialize(length, width)
    @length = length
    @width = width
  end

  def length
    @length
  end

  def width
    @width
  end
end
```

Now we've written our first *instance methods*. These can be called on an instance of the class. Here, the method does nothing but return the value of the instance variable with the same name. This is more of a convention, to keep the names the same, but I could have made a method called `bigbird` that returned the length; it just wouldn't make much sense right?


```ruby
a_rectangle = Rectangle.new(10, 20)
a_rectangle.length #=> 10
a_rectangle.width #=> 20

another_rectangle = Rectangle.new(20, 30)
another_rectangle.length #=> 20
another_rectangle.width  #=> 30
```

Methods can be used to calculate things as well. Let's make a method called `area` to calculate the area of a rectangle.

```ruby
class Rectangle
  def initialize(length, width)
    @length = length
    @width = width
  end

  def length
    @length
  end

  def width
    @width
  end

  def area
    @length * @width
  end
end
```

Here, the `area` method is multiplying the values of the @length and @width instance variables.

It is important to note that we cannot directly access the instance variables outside of the instance of the object. The following will not work:

```ruby
a_rectangle = Rectangle.new(10, 20)
@length #=> nil
```

## Inheritance

Some objects can be classified in multiple ways. These multiple classifications often make sense as a hierarchy. For example, a `Dog` is a kind of `Pet`. It's also a kind of `Animal`. In ruby, we can share code (data or behavior) between two classes using **inheritance**. Let's look at an example of inheritance. Note that a ruby class can only inherit from one other class, so whether you name that class `Pet` or `Animal` will depend on your application.

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

## Lab: Model Shapes Using Classes

A square is a special kind of rectangle. Create a `Square` class that inherits from `Rectangle` and override any methods you need to change to represent the idea of a `Square` in ruby code.

---

[License](LICENSE)
------------------

Source code distributed under the MIT license. Text and other assets copyright General Assembly, Inc., all rights reserved.
