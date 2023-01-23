// Create an object for Sam.
var sam = {
  name: 'sam'
};

// Setting the message property
sam.message = "Hello World";
console.log(sam.message);

// Setting the "first car" property
// Use the bracket notation only if the property
// name MUST be a value thats not allowed in the dot
// notation. Rare!
sam["first car"] = "1999 Ford Focus";
console.log(sam["first car"]);

// ECMAScript 5, ES5, add some features for object
// properites.

// Object#defineProperty method
Object.defineProperty(sam, "age", {
  value: 27,
  enumerable: true,
  writable: true,
  configurable: true
});
console.log("sam is " + sam.age + " yrs old");

// Lets delete sam's age property
delete sam.age;
console.log(sam.age);
// set configurable to false and run again.
// configurable will prevent property deletion.

// Lets change sam's age.
sam.age += 1;
console.log("sam is " + sam.age + " yrs old");
// set writeable to false.
// writeable prevents one from changing the the property value

// show sam again
console.log("\nShow all sam's properties");
// let enumerate over sam's properties.
for(var p in sam){
  // show sam's properties
  console.log("sam." + p + " is " + p);
}
// set enumerable to false
// enumerable set to false will remove the property
// from the set of properties that can be enumerated.

// Object#defineProperties.
// Change multiple properties at once.
Object.defineProperties(sam,
                        {
                          gender: {value: 'male'},
                          employed: {value: false}
                        }
                       );

// show sam again
console.log("\nsam after properties added");
for(var p in sam){
  // show sam's properties
  console.log("sam." + p + " is " + p);
};

// Accessor properties.
// Does sam hate snow
Object.defineProperty(sam, "_hateSnow", {
  get: function(){ return this._hateSnow; },
  set: function(hate){
    this._hateSnow;
  }
});

sam.hateSnow = false;
console.log("Does sam hate snow? " + sam.hateSnow);

sam.hateSnow = true;
console.log("Does sam hate snow? " + sam.hateSnow);
