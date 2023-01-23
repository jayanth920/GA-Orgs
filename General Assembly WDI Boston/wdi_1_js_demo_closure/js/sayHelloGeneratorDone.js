debugger;

function sayHelloGenerator(){
  var prefix = "Hello ";

  function hey(name){
    return prefix + name;
  };

  // Make sure you know what gets returned here.
  return hey;
};

// What is the sayHey variable at this time?
var sayHey = sayHelloGenerator();

var msg = sayHey("Bart");
console.log(msg);
