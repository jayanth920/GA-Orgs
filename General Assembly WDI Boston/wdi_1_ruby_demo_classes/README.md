![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Ruby Class Demo

## Objectives

By the end of this, students should be able to:

- Explain the purpose of classes vs global methods
- Write basic classes to solve problems
- Create instances of classes and call instance methods on them
- Explain the difference between instance and local variables
- Explain and utilize inheritance
- Test classes and their methods with RSpec

## Demo

### Objects

Object are really just "things". Lets list some objects.

* Pearl Jam's 'Jeremy'.
* My Spotify playlist.
* Tesla Roadster
* David Fisher
* 'Stranger in a Strange Land'
* 42.
* $100 bill

Look around the room and find me about some objects.

In programming we represent objects, that may or may not, live in the
real world in a couple of different ways.


### Classes

Objects, or things, can be classified. For example:

* Pearl Jam's 'Jeremy'. Is "classified" as a __Song__.
* My Spotify playlist. Is a __Playlist__.
* Tesla Roadster. Is a __Car__.
* David Fisher. Is a __Person__.
* 'Stranger in a Strange Land'. Is a __Book__.
* 42. Is an Integer, aka __Fixnum__ in Ruby.
* $100 bill is __Money__

We "classify" objects in OOP by using a Class. So, Song, Playlist, Car,
Person, Book and Integer are all Classes.

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

#### Creating Instances of Classes

You create instances of classes by using the `new` method on a class. For example, below we create a new empty array:

```ruby
an_array = Array.new
```

##### Your Turn

In `class_instances.rb` create 3 additional instances of different types of classes using the `new` method and store them as local variables.

Run the file with `ruby class_instances.rb`, and using *pry* try to see that you've created these.

### Making new Classes

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

#### Testing Classes and Objects

Ideally, we should be testing our work, and writing test first.

Reference the `spec/rectangle_spec.rb` which you can run with `spec/rectangle_spec.rb`. Note that there are two failing tests for the methods `perimeter` and `square?`.

In `lib/rectangle.rb` implement the code needed to make all test for Rectangle pass.

### Mini-lab: More Geometry!

In the `spec` directory you'll find two other sets of test `circle_spec.rb` and `sphere_spec.rb`.

For `circle_spec.rb` you'll need to write code in `lib/circle.rb` to make the tests pass.

For `sphere_spec.rb` you need to write the tests for several methods (listed below and in the comments), and *also* write the code in `lib/sphere.rb` to make the tests pass.


## Additional Resources

List additional related resources such as videos, blog posts and official documentation.

- Item 1
- Item 2
- Item 3
