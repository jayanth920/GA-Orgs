// create a function that associate some data, in this case
function showName (firstName, lastName) {
var nameIntro = "Your name is ";

  // this inner function has access to the outer function's variables, including the parameter
  function makeFullName(){ 
                          return nameIntro + firstName + " " + lastName; 
                         };

  return makeFullName;
};

// Your name is Michael Jackson
// We are invoking the function returned immediately
// 1. showName(("Michael", "Jackson") returns a function. It's makeFullName function.
// 2. makeFullName function is invoked by the last pair of parens.
// showName(("Michael", "Jackson")()
// 3. The string produced/returned is printed to the console
 console.log(showName ("Michael", "Jackson")());
