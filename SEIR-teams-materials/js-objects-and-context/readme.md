# Objects and Context

## Learning Objectives

### Objects

- Demonstrate how to create an object using object literal syntax
- Explain nested data structures
- Explain the difference between object properties and methods
- Write an object method

### Context

- Explain Javascript 'context' and what the value of the 'this' keyword refers to
- Explain what the default context of Javascript executing in the browser is
- Use the 'this' keyword to set and retrieve a property on an object

## Framing

This lesson will cover two concepts that are crucial for encapsulation and abstraction in Javascript: Objects and Context. Objects allow us to box up multiple functions and data under a single variable. Context determines which object "owns" a function while it's being invoked.

## Objects in Review

Let's visit a site most of you will probably be familiar with, [Amazon](https://www.amazon.com). If we type something to search for, you may notice all the results have similar properties. Things like, _price_, _title_, _reviews_, _Prime eligibility_ and a _picture_.

In programming, we need a way to contain logic and data about things in the real world and represent them in our programs. An effective way to do this is with _objects_.

In JavaScript, **objects are collections of properties(key-value pairs)**. We can add, remove, or change these properties as we please. The simplest way to create an object is by using **object literal notation**.

```js
const car = {
  make: 'Honda',
  model: 'Civic',
  year: 1997, // Generally, there's no comma after the last pair!
};
```

> "make" is the key, while "Honda" is the value

> Objects must have both a key and a value - neither can be empty.

Objects are a complex data type - sometimes referred to as a dictionary/hash/map.

- They are a collection of key-value pairs called properties.
- Key-value pairs are separated by commas.
- The keys which we explicitly state when defining a property are analogous to our array indexes. They are how we access the associated value (more below).

In the above example, the variable `car` points to an object literal. This particular object has 3 properties: `make`, `model` and `year`.

We could store this same information in an array like this...

```js
const car = ['Honda', 'Civic', 1997];
```

What advantages might there be in storing `car` as an object?

### You Do: Model an SEI Course

Your goal is to code an object literal:

- In groups, work together to identify the attributes of the SEI program.
- Take a few minutes to construct your object literal with appropriate key value pairs.
- **Bonus - One key value pair contains an array**
- **Double bonus - one key value pair contains another object**

### Interacting with Objects

#### Create

We already saved a sample object to a `car` variable. We did this using **object literal notation**.

```js
const car = {
  make: 'Honda',
  model: 'Civic',
  year: 1997,
  'tire-type': 'Goodyear',
  // NOTE: Keys with a "-" or space in their name must be surrounded by quotation marks.
  // NOTE: You should use camelCase in JS, but sometimes you need to work with hyphens in JSON objects, if they were generated from a non-JavaScript API.
};
```

#### Read

To access object properties, we use either dot `.property` or bracket `['property']` notation.

```js
console.log( car.make )
console.log( car['make'] )

// What happens when we try to access a property yet to be defined?
console.log( car.owner )

// NOTE: When accessing properties whose keys have a "-" or space in them, you must use bracket notation.
console.log( car['tire-type'] )

// NOTE: When accessing properties with a variable, you must also use bracket notation
function(carProp) {
  car[carProp]
}
```

Dot notation is much more common than bracket notation. Why might that be?

#### Update

Call on the object property just like we did when reading it, and use the assignment operator `=` followed by its new value.

```js
car.year = 2003;
// or
car['year'] = 2003;
```

We can also create brand new properties for an object after it's initialized using this method.

```js
// Now our car has a smell property equal to "Leathery Boot". We did not initially declare this property.
car.smell = 'Leathery Boot';

console.log(car);
```

#### Delete

If you want to delete an object property entirely, use the `delete` keyword.

- This deletes the whole key-value pair, not just the value.
- You won't do this often.

```js
delete car.smell;
```

#### Iterating through an Object

Like arrays, you can use a loop to iterate through an object. Say we want to print out all of an object's keys...

This is called a `for in` loop

```js
// Iterate through object keys
for (key in car) {
  console.log(key);
}
```

> Knowing this, how could we go about getting all the values in an object?

Javascript objects also have native methods that take care of this for us...

```js
// .keys()
Object.keys(car);
// .values()
Object.values(car);
// key-value pairs
Object.entries(car);
```

### Lab

Practice CRUD by performing the following operations:

- Create a `person` object with the following properties and set each value to an empty string:
  - `firstName`
  - `lastName`
