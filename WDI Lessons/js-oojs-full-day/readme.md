# Object-Oriented JavaScript and Classes

## Learning Objectives

- Explain the importance of Object-Oriented JavaScript (OOJS)
- Describe the role of classes in JavaScript
- Use the `new` keyword to create objects with shared properties and methods
- Define the concept of inheritance as it pertains to classes
- Create a class that inherits from another using the `extends` and `super` keywords

## Framing (10 minutes / 0:10)

#### What is an object in programming?

An object encapsulates related data and behavior in an organized structure.

We've already gotten exposure to JavaScript objects using **object literal notation**. We could define a car object in this way:

```js
let car = {
  make: "Honda",
  model: "Civic",
  color: "red",
  drive: function(){
    console.log("vroom vroom")
  },
  gps: function(location){
    console.log(`Beep boop, driving to ${location}`)
  },
  paint: function( newColor ){
    console.log(`Your car has been painted ${newColor}`)
    this.color = newColor
  }
}
```

What's nice about the above code snippet?

<details>

  <summary><strong>Some thoughts...</strong></summary>

  > * Related properties and methods are packaged together.
  > * Fewer global variables.
  > * Readability.

</details>

## Classes (20 minutes)

The distinction between **classes** and **instances** may seem foreign and technical but, in reality, it is very similar to how we think about the real world.

I can say "imagine a car" and we have no problem doing so.

I can also point at something, ask "is that a car?" and get near universally consistent answers.

We can even look at a blueprint for the car and it will have a description, a basic drawing, and technical specifics about the car it represents.

![Car Blueprint](https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjF-KS0w_nXAhWpSN8KHaCXDokQjRwIBw&url=http%3A%2F%2Fdrawingdatabase.com%2Flamborghini-gallardo-lp550%2F&psig=AOvVaw17K4ukQR16DlN5vStab2dC&ust=1512791974616731)

The *general* idea of the "car" is the **class**. Each of us has a mental model of what a car is: it has four wheels, runs on gas, has a steering wheel that allows us to drive it, etc.

The tangible metal machine is the **instance**, and we can have lots of those cars that follow the same blueprint.

![Cars](https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj-wtGkw_nXAhUMNd8KHe-mDF0QjRwIBw&url=http%3A%2F%2Fsimplywallpapers.com%2Fwallpaper%2FLamborghini-blue-cars%2F38950%2F&psig=AOvVaw3hh3w4G3XNi4uzF4UQ1Fvr&ust=1512791941292285)

There are two different aspects of our data that we want our classes to represent. The first are the data properties, or **attributes** that make up our car. Some examples of these are its length, color, height, number of doors, its engine type etc. There will also be actions associated with it, which we will call **methods**. Some examples of these actions are driving the car, shutting its doors, and honking its horn.

#### Why might we use an OOP approach to programming?

Object-oriented programming (OOP) provides us with opportunities to clean up our procedural code and model it more-closely to the external world.

OOP helps us to achieve the following...
  * **Abstraction:** Determining essential features
  * **Encapsulation:** Containing and protecting methods and properties
  * **Modularity:** Breaking down a program into smaller sub-programs

OOP becomes **very** important as our front-end code grows in complexity. Even a simple app will have lots of code on the front-end to do things like...
* Send requests to a back-end to fetch / update / destroy data
* Update the state of the page as data changes
* Respond to events like clicking buttons

### Creating Objects (5 minutes / 0:15)

So far, we've had to make our objects 'by hand' (i.e. using object literals)...

```js
var celica = {
  model: 'Toyota Celica',
  color: 'limegreen',
  fuel: 100,
  drive: function() {
    this.fuel--
    return 'Vroom!'
  },
  refuel: function() {
    this.fuel = 100
  }
}

var civic = {
  model: 'Honda Civic',
  color: 'lemonchiffon',
  fuel: 100,
  drive: function() {
    this.fuel--
    return 'Vroom!'
  },
  refuel: function() {
    this.fuel = 100
  }
}
```

Even though we're technically using objects to organize our code, we can see a noticeable amount of duplication. Just imagine if we needed a hundred cars in our app! Our code would certainly not be considered "DRY".

