// I'm a people factory.
// Give me a name and an age and I'll create
// a person. That is, objects that represent a specific person.
function personFactory( fullName, currentAge ){
  // private variables.
  // often private variable are prefixed by and underscore.
  // just a convention.
  var _name = fullName;
  var _age = currentAge;

  // Create a person instance. 
  var person = {
    // I return the name.
    getName: function(){
      return( _name );
    },

    // I return the age - I swear!
    getAge: function(){
      return( _age - 10 );
    }
  };

  // Return the person instance.
  return( person );
}

// Create a new person instance.
var katie = new personFactory( "Katie", 45 );

// Check to see if the age property exists in a public
// portion of the person instance.
console.log(
  "Can we access the Katie's _age?",
  ("_age" in katie)
);

// Get the age using the accessors.
console.log(
  "Age is (little lie here):",
  katie.getAge()
);
