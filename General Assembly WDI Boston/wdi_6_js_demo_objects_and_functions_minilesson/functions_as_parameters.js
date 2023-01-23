var array = ["anna", "david"];

// define a function called makeMoreExciting
var makeMoreExciting = function(element) {
  return element + "!!!!!!";
}

// pass in this function, by its name, as the argument to the .map function
array.map(makeMoreExciting);

// pass in this function, without a name (anonymously), as the argument to the .map function
array.map(function(name) {
  return name + "!!!!!!";
});

// this is very similar to passing a do-end block as an argument to .map in ruby

// array.map do |name|
//   return name + "!!!!!"
// end

////////////////////////////////

// define a function called showAlert
var showAlert = function() {
  alert("Hi");
}

// pass in this function as an argument/parameter in jQuery
$('#my-button').on('click', showAlert);

// when passing in a function as an argument, DON'T use ()!
// because you are passing in the whole code block of the function, not its return value
// so this is WRONG: $('#my-button').on('click', showAlert());
// and this is RIGHT: $('#my-button').on('click', showAlert);