As you may have noticed, some of these properties change between cars, and others stay the same. In the example above, while the `model` and `color` properties may vary, the `fuel` property and `drive` and `refuel` functions are the same for every car.

Making all of these similar objects by hand is just tedious. What if we could build a function that makes them for us?

### You Do: Create a `makeCar` Function (10 minutes / 0:25)

> 5 minutes exercise. 5 minutes review.

Define a function `makeCar` that takes two parameters - `model` and `color` - and returns an object literal representing a car using those params.

```js
// This should return a car object just like the previous example
var celica = makeCar("Toyota Celica", "limegreen")
```

<details>
  <summary><strong>Solution...</strong></summary>

  ```js
  function makeCar(model, color){
    return {
      model: model,
      color: color,
      fuel: 100,
      drive: function() {
        this.fuel--
        return 'Vroom!'
      },
      refuel: function() {
        this.fuel = 100
      }
    }
  }
  ```

</details>

This is the basic idea behind OOP; we define a **blueprint** for an object and use it to generate multiple **instances** of it!

## Classes

### Overview (10 minutes / 0:35)

It's so common that we need to make objects with similar properties and methods that programming languages usually have some features to help with this.

In Javascript, ES6 added a feature called **classes** to accomplish this. A class serves as a **blueprint** for instantiating new objects.

Let's take a look the following `Car` class:

```js
class Car {
  constructor(model, color){
    this.model = model
    this.color = color
    this.fuel = 100
  }
  drive(){
    this.fuel--
    return "Vroom!"
  }
  refuel(){
    this.fuel = 100
  }
}

const celica = new Car("Toy-Yoda Celica", "limegreen")
const civic = new Car("Honda Civic", "lemonchiffon")
```

Classes work a lot like the `makeCar` function we just created, but are a more performant and offer more robust features.  
 We use the `new` keyword to generate **instances** of a class (just like our earlier `celica` and `civic` examples).

> Note that classes typically are capital case to make it obvious
that they are classes. This isn't necessary, but is a convention you should follow.

### I Do: Make a Person Class (10 minutes / 0:45)

```js
class Person {
  // We use the constructor method to initialize properties for a class instance.
  // It takes whatever arguments we want to pass into an instance.
  constructor(initialName){
    this.name = initialName
    this.species = "Homo Sapiens"
  }
  // We define any methods accessible to an instance outside of the constructor
  speak(){
    return `Hello! I'm ${this.name}`
  }
}

const andy = new Person("Andy")
andy.speak() // "Hello, I'm Andy"
```

#### `this`

Notice the use of `this`, and the fact that we don't return from the class. Here's why we write classes this way...

When we generate a class instance using `new`, Javascript will automatically...
  1. Create a new, empty object for us  
  2. Generate a context for that object (`this` -> the new object)  
  3. Return the object  

#### Where are the Commas?

Unlike object notation, you do not need to use commas when separating class methods.

### You Do: [Make an ATM Class](https://git.generalassemb.ly/ga-wdi-exercises/es6-classes-practice) (20 minutes / 1:05)

> 15 minutes exercise. 5 minutes review.

## Break (10 minutes / 1:15)

## Inheritance (15 minutes / 1:30)

Although OOP can help us keep our Javascript nice and clean, it's still easy to duplicate code when defining multiple classes. Consider the following example...

```js
class Dog {
  constructor (name, breed, tail) {
    this.name = name
    this.breed = breed
    this.waggingTail = tail
    this.diet = []
  }
  eat (food) {
    this.diet.push(food)
    console.log(this.diet)
  }
  bark () {
    return `Bark! Hello, this is dog. My name is ${this.name}`
  }
}

class Cat {
  constructor(name, breed, numLives){
    this.name = name
    this.breed = breed
    this.numLives = numLives
    this.diet = []
  }
  eat(food){
    this.diet.push(food)
    console.log(this.diet)
  }
  meow(){
    return `Meow! I am not a dog! My name is ${this.name}`
  }
}
```

Here we have two classes: `Dog` and `Cat`. They have some things in common: `name`, `breed`, `diet` and `eat`. They do differ, however, in that one `bark`s and the other `meow`s.

Imagine that we had to create a number of other classes - `Horse`, `Goat`, `Pig`, etc. - all of which share the same aforementioned properties but also have methods that are particular to the class.

How could we refactor this so that we don't have to keep writing out the shared class properties and methods. Enter **inheritance**

```js
class Animal{
  constructor(name, breed){
    this.name = name
    this.breed = breed
    this.diet = []
  }
  eat(food){
    this.diet.push(food)
    console.log(this.diet)
  }
}

