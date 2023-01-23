![General Assembly Logo](http://i.imgur.com/ke8USTq.png)


## Closure

Closure is the property of function such that it can access variables in the same scope, i.e. scope chain, it was declared in. Even when that function is operating outside of that scope.

## Objective

* Create a function that uses a closure.
* Create a function that returns a function.
* Invoke a function that is being returned from a function.
* (Encapsulation) Create an object that has 'private' variables.
* (Encapsulation, Namespace, IIFE) Create a IIFE to create a namespace and hide implementation details.


### Create a function that uses closure.

We'll also return a function from a function.

**Create a file `js/sayHelloGenerator.js`**

```
function sayHelloGenerator(){
  var prefix = "Hello ";

  function hey(name){
    return prefix + name;
  };

  return hey;
};

var sayHey = sayHelloGenerator();

// "Hello Bart" 
var msg = sayHey("Bart");
console.log(msg);
```

#### Run this using node
`$ node js/sayHelloGenerator.js`  

#### Run in the browser.

Modify index.html to use this file.

Step through the code using the browser's debugger.

## Lab.

1. Write the Scope diagram built during Compilation.
2. Write the Runtime/Execution steps for the above. 

## Demo
Another example.

**Create a file `js/makeAdder.js`**

```
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```

The key to understanding closure is to know that a function declared in a scope can **ALWAYS** access other variables in that scope.

**Even when that function is executing outside of the declaring function**

## Lab

In this file, `js/makeMultipliers.js` create two multiply functions *(same as above, just using multiplication)* :  

1. Create a function named "multiplierFactory". This function will take one parameter. This will the first number in the multiplication. For example:

	For (x * y), 'x' will be the only 'multiplierFactory parameter.  
	
2. Create an inner function that will take one parameter. This will be the second number, 'y', in the multiplication.

3. Return the inner function.

4. Create a function that will multiply 6 to it's argument.
5. Create a function that will multiply 13 to it's argument.
6. Use these multiply functions and log out results.


#### Run this using node
`$ node js/makeMultipliers`  

#### Run in the browser.

Modify index.html to use this file.

Step through the code using the browser's debugger.

## Demo

### Invoke a function, immediately, after being returned.

**Create a file `js/show_name_closure.js`**

```
function showName (firstName, lastName) {
  var nameIntro = "Your name is ";

  function makeFullName(){     return nameIntro + firstName + " " + lastName;   };

  return makeFullName; };

// Your name is Michael Jackson
console.log(showName ("Michael", "Jackson")());
```

We are invoking the function returned immediately:  
                                        
1. showName(("Michael", "Jackson") returns a function. It's makeFullName function.  

2. makeFullName function is invoked by the last pair of parens.  
	`showName(("Michael", "Jackson")()`  
	          
3. The string produced/returned is printed to the console.  **Notice the last empty set of parens ()** this invokes the function being returned from showName.
  `console.log(showName ("Michael", "Jackson")());`
  
  
## Lab

Re-write the last lab, make multipliers, to use an immediately invoke functions.

#### Run this using node
`$ node js/makeMultipliers.js`  

#### Run in the browser.

Modify index.html to use this file.

Step through the code using the browser's debugger.

## Demo

### Encapsulation.

Encapsulation is a software concept where one seperates the implementation from the interface that is used by clients.

It's often good to *hide* the details of how something is being done from outside code, that is the client code.

This will reduce the knowledge needed by the client. 

For example, when we drive our cars we don't worry about the specifics of the engine or drive train. We interface with the car using the gas pedal, brake and stearing wheel. 

The engine are drive train the car's implementation. 

The gas pedal, brake pedal and steering wheel are the car's interface to client, the driver.

**Create a file `js/personFactory.js`**

Below is a people factory. Give it a name and an age and I'll create a person. That is, it will create objects that represent a specific person.

```
function personFactory( fullName, currentAge ){
  var _name = fullName;  // 1
  var _age = currentAge;  // 1

  var person = {   // 2  and 3
    getName: function(){
      return( _name );
    },

    getAge: function(){
      return( _age - 10 );
    }
  };

  return( person );
}

// Create a new person instance.
var katie = new personFactory( "Katie", 45 ); //5

// Check to see if the age property exists in a public
// portion of the person instance.
console.log(
  "Can we access the Katie's _age?",
  ("_age" in katie)
);  // 7

// Get the age using the accessors.
console.log(
  "Age is (little lie here):",
  katie.getAge()
); // 8

```

1. By convention, private variable are prefixed by an underscore.  
2. We are creating an object literal, `{ ... }`. This will have two properties, getName and getAge. The value for both of these properties are functions.  
3. We assign this object literal to the variable person.  
4. We return the object person to the calling function.   
5. We use the factory to create a "katie" person.  
6. We check to see if we can access the private variable `_age` outside of the factory function. **We can't**  
7. We get katie's age by calling the getAge method. *Of course it lies*. And we're hiding the lie!


Note, the interface to the object 'katie' is two functions/methods, getName and getAge. That's all that client code needs to know about katie.

The implementation are the private variables _name, _age and the code inside the getName and getAge functions. 

Client code does **NOT** need to be concerned with implementation details. Only with the interface.

## Lab

Think of how we can use Encapsulation. Perhaps, write some to code create individual autos in an auto dealership.

We'll have a car factory function that get's passed a make, model, year and a manufacture cost for a specific car. 

It'll create cars of the make, model and year. Each care will have a msrp function/method that will be a dollar amount. This dollar amount will be 125 percent of the manufacturing cost.

## Demo 
### Immediately Invoked Function Execution(IIFE)

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

## References
#### Closure

[Getting Closure](http://markdaggett.com/blog/2013/02/25/getting-closure/)

[Understand closures with ease](http://javascriptissexy.com/understand-javascript-closures-with-ease/)  

[Closure FAQ](http://jibbering.com/faq/notes/closures)

[Closure Use Cases](http://www.bennadel.com/blog/2134-a-random-exploration-of-closure-use-cases-in-javascript.htm)

##### IIFE
[Ben Alman IFFE Pattern](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)

[IFFE Pattern](http://adripofjavascript.com/blog/drips/understanding-the-module-pattern-in-javascript.html)