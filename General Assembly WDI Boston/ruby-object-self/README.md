[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Ruby: Class Methods & Context

## Prerequisites

- [ruby-object](https://git.generalassemb.ly/ga-wdi-boston/ruby-object)

## Preparation

1. Fork and clone this repository.
 [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. Install dependencies with `bundle install`.

## Objectives

Developers should be able to:

- Determine runtime context using `self`.
- Invoke a getter or setter method using `self`.

## Introduction

You may have noticed that not all methods we use with Ruby follow the
`Object.new(*args)` pattern we introduced with object-oriented programming (OOP)
in Ruby. We're already familiar with defining and using setters and getters on
instances of classes, but what does it mean when we call a method directly on a
class instead of an instance?

For example, let's say we have a model named `Person`. We can create new objects
by using `Person.new`.

```ruby
jeff = Person.new('Jeffrey')
jeff.first_name #=> "Jeffrey"
```

The method `#first_name` is called on an instance, and hence is known as an
instance method. The methods `.new` is called directly on the class `Person`,
and hence is known as a class method.

The context of each method tells us where we can use it, ie: class methods can
be used on (the context of) a class, and instance methods can be used on (the
context of) an instance. 

Sometimes we'd like to create our own class methods, or use setters and getters
already provided by the parent (super) class to work on our objects. In order to
accomplish these goals, we first need to understand context.

## Context

Just like JavaScript's `this` keyword, `self` in Ruby is a reference to the
**runtime context** of your program. We can use `self` instead of referring to
particular instances to get or set data on these objects. Think of `self` as a
pronoun for any object in our system.

Just like pronouns, `self` changes depending on the context in which it is used.
At times `self` is going to refer to a particular object. Later, `self` could
refer to a different object. In fact, at some times in a running program `self`
may point to a *class*.

At every point in time when your program is running there is one and only one
class or object that `self` is referencing or pointing to.

At any time during the life of your program the context may change. You may be
running code inside of an instance method and `self` would point to the instance
that invoked the method, or you could be inside a class definition and `self`
would point to the class itself.

`self` will point to one of three runtime contexts: global context, object
context, or class context.

### Global

For all methods invoked without a class or object `self` will be an instance of
the Object class, *main*.

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

`self` is always the implicit receiver inside method definitions. That means
when we're inside an instance method and we want to work on the instance, we
don't have to use `self` to refer to it.

When it comes to setters, though, `status="happy"` inside a method definition
could be interpreted either as declaring a local variable called `status` inside
the method, or as calling the class (say, `Person`) setter `status=`. Therefore,
you need to call the setter explicitly with `self.status = "happy"`.
`status = "happy"` will create a local variable.

With getters this distinction isn't necessary. When the interpreter sees
`status`, it first checks to see if there's a local variable called `status`.
If there is, `status` will evaluate to the value of that local variable. If
there isn't, the class' `status` getter method will be called.

Combined with the implicit returns, this makes Ruby code very concise, but it
also means we have to pay attention to where we are when we're writing code!

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
