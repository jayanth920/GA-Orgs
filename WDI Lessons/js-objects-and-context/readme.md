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

## Framing (5 min / 2:35)

This lesson will cover two concepts that are crucial for encapsulation and abstraction in Javascript: Objects and Context. Objects allow us to box up multiple functions and data under a single variable. Context determines which object "owns" a function while it's being invoked.

Today we will explore why we might want to use objects in our code, and learn how to create, access, and alter objects. With context, we'll see how all function invocations are always attached to an object which we can access via the keyword `this`.  We'll learn how to use `this` on our own objects and how to alter the context of `this`.  

## Intro to Objects (5 min / 2:40)

Let's visit a site most of you will probably be familiar with, [Amazon](https://www.amazon.com). If we type something to search for, you may notice all the results have similar properties. Things like, *price*, *title*, *reviews*, *Prime eligibility* and a *picture*.

In programming, we need a way to contain logic and data about things in the real world and represent them in our programs. An effective way to do this is with *objects*.  

In JavaScript, **objects are collections of properties(key-value pairs)**. We can add, remove, or change these properties as we please. The simplest way to create an object is by using **object literal notation**.

```js
var car = {
  make: 'Honda',
  model: 'Civic',
  year: 1997      // Don't add a comma after the last pair!
}
```

Objects are a complex data type - sometimes referred to as an *unordered* list (or dictionary/hash/map).
* They are a collection of key-value pairs called properties.
* The keys which we explicitly state when defining a property are analogous to our array indexes. They are how we access the associated value (more below).

In the above example, the variable `car` points to an object literal. This particular object has 3 properties: `make`, `model` and `year`.

We could store this same information in an array like this...

```js
var car = ['Honda', 'Civic', 1997]
```

Why advantages might there be in storing `car` as an object?

### You Do: Model WDI Student (5 min / 2:45)

Your goal is to *pseudo-code* an object literal:

* In pairs, spend 2 minutes thinking about what attributes a WDI student should have (think of at least 5!).
* Take 3 minutes to construct your object literal with appropriate key value pairs by drawing it on the table
* **Bonus - One key value pair contains an array**

### Interacting with Objects (15 min / 3:00)

#### Create

We already saved a sample object to a `car` variable. We did this using **object literal notation**.

```js
var car = {
  make: 'Honda',
  model: 'Civic',
  year: 1997,
  'tire-type': 'Goodyear'
  // NOTE: Keys with a "-" in their name must be surrounded by quotation marks.
  // NOTE: You should use camelCase in JS, but sometimes you need to work with hyphens in JSON objects, if they were generated from a non-JavaScript API.
}
```

ASIDE: Another way of creating objects is to use the **Object Constructor method** (`var myObj = new Object()`)

```js
var car = new Object()
  car.make = 'Honda',
  car.model = 'Civic',
  car.year = 1997
```

We will be using *object literal notation* moving forward.  

#### Read

To access object properties, we use either dot `.property` or bracket `['property']` notation.  (`objectName.property`)

```js
console.log( car.make )
console.log( car['make'] )

// What happens when we try to access a property yet to be defined?
console.log( car.owner )

// NOTE: When accessing properties whose keys have a "-" in them, you must use bracket notation.
console.log( car['tire-type'] )
```

#### Update

Call on the object property just like we did when reading it, and use the assignment operator `=` followed by its new value.  (`objectName.property = newValue`)

```js
car.year = 2003
```

We can also create brand new properties for an object after it's initialized using this method.

```js
// Now our car has a smell property equal to "Leathery Boot". We did not initially declare this property.
car.smell = "Leathery Boot"
```

#### Delete

If you want to delete an object property entirely, use the `delete` keyword.
* This deletes the whole key-value pair, not just the value.
* You won't do this often.

```js
delete car.smell
```

#### Iterating through an Object

Like arrays, you can use a loop to iterate through an object. Say we want to print out all of an object's keys...

```js
// Iterate through object keys
for (attribute in car) {
  console.log( attribute )
}
```
> Knowing this, how could we go about getting all the values in an object?

Javascript objects also have native methods that take care of this for us...
```js
// .keys()
Object.keys( car )
// .values()
Object.values( car )
```

### Exercise (15 min / 3:15)

Create a variable named `wdiStudent` and assign it to an object literal.

1. Give your student at least three properties.
2. One must have a key that contains a hyphen.
3. One must contain an array or object.
4. Update two properties, one of which is the hyphenated.
5. Give your student a new property using dot or bracket notation.
6. Delete one attribute.
7. Iterate through and print out all of the student's key-value pairs.

