## Closure

Closure is the property of function such that it can access variables is the same scope it was declared in. Even when that function is operating outside of that scope.

**Create a file js/say_hello_gen.js**

```
// Closure - functions that a run during execution time
// can always access all scopes, and the variables in
// these scopes, that were built during the compilation
// phase.

function sayHelloGenerator(){
  // prefix variable is in the sayHelloGenerator
  // function scope.
  var prefix = "Hello ";

  // hey is also in the sayHelloGenerator function scope.
  function hey(name){
    // This inner function can ALWAYS
    // access prefix. Because prefix was declared
    // in an outer scope, i.e. sayHelloGenerator scope.
    return prefix + name;
  };

  // return a the hey function
  return hey;
};

// sayHey variable will point to the 'hey' inner
// function defined above.
var sayHey = sayHelloGenerator();

// Invoke this function passing in a name.
var msg = sayHey("Bart");
console.log(msg);
```
## Lab.
Write the steps for the above. Like we did for Scope section above.

## Demo
Another example.

**Create a file make_adder.js**

```
function makeAdder(x) {
  // makeAdder function scope contains the variable 'x'
  
  // The return value of makeAdder is a function.

  // In Javascript functions are first-class. They can be
  // passed into or returned from other functions.
  return function(y) {
    return x + y;
  };
}

// add5 will be the function declared inside and retuned from makeAdder.
var add5 = makeAdder(5);

// Same here but will add ten. Funky huh?
var add10 = makeAdder(10);

// When we execute the function that add5 is pointing to, remember it was declared inside of makeAdder. This function will have access the x variable in makeAdder function.
console.log(add5(2));  // 7
console.log(add10(2)); // 12
```

The key to understanding closure is to know that a function declared in some scope can **ALWAYS** access other variables that can reached via the scope chain.


## Demo

**Create a file show_name_closure.js**

```
function showName (firstName, lastName) {
  var nameIntro = "Your name is ";

  // this inner function has access to the outer function's variables, including the parameter
  function makeFullName(){ 
                          return nameIntro + firstName + " " + lastName; 
                         };

  return makeFullName(); 
};

// Your name is Michael Jackson
console.log(showName ("Michael", "Jackson"));
 
```