// create a function that associate some data, in this case
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
