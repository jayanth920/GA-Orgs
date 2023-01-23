/****************************************
 What are variables?
 ****************************************/

/***************************************
 1. Variables must have an indentifier.

"A JavaScript identifier must start with a letter, underscore (_),
 or dollar sign ($); subsequent characters can also be digits
 (0-9). Because JavaScript is case sensitive, letters include the
 characters "A" through "Z" (uppercase) and the characters "a"
 through "z" (lowercase)"

See the ECMAScript Language Specification for more info.
http://www.ecma-international.org/publications/standards/Ecma-262.htm
****************************************/

// These are legal identifiers
//identifier is 'name'
var name = "Jack Smith";
// identifier is '$section1'
var $section1 = "<section id='section1'>Section 1</section>";


// These are illegal identifiers

// uncomment below to see errors.
//var 'joes msg' = "hello"; // SyntaxError: Unexpected identifier
//var 3cpo = 5; // SyntaxError: Unexpected token ILLEGAL


/***************************************
2. Variables may have a value.

The value can be an object or primitive. Each of these is accessed
either by reference or by value. (More later)

Note, a value has a data type. Variables get their data type from
their value.

See pass_by_ref.js for more info.
****************************************/

// Primitive values
// number, string, boolean, null, undefined
var age = 23, name = "Jack Smith", male = true,
    favoriteHat = null, significantOther;

// Reference Types.
// Instance of Object.
var joe = {
  name: 'Joe Fallon',
  age: 25
};

// Instance of Array
var instructors = [ 'alex', 'david', 'jeff', 'jason', 'tom', 'anna', 'teddy'];

var Car = function(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
};
Car.prototype = {};
Car.prototype.display = function(){
  return this.year + " " + this.make + " " + this.model;
}

// Instance of Car.
var mustang = new Car("Ford", "Mustang", 1967);
console.log(mustang.display());

/***************************************
3. Variables have a memory slot for their values.

i) This memory slot will contain the value if the value is a
 primitive.

ii) This memory slot will contain a pointer to the value if the value
 is reference object (not a primitive).

iii) This memory slot will contain 'undefined' if you haven't set it's
 value.

/*
 Memory:
 memory location for age contains the number 23
 memory location for name contains the string "Jack Smith"
 memory location for significant_other contains 'undefined'
 memory location for joe contains a pointer to the memory location for
 the object literal, let's call it obj1.
 memory location for mustang contains a pointer to the memory location
 for the object, let's call it car obj1, created by the Car
 Constructor Function..

 | ...            | ...             |
 | ...            | ...             |
 | age            | 23              |
 | name           | "Jack Smith     |
 |signficant_other| undefined       |
 | ...            | ...             |
 | joe            | ptr to obj1     |
 | ...            | ...             |
 | obj1.name      | 'Joe Fallon'    |
 | obj1.age       | 25              |
 | ...            | ...             |
 | ...            | ...             |
 | mustang        | ptr to car obj1 |
 | ...            | ...             |
 | car obj1.make  | "Ford"          |
 | car obj1.model | "Mustang        |
 | car obj1.year  | 1967            |
 | ...            | ...             |
****************************************/

/***************************************
4. A scope,i.e. an excecution context. All declared variables have
a scope.

See scope.js for more info.
And watch Advanced Javascript from Frontend Masters.
****************************************/

/***************************************
5. A variable can be declared or undeclared..

A variable declaration is the 'var' keyword followed by an identifier.

var a; // variable declared
var foo = 3; // variable declared and defined.

Sucks that the error uses the word defined, really it's not declared.
****************************************/
// uncomment below
// foo = b; //Undeclared variable throws a "ReferenceError: b is not defined"

/***************************************
6. A variable can be undefined if it was declared but never given a value.
****************************************/

var foo;   //declared(has var and identifier), but no value given.
console.log("foo is " + foo);
