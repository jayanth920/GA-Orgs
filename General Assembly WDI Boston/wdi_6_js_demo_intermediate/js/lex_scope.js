var firstName = 'John'; // 1.
var lastName = 'Dowd';
var age = 19;

function displayPerson(fname, lname){
  var prefix = 'Mr';
  var fullName = null;

  function getFullName(){
    return fullName = prefix + " " + fname + " " + lname  + " " + suffix;
  };

  return getFullName();

};

function removeYears(){
  var minusYears = 10, age = 49;
  return age - minusYears;
};

console.log(displayPerson(firstName, lastName));
console.log(removeYears());
