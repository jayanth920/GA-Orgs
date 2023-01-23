# jQuery Practice

## Learning Objectives

- Use jQuery selectors to select DOM elements
- Prevent form sumissions with `event.preventDefault()`
- Write pseudocode to plan application structure

## Cash Register

Today, we’ll spend time working our way through https://github.com/ga-wdi-exercises/cash-register

If you’d like to move quicker, check out the bonuses provided in the readme.

Clone down this application, and view the obfuscated solution in a browser:

```
$ git clone https://github.com/ga-wdi-exercises/cash-register.git
$ cd cash-register/obfuscated
$ open index.html
```

Obfuscated code is provided when we want to show you how an application
works without providing editable javascript.

## You do: Identify the Problem

Spend 10 minutes using the obfuscated solution, and answer the following questions:

> What elements should we create variables for?

> What events should we listen for?

> What elements need to be created?

> How is user input handled?

> What do we need to keep track of?

> What can be calculated from the things we need to keep track of?

## We do: Review answers to above questions

## You do: jQuery API doc dive!

View http://api.jquery.com/ and identify methods that will be useful for this application.

A few things to look for:

- Appending an element to another element
- Updating the HTML for an element
- Reading the HTML from an element
- listening to events
- create a new element
- get value of input

## We do: Complete Pseudocode for this application

## Break

## I do: OOJS start

```js
function CashRegister(){
  this.entries = [];
  this.els = {
    form: $("#entry"),
    entries: $("#entries"),
    total: $("#newEntry")
  }
}

CashRegister.prototype.calculateTotal = function(){
  var total = 0;
  for( var i = 0; i < this.entries.length; i++ ){
    total += this.entries[i];
  }
  return total;
}

var register = new CashRegister();
register.entries.push(10.95);
register.entries.push(1.95);
console.log(register.calculateTotal());

```

## You do:

When the user submits a new number, `console.log` the number submitted, add it to the entries array, and `console.log` the new total

## We do:

Complete application functionality.

## Hungry for more?

- https://github.com/ga-wdi-exercises/atm
- https://github.com/ga-wdi-exercises/the_walker