const dog = new Animal("Fido", "Beagle")
```

Here we've defined an `Animal` class. It contains the properties and methods that are common among specific animal classes. Wouldn't it be nice if `Dog` and `Cat` could just reference this "parent" `Animal` class so that the only things we need to put in their "child" class definitions are the properties and methods that are particular to them (e.g., `bark`, `meow`).

Lucky for us, we can do that...

```js
class Animal {
  constructor(name, breed){
    this.name = name
    this.breed = breed
    this.diet = []
  }
  eat(food){
    this.diet.push(food)
    console.log(this.diet)
  }
}

class Dog extends Animal {
  constructor(name, breed, tail){
    this.waggingTail = tail
  }
  bark(){
    return `Bark! Hello, this is dog. My name is ${this.name}`
  }
}

class Cat extends Animal {
  constructor(name, breed, numLives){
    this.numLives = numLives
  }
  meow(){
    return `Meow! I am not a dog! My name is ${this.name}`
  }
}
```

The clincher is `extends`. Whatever class is to the left of the `extends` keyword should inherit the properties and methods that belongs to the class to the right of the keyword. Let's see if this works...

```js
// Let's test out our parent. It just needs a name and breed.
const goat = new Animal("Gregory", "Mountain Goat")

// And now the children.
const fido = new Dog("Fido", "Beagle", true)
console.log(fido) // "this is not defined"
```

That didn't work out the way we expected. That's because we're forgetting one thing. When creating an instance of a child class, we need to make sure it invokes the constructor of the parent (`Animal`) class.

We can do that using the keyword `super()`

```js
class Dog extends Animal {
  constructor(name, breed, tail){
    super(name, breed)
    this.waggingTail = tail
  }
  bark(){
    return `Bark! Hello, this is dog. My name is ${this.name}`
  }
}
```

`super()` calls the constructor of the parent class. In the above example, once `super` does what it needs to do, it then runs through the rest of `Dog`s constructor.

> In order to give an instance of a child class context (i.e., be able to use `this`), you must call `super`.

> If the keyword `super` is confusing, think of a supervisor to understand that we're calling out to the next level above us (to the parent class's constructor).

## You Do: [Inheritance](https://git.generalassemb.ly/ga-wdi-exercises/es6-classes-inheritance-practice) (20 minutes / 1:50)

> 15 minutes exercise. 5 minutes review.

## You Do: [Geometry](https://git.generalassemb.ly/ga-wdi-exercises/js_geometry)

-------

## Closing / Questions (10 minutes / 2:00)

* What are the benefits to using an OOP approach to programming?
* What is a class? What is `new`? How are they related?
* What does it mean to use "inheritance" when working with classes?
* How do we indicate that one class inherits from another?
* What does `super` mean?

## Homework: [Geometry](https://git.generalassemb.ly/ga-wdi-exercises/js_geometry)

## Additional Reading

* [MDN Documentation on Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [Introduction to Javascript ES6 Classes](https://strongloop.com/strongblog/an-introduction-to-javascript-es6-classes/)
* [Getters, Setters, and Organizing Responsibility in Javascript](http://raganwald.com/2015/08/24/ready-get-set-go.html)
* [Static Members in ES6](http://odetocode.com/blogs/scott/archive/2015/02/02/static-members-in-es6.aspx)
* [Lesson: JS View Classes](https://git.generalassemb.ly/ga-wdi-lessons/js-view-classes)

#### Prototypical Inheritance

* [Inheritance and the Prototype Chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
* [ES6 Classes and Javascript Prototypes](https://reinteractive.com/posts/235-es6-classes-and-javascript-prototypes)
* [Master the Javascript Interview: What's the Difference Between Class & Prototypical Inheritance](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9#.uzl8ohf8c)
