// What are the inputs, outputs, and side effects, of the below functions?

// Function 1

function foo(){
  return 10;
};

// ******************
// Uncomment the below to run the function in the console!
// foo()

// Note your answers below:
// Inputs:
// Outputs:
// Side Effects:

// Function 2

function global() {
  // no var keyword, so global variable created
  fizz = 'buzz';
};

// ******************
// Uncomment the below to run the function in the console!
// global()

// Note your answers below:
// Inputs:
// Outputs:
// Side Effects:

// Function 3

function addition(num1,num2){
  console.log(num1+num2);
  return (num1+num2);
};

// ******************
// Uncomment the below to run the function in the console!
// addition(4,6)

// Note your answers below:
// Inputs:
// Outputs:
// Side Effects:


// Function 4

function anotherFoo(){
  var bar = function() {
    console.log(3);
    return 3;
  };
  return bar();
  var bar = function() {
    console.log(8);
    return 8;
  };
}

// ******************
// Uncomment the below to run the function in the console!
// anotherFoo()

// Note your answers below:
// Inputs:
// Outputs:
// Side Effects:


// Function 5

function addToBody(string){
  var newDiv = document.createElement('div')
  document.body.appendChild(newDiv)
  newDiv.innerHTML = string
  return "success!"
}

// ******************
// Uncomment the below to run the function in the console!
// addToBody("What am I?")

// Note your answers below:
// Inputs:
// Outputs:
// Side Effects:
