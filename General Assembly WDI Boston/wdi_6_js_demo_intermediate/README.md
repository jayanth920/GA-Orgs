![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

## Intermediate Javascript 

## Objectives

* Know the difference between primitives and reference types.
* Know the parts of a javascript variable.
* Learn the difference between "pass by value" and "pass by reference" and when and how "side effects" can occur. 
* Know how variable scope, i.e. execution context, is constructed and used.
* Understand the IFFE pattern.
* Understand how functions can be passed and returned from functions.
* Understand closure.


## Primitive Types.
There are five javascript primitives, one more coming in ES6. *Note: many languages, like Java, have primitives*.  
  
* number  
* string  
* boolean  
* undefined  
* null  
* symbol (new in ECMAScript 6)  

Some common properties of primitives are:

* The are immutable, they can't be changed.
* You can't add properties to primitives. 
* They are [passed by value](js/pass_by_ref.js). *(More later)*  


## Reference Types.
There are a number of Reference Types in javascript. Some of these are: 

* Object. All other reference types inherit from this type.  
* Array 
* Date
* Regex
* Math
* Function. 
* Primitive Wrapper Types (Number, String and Boolean)

Some common properties of reference type are:

* The are mutable, they CAN be changed.
* You CAN add properties to them.
* They are [passed by reference](js/pass_by_ref.js). *(More later)*  


##  What are variables?  

#### Variables must have an indentifier.   

*"A JavaScript identifier must start with a letter, underscore (_), or dollar sign ($); subsequent characters can also be digits                                              
(0-9). Because JavaScript is case sensitive, letters include the                                          
 characters "A" through "Z" (uppercase) and the characters "a"                                             
 through "z" (lowercase)"*  
[See the ECMAScript Language Specification for more details.](http://www.ecma-international.org/publications/standards/Ecma-262.htm )

```
// These are legal identifiers                                                                             
var name = "Jack Smith"; //identifier is 'name'                                                                                     

// identifier is '$section1'                                                                               
var $section1 = "<section id='section1'>Section 1</section>";


// These are illegal identifiers                                                                           
// uncomment below to see errors.                                                                          
var 'joes msg' = "hello"; // SyntaxError: Unexpected identifier                                          
var 3cpo = 5; // SyntaxError: Unexpected token ILLEGAL 

```

#### Variable must be declared using the var keyword and an identifier.

A variable declaration is the 'var' keyword followed by an identifier.  


```
// variable declared but undefined.
var a; 
// variable declared and defined.
var foo = 3; 

// Undeclared variable b throws a 
// "ReferenceError: b is not defined" when it's accessed.
foo = b; 

//Sucks that the error uses the word defined, really it's not declared.

```

#### Variables may have a value.  

The value can be an object or primitive. Each of these values are  accessed "by reference" or "by value". *(More later)*  

**If a variable is not assigned a value the value will be undefined.**

**Note, Only a value has a data type. Variables get their data type from their value.**

Lets just set the values of a bunch of variables. *(Later we'll see what happens in Memory)*  

```
/ Primitive values
// number, string, boolean, null, undefined
var age = 23, name = "Jack Smith", male = true,
    favoriteHat = null, significantOther;

// Reference Object.
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

```

#### Variables have a memory slot for their values.  

- The variable's memory slot will contain the value if the value is a primitive. **It can be accessed "by value"**  
- The variable's memory slot will contain a pointer to an object if the value is an object (not a primitive).  **It can be accessed "by reference"**
- This memory slot will contain 'undefined' if you haven't set it's value.  

The Memory looks like this after the above code is executed.   

* memory location for age contains the number 23.  
* memory location for name contains the string "Jack Smith"  
* memory location for significant_other contains 'undefined'  
* memory location for joe contains a pointer to the memory location for the object literal, let's call it obj1.  
* memory location for mustang contains a pointer to the memory location for the object, let's call it car obj1, created by the Car Constructor Function.  

```
-----------------------------------|
Variable         | Memory          |
-----------------------------------|
 ...             | ...             |
 ...             | ...             |
 age             | 23              |
 name            | "Jack Smith     |
 signficant_other| undefined       |
 ...             | ...             |
 joe             | ptr to obj1     |
 ...             | ...             |
 obj1.name       | 'Joe Fallon'    |
 obj1.age        | 25              |
 ...             | ...             |
 ...             | ...             |
 mustang         | ptr to car obj1 |
 ...             | ...             |
 car obj1.make   | "Ford"          |
 car obj1.model  | "Mustang        |
 car obj1.year   | 1967            |
 ...             | ...             |

```

#### Lab

Build a view of memory for after js/stooges.js is run. Work in groups. Make sure you know what variables have primitive values and what variables have objects, instances of reference types.


#### Variables have a scope, i.e. an excecution context.

All variables have scope. *(More later)*

## Pass by Reference OR Pass by Value.

Learn the difference between "pass by value" and "pass by reference" and when and how "side effects" can occur. 

[Pass by Reference/Value](PassByValueRef.md)

## Variable Scope
Right now we're going to concentrate on Scope.
Scope is sometimes called excecution context.

[Variable Scope](VariableScope.md)

### Creating your own scope.

We're going to use scope to create a private scope to work in.
We won't have to worry about our variable identifiers conflictin with others in the global namespace.

We're going to use the IIFE pattern. A very common pattern in javascript.

[IFFE Pattern](http://adripofjavascript.com/blog/drips/understanding-the-module-pattern-in-javascript.html)

[Ben Alman IFFE Pattern](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)

```
// declare doIt function in Global scope
function doIt(){
  console.log("Bing Bong");
};

// Run doIt every two seconds.
setInterval(doIt, 2000);

// Create a IFFE to prevent 
// name collisions between doIt functions.
(function(){
  // declare msg in IFFE scope
  var msg = "Ding Dong";

  // declare doIt function in IFFE scope
  function doIt(){
    console.log(msg);
  };

  // run this function every 1 second
  setInterval(doIt, 1000);

})();
```

## Closure

Closure is the property of function such that it can access variables is the same scope it was declared in. Even when that function is operating outside of that scope.

[Closure](Closure.md)

