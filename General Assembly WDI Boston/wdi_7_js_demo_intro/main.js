// Pops up an alert
// alert('Hi');

console.log("Apply directly to the console");

// Prompt gets a value from the user
// var name = prompt("What is your name?");

// You could use a double equal sign for comparison
// But I will think you are a bad person
1 == 1 // true

// Instead you should use a ===
// Because kittens

1 === 1

// Do not use auto incrementing operators
var x = 0;
++x;
x++; // Don't use these ever.
x += 1; // I don't even like this as much

x = x + 1;

// BASIC DATATYPES - primitives

var name = "David";
var age = 31;
var awesome = true;

// We have arrays
var colors = ["red", "green", "blue"];

// We have array methods
colors.push("purple");
colors.pop(); // We MUST invoke methods with (), even if there are no args

// Don't be creepy, and don't leave out semicolons;
// I love cooking, my kids, and pets.

// CONTROL STRUCTURES

var heightInInches = prompt("How tall are you?");
if(heightInInches >= 60) {
  console.log("You may ride");
} else {
  console.log("Come back in a few years");
}

// Sometimes you need multiple statements

var holyNumber = prompt("What number did you count to?");
if(holyNumber > 3) {
  console.log("Four shalt thou not count. Five is right out");
} else if(holyNumber < 3) {
  console.log("Neither count though two or one, excepting that though then proceed to three");
} else {
  console.log("Throw the holy hand grenade");
}

// This is awesome in Ruby, but we don't have it in JS
// colors.each do |color|
//   puts color
// end

// This is all sorts of bad
for(i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}


// for(number_you_will_increment_with; comparison of when to stop;
//     what_to_do_at_end_of_loop) {
//   stuff you want to do in the loop, with access to number;
// }

// 1 - no var
// 2 - incrementing with ++
// 3 - checking the length every iteration

// Better for loops
// Use a single var at the top of the scope
// Declare the value of your incrementor, and logical checker
var i = 0,
    length = colors.length;

// Leave off the first and last terms
for(;i < length;) {
  console.log(color[i]); // Do stuff, use `i`, output the color
  i = i + 1; // Increment manually at end of loop
}

// We also have while loops
var input = "";
while(input !== "stop") {
  input = prompt("type stop to stop");
}

// I don't like using switch statements much

var n = 2;
switch(n) {
  case 1: // Do something if its 1
  case 2: // Do something if its 2
  default: // Anything that falls through
}












