# Object Oriented JavaScript

## Framing (5 min / 1:20)

From our Intro to OOP lesson, we know that we need a way to define a class with attributes and methods, create instances of that class and then define some way of creating sub-classes based on a parent class. Let's get to it!

## Classes in ES6 (15 min / 1:35)

We briefly saw how to define a class in the previous section, in comparison to how we do so in Ruby, Python and PHP. The syntax looks like this:

![Class Syntax](assets/js-class-syntax.png)

> The above figure shows how to define a simple class using JavaScript. The Class is defined using the `class` keyword and given a name (in this case `Car`). The `constructor` function accepts three parameters (`make`, `model`, and `color`) and sets these as attributes. The class also contains a `drive` method.

Notice the use of `this` and the fact that we're not returning from the class?

When we want to generate instances of this class, we'll use the `new` keyword:

```js
const carolla = new Car('Toyota', 'Carolla', 'Grey')
const outback = new Car('Subaru', 'Outback', 'Forest Green')
```

The `new` keyword will automatically:

1. Create a new, empty object for us
2. Generate a context for that object (`this` = the new object)
3. Return the object instance from our class

### You Do: Define an Animal Class (15 min / 1:50)
> 10 min to work, 5 min to share with the class

Open up [this repl.it](https://repl.it/@ZakkMan/JS-OOP-Define-an-Animal-Class) and define your own animal class. It can be any animal you would like. Include at least 3 attributes and 2 methods in your class definition.

Once you finish defining your animal class, create 2 instances of your animal class and `console.log` them.

## Inheritance (15 minutes / 2:05)

The last core concept of OOP we need to implement is inheritance.

### Turn & Talk (5 min)
Turn to your neighbor or the people in your row and discuss the following questions:

* What is inheritance?
* What problem does inheritance solve?

### Inheritance in JavaScript

In JavaScript, we can inherit from a class by *extending* it with the `extend` keyword. This will let us create a subclass:

```js
class Car {
  constructor(make, color) {
    this.make = make
    this.color = color
  }
}

class Toyota extends Car {
  drive() {
    console.log('vroom vroom')
  }
}
```

The above `Toyota` class will include all of the properties defined in the `Car` class, in addition to the `drive` method.

If we have properties that we want to add to our subclass, we still need to take in the properties of our parent class, and pass them up to our parent class with `super`:

```js
class Car {
  constructor(model, color) {
    this.model = model
    this.color = color
  }
}

class Toyota extends Car {
  constructor(model, color) {
    super(model, color)
    
    this.make = 'Toyota'
  }
  drive() {
    console.log('vroom vroom')
  }
}
```

The `super` method invokes the `constructor` method of the parent (or extended) class. So in our `Toyota` class, the `super` method will call the `constructor` method of our `Car` class.

## You Do: Extend an Animal Class (10 min / 2:15)

Open up [this repl.it](https://repl.it/@ZakkMan/JS-OOP-Define-an-Animal-Pt-2) and define an `Animal` class that has a `group` property and `eat` and `sleep` methods.

Then modify your animal class from the previous exercise so that it extends your new `Animal` class.

Once you finish defining your Animal class, create 2 instances of your sub-class and `console.log` them.

## You Do: Game of Cards (15 min / 2:30)

Open up [this repl.it](https://repl.it/@ZakkMan/JS-OOP-Card-Game) and define a `Card` class with the following properties:

- `suit` (hearts, spades, clubs, diamonds)
- `rank` (Ace, 2, 3, 4, .. Jack, King, Queen)
- `score` (1, 2, 3, 4, ... 11, 12, 13)

When you finish your `Card` class, define a `Deck` class with the following properties:

- `length` (the number of cards - should start at 52)
- `cards` (an array of cards in the deck)
- a `draw` method that returns a random card from the `cards` property

When you create an instance of your `Deck` class, have it populate the `cards` property with instances of your `Card` class.

Instantiate an instance of your Deck!











