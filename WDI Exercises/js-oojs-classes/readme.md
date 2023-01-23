# Object-Oriented Programming in Javascript

## Learning Objectives
- Answer the question, what is Object-Oriented Programming (OOP)?
- Identify and define: a class, an instance, and a constructor
- Create a class
- Use the `new` keyword to create instances of a class
- Define the concept of inheritance as it pertains to classes
- Create a class that inherits from another using the `extends` and `super` keywords

## Overview
1. Review of Objects
2. Intro to OOP in JS
3. Classes in ES6
4. Inheritance

## Schedule
| Time | Section |
| --- | --- |
| 10 min | Review Objects |
| 10 min | Intro to OOP |
| 15 min | Defining a Class |
| 10 min | Domain Modeling and build your first class |
| 10 min | Classes in ES6 |
| 20 min | Make an ATM Class |
| 10 min | Break |
| 15 min | Inheritance |
| 20 min | Inheritance Exercise |
| 10 min | Closing |

## Intro

### 1. Review of Objects in JS (10 minutes / 0:10)

The important thing to remember about objects is that they encapsulate related data and behavior into an organized structure. We saw this when we discussed **object literal notation**. Recall that we can define an object like this:

Lets check out `one.js` in the `demos/` folder!

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

**Quick Quiz**

1. What is a key-value pair?
2. What is a property of an object?
3. What is a method?
4. Can we store anything in an object?

We're doing two really important things here:

  1. We're encapsulating all data and behavior for a car inside a single object (i.e. a single place)
  2. We're modeling some real world thing inside our code

The second point is the basis of Object-Oriented Programming and what makes it so powerful.

Why might we want to model real world things in our code?

__Example: lets say we're building an app for a car rental company (Rent-a-Car). If they buy a new car to rent out to customers, they'll want to manage that new car inside the app we're building for them. Do we want to create a new object like the one above for each car new car?__

### 2. Intro to OOP in JS (5 minutes / 0:15)

Before we get in to OOP in JS there are a few loose ends we need to tie up:

<details>
    <summary>1. What is context?</summary>

    A reference (through `this`) to the object that owns the currently executing code.
</details>
<details>
    <summary>2. What is scope?</summary>

    Where variables are accessible during function invocation.
</details>
<details>
    <summary>3. What `type` is a function?</summary>

    Well it's a function, but a function is a type of object!
</details>
<details>
    <summary>4. Do functions have context?</summary>

    They do!
</details>

### We Do: Defining a class (10 minutes / 0:25)
Lets check out `one.js` in the `demos/` folder!

<details>
  <summary>ES5 Class</summary>

  ```js
  function Car(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.drive = () => console.log('vroom vroom');
    this.gps = location => console.log(`driving to ${location}`);
    this.paint = newColor => (this.color = newColor);
  }
  ```
</details>

#### Vocabulary:

**Class** - an object that models real world things in our application

**Instance** - a object defined by our class

**Constructor** - the function that defines instances of our class

#### You Do: Domain Modeling and building your first class! (10 minutes / 0:35)

Lets check out `two.js` in the `exercises/` folder!

### 3. Classes in ES6 (10 minutes / 0:25)
Understanding the old syntax is important for understanding the new syntax. With ES6, the language was updated to bring the syntax more inline with how other popular programming languages handle OOP. This includes the introduction of the `class` keyword. Nothing changed under the hood, just what we type to create a class.

Lets checkout `three.js` in the `exercises/` folder!

<details>
  <summary>Solution</summary>

```js
class Car {
  constructor(make, model, color) {
    this.make = make
    this.model = model
    this.color = color
  }

  drive() {
    console.log('vroom vroom')
  }

  gps( location ) {
    console.log(`beep beep, driving to ${location}`)
  }

  paint( newColor ) {
    this.color = newColor
  }
}
```

</details>

This is the syntax that you'll see most frequently now!

#### You Do: [Make an ATM Class](https://git.generalassemb.ly/ga-wdi-exercises/es6-classes-practice) (20 minutes / 1:05)

> 15 minutes exercise. 5 minutes review.

## Break (10 minutes / 1:15)

### 4. Inheritance (15 minutes / 1:30)

Often we'll need to take our class and expand on it for particular types of implementations of it. Think about types of Cars, for instance. For this case, we create sub-classes through a process called Inheritance.

In ES6, we extend an existing class with the `extend` keyword. This will let us create a subclass:

```js
class Car {
  constructor(make, color) {
    this.make = make
    this.color = color
  }
}

class Toyota extends Card {
  drive() {
    console.log('vroom vroom')
  }
}
```

If we have properties that we want to add to our subclass, we still need to take in the properties for our parent class, and pass them up to our parent class with `super`.

```js
class Car {
  constructor(model, color) {
    this.model = model
    this.color = color
  }
}

class Toyota extends Card {
  constructor(model, color) {
    super(model, color)
    this.make = 'Toyota'
  }
  drive() {
    console.log('vroom vroom')
  }
}
```

## You Do: [Inheritance](https://git.generalassemb.ly/ga-wdi-exercises/es6-classes-inheritance-practice) (20 minutes / 1:50)

> 15 minutes exercise. 5 minutes review.

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