- Write code that updates the firstName property to your first name.
- Write code that updates the lastName property to your last name.
- Write code that adds a new property called `pets` and sets its value as an array containing your pet names. If you have no pets, set it to an empty array.
- Write code using string template literals that console logs `My name is` followed by your first name and last name values from the person object.
- Write code that console logs `I have a pet named:` followed by the name of the first pet in your array. If you do not have any pets, write code that uses an if statement to confirm that you have no pets in your array and console.logs: `I have no pets`.
- Delete the pets property from the person array and console log the person object to confirm that the property no longer exists.

## Methods

Methods are functions that are attached to some object.

```js
// Our car now has a drive method...
const car = {
  make: 'Honda',
  model: 'Civic',
  color: 'red',
  drive: function () {
    console.log('vroom vroom');
  },
  gears: ['Reverse', 'Neutral', '1', '2', '3', '4'],
  engine: {
    horsepower: '6 horses',
    pistons: 12,
    fast: true,
    furious: false,
  },
  // Methods can take arguments
  gps: function (location) {
    console.log(`Beep boop, driving to ${location}`);
  },
};

// We can run the car's two methods like so...
car.drive();
car.gps('neverland');
```

Checkout our awesome souped-up car! With methods as part of our Javascript toolbox, we now have an interface with which we can interact with our objects.

> We've only scratched the surface for objects. We'll dive a bit deeper into them later.  If you're looking for more on the power of objects and functions, we recommend reading [The Secret Life of JS Objects](http://eloquentjavascript.net/06_object.html) chapter in Eloquent JS

# Context

## What is Context?

In Javascript, context tells us where functions are invoked.

In short, the **context is the object that a function is attached to**. We'll see that context can change under certain circumstances.

Every time a Javascript function is called, a context is determined / set. That context is always an object, and can be referenced in the function definition using a special keyword in JS, `this`.

We use `this` similar to the way we use pronouns in natural languages like English and French. Say we write:

```
John bites an apple. The apple tastes good
```

We can also say it another way:

```
John bites an apple. This tastes good
```

What does `this` refer to?` The apple.

In a similar manner, we use the `this` keyword as a replacement for the subject in question.

### `this` in an Object

Here's an example of the most common way context is determined for a function. When a method is called on an object, that object becomes the context...

```js
const user = {
  fullName: 'James Reichard',
  sayName: function () {
    console.log(`My name is ${this.fullName}.`);
  },
};
user.sayName();
```

<details>
  <summary><strong>What does <code>this</code> represent here?</strong></summary>

> Here the object that the method is being called on is `user`

</details>


### 'Getting' Properties using `this`

```js
const user = {
  fullName: 'James Reichard',
  favoriteFood: 'Rice pudding',
  sayName: function () {
    console.log(`My name is ${this.fullName}.`);
  },
  sayHello: function () {
    console.log(
      `Hi my name is ${this.fullName} and my favorite food is ${this.favoriteFood}.`
    );
  },
};

user.sayHello(); // for this function invocation, `this` is `user`
```

### 'Setting' Properties using `this`

This feature allows not just 'getting' property info on objects, but also setting properties. Consider this example:

```js
const user = {
  userName: 'numbr1rawkr',
  isSignedIn: false,
  signIn: function () {
    this.isSignedIn = true;
  },
  signOut: function () {
    this.isSignedIn = false;
  },
};

user.signIn();
user.isSignedIn; // => true
user.signOut();
user.isSignedIn; // => false
```

_But what if we want more control?_

Because we've written a method to set the `isSignedIn` property, we can use that method to provide more control. For example... what if we wanted to check a user's password before letting them sign in?

```js
const user = {
  userName: 'numbr1rawkr',
  password: 'password1234',
  isSignedIn: false,
  signIn: function (pwd) {
    if (pwd === this.password) {
      this.isSignedIn = true;
    }
  },
  signOut: function () {
    this.isSignedIn = false;
  },
};

user.signIn('tacobell');
user.isSignedIn; // => false
user.signIn('password1234');
user.isSignedIn; // => true
user.signOut();
user.isSignedIn; // => false
```

### 'Running' methods using `this`

We can also use `this` to reference and call other methods on the object.

```js
const user = {
  userName: "numbr1rawkr",
  password: "password1234",
  isSignedIn: false,
  signIn: function(pwd) {
    if(pwd === this.password) {
      this.isSignedIn = true
      this.greetUser()
    }
  },
  signOut: function() {
    this.isSignedIn = false
  },
  greetUser: function() {
    console.log(`Welcome back ${this.userName}!`)
  }
}

