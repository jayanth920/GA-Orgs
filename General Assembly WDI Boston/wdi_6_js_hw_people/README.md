# Javascript People

## Assignment

Create a `Person` "class" (remember, technically [there are no classes in JavaScript](http://stackoverflow.com/questions/2752868/does-javascript-have-classes)). Use the Constructor Function Object Creation Pattern. For example:  

```
var Car = function(make, model, year){  
  this.make = make;
  this.model = model;
  this.year = year;
  
};
Car.prototype = {
  display: function(){
   return this.year + " " this.make + " " + this.model;
  };
};

var mustang = new Car("Ford", "Mustang", 1967);
console.log(mustang.display);

```
Create at least 10 people. Some of these people are friends.

A `Person` must be initialized with a `firstName` and a `lastName`, plus any of the following optional properties:

* `age` (in years, default to 30)
* `weight` (in pounds, default to 150)
* `height` (in inches, default to a random value between 60 and 78)
* `friends` (an array of other `Person` objects, default to empty)

I should also be able to call these functions on a `person`:

* `fullName` should return the person's first name plus their last name
* `weightInStone` should return the person's weight in [stone](http://en.wikipedia.org/wiki/Stone_%28unit%29)
* `addFriend` should take a `Person` object and add it to the person's friends
* `removeFriend` should take a name string and remove the person with that name from the person's friends, if there is such a friend
* `greetPeople` should return a string that greets an optional array of `Person` objects (default to the person's friends) by their full names, with an optional greeting (default to `"Hi"`). If no people are provided and the person has no friends.

Be sure to make clean single-task Git commits with descriptive messages!

## Draw
Draw diagrams how a object literal's ```__proto__``` , aka ```[[Prototype]]``` , property and Constructor Function's ```prototype``` property are related. Do this for one of the ten people. 

## Read (optional)
Profession Javascript for Web Developers 3rd Edition
Object Creation pages 180 to 216.  

*Skip sections on Parasitic Constructor, Durable Constructor Function,  Parasitic Inheritance, Parasitic Common Inheritance.*


