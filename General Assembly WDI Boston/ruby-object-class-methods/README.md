[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Ruby Methods

## Prerequisites

- [ruby-object-model](https://git.generalassemb.ly/ga-wdi-boston/ruby-object-model)

## Objectives

By the end of this, developers should be able to:

- Determine runtime context using `self`.
- Invoke a getter or setter method using `self`.
- Give an example of a class method you already use.
- Diagram the invocation pattern between `#initialize` and `.new`.
- Contrast defining class methods with defining instance methods.
- Contrast invoking class methods with invoking instance methods.

## Preparation

1. Fork and clone this repository.
 [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. Install dependencies with `bundle install`.

## Introduction

You may have noticed that not all methods we use with Ruby follow the `Object.new(*args)` pattern we introduced with object-oriented programming (OOP) in Ruby. We're already familiar with defining and using setters and getters on instances of classes, but what does it mean when we call a method directly on a class instead of an instance?

For example, let's say we have a model named `Person`. We can create new objects by using `Person.new`.

```ruby
jeff = Person.new(given_name: "Jeffrey")
jeff.given_name #=> "Jeffrey"
```

The method `#given_name` is called on an instance, and hence is known as an instance method. The method `.new` is called directly on the class `Person`, and hence is known as a class method.

Sometimes we'd like to create our own class methods, or use setters and getters already provided by the parent (super) class to work on our objects. In order to accomplish these goals, we first need to understand context.

## Context

Just like JavaScript's `this` keyword, `self` in Ruby is a reference to the **runtime context** of your program. We can use `self` instead of referring to particular instances to get or set data on these objects. Think of `self` as a pronoun for any object in our system.

Just like pronouns, `self` changes depending on the context in which it is used. At times `self` is going to refer to a particular object. Later, `self` could refer to a different object. In fact, at some times in a running program `self` may point to a *class*.

At every point in time when your program is running there is one and only one class or object that `self` is referencing or pointing to.

At any time during the life of your program the context may change. You may be running code inside of an instance method and `self` would point to the instance that invoked the method, or you could be inside a class definition and `self` would point to the class itself.

`self` will point to one of three runtime contexts: global context, object context, or class context.

### Global

For all methods invoked without a class or object `self` will be an instance of the Object class, *main*.

```ruby
puts "In the global scope, self is #{self}"

def example
  puts "In a method attached to the global scope, self is #{self}."
end

example
```

### Object

For all methods invoked on an object `self` will point to that object.

```ruby
class Person
  def whoami
    puts "In an instance method, self is #{self}."
  end
end

Person.new.whoami

```

### Class

For all methods invoked in a class `self` will point to that class.

```ruby
class Person
  def self.a_class_method
    puts "In a class method,  self is #{self}."
  end
end

Person.a_class_method
```

## Lab: Getters and Setters

Have a look at [`lib/person.rb`](lib/person.rb). Notice how our custom setter
has a side effect? Take a moment to read the code, and write comments with what
you expect the code to do. Then load the file in a console and then try running
the snippets below. To do this, run `pry` in your terminal and then do
`require_relative 'lib/person.rb'` in Pry.

Does each line do what you expected? What does `self` refer to?

```ruby
person = Person.new
person.status = "ready"
person.log_in
person.log_out
```

## Lab: Using Self

Experiment with the code provided in [`lib/method_chainer.rb`](lib/method_chainer.rb)

Think about the following:

- What is the return value if `self` is the last line of the instance method?
- What is the return value of the instance method without `self`?
- Try chaining methods, does commenting out `self` have an effect?

### Best Practices

When you have either `attr_accessor`s or custom getters and setters for a given
instance variable, it's best practice to use `foo` and `self.foo =` instead of
`@foo` and `@foo =`. This ensures that any side effects on those getters/setters
are applied consistently.

## Implicit Receiver

`self` is always the implicit receiver inside method definitions. That means when we're inside an instance method and we want to work on the instance, we don't have to use `self` to refer to it.

When it comes to setters, though, `status="happy"` inside a method defintion could be interpreted either as declaring a local variable called `status` inside the method, or as calling the class (say, `Person`) setter `status=`. Therefore, you need to call the setter explictly with `self.status = "happy"`. `status = "happy"` will create a local variable.

With getters this distinction isn't necessary. When the interpreter sees `status`, it first checks to see if there's a local variable called `status`. If there is, `status` will evaluate to the value of that local variable. If there isn't, the class' `status` getter method will be called.

Combined with the implicit returns, this makes Ruby code very concise, but it also means we have to pay attention to where we are when we're writing code!

## Class Methods

All the methods (except for `.new`) that we've been looking at above are instance
methods. This means that they are called on an _instance_ of a class, not on the
class itself.
Sometimes though, a method **is** associated with the class itself.

Observe how a Method on a **Class** differs from a method on an **Instance**
of that Class.

<!-- Diagram the difference between #initialize and ::new
 See issue diagram in NOTES.md
-->

Let's discuss the code below in [`lib/pet.rb`](lib/pet.rb)

In the Animal class, the `::new` method is received with 'Zeno' and 'cat' as
arguments. It then calls the instance method `#initialize` with 'Zeno' and 'cat'
as arguments. This assigns 'Zeno' to an instance variable, `@name` and 'cat' to
the instance variable `@species`.

The Pet class is different.  The Pet class is used here to give us meta-data
about a list of Pets. When we get to Rails, this data will be information we
get back from the database.

Where will the method `dog_count` be received?
What about `all`?

## Lab: Make a Class Method

- Make a class method, `search` on Album (in `lib/album.rb`) to search the
  collection of songs by `title`. This method should return a single `Song`
  object, the first one that matches the search terms.
- Make a class method `count` that returns the total number of songs on the
  album.
- Use `rspec` to test your work.

Bonus:

- Make the search insensitive to case ('Formation' and 'formation' return
  the same song).
- Make the search look for part of a word ('ation' also returns the song
  'Formation').

## Additional Resources

- [Ruby: Class Methods vs Instance Methods](https://dev.to/adamlombard/ruby-class-methods-vs-instance-methods-4aje)
- [Ruby Constants Explained](https://www.oreilly.com/library/view/the-ruby-programming/9780596516178/ch04s03.html)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