user.signIn("tacobell")
user.isSignedIn // => false
user.signIn("password1234")
// => Welcome back numbr1rawkr
user.isSignedIn // => true
user.signOut()
user.isSignedIn // => false
-
```

### Default Context

When a function is called, but it's not a method on an object, and no context is otherwise assigned (see later sections), then the context is set to the default context. In a browser, the default context is the `window` object.

```js
function revealThis() {
  console.log(this);
}

revealThis();
```

### A Rule of Thumb

In general, `this` is probably the **parent** or enclosing item (item being function or object)

Some exceptions are:
- In an event listener function, `this` is the thing where the event originated (such as the button that was clicked).
- In another callback function, in which case `this` is probably the `window`.
- When `.bind()` is used to change the context manually.

When in doubt, log it out...

```js
console.log(this);
```

## We Do: Review

```js
const ship = {
  name: 'Millennium Falcon',
  speed: 11,
  crew: ['Han Solo', 'Chewbacca'],
  passengers: ['Leia'],
  famous: true,
  heardOfIt: function() {
    console.log("You've never heard of the millennium falcon!?");
    this.famous = false;
  },
  addPassenger: function(passenger) {
    this.passengers.push(passenger);
  },
  removePassenger: function(passenger) {
    let index = this.passengers.indexOf(passenger);
    this.passengers.splice(index, 1);
  }
};
```
1. How do we access the ship's name?
1. How can we change the speed to 13?
1. What code would we run to add a passenger "Luke"?
1. How can you remove the passenger "Leia"?
1. What code adds a new property called "missions" and set it equal to an empty object?
1. How do we add "smuggled cargo" to the missions with 'prisoners', 'stolen goods', 'unobtanium' as a value?
1. What code deletes the speed property?
1. What's difference between a property and a method?
1. How can I view all of an object's properties?
1. What is the keyword which references the context of a function/method?
1. What is the default context for a function in the browser?

## Bonus

Read through the bonus section of this lesson plan, paying attention to the `bind`, `call` and `apply` methods. These are ways for you to exercise more control over and gain the ability to re-assign context.

## You Do: Bind, Call and Apply (Bonus)

There are two other ways to invoke a function and change the context, which are very similar: `bind`, `call`, and `apply`.

These let you "force" `this` to be something specific.

### Bind

```js
const user = {
  name: 'James Reichard',
  favoriteFoods: ['Ramen', "Cap'n Crunch", 'Tacos'],
  displayFoods: function () {
    this.favoriteFoods.forEach(
      function (food) {
        console.log(`${this.name} likes ${food}`);
      }.bind(this)
    );
  },
};

user.displayFoods();
```

[More information](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

> Note: Arrow functions are an exception, they get `this` defined once at execution time. Using `bind`, `apply`, or `call` to try and change the context won't result in an error, but the context stays the same.
>
> `() => {}`

### Call

```js
function sayHello() {
  console.log(`Hi! My name is ${this.name}`);
}

const person = { name: 'Manatee the Railyard Toreador' };
const cat = { name: 'Hobbles McGillicudy' };
sayHello.call(person);
sayHello.call(cat);
```

`call` also lets us pass in the arguments to the function:

```js
function sayHello(favColor) {
  console.log(`Hi! My name is ${this.name} and I like ${favColor}`);
}

const person2 = { name: 'Manatee the Railyard Toreador' };
const cat2 = { name: 'Hobbles McGillicudy' };
sayHello.call(person2, 'blue');
sayHello.call(cat2, 'peachpuff');
```

[More information](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

### Apply

`apply` works almost exactly like `call`, only you pass in _array_ of arguments instead of a comma-separated list.

`apply` is useful when the number of arguments to pass to the function is unknown and/or arbitrary.

[More information](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

## Further Reading / Resources

- [Javascript Scoping and Hoisting](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)
- [The Secret Life of JS Objects](http://eloquentjavascript.net/06_object.html)
- [JS for Cats](http://jsforcats.com/)
- [CoderByte Challenges](https://coderbyte.com/challenges/)
- [Understanding Scope and Context in JavaScript](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)
- [Understand JavaScript’s “this”](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)
- [Everything you wanted to know about JavaScript scope](http://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/)
