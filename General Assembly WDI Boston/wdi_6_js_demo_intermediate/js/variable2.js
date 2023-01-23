// Primitive values
// number, string, boolean, null, undefined
var age = 3,
    name = "Jack Smith",
    male = true,
    favoriteHat = null,
    significantOther;

// Reference Object, aka Object instance.
var joe = {
  name: "Joe Fallon",
  age: 25
};

// Instance of an Array
var instructors = ['alex', 'david', 'jeff', 'jason', 'tom', 'anna'];

// Car is a constructor function
var Car = function(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;

};

// define a display method that all instance of a Car can use.
Car.prototype = {
  display: function(){
    return this.year + " " + this.model + " " + this.make;
    }
};
// Instance of a Car
var mustang = new Car("Ford", "Mustang", 1967);
console.log(mustang.display());
