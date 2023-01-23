
Title: Ruby Objects and Classes<br>
Creator: Thom Page <br>
Updates: Karolin Rafalski <br>
Competencies: Basic Ruby<br>

---

# Objects/Classes


In Ruby, these are often referred to as hashes, in Python: dictionaries, in JavaScript: objects



Abstraction of Classes:

> A template by which Objects can be constructed
>
> A blueprint (or recipe) of how to build an object and information about what defines an object.

<br>

## Everything is an object

Caveat: [Not quite](http://rubylearning.com/blog/2010/09/27/almost-everything-is-an-object-and-everything-is-almost-an-object/)

Deeper Dive: [What is an object?](https://rubymonk.com/learning/books/4-ruby-primer-ascent/chapters/39-ruby-s-object-model/lessons/127-object-identity-what-is-an-object)

* create a file `objects.rb` in `student_examples`

Lets do a simple test. Let's look at a string. If a string is just text, how come we can use methods on it? When programming in Ruby, a string looks like text but is really an object.

A giveaway that something is an object is if it takes a method.

```ruby
"Hello World".upcase
```

It looks suspiciously like "Hello World" is an object, ie. it exhibits behavior such as `upcase`.

An even bigger giveaway is if that object belongs to a class.

```ruby
"Hello World".class
```
> String

Not only are we using a method but we are also looking at a class! Oh yeah, this thing an object for sure.

**Extra:** Even a **block** is an object. An anonymous block is called a lambda, and it belongs to the Proc class:

```ruby
p lambda { |n| p n }.class
```

> `#<Proc:0x007fcacc1474b0@objects.rb:1 (lambda)>`

[Proc docs](https://ruby-doc.org/core-2.4.1/Proc.html)

## Classes

A **class** is a template for creating objects.

The string "Hello World" is an object that is an _instance_ of the String class. Just like the string "Cherish the cabin" is an object that is an _instance_ of the String class. They are both different objects, but they are both strings.

What if we make up our own method for every instance of the String class?

Ruby has `open classes`, meaning, you can add to the classes that already exist.

```ruby
class String

  def zumpledeboop
    self.upcase.reverse
  end

end

p "Hello World".class
p "Hello World".zumpledeboop
p "Cherish the cabin".zumbledeboop
```

> "DLROW OLLEH"


**Deep Dive:** [Self in Ruby](https://hackhands.com/three-golden-rules-understand-self-ruby/)

If you've ever wondered how a string can take a method, it's because a string is secretly an **object** with **methods**.

An **object** is an _instance_ of a **class**.

From one class, you can make myriad objects all with the same methods.


## Make our own objects



We can make our _own_ objects. They will be very similar to the JavaScript ones we are used to, the ones that have properties and methods that can be accessed and altered with **dot notation**.

Let's make a template for our objects. The template is called a **class**. Remember how in JavaScript we used classes to create objects?

This is the same thing, but in Ruby.

```ruby
class World

  def name
    "Nothing But Shrimp"
  end

end


world1 = World.new

p world1
p world1.name
p world1.class
```

> `#<World:0x007ff2f90277b0>`
>
> `"Nothing But Shrimp"`
>
> `World`

The first thing we see is the object itself. It looks strange, but that's OK. We're not going to worry about those extra letters and numbers for now.

The next thing is the name of that world.

Last, we see that `world1` is an object created by the **World** class.


## Make it so we can update properties

```ruby
world1.name = "Tatooine"
```

Does not work, instead we have to make a **setter method** in the class.

First, let's put `name` into an **instance variable** that will have scope over all methods in the class.

We can make an **initialize** method in our class that will automatically run when we instantiate an object.
Let's test our code :

```ruby
class World

  def initialize
    @name = "Nothing But Shrimp"
  end

  def name
    @name
  end

end

world1 = World.new
p world1.name
```

The **initialize** method is just like the **constructor** method we used in JavaScript classes.


Now let's work on being able to update the name:


Let's make a setter method with special
`something=input` syntax:

```ruby
class World

  def initialize
    @name = "Nothing But Shrimp"
  end

  def name
    @name
  end

  def name=value
    @name = value
  end

end


world1 = World.new
world1.name = "Tatooine"
p world1.name
```

We are getting closer to learning how to make objects that have all the functionality that our js objects had!

## Behavior

Let's make it so the worlds we make will do something (add a method).

Let's make it so a world can populate itself with people.

**Object Specs:**

Ruby is often used with tests and specs. We haven't been teaching tests and specs (and probably won't have time to). You may notice the wording of certain labs and hw is different than you are used to. We have tried to adjust the activities but also leave the language intact so you can get familiar with the kind of wording you may see out on a job.

* A world can have many people, but starts with none
	* This means initialize the object with an empty array to hold the people in.

* World can populate itself with one person at a time.
 * A person has properties name (string), age (int) - for now we'll make a default person, later we'll upgrade the method
* Make a method `populate` that will push a hash (object) into the people array.

```ruby
class World

  def initialize
    @name = "Nothing But Shrimp"
    @people = []
  end

  def name
    @name
  end

  def people
    @people
  end

  def name=value
    @name = value
  end

  def populate
    @people << { name: "Shrimpy McShrimpsky", age: 20 }
  end

end


world1 = World.new

p world1.people

world1.populate
world1.populate
world1.populate

p world1.people
```

> [{:name=>"Shrimpy McShrimpsky", :age=>20}, {:name=>"Shrimpy McShrimpsky", :age=>20}, {:name=>"Shrimpy McShrimpsky", :age=>20}]


## Provide data to new object

All the worlds we make will start out the same. What if we want to start off with different worlds?

We can provide input to the **initialize** method:

```ruby
  def initialize name
    @name = name
    @people = []
  end
```

Now we can easlily create many new worlds with the same properties and methods

```
world1 = World.new "Panthelassa"
world2 = World.new "Tatooine"
world3 = World.new "Nothing But Shrimp"
world4 = World.new "San Junipero"
```

```
p world1.name
p world2.name
p world3.name
p world4.name
```


>"Panthalassa"
"Tatooine"
"Nothing But Shrimp"
"San Junipero"

We can also update our class (blueprint/template) in one place and thus keep our code DRY (Don't Repeat Yourself)
Add in `shape`

```ruby
  def initialize name, shape
    @shape = shape
    @name = name
    @people = []
  end
```

We can also add a default values, so if a shape value is not inputted, it will have a default value

```ruby
  def initialize name, shape='oblate spheroid'
    @shape = shape
    @name = name
    @people = []
  end
```

```ruby
world1 = World.new "Panthalassa"
world2 = World.new "Tatooine" , "sphere"
world3 = World.new "Nothing But Shrimp" , "dome"
world4 = World.new "San Junipero", "cylinder"
```


## Access shape property

- above, we could access the name property.
- but when we try:

`p world1.shape`

- we get an error
- we have to either create a method to see the value OR we can use a shorthand. We used a method for the `name` property, let's use the shorthand for shape.

Convention is to put this 'shorthand' at the top of the class, before the initialize method

```ruby
class World
  attr_reader :shape

```

Great, let's go and change the shape

world1.shape = 'cube'

We fail again! We must explicitly state that this property can be overwritten

```ruby
class World
  attr_reader :shape
  attr_writer :shape
```

We can also condense our code for properties that can be read and overwritten by using

`attr_accessor`


```ruby
class World
  attr_accessor :shape

```

`attr_accessor` allows us to read and write a property

## Create a Method that Adds Different Data to the Array



```ruby
  def populate name, age
    @people << { name: name, age: age }
  end
```

But wait! We want to be able to see the people array, so let's add an `attr_reader` for `:people`

```ruby
world3.populate "Eleanor ShellStrop", 36
world3.populate "Chidi Anagonye", 32
world3.populate "Tahani Al-Jamil", 34
world3.populate "Jianyu", 31

p world3.people
```

>  [{:name=>"Eleanor ShellStrop", :age=>36}, {:name=>"Chidi Anagonye", :age=>32}, {:name=>"Tahani Al-Jamil", :age=>34}, {:name=>"Jianyu", :age=>31}]


## Remove getters and setter functions for `:name`, replace with 'shorthand'

```ruby
class World

	attr_reader :people
	attr_accessor :name, :shape

	def initialize name, shape
		@shape = shape
		@name = name
		@people = []
	end

	def populate name, age
		@people << { name: name, age: age }
	end

end
```

We can still change the name of world 3 and read it

```ruby
world3.name = 'The Good Place'
p world.name

```
# Extra
# Intermediate Class and Method Concepts


### Automate Object Creation into an Array

Sometimes you need to create a number of objects at once. Let's look at a code example

```ruby
planets = %w(Mercury Venus Earth Mars Jupiter Saturn Uranus Pluto)
# populate milky way with worlds from our planets array
milky_way = []

planets.each do |planet|
  world = World.new planet, "oblate spheroid"
  milky_way << world
end

p milky_way
```

### Named arguments

Sometimes, our methods (especially `initialize`) can get pretty complicated, and remembering arguments based on their order is a bit much. For this, we can use named arguments.

We still need to set the value of the instance variables in `initialize`.

```ruby
class Person
  attr_reader :name, :age, :favorite_color, :height

  def initialize(name:, age:, favorite_color:, height:)
    @name = name
    @age = age
    @favorite_color = favorite_color
    @height = height
  end
end

me = Person.new(name: 'David', age: 35, favorite_color: :blue, height: 68)
me.favorite_color #=> :blue
```

### Inheritance

Classes can *inherit* behavior from each other. In Rails, we'll generally use this to pull in a bunch of methods and behaviors from the *superclass* into our classes, but here we'll look at some more basic examples.

Below here we have an Animal class. Both Cat and Dog classes are sub-classes of Animal and get their shared behavior about `age` from it.

```ruby
class Animal
  attr_reader :age

  def initialize
    @age = 0
  end

  def get_older
    @age = @age += 1
  end
end

class Cat < Animal
  def sound
    'meow'
  end
end

class Dog < Animal
  def sound
    'woof'
  end
end

jade = Cat.new
jade.class #=> Cat
Cat.superclass #=> Animal
jade.age #=> 0
jade.get_older
jade.sound #=> 'meow'
jade.age #=> 1
```

#### Class Constant

You can have a constant in your class. This can be helpful for keeping track of data that never changes. You can access it from inside your class, or from outside.

```ruby
class Spider
  NUMBER_LEGS = 8

  def num_legs
    NUMBER_LEGS
  end
end

Spider::NUMBER_LEGS #=> 8
```

#### Optional and Default Arguments

Sometimes you don't want to have to set all values manually in a method. For that, you can use optional arguments. These can be used with methods in classes too.

```ruby
class Car
  attr_reader :miles

  def initialize(miles=0)
    @miles = miles
  end
end

new_car = Car.new
new_car.miles #=> 0

used_car = Car.new(1000000)
used_car.miles #=> 1000000
```

#### Arrays and Classes

You can use classes and arrays together.

```ruby
class Student
  attr_reader :friends

  def initialize
    @friends = []
  end

  def add_friend(name)
    @friends << name
  end
end
```

#### Class Methods

You can have methods that don't act on an instance of the class. These are often used in your Rails models to help find specific instances of your class, or perform operations on multiple instances of your class. You don't need to call `.new` to make an instance of the class here. We won't use these much until we get into Rails.

You define these by putting `self` at the beginning of the method name.

```ruby
class Math
  def self.square(number)
    number * number
  end
end

Math.square(2) #=> 4
```
