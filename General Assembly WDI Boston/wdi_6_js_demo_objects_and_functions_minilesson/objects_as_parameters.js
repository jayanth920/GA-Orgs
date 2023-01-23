// first way
// just give 3 arguments to the function

var greeter = function(name, luckyNumber, excited){
  if (excited === true) {
    return name + "!!!!! Your lucky number is " + luckyNumber + "!!!!!";
  } else {
    return name + ". Your lucky number is " + luckyNumber + ".";
  }
}

greeter("Anna", 88, true); // returns "Anna!!!!! Your lucky number is 88!!!!!"


// second way
// define the object `anna` and pass the whole object as an argument to the function

anna = {  name: "Anna",
          luckyNumber: 88,
          excited: true }

var greeter = function(person){
  if (person.excited === true) {
    return person.name + "!!!!! Your lucky number is " + person.luckyNumber + "!!!!!";
  } else {
    return person.name + ". Your lucky number is " + person.luckyNumber + ".";
  }
}

greeter(anna); // returns "Anna!!!!! Your lucky number is 88!!!!!"


// third way
// pass in both a regular argument and an object

options = { luckyNumber: 88,
            excited: true }

var greeter = function(name, options){
  if (options.excited === true) {
    return name + "!!!!! Your lucky number is " + options.luckyNumber + "!!!!!";
  } else {
    return name + ". Your lucky number is " + options.luckyNumber + ".";
  }
}

greeter("Anna", options); // returns "Anna!!!!! Your lucky number is 88!!!!!"