> [Solution](https://gist.github.com/nolds9/efdb0a320e7143f42e96)

### Nested Collections (5 min / 3:20)

Object properties aren't limited to simple data types. We can also nest collections inside of collections.

```js
var car = {
  make: "Honda",
  model: "Civic",
  year: 1997,

  // An array within an object.
  gears: ["Reverse", "Neutral", "1", "2", "3", "4"],

  // An object within an object.
  engine: {
    horsepower: "6 horses",
    pistons: 12,
    fast: true,
    furious: false
  }
}
```

**Q** In the above examples, how do we access...
* "Neutral" (i.e., array value within an object)?
* "6 horses" (i.e., object value within an object)?


## Methods (10 min / 3:30)

Methods are functions that are attached to some object.

```js
// Our car now has a drive method...
var car = {
  make: "Honda",
  model: "Civic",
  color: "red",
  drive: function(){
    console.log("vroom vroom")
  },
  gears: ["Reverse", "Neutral", "1", "2", "3", "4"],
  engine: {
    horsepower: "6 horses",
    pistons: 12,
    fast: true,
    furious: false
  },

  // Methods can take arguments
  gps: function( location ){
    console.log( `Beep boop, driving to ${location}` )
  },
  paint: function( newColor ){
    console.log( `Your car has been painted ${newColor}` )
    car.color = newColor
  }
}

// We can run the car's two methods like so...
car.drive()
car.paint( "blue" )
console.log( `Car color is: ${car.color}` )
```

Checkout our awesome souped-up car!  With methods as part of our Javascript toolbox, we now have an interface with which we can interact with our objects.

We've only scratched the surface for objects. We're going to dive much deeper into them later on in the course.

> If you're looking for a sneak peak into the power of objects and functions, we recommend reading [The Secret Life of JS Objects](http://eloquentjavascript.net/06_object.html) chapter in Eloquent JS

### You Do: Shrimp My Ride (5 min / 3:35)

Use the car example above to create your own *Boat*. Give your boat whatever properties and methods you would like it to have - *make it fun*! Your boat is limited only by your imagination!

Try to create at least one method!

#### Bonus!

Yo dog, I heard you like objects, so put an object in your object!

### You Do: Big Ol' Twitter Object (15 min / 3:50)

As this course continues you will encounter plenty of Javascript objects in the wild. Spend **10 minutes** on the following...

* Go to the [Big Ol' Twitter Object](http://ga-wdi-exercises.github.io/big_ole_twitter_object/) page!
* In the console, you can examine the tweet object by typing `tweet`. This object represent this [tweet](https://twitter.com/twitterapi/status/210462857140252672) from the [Twitter API](https://twitter.com/TwitterAPI) account.
* Answer the questions in the page! Test your answers in the console!

<!-- [Twitter JSON Exercise Repo](https://github.com/ga-dc/big_ole_twitter_object) -->

## Break (10 min / 4:00)

# Context

## What is Context? (20 min / 4:20)

In Javascript, context tells us where functions are invoked.

In short, the **context is the object that a function is attached to**. We'll see that context can change under certain circumstances.

Every time a Javascript function is called, a context is determined / set. That context is always an object, and can be referenced in the function definition using a special keyword in JS, `this`.

We use `this` similar to the way we use pronouns in natural languages like English and French. Say we write:

```
 “John bites an apple.  The apple tastes good”
```

We could have written this:

```
“John bites an apple.  This tastes good”
```

In a similar manner, we use the `this` keyword as a replacement for the subject in question.

### `this` in an Object

Here's an example of the most common way context is determined for a function. When a method is called on an object, that object becomes the context...

```js
var user = {
  fullName: "James Reichard",
  sayName: function(){
    alert(`My name is ${this.fullName}.`)
  }
}
user.sayName()
```

<details>
  <summary><strong>What does <code>this</code> represent here?</strong></summary>

  > Here the object that the method is being called on is `user`

</details>

### A Rule of Thumb

In general, `this` is whatever was to the **left of the period** when it was ***called***, unless...
- You're in an event listener function, in which case `this` is the thing that was clicked on.
- You're in another callback function, in which case `this` is probably the `Window`.

If you're ever unsure what `this` is at a given point in your code.

```js
console.log(this)
```

### 'Getting' Properties using `this`

```js
var user = {
  fullName: "James Reichard",
  favoriteFood: "Rice pudding",
  sayName: function(){
    alert(`My name is ${this.fullName}.`)
  },
  sayHello: function(){
    console.log(`Hi my name is ${this.fullName} and my favorite food is ${this.favoriteFood}.`)
  }
}

user.sayHello() // for this function invocation, `this` is `user`
```

### 'Setting' Properties using `this`

This feature allows not just 'getting' property info on objects, but also setting properties. Consider this example:

```js
var user = {
  userName: "numbr1rawkr",
  isSignedIn: false,
  signIn: function() {
    this.isSignedIn = true
  },
  signOut: function() {
    this.isSignedIn = false
  }
}

user.signIn()
user.isSignedIn // => true
user.signOut()
user.isSignedIn // => false
```


*But what if we want more control?*

Because we've written a method to set the `isSignedIn` property, we can use that method to provide more control. For example... what if we wanted to check a user's password before letting them sign in?

```js
var user = {
  userName: "numbr1rawkr",
  password: "password1234",
  isSignedIn: false,
  signIn: function(pwd) {
    if(pwd === this.password) {
      this.isSignedIn = true  
    }
  },
  signOut: function() {
    this.isSignedIn = false
  }
}

user.signIn("tacobell")
user.isSignedIn // => false
user.signIn("password1234")
user.isSignedIn // => true
user.signOut()
user.isSignedIn // => false
```

### 'Running' methods using `this`

We can also use `this` to reference and call other methods on the object.

```js
var user = {
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

## Other `this` Cases (10 min / 4:30)

### Events

```html
<button>Hi there</button>
```

```js
document.getElementsByTagName('button')[0].addEventListener('click', function(){
  alert(this.innerHTML)
})
```

<details>
  <summary><strong>What does <code>this</code> represent here?</strong></summary>

  > `this ===` the button, so it alerts "Hi there".

</details>

### Default Context

When a function is called, but it's not a method on an object, and no context is otherwise assigned (see later sections), then the context is set to the default context. In a browser, the default context is the `window` object.

```js
function revealThis() {
  console.log(this)
}

revealThis()
```

### Non-Event Callbacks

```js
var fruits = ["apple", "banana", "cantaloupe"]

fruits.forEach(function(){
  console.log(this)  
  // this === the `Window` object
})
```

#### Aside: `forEach`

`forEach` is a Javascript method used to iterate through a collection and do something with each item in it.

```js
var fruits = ["apples", "bananas", "cherries"]

for(var i = 0; i < fruits.length; i++) {
  console.log(`Every day I eat two ${fruits[i]}`)
}

fruits.forEach(function(currentFruit) {
  console.log(`Every day I eat two ${currentFruit}`)
})
```

Note that it is very rare to intentionally use `this` to refer to the window object. Usually this happens when we mistakenly use this incorrectly (a very easy/common mistake for new and even experienced JS developers).

## You Do: Write, Pair, Share (5 min / 4:35)

Consider the following example...

```js
var user = {
  fullName: "James Reichard",
  favoriteFoods: ["Ramen", "Capn Crunch", "Tacos"],

  displayFoods: function() {
    console.log(`Things ${this.fullName} likes:`)
    this.favoriteFoods.forEach(function(food) {
      console.log(food)
    })
  }

}

user.displayFoods()
```

Using what we know about forEach, what do we expect the output to be?

Now what about this *slightly* modified example...

```js
var user = {
  fullName: "James Reichard",
  favoriteFoods: ["Ramen", "Capn Crunch", "Tacos"],

  displayFoods: function() {
    this.favoriteFoods.forEach(function(food) {
      console.log(`${this.fullName} likes ${food}`)
    })
  }

}

user.displayFoods()
```

### Answer

In the first case, `this` behaves like we would expect. It references `user` since it's inside a function attached to an `user`.

In the second case, `this` is inside an anonymous function, so it refers to the global object.

Note that this issue frequently appears anytime we use a callback / anonymous function, such as...

* using `setTimeout()` or `setInterval()` to schedule callbacks
* using `forEach()` or other iteration functions
* for event listeners passed into `someElement.addEventListener()`

## Fixing the Global `this` Gotcha (5 min / 4:40)

One trick is to store the `this` you want in another variable, commonly named `self` or `that`.

```js
var user = {
  fullName: "James Reichard",
  favoriteFoods: ["Ramen", "Cap'n Crunch", "Tacos"],
  displayFoods: function() {
    var self = this
    this.favoriteFoods.forEach(function(food) {
      console.log(`${self.fullName} likes ${food}`)
    })
  }
}

user.displayFoods()
```

* You can also use `.bind(this)` attached to the end of your callback function
* Use an **Arrow function** as your call back function.  *This preserves the context of* `this`!

## You Do: Test Your Context Knowledge (15 min / 4:55)

> 10 minutes exercise. 5 minutes review.

```js
/*A*/
var user = {
  firstName: "john",
  capitalized: function () {
    /*B*/
    return this.firstName.substring(0, 1).toUpperCase() + this.firstName.substring(1)
  },
  sayName: function () {
    /*C*/
    alert('My name is ' + this.capitalized() + '.')
  }
}

console.log("Welcome, " + user.capitalized() + "!")

var buttons = document.getElementsByTagName('button')
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', user.sayName)
}

var inputs = document.getElementsByTagName('input')
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('keydown', function () {
    /*D*/
    console.log('Keypress detected for ' + this.firstName)
  })
}

user.sayName()
/*E*/
```

When the code above is executed...

1. What is the value of `this` at A?
    - `Window`
    - `null`
    - `user`
2. What is the value of `this` at B?
    - `Window`
    - `null`
    - `user`
3. Why does the click event throw an error?
    - Because there aren't parentheses after `user.sayName`
    - Because `user.sayName` is in an event so `this` is not `user`
    - Because you can't use `alert` inside a function
    - Because `user` is not accessible in the scope of the event listener
4. What is the value of `this` at D?
    - The `keydown` event
    - `Window`
    - The element that was keyed-down upon
    - `user`
5. Why does the `user.sayName()` at the end **not** throw an error?
    - Because `this` is `user`: what was to the left of the period
    - Because `user` didn't exist until it was created with the click event
    - Because it is called in the global scope

<details>

  <summary><strong>When you've finished...</strong></summary>

  <ol>
    <li>`Window`</li>
    <li>`user`</li>
    <li>Because `user.sayName` is in an event so `this` is not `user`. In an event listener `this` is always the HTML element that triggered the event.</li>
    <li>The `input` that was keyed-down upon</li>
    <li>Because `this` is `user`: what was to the left of the period</li>
  </ol>

</details>

## Review Questions (5 min / 5:00)

1. How are objects like dictionaries?
2. What's difference between a property and a method?
3. How can I view all of an object's properties?
4. What is the keyword which references the context of a function/method?
5. What is the default context for a function in the browser?

## HW: Calculator

[Javascript Calculator](https://git.generalassemb.ly/ga-wdi-exercises/js-calculator)

-------

## Next Steps

Read through the bonus section of this lesson plan, paying attention to the `bind`, `call` and `apply` methods. These are ways for you to exercise more control over and gain the ability to re-assign context.

Also [take a look at this repo](https://github.com/ga-wdi-exercises/js_context_and_this/), which compares good and bad ways to apply context. We suggest reading up on `bind`, `call` and `apply` before doing so, however, since the examples make use of some of these methods.

## You Do: Bind, Call and Apply (Bonus)

There are two other ways to invoke a function and change the context, which are very similar: `bind`, `call`, and `apply`.

These let you "force" `this` to be something specific.

### Bind

```js
var user = {
  name: 'James Reichard',
  favoriteFoods: ['Ramen', 'Cap\'n Crunch', 'Tacos'],
  displayFoods: function() {
    this.favoriteFoods.forEach(function(food) {
      console.log(`${this.name} likes ${food}`)
    }.bind(this))
  }
}

user.displayFoods()
```

[More information](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

> Note: Arrow functions are an exception, they get `this` defined once at execution time. Using `bind`, `apply`, or `call` to try and change the context won't result in an error, but the context stays the same.
>
> `() => {}`

### Call

```js
function sayHello() {
  console.log(`Hi! My name is ${this.name}`)
}

var person = {name: 'Manatee the Railyard Toreador'}
var cat = {name: 'Hobbles McGillicudy'}
sayHello.call(person)
sayHello.call(cat)
```

`call` also lets us pass in the arguments to the function:

```js
function sayHello(favColor) {
  console.log(`Hi! My name is ${this.name} and I like ${favColor}`)
}

var person = {name: 'Manatee the Railyard Toreador'}
var cat = {name: 'Hobbles McGillicudy'}
sayHello.call(person, 'blue')
sayHello.call(cat, 'peachpuff')
```

[More information](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

### Apply

`apply` works almost exactly like `call`, only you pass in *array* of arguments instead of a comma-separated list.

`apply` is useful when the number of arguments to pass to the function is unknown and/or arbitrary.

[More information](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

## Further Reading / Resources

* [Javascript Scoping and Hoisting](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)
* [The Secret Life of JS Objects](http://eloquentjavascript.net/06_object.html)
* [JS for Cats](http://jsforcats.com/)
* [CoderByte Challenges](https://coderbyte.com/challenges/)
* [Understanding Scope and Context in JavaScript](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)
* [Understand JavaScript’s “this”](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)
* [Everything you wanted to know about JavaScript scope](http://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/)
